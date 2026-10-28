/**
 * El cielo de la página: un solo fondo que cambia de color mientras el
 * visitante baja.
 *
 * Cada región declara su color con `data-ground="a"` o `data-ground="a>b"`
 * (nombres de los tokens --color-* de global.css). La región que ocupa el
 * centro de la pantalla decide la mezcla, que se escribe en `--ground`.
 *
 * `data-ground-late`: la mezcla termina justo cuando el borde inferior de la
 * región entra en pantalla, para que la región pintada siguiente empiece sin
 * costura. Con movimiento reducido no corre y quedan las franjas fijas.
 */
import { $$, prefersReducedMotion } from "./dom"

type Rgb = number[]

interface Region {
  element: HTMLElement
  from: Rgb
  to: Rgb
  late: boolean
}

const root = document.documentElement

/** Lee un token de color de CSS (#rrggbb) como [r, g, b]. */
function tokenRgb(name: string): Rgb {
  const hex = getComputedStyle(root)
    .getPropertyValue(`--color-${name}`)
    .trim()
    .replace("#", "")
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
}

function readRegions(): Region[] {
  return $$("[data-ground]").map((element) => {
    const [from, to = from] = element.dataset.ground!.split(">")
    return {
      element,
      from: tokenRgb(from),
      to: tokenRgb(to),
      late: element.hasAttribute("data-ground-late")
    }
  })
}

/** Qué tanto (0 → 1) avanzó la mezcla de una región según su posición. */
function mixProgress(box: DOMRect, late: boolean, middle: number) {
  const raw = late
    ? 1 - (box.bottom - innerHeight) / middle
    : (middle - box.top) / box.height
  return Math.min(1, Math.max(0, raw))
}

function mix(from: Rgb, to: Rgb, t: number) {
  return from.map((channel, i) => Math.round(channel + (to[i] - channel) * t))
}

function startSky() {
  const regions = readRegions()
  let frameQueued = false

  const paint = () => {
    frameQueued = false
    const middle = innerHeight / 2
    const current = regions.find(({ element }) => {
      const box = element.getBoundingClientRect()
      return box.top <= middle && box.bottom > middle
    })
    if (!current) return

    const box = current.element.getBoundingClientRect()
    const color = mix(
      current.from,
      current.to,
      mixProgress(box, current.late, middle)
    )
    root.style.setProperty("--ground", `rgb(${color.join(" ")})`)
  }

  /** Como mucho una pintura por fotograma. */
  const requestPaint = () => {
    if (frameQueued) return
    frameQueued = true
    requestAnimationFrame(paint)
  }

  root.classList.add("js-ground")
  paint()
  addEventListener("scroll", requestPaint, { passive: true })
  addEventListener("resize", requestPaint)
}

if (!prefersReducedMotion()) startSky()
