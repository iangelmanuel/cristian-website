# Contribuir al sitio oficial de CRISTIAN

¡Gracias por tu interés en este proyecto! 🎉

Antes de empezar: este repositorio es **de código visible, no de código
abierto**. Su [licencia](LICENSE) permite leerlo y aprender de él, pero no
copiarlo ni desplegarlo. Por eso las contribuciones funcionan distinto que en
un proyecto open source.

## 🚀 Formas de contribuir

### 🐛 Reportar bugs

- Usa la [pestaña de Issues](https://github.com/iangelmanuel/cristian-website/issues)
- Describe el problema con claridad
- Incluye los pasos para reproducirlo
- Menciona tu dispositivo, sistema operativo y navegador
- Si es visual, adjunta una captura

### 📝 Reportar errores de contenido

¿Un título mal escrito, una fecha incorrecta o un enlace roto? Abre un Issue
indicando la sección de la página y el dato correcto. El contenido sobre
CRISTIAN solo se cambia con información verificada.

### 💡 Sugerir mejoras

- Abre un Issue con la etiqueta `enhancement`
- Describe la mejora y por qué sería útil
- Proporciona ejemplos si es posible

### 🛠️ Contribuir con código

Los Pull Requests **solo se aceptan por invitación**. Si quieres proponer un
cambio de código, abre primero un Issue y espera confirmación. Al enviar un PR
aceptas que tu aporte quede bajo la misma [licencia](LICENSE) del proyecto.

Si fuiste invitado:

1. **Crea** una rama desde `main` (`git checkout -b fix/descripcion-breve`)
2. **Realiza** tus cambios
3. **Verifica** con los comandos de abajo
4. **Commit** siguiendo el formato de commits
5. **Abre** un Pull Request hacia `main`

## 📋 Preparación del entorno

### Prerrequisitos

- **Node.js** >= 22.23.4
- **pnpm** >= 11 (único gestor de paquetes; no uses npm ni yarn)
- **Git**

### Configuración

```bash
# 1. Clona el repositorio
git clone https://github.com/iangelmanuel/cristian-website.git
cd cristian-website

# 2. Instala las dependencias
pnpm install

# 3. Inicia el servidor de desarrollo
pnpm dev
```

No hay variables de entorno que configurar.

## 🎨 Estándares de código

### Estilo

- **Prettier**: formateo automático, sin punto y coma, comillas dobles, un
  atributo por línea, imports y clases de Tailwind ordenados
- **ESLint**: análisis estático, `any` prohibido
- **TypeScript**: modo estricto
- **Idioma**: textos, comentarios y documentación en español

### Comandos de verificación

```bash
pnpm check            # tipos y archivos .astro
pnpm eslint           # linting
pnpm prettier:check   # formato
pnpm build            # build de producción
```

CI corre los cuatro; un PR con alguno en rojo no se revisa.

### Convenciones de nombres

- **Componentes Astro**: PascalCase (`VideoPlayer.astro`)
- **Scripts y librerías**: kebab-case o una palabra (`sky.ts`, `thumbnails.ts`)
- **Variables y funciones**: camelCase (`loadSea`)
- **Constantes**: UPPER_SNAKE_CASE (`SPOTIFY_URL`)
- **Miniaturas**: el ID de YouTube (`src/assets/songs/<id>.jpg`)

### Reglas del proyecto

- **Los scripts usan `data-*`, nunca clases de Tailwind**: si agregas o
  renombras un atributo, actualiza la tabla de
  [`docs/arquitectura.md`](docs/arquitectura.md).
- **El contenido es visible sin JavaScript**: toda animación nueva debe
  respetar `prefers-reduced-motion`.
- **El color del fondo lo decide `data-ground`**: usa los tokens `--color-*`
  de `src/styles/global.css`, no colores sueltos.
- **No inventes datos del artista**: biografía, fechas y enlaces salen de
  fuentes verificadas (ver `PRODUCT.md`).

## 📝 Estructura de commits

### Formato

```
type(scope): description

[optional body]

[optional footer]
```

### Tipos

- `feat`: nueva funcionalidad o contenido
- `fix`: corrección de bug
- `docs`: documentación
- `style`: formato (sin cambiar comportamiento)
- `refactor`: refactorización
- `perf`: rendimiento
- `chore`: mantenimiento y dependencias

### Ejemplos

```bash
feat(songs): add "Gracia" single
fix(player): restore focus after closing a video
docs(readme): update song instructions
perf(sea): lower WebGL pixel ratio on mobile
```

## 🧪 Calidad

### Antes de hacer commit

- [ ] `pnpm check`, `pnpm eslint` y `pnpm prettier:check` pasan
- [ ] `pnpm build` termina sin errores
- [ ] Se ve bien en móvil (la mayoría de visitas llegan desde el teléfono)
- [ ] Funciona con `prefers-reduced-motion: reduce`
- [ ] Se puede navegar con teclado y lector de pantalla
- [ ] El `CHANGELOG.md` registra el cambio

### Checklist para Pull Requests

- [ ] Título descriptivo
- [ ] Descripción de los cambios y del Issue relacionado
- [ ] Capturas en móvil y escritorio si hay cambios visuales
- [ ] Documentación actualizada si hace falta

## 💬 Comunicación

- **GitHub Issues**: bugs, errores de contenido y sugerencias
- **Pull Requests**: revisión de código (solo por invitación)
- **Email**: [iangelmanueldm@gmail.com](mailto:iangelmanueldm@gmail.com) para
  temas urgentes o permisos de uso

### Código de conducta

- Sé respetuoso y constructivo
- Acepta las críticas constructivas
- Respeta el mensaje y la fe del artista
- Mantén un ambiente inclusivo y acogedor

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Documentación de GSAP](https://gsap.com/docs/)
- [Documentación de Three.js](https://threejs.org/docs/)

---

¡Gracias por ayudar a que la música de CRISTIAN llegue mejor a quien la busca! 🙌

**¿Tienes preguntas?** Abre un Issue o escríbeme directamente.
