// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://cristiansog.com",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
})
