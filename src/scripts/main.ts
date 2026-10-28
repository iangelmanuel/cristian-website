/**
 * Punto de entrada del JavaScript de la página (lo carga BaseLayout).
 * Cada módulo se arranca solo al importarse.
 */
// fondo continuo que cambia con el scroll
import "./motion"
import "./player"
// fachada de YouTube → iframe
import "./sky"

// coreografía GSAP y carga diferida del mar
