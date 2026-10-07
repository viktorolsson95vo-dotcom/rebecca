// In-page navigation without "#section" in the address bar.

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function scrollToSection(id: string, smooth = true) {
  const el = document.getElementById(id)
  if (!el) return
  // 'instant', not 'auto': 'auto' would fall back to the CSS scroll-behavior: smooth
  el.scrollIntoView({ behavior: smooth && !reduceMotion() ? 'smooth' : 'instant' })
  // Move keyboard/screen-reader focus to the section too, as a normal anchor jump would
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
}

/** Intercepts clicks on same-page "#id" links and scrolls instead, keeping the URL clean. Returns a cleanup function. */
export function setupCleanAnchors() {
  // Links shared with a hash (e.g. /en#contact, or from the language switch): jump there, then drop the hash.
  // Also on hashchange, which fires when only the hash of the current page changes (no reload).
  const consumeHash = () => {
    if (!window.location.hash) return
    const id = decodeURIComponent(window.location.hash.slice(1))
    history.replaceState(null, '', window.location.pathname + window.location.search)
    setTimeout(() => scrollToSection(id, false))
  }
  consumeHash()
  window.addEventListener('hashchange', consumeHash)

  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
    if (!link) return
    const id = link.getAttribute('href')!.slice(1)
    if (!document.getElementById(id)) return
    e.preventDefault()
    scrollToSection(id)
  }
  document.addEventListener('click', onClick)
  return () => {
    document.removeEventListener('click', onClick)
    window.removeEventListener('hashchange', consumeHash)
  }
}
