/** Configuración de identidad y SEO global del sitio. */

export type SocialId = "youtube" | "spotify" | "instagram" | "tiktok"

export interface Social {
  id: SocialId
  label: string
  handle: string
  url: string
}

export interface NavItem {
  name: string
  href: string
}

const SITE_URL = (import.meta.env.SITE ?? "http://localhost:4321").replace(
  /\/$/,
  ""
)

const NAME = "CRISTIAN"

const DESCRIPTION =
  "Sitio oficial de CRISTIAN, cantante cristiano de Santa Marta, Colombia. Escucha su álbum Exuberante, sus sencillos y videos oficiales."

/** Spotify: reemplazar por el enlace del perfil de artista cuando exista. */
const SPOTIFY_URL = "https://open.spotify.com/search/CRISTIAN%20Exuberante"

const YOUTUBE_URL = "https://www.youtube.com/@Cristiansog?sub_confirmation=1"

/**
 * Fuente única para los datos que describen al artista y al sitio, no para su
 * catálogo: las canciones viven en `src/data/songs.ts`.
 * Los campos que no aplican se mantienen explícitos como null para que la
 * estructura pueda crecer sin inventar información.
 */
export const SITE = {
  name: NAME,
  description: DESCRIPTION,
  locale: "es",

  info: {
    name: NAME,
    /** Cómo se presenta. Se escribe sin punto final; cada sección decide. */
    slogan: "Discípulo de Jesucristo",
    genres: ["Salsa", "Urbano", "Adoración"],
    youtubeHandle: "@Cristiansog",
    author: "iangelmanuel"
  },

  site: {
    url: SITE_URL,
    locale: "es-CO",
    lang: "es",
    timezone: "America/Bogota"
  },

  location: {
    city: "Santa Marta",
    country: "Colombia",
    countryCode: "CO",
    timezone: "America/Bogota",
    /** Texto visible en la página. */
    display: "Santa Marta, Colombia"
  },

  social: {
    youtube: YOUTUBE_URL,
    spotify: SPOTIFY_URL,
    instagram: "https://www.instagram.com/cristian.sog/",
    tiktok: "https://www.tiktok.com/@cristiansog"
  },

  navigation: {
    /** `inBar: false` deja el enlace solo en el hero, no en la barra fija. */
    main: [
      { name: "Exuberante", href: "#musica" },
      { name: "Lo nuevo", href: "#nuevo" },
      { name: "Videos", href: "#videos" },
      { name: "Historia", href: "#historia" },
      { name: "Redes", href: "#redes", inBar: false }
    ] as Array<NavItem & { inBar?: boolean }>,
    cta: { label: "Suscribirme", href: YOUTUBE_URL }
  },

  seo: {
    title: `${NAME} — Discípulo de Jesucristo · Sitio oficial`,
    description: DESCRIPTION,
    keywords: [
      "CRISTIAN",
      "Cristiansog",
      "música cristiana",
      "Exuberante",
      "salsa cristiana",
      "urbano cristiano",
      "adoración",
      "Santa Marta"
    ],
    author: NAME,
    creator: NAME,
    publisher: NAME,
    url: SITE_URL,
    locale: "es-CO",
    lang: "es",
    geo: {
      region: "MAG",
      latitude: 11.2408 as number | null,
      longitude: -74.199 as number | null
    },
    image: "/opengraph-image.jpg",
    imageAlt:
      "Portada de Exuberante: CRISTIAN con los brazos abiertos bajo el cielo",
    imageWidth: 1200,
    imageHeight: 630,
    logo: "/icon-512.png",
    ogType: "profile" as "website" | "article" | "profile",
    twitterHandle: null as string | null,
    twitterCard: "summary_large_image" as "summary" | "summary_large_image",
    /** El fallback local no debe indexarse; el deploy define `site` explícitamente. */
    noindex: SITE_URL === "http://localhost:4321",
    category: "music",
    /** Color de la barra del navegador: el cielo alto de la página (--color-zenith). */
    themeColor: "#2a6594",
    manifestCategories: ["music", "entertainment"]
  }
} as const

/** Redes en el orden en que aparecen en la sección «Desde Santa Marta». */
export const SOCIALS: Social[] = [
  {
    id: "youtube",
    label: "YouTube",
    handle: SITE.info.youtubeHandle,
    url: SITE.social.youtube
  },
  {
    id: "spotify",
    label: "Spotify",
    handle: NAME,
    url: SITE.social.spotify
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@cristian.sog",
    url: SITE.social.instagram
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@cristiansog",
    url: SITE.social.tiktok
  }
]
