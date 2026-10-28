# Arquitectura

Cómo está organizado el código y cómo se conectan el HTML, los estilos y el
JavaScript. Para empezar a trabajar, ver el [README](../README.md).

## Estructura

```
public/                    iconos e imagen para redes (generados desde src/assets)
src/
├── assets/                avatar, foto de Santa Marta y miniaturas (songs/<id>.jpg)
├── config/site.ts         identidad, SEO, navegación y redes (SITE, SOCIALS)
├── data/songs.ts          catálogo: álbum, sencillos y videos
├── libs/                  lógica sin interfaz
│   ├── format.ts          fechas y duraciones
│   ├── seo.ts             datos estructurados (JSON-LD)
│   └── thumbnails.ts      miniatura de cada video
├── components/
│   ├── seo/               BaseHead (metas) y JsonLd
│   ├── layout/            SkipLink, StickyBar y Footer
│   ├── sections/          una por cada región de la página, en orden
│   └── ui/                piezas reutilizables: Icon, VideoPlayer, Equalizer…
├── layouts/BaseLayout.astro   <html>, <head> y el JavaScript de la página
├── pages/
│   ├── index.astro        la landing
│   └── robots.txt.ts, sitemap.xml.ts, manifest.webmanifest.ts
├── scripts/               JavaScript del navegador
│   ├── main.ts            punto de entrada
│   ├── player.ts          reproductor de YouTube
│   ├── sky.ts             fondo que cambia de color con el scroll
│   ├── motion.ts          coreografía GSAP, una función por escena
│   ├── sea.ts             mar WebGL (se descarga solo al acercarse)
│   └── dom.ts             atajos $ / $$
└── styles/global.css      tokens de color, base y piezas controladas por JS
```

Los imports usan el alias `@/`, que apunta a `src/`.

## Cómo se conecta el JavaScript

El HTML se renderiza en el build. Los scripts encuentran sus elementos por
atributos `data-*`; ningún script depende de clases de Tailwind.

| Atributo                                              | Dónde                    | Quién lo usa                                |
| ----------------------------------------------------- | ------------------------ | ------------------------------------------- |
| `data-play`, `data-target`, `data-title`              | botones de reproducir    | `player.ts`: abre el video en el contenedor |
| `data-facade`, `data-current`, `data-playing`         | `ui/VideoPlayer.astro`   | `player.ts`                                 |
| `data-now`, `data-now-title`                          | `layout/StickyBar.astro` | `player.ts`: muestra «Sonando · …»          |
| `data-ground`, `data-ground-keep`, `data-ground-late` | cada región              | `sky.ts` y `global.css`: el color del fondo |
| `data-bar`                                            | `layout/StickyBar.astro` | `motion.ts`: aparece tras el hero           |
| `data-hero-name`, `-photo`, `-copy`                   | `sections/Hero.astro`    | `motion.ts`: entrada animada                |
| `data-row`                                            | filas del álbum y redes  | `motion.ts`: llegan en orden                |
| `data-rhythm`                                         | `sections/GenreMarquee`  | `motion.ts`: los géneros cruzan la pantalla |
| `data-singles`, `data-track`, `data-slide…`           | `sections/Singles.astro` | `motion.ts`: scroll lateral                 |
| `data-descent…`, `data-sea`, `data-sea-canvas`        | `sections/Descent.astro` | `motion.ts` y `sea.ts`                      |
| `data-expand`, `data-depth`                           | `sections/Videos.astro`  | `motion.ts`                                 |
| `data-words`, `data-quote-rule`                       | `sections/Story.astro`   | `motion.ts`: el versículo se enciende       |
| `data-horizon`, `data-foot-name`                      | `NightShore` y `Footer`  | `motion.ts`                                 |

Con `prefers-reduced-motion: reduce` no corre ninguna coreografía. Las regiones
quedan como franjas de color fijas y el mar queda quieto.

## Contenido e imágenes

- **Imágenes**: `src/assets/`. Son el avatar, la foto de Santa Marta (banner
  original del canal) y las miniaturas del canal de YouTube, todas en su
  resolución original. Astro las sirve en WebP con varios tamaños.
- **Iconos e imagen social**: `public/icon.png` (192 px), `public/icon-512.png`
  y `public/opengraph-image.jpg` (1200 × 630). Si cambia el avatar o la
  portada, vuelve a generarlos con el mismo tamaño.
- **Captura del README**: `public/cristian-website-mockup.webp`.

## Diseño

El sistema de diseño lo gestiona el plugin
[impeccable](https://github.com/pbakaus/impeccable), instalado a nivel de
proyecto en `.claude/`:

- `PRODUCT.md` contiene la verdad del producto: audiencia, propósito y datos
  verificados.
- `.impeccable/surfaces/` guarda el contrato de dirección de la landing.
- `DESIGN.md` documenta el sistema visual.
- El hook (`.claude/settings.local.json`) revisa cada edición de UI.

### Skills opcionales

Para el flujo de specs (`/spec` y `/spec-impl`) puedes instalar
[fernando-skills](https://github.com/Klerith/fernando-skills). Es contenido de
terceros, así que revisa el diff antes de commitearlo.

```sh
pnpm dlx skills@latest add Klerith/fernando-skills
```
