// El mar de Exuberante en WebGL: olas de Gerstner, cielo cerúleo y el brillo blanco del mediodía.
// Se carga solo cuando la franja se acerca; dibuja solo mientras está en pantalla.
import * as THREE from "three"

const css = (name: string) =>
  new THREE.Color(
    getComputedStyle(document.documentElement)
      .getPropertyValue(`--color-${name}`)
      .trim()
  )

export function mountSea(canvas: HTMLCanvasElement, opts: { still: boolean }) {
  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "low-power"
    })
  } catch {
    return null // sin WebGL queda el degradado de CSS
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 900)

  const palette = {
    uSky: { value: css("sky") },
    uZenith: { value: css("zenith") },
    uHorizon: { value: css("haze-hi") },
    uDeep: { value: new THREE.Color("#0b3f78") },
    uShallow: { value: new THREE.Color("#2b78b4") },
    uSunDir: { value: new THREE.Vector3(-0.2, 0.5, -1).normalize() }
  }

  // Cielo: una cúpula con el degradado de sus fotos y un halo blanco donde está el sol.
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(600, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: palette,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uSky, uZenith, uHorizon, uSunDir;
        varying vec3 vDir;
        void main() {
          float h = max(vDir.y, 0.0);
          vec3 col = mix(uHorizon, uSky, smoothstep(0.0, 0.22, h));
          col = mix(col, uZenith, smoothstep(0.22, 0.6, h));
          float sun = max(dot(normalize(vDir), uSunDir), 0.0);
          col += vec3(1.0, 0.99, 0.94) * pow(sun, 16.0) * 0.08;
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`
    })
  )
  scene.add(sky)

  // Agua: cuatro olas de Gerstner con la normal calculada en el vértice.
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(700, 700, 260, 260).rotateX(-Math.PI / 2),
    new THREE.ShaderMaterial({
      uniforms: {
        ...palette,
        uTime: { value: 0 },
        uCam: { value: camera.position }
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormal;
        vec3 gerstner(vec4 w, vec3 p, inout vec3 t, inout vec3 b) {
          float k = 6.28318 / w.w;
          float c = sqrt(9.8 / k);
          vec2 d = normalize(w.xy);
          float f = k * (dot(d, p.xz) - c * uTime);
          float a = w.z / k;
          t += vec3(-d.x * d.x * w.z * sin(f), d.x * w.z * cos(f), -d.x * d.y * w.z * sin(f));
          b += vec3(-d.x * d.y * w.z * sin(f), d.y * w.z * cos(f), -d.y * d.y * w.z * sin(f));
          return vec3(d.x * a * cos(f), a * sin(f), d.y * a * cos(f));
        }
        void main() {
          vec3 p = (modelMatrix * vec4(position, 1.0)).xyz;
          vec3 t = vec3(1.0, 0.0, 0.0), b = vec3(0.0, 0.0, 1.0), q = p;
          q += gerstner(vec4(1.0, 0.6, 0.16, 38.0), p, t, b);
          q += gerstner(vec4(0.7, 1.0, 0.13, 22.0), p, t, b);
          q += gerstner(vec4(-0.4, 1.0, 0.10, 11.0), p, t, b);
          q += gerstner(vec4(0.9, -0.3, 0.08, 6.0), p, t, b);
          vWorld = q;
          vNormal = normalize(cross(b, t));
          gl_Position = projectionMatrix * viewMatrix * vec4(q, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uSky, uHorizon, uDeep, uShallow, uSunDir, uCam;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          vec3 n = normalize(vNormal);
          vec3 v = normalize(uCam - vWorld);
          float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
          vec3 r = reflect(-v, n);
          vec3 sky = mix(uHorizon, uSky, smoothstep(0.0, 0.35, r.y));
          vec3 body = mix(uDeep, uShallow, clamp(vWorld.y * 0.35 + 0.45, 0.0, 1.0));
          vec3 col = mix(body, sky, fres);
          float glint = pow(max(dot(r, uSunDir), 0.0), 320.0);
          col += vec3(1.0, 0.99, 0.94) * glint * 2.2;
          float dist = length(vWorld.xz - uCam.xz);
          col = mix(col, uHorizon, smoothstep(60.0, 340.0, dist));
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`
    })
  )
  scene.add(water)
  const time = (water.material as THREE.ShaderMaterial).uniforms.uTime

  // progress 0 → 1: la cámara baja desde lo alto hasta casi rozar las olas.
  let progress = 0
  const place = () => {
    const p = progress
    // Empieza mirando el agua desde lo alto (el horizonte cerca del borde superior) y baja hasta rozar las olas.
    camera.position.set(
      0,
      THREE.MathUtils.lerp(26, 1.8, p),
      THREE.MathUtils.lerp(0, -46, p)
    )
    camera.rotation.set(THREE.MathUtils.lerp(-0.82, -0.02, p), 0, 0)
  }

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.fov = w / h < 1 ? 64 : 52
    camera.updateProjectionMatrix()
  }
  const ro = new ResizeObserver(() => {
    resize()
    if (!running) draw()
  })
  ro.observe(canvas)

  const draw = () => {
    place()
    renderer.render(scene, camera)
  }

  let running = false
  let visible = false
  let last = performance.now()
  const loop = (now: number) => {
    if (!running) return
    time.value += Math.min((now - last) / 1000, 0.05)
    last = now
    draw()
    requestAnimationFrame(loop)
  }
  const sync = () => {
    const should = visible && !document.hidden && !opts.still
    if (should && !running) {
      running = true
      last = performance.now()
      requestAnimationFrame(loop)
    } else if (!should) running = false
  }
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    sync()
  })
  io.observe(canvas)
  document.addEventListener("visibilitychange", sync)

  resize()
  time.value = 12
  draw()
  canvas.style.opacity = "1"

  return {
    setProgress(p: number) {
      progress = p
      if (!running) draw()
    }
  }
}
