/**
 * Catálogo musical publicado en YouTube.
 *
 * Para agregar una canción: añade su entrada aquí y guarda su miniatura en
 * `src/assets/songs/<id>.jpg` (https://i.ytimg.com/vi/<id>/maxresdefault.jpg).
 */
export interface Song {
  /** ID del video en YouTube; también nombra la miniatura. */
  id: string
  title: string
  /** Duración en segundos. */
  seconds: number
  /** Fecha ISO de publicación en YouTube. */
  published: string
  /** Texto alternativo de la miniatura. */
  alt: string
}

const ALBUM_PUBLISHED = "2026-02-25"
const ALBUM_COVER_ALT =
  "Portada de Exuberante: CRISTIAN con los brazos abiertos bajo el cielo, con el título en amarillo"

/** Orden del álbum según el orden de publicación en YouTube (25 feb 2026). */
export const album = {
  title: "Exuberante",
  published: ALBUM_PUBLISHED,
  coverAlt: ALBUM_COVER_ALT,
  tracks: [
    track("_m7XUgoH9S8", "Padre Ayúdame", 222),
    track("gb83FuKk_fE", "No Te Rindas", 159),
    track("TjVo1_prC-4", "Mi Amigo Fiel", 177),
    track("nLSw3k1jmZc", "Príncipe De Paz", 167),
    track("sN_XwbhonvY", "Me Siento Relajao", 181),
    track("e4PqDyBdjkQ", "Perdón", 190),
    track("mt66dTLxm2A", "Te Adoro", 213)
  ]
}

/** Sencillos de 2026, del más reciente al más antiguo. */
export const singles: Song[] = [
  {
    id: "NHrGsMuRyDY",
    title: "Gracia",
    seconds: 140,
    published: "2026-10-01",
    alt: "Portada de Gracia: la palabra GRACIA en azul sobre una cruz"
  },
  {
    id: "ftVd34bSu7U",
    title: "Salsalipsis",
    seconds: 214,
    published: "2026-09-30",
    alt: "Portada de Salsalipsis: manos alzadas hacia una luz entre las nubes"
  },
  {
    id: "Rq77ODHkigI",
    title: "Mi Artista Favorito",
    seconds: 184,
    published: "2026-04-17",
    alt: "Portada de Mi Artista Favorito: un mono comiendo fruta en la selva"
  },
  {
    id: "8fOxGKcCnuo",
    title: "Salmo 1",
    seconds: 146,
    published: "2026-01-01",
    alt: "Portada de Salmo 1: un río entre árboles"
  }
]

/** Videos oficiales; el primero es el video principal de la sección. */
export const videos: Song[] = [
  {
    id: "6YzlluyjbpU",
    title: "Gálatas 2:20",
    seconds: 217,
    published: "2025-12-11",
    alt: "CRISTIAN señala al cielo al atardecer, con las montañas detrás"
  },
  {
    id: "t_8r-kQQccc",
    title: "Cristo Es Lo Mejor",
    seconds: 217,
    published: "2025-11-27",
    alt: "CRISTIAN aplaude bajo un cielo azul con nubes"
  },
  {
    id: "F6hRmsnjTwo",
    title: "Gracias Mamá",
    seconds: 275,
    published: "2025-05-08",
    alt: "CRISTIAN abraza y sonríe con su mamá"
  }
]

/** La canción que suena desde el botón principal del hero. */
export const featured = album.tracks.find((song) => song.title === "Te Adoro")!

/** Las canciones del álbum comparten fecha y portada. */
function track(id: string, title: string, seconds: number): Song {
  return {
    id,
    title,
    seconds,
    published: ALBUM_PUBLISHED,
    alt: ALBUM_COVER_ALT
  }
}
