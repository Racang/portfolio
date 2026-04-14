// ─── Framer Motion animation presets ────────────────────────────────────────
// These variants are ready to be applied to any motion component.

/** Fade-in from below (for sections, cards, headings) */
export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Staggered container — children animate in one-by-one */
export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

/** Fade-in from the left */
export const fadeLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Fade-in from the right */
export const fadeRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Scale-in (for images & cards) */
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Gentle float (infinite, for hero decorative shapes) */
export const floatY = {
  animate: {
    y: [0, -14, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
}

/** Soft image reveal — minimal scale (0.97 → 1) for screenshots and banners */
export const imgReveal = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Common viewport trigger settings */
export const viewportOnce = { once: true, margin: '-80px' }
