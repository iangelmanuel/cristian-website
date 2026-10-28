# Política de seguridad

## Versiones soportadas

Solo la versión publicada en [cristiansog.com](https://cristiansog.com) recibe
correcciones de seguridad.

| Versión | Soportada          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1   | :x:                |

**Versión actual**: 0.1.1

## Reportar una vulnerabilidad

### 🔐 Divulgación privada

**No abras un issue público para reportar una vulnerabilidad.**

En su lugar:

1. **Email**: escribe a [iangelmanueldm@gmail.com](mailto:iangelmanueldm@gmail.com)
2. **Asunto**: usa «SECURITY: [descripción breve]»
3. **Incluye**:
   - Descripción de la vulnerabilidad
   - Pasos para reproducirla
   - Impacto potencial
   - Corrección sugerida (si la tienes)

### 📋 Información útil

- **Tipo de vulnerabilidad** (XSS, inyección de contenido, dependencia
  vulnerable, etc.)
- **Ubicación** (archivo, URL o sección de la página)
- **Reproducción paso a paso**
- **Prueba de concepto** (si aplica)
- **Navegador y dispositivo** donde ocurre

### ⏱️ Tiempos de respuesta

- **Primera respuesta**: dentro de 48 horas
- **Actualización de estado**: dentro de 5 días hábiles
- **Corrección**: según la severidad
  - **Crítica**: 24-72 horas
  - **Alta**: 1-2 semanas
  - **Media**: 2-4 semanas
  - **Baja**: siguiente versión

### 🏆 Reconocimiento

Con tu permiso, tu nombre aparecerá en el [CHANGELOG](CHANGELOG.md) junto a la
corrección.

## Superficie del proyecto

El sitio reduce al mínimo lo que puede salir mal:

### 🔍 Seguridad por diseño

- **Sitio 100 % estático**: `output: "static"`, sin servidor, sin base de datos
  y sin API propia.
- **Sin formularios ni cuentas**: el sitio no recibe ni guarda datos de los
  visitantes.
- **Sin variables de entorno ni secretos**: no hay claves que filtrar.
- **YouTube en modo privacidad mejorada**: los videos se cargan desde
  `youtube-nocookie.com` y solo cuando el visitante pulsa play.
- **Sin scripts de terceros al cargar**: GSAP y Three.js se empaquetan con el
  build; el mar WebGL se descarga solo al acercarse a él.
- **Datos estructurados controlados**: el JSON-LD se genera en build desde
  `src/config/site.ts`, no desde datos del usuario.

### 📦 Dependencias

- **Lockfile congelado**: CI instala con `pnpm install --frozen-lockfile`.
- **Pocas dependencias de producción**: Astro, Tailwind CSS, GSAP, Three.js,
  Fontsource y simple-icons.
- **Auditoría**: revisa con `pnpm audit` antes de cada versión.

### 🌐 Cabeceras recomendadas en el hosting

Como el sitio no tiene servidor propio, estas cabeceras se configuran en el
hosting donde se despliegue:

- **Content-Security-Policy** (permitiendo `frame-src https://www.youtube-nocookie.com`)
- **X-Content-Type-Options: nosniff**
- **Referrer-Policy: strict-origin-when-cross-origin**
- **Permissions-Policy**
- **Strict-Transport-Security**

## Contacto

### 👨‍💻 Responsable

- **Contacto principal**: Angel De La Torre
- **Email**: [iangelmanueldm@gmail.com](mailto:iangelmanueldm@gmail.com)
- **GitHub**: [@iangelmanuel](https://github.com/iangelmanuel)

### 📱 Urgencias

Para vulnerabilidades críticas con riesgo inmediato:

- **Email**: [iangelmanueldm@gmail.com](mailto:iangelmanueldm@gmail.com)
- **Asunto**: «URGENT SECURITY - [descripción breve]»

## Recursos

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Advisories](https://github.com/advisories)
- [Seguridad en Astro](https://docs.astro.build/en/guides/security/)

---

Gracias por ayudar a mantener seguro este proyecto y a quienes lo visitan 🙏

_Última actualización: 28 de octubre de 2026_
