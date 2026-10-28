/** Atajos para buscar elementos en el DOM. */

export const $ = <T extends Element = HTMLElement>(
  selector: string,
  root: ParentNode = document
) => root.querySelector<T>(selector)

export const $$ = <T extends Element = HTMLElement>(
  selector: string,
  root: ParentNode = document
) => [...root.querySelectorAll<T>(selector)]

/** true si el visitante pidió menos movimiento en su sistema. */
export const prefersReducedMotion = () =>
  matchMedia("(prefers-reduced-motion: reduce)").matches
