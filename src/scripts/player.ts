/**
 * Reproductor de YouTube.
 *
 * Cualquier botón con `data-play` y `data-target` reproduce un video dentro
 * del contenedor cuyo id es `data-target`. La miniatura (fachada) se cambia
 * por el iframe solo cuando el visitante lo pide, y suena un video a la vez.
 *
 * Al empezar un video se emite `track:play`, que actualiza «Sonando» en la
 * barra fija y marca la fila correcta del álbum (aria-pressed).
 */
import { SITE } from "@/config/site"
import { $, $$ } from "./dom"

interface TrackPlayDetail {
  slot: string
  id: string
  title: string
}

let activeSlot: HTMLElement | null = null

/** Devuelve el contenedor a su estado inicial: sin iframe y con la miniatura. */
function stop(slot: HTMLElement) {
  slot.querySelector("iframe")?.remove()
  $("[data-facade]", slot)?.removeAttribute("hidden")
  slot.dataset.playing = "false"
}

function createIframe(videoId: string, title: string) {
  const iframe = document.createElement("iframe")
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
  iframe.title = `${title} — ${SITE.info.name}`
  iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen"
  iframe.allowFullscreen = true
  iframe.className = "absolute inset-0 h-full w-full border-0"
  return iframe
}

function play(slot: HTMLElement, videoId: string, title: string) {
  if (activeSlot && activeSlot !== slot) stop(activeSlot)
  stop(slot)

  // Si el foco estaba en la miniatura, se pierde al ocultarla: pasa al video.
  const focusWasInside = slot.contains(document.activeElement)
  const iframe = createIframe(videoId, title)
  $("[data-facade]", slot)?.setAttribute("hidden", "")
  slot.append(iframe)
  slot.dataset.playing = "true"
  slot.dataset.current = videoId
  activeSlot = slot

  if (focusWasInside) iframe.focus({ preventScroll: true })

  const detail: TrackPlayDetail = { slot: slot.id, id: videoId, title }
  document.dispatchEvent(new CustomEvent("track:play", { detail }))
}

/** Un clic en cualquier [data-play] de la página. */
function onPlayClick(event: MouseEvent) {
  const trigger = (event.target as Element).closest<HTMLElement>("[data-play]")
  if (!trigger) return
  const slot = document.getElementById(trigger.dataset.target ?? "")
  if (!slot) return

  event.preventDefault()
  const videoId = trigger.dataset.play || slot.dataset.current || ""
  const title = trigger.dataset.title ?? ""

  slot.removeAttribute("hidden")
  play(slot, videoId, title)
  if (trigger.dataset.scroll === "true") {
    slot.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }
}

/** Muestra «Sonando · …» y marca la fila que suena en las listas. */
function onTrackPlay(event: Event) {
  const { slot, id, title } = (event as CustomEvent<TrackPlayDetail>).detail

  const nowPlaying = $("[data-now]")
  const nowTitle = $("[data-now-title]")
  if (nowPlaying && nowTitle) {
    nowTitle.textContent = `Sonando · ${title}`
    nowPlaying.hidden = false
  }

  for (const button of $$("[data-play][data-target][aria-pressed]")) {
    const isPlaying =
      button.dataset.target === slot && button.dataset.play === id
    button.setAttribute("aria-pressed", String(isPlaying))
  }
}

document.addEventListener("click", onPlayClick)
document.addEventListener("track:play", onTrackPlay)
