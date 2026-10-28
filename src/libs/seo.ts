/** Datos estructurados de Schema.org construidos desde SITE. */
import { SITE, SOCIALS } from "@/config/site"

const SITE_URL = SITE.seo.url

export function musicGroupLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "@id": `${SITE_URL}#artist`,
    name: SITE.info.name,
    description: `${SITE.info.slogan}. Música cristiana desde ${SITE.location.display}.`,
    genre: SITE.info.genres,
    foundingLocation: { "@type": "Place", name: SITE.location.display },
    image: new URL(SITE.seo.logo, SITE_URL).href,
    url: SITE_URL,
    // Spotify todavía apunta a una búsqueda, no a un perfil.
    sameAs: SOCIALS.filter((social) => social.id !== "spotify").map(
      (social) => social.url.split("?")[0]
    )
  } as const
}

export function webSiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE.info.name,
    description: SITE.seo.description,
    inLanguage: SITE.seo.locale,
    publisher: { "@id": `${SITE_URL}#artist` }
  } as const
}
