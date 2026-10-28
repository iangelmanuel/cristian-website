<div align="center">

<img src="./public/cristian-website-mockup.webp" width="850" alt="Captura del hero: el nombre CRISTIAN en amarillo sobre el cielo azul, su foto mirando al cielo y el botón «Escuchar Te Adoro»" />

### Sitio oficial de CRISTIAN: un solo cielo que se recorre bajando, del álbum _Exuberante_ al Caribe de Santa Marta

[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-000000?logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Licencia](https://img.shields.io/badge/licencia-solo_lectura-B91C1C)](LICENSE)

**[Ver sitio](https://cristiansog.com)**&nbsp;•&nbsp;**[Changelog](CHANGELOG.md)**&nbsp;•&nbsp;**[Guía de contribución](CONTRIBUTING.md)**

</div>

---

## Qué es

Es la casa oficial en la web de CRISTIAN (@Cristiansog), cantante cristiano de
Santa Marta, Colombia: reúne su álbum _Exuberante_, sus sencillos, sus videos
oficiales, su historia y sus redes. No es una plantilla de artista con hero
oscuro y grilla de tarjetas — la página entera es un cielo que cambia de color
mientras el visitante baja, del mediodía de la portada al mar de noche.

- **Un solo fondo para toda la página**: cada sección declara su color con
  `data-ground` y `src/scripts/sky.ts` mezcla los tokens de `global.css` según
  la región que ocupa el centro de la pantalla.
- **Un catálogo en un solo archivo**: `src/data/songs.ts` guarda álbum,
  sencillos y videos; agregar una canción no exige tocar componentes.
- **Un único objeto de configuración**: `src/config/site.ts` (`SITE`,
  `SOCIALS`) concentra identidad, redes, navegación y todos los valores de SEO.
- **El HTML no depende del JavaScript**: el contenido es visible sin scripts y
  con `prefers-reduced-motion`; la coreografía y el mar 3D son una capa encima.

## Stack

Construido con [Astro](https://astro.build/) en modo `output: "static"` y
[TypeScript](https://www.typescriptlang.org/) en todo el proyecto, sin ningún
framework de UI: el HTML se renderiza en build y los scripts del navegador
encuentran sus elementos por atributos `data-*`. Los estilos son
[Tailwind CSS](https://tailwindcss.com/) vía `@tailwindcss/vite`, la tipografía
es [Archivo](https://fonts.google.com/specimen/Archivo) variable (autoalojada
con Fontsource), el movimiento ligado al scroll usa
[GSAP](https://gsap.com/) con ScrollTrigger y SplitText, y el mar del final es
una escena WebGL con [Three.js](https://threejs.org/) que se descarga solo
cuando el visitante se acerca. La música se reproduce con embeds de
`youtube-nocookie.com` que cargan solo al pulsar play. La decisión que define
el proyecto: cero backend — todo se genera estático, así que una canción nueva
o un cambio en `SITE` exige un build, no una llamada a una API.

## Empezar

Requisitos:

- **Node.js** ≥ 22.23.4
- **pnpm** ≥ 11 (el repo fija `pnpm@11.17.0` vía `packageManager`; no uses npm
  ni yarn)

```bash
git clone https://github.com/iangelmanuel/cristian-website.git
cd cristian-website
pnpm install
pnpm dev
```

El sitio queda disponible en `http://localhost:4321`. No hay variables de
entorno.

| Comando               | Qué hace                                  |
| --------------------- | ----------------------------------------- |
| `pnpm dev`            | Servidor de desarrollo                    |
| `pnpm build`          | Build de producción (estático) en `dist/` |
| `pnpm preview`        | Sirve el build de producción localmente   |
| `pnpm check`          | `astro check`: tipos y archivos `.astro`  |
| `pnpm sync`           | Sincroniza los tipos generados de Astro   |
| `pnpm eslint`         | Lint sobre todo el proyecto               |
| `pnpm prettier`       | Formatea el código                        |
| `pnpm prettier:check` | Verifica el formateo sin escribir         |

CI (`.github/workflows/ci.yml`) corre `check`, `eslint` y `prettier:check` en
paralelo, y luego un build, en cada push/PR a `main`.

La estructura de carpetas, el mapa de atributos `data-*` y el sistema de diseño
están en [`docs/arquitectura.md`](docs/arquitectura.md).

## Añadir una canción

La tarea que más se repite en este repo: publicar un lanzamiento nuevo. Añade
su entrada en `src/data/songs.ts` (álbum, sencillos o videos):

```ts
{
  id: "ID_DE_YOUTUBE",
  title: "Nombre De La Canción",
  seconds: 205, // duración en segundos
  published: "2026-11-01", // fecha ISO de publicación en YouTube
  alt: "Qué se ve en la miniatura, en una frase"
}
```

Guarda su miniatura en `src/assets/songs/<ID_DE_YOUTUBE>.jpg` (descárgala de
`https://i.ytimg.com/vi/<ID>/maxresdefault.jpg`). Si falta, el build falla con
un mensaje claro. Astro la sirve en WebP con varios tamaños.

Pendiente: `SPOTIFY_URL` en `src/config/site.ts` apunta a una búsqueda;
reemplázalo por el perfil de artista en Spotify cuando exista.

## Despliegue

`pnpm build` genera un sitio 100 % estático en `dist/` que se publica en
cualquier hosting estático. El dominio canónico (`site` en `astro.config.mjs`)
es `https://cristiansog.com`. Después de desplegar, revisa `/robots.txt`,
`/sitemap.xml` y `/manifest.webmanifest`.

## Licencias

- Código fuente **visible solo para lectura y aprendizaje**: no se permite
  copiarlo, desplegarlo ni redistribuirlo — ver [LICENSE](LICENSE).
- Música, videos, fotografías, nombre y marca de CRISTIAN: todos los derechos
  reservados a su titular. No forman parte de ninguna licencia de uso.
- Tipografía Archivo bajo licencia SIL Open Font License; GSAP y Three.js bajo
  sus propias licencias.

## Autor

**Angel De La Torre**

- GitHub: [@iangelmanuel](https://github.com/iangelmanuel)
- LinkedIn: [@iangelmanuel](https://www.linkedin.com/in/iangelmanuel)
- X: [@iangelmanuel](https://x.com/iangelmanuel)
- Website: [angeldm.dev](https://angeldm.dev)

---

<div align="center">

Si te sirvió algo de este repo, deja una estrella ⭐

Hecho por [Angel DM](https://angeldm.dev) para [CRISTIAN](https://www.youtube.com/@Cristiansog)

</div>
