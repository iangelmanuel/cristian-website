/** Formatos de texto para fechas y duraciones de las canciones. */
import type { Song } from "@/data/songs"

const monthYearFormat = new Intl.DateTimeFormat("es-CO", {
  month: "long",
  year: "numeric",
  timeZone: "UTC"
})

/** 213 → "3:33" */
export function duration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const rest = String(seconds % 60).padStart(2, "0")
  return `${minutes}:${rest}`
}

/** "2026-02-25" → "Febrero de 2026" */
export function monthYear(isoDate: string): string {
  const text = monthYearFormat.format(new Date(`${isoDate}T12:00:00Z`))
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/** Línea de datos bajo cada canción: "Febrero de 2026 · 3:33" */
export function songMeta(song: Song): string {
  return `${monthYear(song.published)} · ${duration(song.seconds)}`
}
