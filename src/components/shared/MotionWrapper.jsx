/**
 * MotionWrapper — shared reusable animation primitives for all project pages.
 *
 * Every project detail page (Tostem, Thaioil, IRPC, Gena) imports from here
 * so timing, easing, and interaction behaviour stay identical across the portfolio.
 * All variants are defined once in src/lib/animations.js.
 *
 * ── Usage patterns ──────────────────────────────────────────────────────────
 *
 * Split-panel section (image + text):
 *   <StaggerReveal as="section" className="flex gap-[40px] ...">
 *     <FadeLeft className="left-col">...</FadeLeft>
 *     <FadeRight className="right-col">...</FadeRight>
 *   </StaggerReveal>
 *
 * Section with header + staggered cards:
 *   <StaggerReveal as="section" className="flex flex-col gap-[44px] ...">
 *     <FadeUp className="header">
 *       <h2>Title</h2>
 *     </FadeUp>
 *     <StaggerReveal className="grid grid-cols-3 ...">
 *       <FadeUp>card 1</FadeUp>
 *       <FadeUp>card 2</FadeUp>
 *       <FadeUp>card 3</FadeUp>
 *     </StaggerReveal>
 *   </StaggerReveal>
 *
 * Standalone block reveal (heading, role card, etc.):
 *   <SectionReveal className="...">block content</SectionReveal>
 *
 * Cards with hover lift:
 *   <MotionCard className="...">card content</MotionCard>
 *
 * Screen gallery:
 *   <StaggerReveal className="flex flex-col gap-[40px]">
 *     <ScaleReveal>screen 1</ScaleReveal>
 *     <ScaleReveal>screen 2</ScaleReveal>
 *   </StaggerReveal>
 */
import { motion } from 'framer-motion'
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  imgReveal,
  staggerContainer,
  viewportOnce,
} from '../../lib/animations'

// ── Internal factory ─────────────────────────────────────────────────────────
// Builds a variants-only component (works as a stagger child inside StaggerReveal).
// Uses `as` prop to render any HTML/motion element without adding extra DOM nodes.
function makeVariantComp(variants) {
  return function VariantComp({ as: Tag = 'div', children, className, ...props }) {
    const MotionTag = motion[Tag]
    return (
      <MotionTag variants={variants} className={className} {...props}>
        {children}
      </MotionTag>
    )
  }
}

// ── Scroll-trigger containers ─────────────────────────────────────────────────

/**
 * SectionReveal — standalone block that fades up when it enters the viewport.
 * Use for: role info cards, section headers, any self-contained content block.
 */
export function SectionReveal({ as: Tag = 'div', children, className, ...props }) {
  const MotionTag = motion[Tag]
  return (
    <MotionTag
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

/**
 * StaggerReveal — stagger container: direct children with `variants` animate in sequence.
 * Use for: card grids, screen galleries, split-panel layouts.
 */
export function StaggerReveal({ as: Tag = 'div', children, className, ...props }) {
  const MotionTag = motion[Tag]
  return (
    <MotionTag
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

// ── Stagger children ──────────────────────────────────────────────────────────
// These are ONLY meant to live inside a StaggerReveal (they have no own viewport trigger).

/** Fades in from below — headers, text blocks, direction cards */
export const FadeUp = makeVariantComp(fadeUp)

/** Slides in from the left — left-column content */
export const FadeLeft = makeVariantComp(fadeLeft)

/** Slides in from the right — right-column content */
export const FadeRight = makeVariantComp(fadeRight)

/** Subtle scale-in — UI screenshots, banner images (0.97 → 1) */
export const ScaleReveal = makeVariantComp(imgReveal)

// ── Interactive components ────────────────────────────────────────────────────

/**
 * MotionCard — card with scaleIn entrance and smooth desktop hover lift.
 * Standalone: has its own viewport trigger so it works outside a StaggerReveal.
 */
export function MotionCard({ children, className, ...props }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
