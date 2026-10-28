# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto sigue [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [0.1.1] - 2026-10-28

### Añadido

- `LICENSE`: licencia de código visible, solo lectura. Permite ver, estudiar y ejecutar el código en local para aprender; prohíbe copiarlo, desplegarlo, redistribuirlo o usarlo como plantilla. La música, imagen, nombre y marca de CRISTIAN quedan con todos los derechos reservados.
- `SECURITY.md`: canal privado para reportar vulnerabilidades, tiempos de respuesta y superficie del sitio (estático, sin formularios ni secretos, YouTube en modo `nocookie`).
- `CONTRIBUTING.md`: issues abiertos para bugs y errores de contenido, Pull Requests solo por invitación, estándares de código y formato de commits.
- `docs/arquitectura.md`: estructura de carpetas, mapa de atributos `data-*` ↔ scripts, imágenes y sistema de diseño, extraídos del README.
- `public/cristian-website-mockup.webp`: captura del hero para el README.
- `CLAUDE.md`: guía del repositorio para Claude Code.

### Cambiado

- `README.md` reescrito con la estructura de los demás proyectos del autor: portada con la captura, propuesta en una frase, badges planos (Astro, Tailwind CSS, TypeScript, GSAP, Three.js y licencia), y secciones «Qué es», «Stack», «Empezar», «Añadir una canción», «Despliegue», «Licencias» y «Autor».
- `CHANGELOG.md` adopta el formato Keep a Changelog con sección `[Unreleased]`.
- `package.json`: versión `0.1.1` y campo `license` apuntando a `LICENSE`.

## [0.1.0] - 2026-10-28

Reestructuración interna. La landing se ve y se comporta igual.

### Añadido

- SEO: `BaseHead`, `JsonLd` (MusicGroup y WebSite), `robots.txt`, `sitemap.xml` y `manifest.webmanifest`, más iconos e imagen social de 1200 × 630 en `public/`.
- Accesibilidad:
  - Al reproducir un video, el foco pasa al reproductor.
  - La barra fija tiene `<nav>` propio.
  - «Sonando» se anuncia a lectores de pantalla.
  - El footer quedó fuera de `<main>`.
- Herramientas: Prettier (con orden de imports y de clases de Tailwind), ESLint, `astro check`, `.editorconfig` y CI en GitHub Actions.

### Cambiado

- La estructura sigue la guía del proyecto. Se separaron `config/`, `data/`, `libs/` y `components/{seo,layout,sections,ui}`, y los imports usan el alias `@/`.
- `layouts/Base.astro` pasa a llamarse `BaseLayout.astro`. El SEO, la barra fija y el JavaScript salieron a sus propios archivos.
- La lógica del navegador ahora vive en `scripts/player.ts`, `scripts/sky.ts` y `scripts/motion.ts`. Este último tiene una función con nombre por cada escena.
- Los datos del artista se movieron de `data/artist.ts` a `config/site.ts` (`SITE`, `SOCIALS`).
- Cada canción lleva su propio texto alternativo en `data/songs.ts`.
- Las piezas repetidas son ahora componentes: `SubscribeButton`, `Equalizer`, `SectionTitle`, `VideoPlayer` y `GenreMarquee`.

### Eliminado

- `package-lock.json`. pnpm es el único gestor.
- Los favicons de la plantilla de Astro, que no se usaban.
- Los datos que ningún archivo leía (`stats`, `channelId` y el campo `kind` de las canciones).

---

## Soporte de versiones

- **Versión actual**: 0.1.1
- **Node.js**: >= 22.23.4
- **pnpm**: >= 11
- **Navegadores**: modernos (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+); el mar WebGL necesita WebGL 1
- **Astro**: 7.4.2
- **Tailwind CSS**: 4.3.3
