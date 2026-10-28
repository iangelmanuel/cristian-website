# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Official landing page for CRISTIAN, a Christian singer from Santa Marta, Colombia. Single-page static Astro 7 site (Tailwind CSS 4, GSAP, Three.js). All content, code comments and docs are in **Spanish** — keep it that way.

## Commands

pnpm only (no npm/yarn). Node ≥ 22.23.4.

- `astro dev --background` — start dev server in background (per AGENTS.md); manage with `astro dev stop|status|logs`. Serves `localhost:4321`.
- `pnpm build` — static build to `dist/`
- `pnpm sync` — regenerate Astro types in `.astro/` (run before `check` on a fresh clone)
- `pnpm check` — type-check `.astro` + `.ts`
- `pnpm eslint` / `pnpm prettier` / `pnpm prettier:check`

There is no test suite. CI (`.github/workflows/ci.yml`) runs `check`, `eslint`, `prettier:check` in parallel, then `build` — run all four before considering work done.

## Formatting

Prettier: no semicolons, double quotes, no trailing commas, `singleAttributePerLine: true`, sorted imports (astro → third-party → `@/…/types` → `@/…` → relative → css) and Tailwind class sorting. Imports use the `@/` alias for `src/`.

## Architecture

**One page, one sky.** `src/pages/index.astro` stacks the sections in `src/components/sections/` in order; the page is conceived as a continuous descent from midday sky (album _Exuberante_) to the Caribbean sea at night. Section order matters for the background color story.

**HTML is server-rendered; JS hooks in only via `data-*` attributes.** Scripts in `src/scripts/` never depend on Tailwind classes. `BaseLayout.astro` loads `scripts/main.ts`, which imports the self-initializing modules:

- `sky.ts` — each region declares `data-ground="a"` or `data-ground="a>b"` (names of `--color-*` tokens in `styles/global.css`); the region at viewport center sets the blended `--ground` CSS variable. `data-ground-keep` / `data-ground-late` modify this.
- `motion.ts` — GSAP + ScrollTrigger + SplitText choreography, one function per scene; a scene no-ops if its element is absent. Content is visible by default; animation only runs under `prefers-reduced-motion: no-preference` (an inline script in `BaseLayout` adds `html.intro` for the hero entrance).
- `sea.ts` — Three.js WebGL sea, dynamically imported by `motion.ts` only when the canvas is within one viewport.
- `player.ts` — YouTube facade → `youtube-nocookie.com` iframe on click; updates the sticky bar's "now playing".

`docs/arquitectura.md` has the full `data-*` attribute ↔ script mapping table; update it when adding/renaming hooks.

## Repo docs

README, CHANGELOG (Keep a Changelog, Spanish headings, bump `package.json` version with each entry), SECURITY, CONTRIBUTING and `docs/` follow the author's structure from the sibling `angel-website` repo. `LICENSE` is a custom source-available, read-only license (not open source) — don't describe the project as open source or add an OSS license.

**Content and config:**

- `src/data/songs.ts` — catalogue (album, singles, videos). Adding a song requires its thumbnail at `src/assets/songs/<youtubeId>.jpg`; `libs/thumbnails.ts` globs that folder and throws at build time if missing.
- `src/config/site.ts` — identity, SEO, nav, socials (`SITE`, `SOCIALS`). `SPOTIFY_URL` is still a placeholder search link.
- `src/libs/seo.ts` — JSON-LD; `pages/robots.txt.ts`, `sitemap.xml.ts`, `manifest.webmanifest.ts` are generated endpoints.
- `public/` icons and OG image are derived from `src/assets` — regenerate at same sizes if avatar/cover changes.

## Design system (impeccable)

Design is governed by the project-level impeccable plugin in `.claude/`:

- `PRODUCT.md` — product truth (audience, purpose, verified facts; don't invent e.g. a booking channel).
- `DESIGN.md` — visual system; `.impeccable/surfaces/` — direction contract for the landing.
- Hooks in `.claude/settings.local.json` run the impeccable detector after every Edit/Write on UI files and a deep pass on Stop — expect and act on their feedback.
