/** Miniaturas de YouTube guardadas en `src/assets/songs/<id>.jpg`. */
import type { ImageMetadata } from "astro"

const thumbnails = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/songs/*.jpg",
  { eager: true }
)

/** Devuelve la miniatura de un video; falla el build si falta el archivo. */
export function thumb(videoId: string): ImageMetadata {
  const image = thumbnails[`../assets/songs/${videoId}.jpg`]
  if (!image) throw new Error(`Falta la miniatura de ${videoId}`)
  return image.default
}
