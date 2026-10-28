import type { APIRoute } from "astro"
import { SITE } from "@/config/site"

/** La landing tiene una sola ruta pública. */
const ROUTES = [{ path: "/", changeFrequency: "monthly", priority: "1.0" }]

export const GET: APIRoute = () => {
  const lastModified = new Date().toISOString()
  const urls = ROUTES.map(
    (route) => `  <url>
    <loc>${SITE.seo.url}${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  ).join("\n")

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  })
}
