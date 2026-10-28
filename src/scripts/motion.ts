/**
 * Movimiento de la página: todo depende del scroll y cuenta el descenso del
 * cielo al mar. El contenido es visible por defecto; la coreografía solo corre
 * cuando el visitante no pidió menos movimiento.
 *
 * Cada escena es una función con el nombre de lo que hace. Si su elemento no
 * está en la página, la escena no hace nada.
 */
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { $, $$ } from "./dom"

gsap.registerPlugin(ScrollTrigger, SplitText)
ScrollTrigger.config({ ignoreMobileResize: true })

const EASE_OUT = "expo.out"
const root = document.documentElement

// ─── Piezas compartidas ──────────────────────────────────────────────────────

/** Lo que sea.ts devuelve: la cámara del mar según el progreso del scroll. */
type SeaScene = { setProgress(progress: number): void } | null
let seaScene: Promise<SeaScene> | null = null

/**
 * Descarga Three.js y monta el mar solo cuando su franja está a una pantalla
 * de distancia. Se llama una vez; las siguientes reciben la misma promesa.
 */
function loadSea(still: boolean): Promise<SeaScene> {
  const canvas = $<HTMLCanvasElement>("[data-sea-canvas]")
  if (!canvas) return Promise.resolve(null)

  seaScene ??= new Promise((resolve) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        import("./sea").then(
          ({ mountSea }) => resolve(mountSea(canvas, { still })),
          () => resolve(null)
        )
      },
      { rootMargin: "100% 0px" }
    )
    observer.observe(canvas)
  })
  return seaScene
}

/** La barra fija aparece cuando el hero queda atrás. */
function stickyBar(duration: number) {
  const bar = $("[data-bar]")
  const hero = $("#inicio")
  if (!bar || !hero) return

  const show = (visible: boolean) => {
    bar.inert = !visible
    gsap.to(bar, {
      yPercent: visible ? 110 : 0,
      duration: visible ? duration : duration * 0.6,
      ease: visible ? EASE_OUT : "power2.in"
    })
  }

  ScrollTrigger.create({
    trigger: hero,
    start: "bottom 12%",
    onEnter: () => show(true),
    onLeaveBack: () => show(false)
  })
}

// ─── Escenas (en el orden en que aparecen en la página) ─────────────────────

/** 1. El nombre sube letra por letra y su rostro sube desde abajo. */
function heroIntro() {
  const hero = $("#inicio")
  const name = $("[data-hero-name]")
  const photo = $("[data-hero-photo]")
  const copy = $("[data-hero-copy]")
  if (!hero || !name || !photo || !copy) return

  const letters = SplitText.create(name, { type: "words,chars", mask: "chars" })
  gsap
    .timeline({
      defaults: { ease: EASE_OUT },
      onComplete: () => root.classList.remove("intro")
    })
    .set([name, photo, copy], { visibility: "visible" })
    .from(letters.chars, { yPercent: 110, duration: 1.1, stagger: 0.045 })
    .from(
      photo,
      { y: 90, clipPath: "inset(100% 0% 0% 0%)", duration: 1.5 },
      0.15
    )
    .from(
      copy.children,
      { y: 28, opacity: 0, duration: 0.9, stagger: 0.08 },
      0.45
    )

  // Al bajar, el nombre se queda atrás y la foto se hunde en el cielo.
  const leaving = {
    trigger: hero,
    start: "top top",
    end: "bottom top",
    scrub: true
  }
  gsap.to(name, { yPercent: 38, ease: "none", scrollTrigger: leaving })
  gsap.to(photo, { yPercent: 14, ease: "none", scrollTrigger: leaving })
  gsap.to(copy, {
    y: -60,
    opacity: 0.2,
    ease: "none",
    scrollTrigger: { ...leaving, start: "center top" }
  })
}

/** 2. Cada título de sección se abre de condensado a expandido. */
function stretchHeadings() {
  for (const heading of $$("h2.display")) {
    gsap.fromTo(
      heading,
      { fontStretch: "62%", letterSpacing: "0.04em" },
      {
        fontStretch: "125%",
        letterSpacing: "-0.02em",
        ease: "none",
        scrollTrigger: {
          trigger: heading,
          start: "top 95%",
          end: "top 55%",
          scrub: 0.6
        }
      }
    )
  }
}

/** 3. Las filas de las listas llegan en orden. */
function revealRows() {
  ScrollTrigger.batch("[data-row]", {
    start: "top 92%",
    once: true,
    onEnter: (rows) =>
      gsap.from(rows, {
        y: 26,
        opacity: 0,
        duration: 0.7,
        ease: EASE_OUT,
        stagger: 0.06
      })
  })
}

/** 4. Los ritmos cruzan el cielo en sentido contrario al scroll. */
function driftGenres() {
  const rhythm = $("[data-rhythm]")
  if (!rhythm) return

  gsap.fromTo(
    rhythm,
    { xPercent: 0 },
    {
      xPercent: -45,
      ease: "none",
      scrollTrigger: {
        trigger: rhythm.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.4
      }
    }
  )
}

/**
 * 5. Lo nuevo: la sección se fija y el scroll recorre los sencillos de lado.
 * La portada que llega al frente crece y se enciende; las otras esperan atrás.
 */
function scrubSingles() {
  const section = $("[data-singles]")
  const track = $("[data-track]")
  if (!section || !track) return

  root.classList.add("track-scrub")
  const progressBar = $("[data-singles-progress]")
  const distance = () =>
    Math.max(
      0,
      track.scrollWidth +
        parseFloat(getComputedStyle(track).paddingLeft) -
        innerWidth
    )

  const travel = gsap.to(track, {
    x: () => -distance(),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      // En pantallas angostas la sección queda centrada; en escritorio, justo
      // debajo de la barra fija.
      start: () => (innerWidth < 1024 ? "center center+=28" : "top 56px"),
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) =>
        progressBar && gsap.set(progressBar, { scaleX: self.progress })
    }
  })

  for (const slide of $$("[data-slide]", track)) {
    const along = (start: string, end: string) => ({
      trigger: slide,
      containerAnimation: travel,
      start,
      end,
      scrub: true
    })

    const body = $("[data-slide-body]", slide)
    if (body) {
      gsap.fromTo(
        body,
        { scale: 0.84, opacity: 0.45 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: along("left right", "left 40%")
        }
      )
    }

    const cover = $("[data-facade] img", slide)
    if (cover) {
      gsap.fromTo(
        cover,
        { xPercent: -7, scale: 1.16 },
        {
          xPercent: 7,
          scale: 1.16,
          ease: "none",
          scrollTrigger: along("left right", "right left")
        }
      )
    }
  }
}

/** 6. La cámara baja del cielo de sus fotos hasta el mar de Santa Marta. */
function descendToSantaMarta() {
  const descent = $("[data-descent]")
  if (!descent) return

  const photo = $("[data-descent-photo]", descent)!
  const word = $("[data-descent-word]", descent)!
  const note = $("[data-descent-note]", descent)!
  const letters = SplitText.create(word, { type: "words,chars", mask: "chars" })

  gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: descent,
        start: "top top",
        end: "+=160%",
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    })
    .fromTo(
      photo,
      { scale: 2.6, transformOrigin: "42% 0%" },
      { scale: 1, duration: 1 }
    )
    .from(letters.chars, { yPercent: 115, duration: 0.35, stagger: 0.03 }, 0.45)
    .from(note, { opacity: 0, y: 20, duration: 0.2 }, 0.8)
    .to({}, { duration: 0.25 }) // pausa final antes de soltar la sección
}

/** 7. El mar: la cámara sigue bajando hasta rozar las olas. */
function diveIntoSea() {
  const sea = $("[data-sea]")
  if (!sea) return

  loadSea(false).then((scene) => {
    if (!scene) return
    ScrollTrigger.create({
      trigger: sea,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => scene.setProgress(self.progress),
      onRefresh: (self) => scene.setProgress(self.progress)
    })
  })
}

/** 8. El video principal se levanta como una pantalla que se endereza. */
function liftVideos() {
  const lead = $("[data-expand] [data-playing]")
  if (lead) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: lead,
          start: "top 98%",
          end: "top 30%",
          scrub: 0.6
        }
      })
      .fromTo(
        lead,
        {
          rotateX: 26,
          scale: 0.86,
          yPercent: 10,
          transformPerspective: 1400,
          transformOrigin: "50% 100%"
        },
        { rotateX: 0, scale: 1, yPercent: 0, ease: "none" }
      )
      .fromTo(
        $("[data-facade] img", lead),
        { scale: 1.2 },
        { scale: 1, ease: "none" },
        0
      )
  }

  // Los otros videos flotan a distinta profundidad.
  $$("[data-depth]").forEach((video, index) => {
    gsap.fromTo(
      video,
      { y: 70 + index * 50 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: video,
          start: "top bottom",
          end: "top 45%",
          scrub: 0.6
        }
      }
    )
  })
}

/** 9. La Escritura se enciende palabra por palabra; la línea la subraya. */
function lightVerse() {
  const verse = $("[data-words]")
  if (!verse) return

  const words = SplitText.create(verse, { type: "words" }).words
  const reading = {
    trigger: verse,
    start: "top 80%",
    end: "bottom 45%",
    scrub: true
  }
  gsap.fromTo(
    words,
    { opacity: 0.18 },
    { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: reading }
  )

  const rule = $("[data-quote-rule]")
  if (rule) {
    gsap.fromTo(
      rule,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { ...reading, start: "bottom 70%", end: "bottom 45%" }
      }
    )
  }
}

/** 10. La línea del horizonte se abre y el nombre cierra la página. */
function closeAtShore() {
  const horizon = $("[data-horizon]")
  if (horizon) {
    gsap.fromTo(
      horizon,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: horizon,
          start: "top 95%",
          end: "top 50%",
          scrub: 0.6
        }
      }
    )
  }

  const footName = $("[data-foot-name]")
  if (footName) {
    const letters = SplitText.create(footName, { type: "chars", mask: "chars" })
    gsap.from(letters.chars, {
      yPercent: 100,
      duration: 1,
      ease: EASE_OUT,
      stagger: 0.05,
      scrollTrigger: { trigger: footName, start: "top bottom", once: true }
    })
  }
}

// ─── Arranque ────────────────────────────────────────────────────────────────

const media = gsap.matchMedia()

media.add("(prefers-reduced-motion: no-preference)", () => {
  stickyBar(0.6)
  heroIntro()
  stretchHeadings()
  revealRows()
  driftGenres()
  scrubSingles()
  descendToSantaMarta()
  diveIntoSea()
  liftVideos()
  lightVerse()
  closeAtShore()
})

// Con movimiento reducido: sin coreografía, el mar queda quieto a media altura
// y la barra aparece sin viaje.
media.add("(prefers-reduced-motion: reduce)", () => {
  root.classList.remove("intro")
  stickyBar(0)
  loadSea(true).then((scene) => scene?.setProgress(0.45))
})

// Las fuentes cambian medidas: recalcular cuando estén listas.
document.fonts?.ready.then(() => ScrollTrigger.refresh())
