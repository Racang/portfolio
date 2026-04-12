/**
 * Button — pixel-perfect match to Figma node 40000323:31678.
 *
 * Filled states:
 *   Default → coral pill, pink glow shadow, #FFAFB3 circle, white arrow
 *   Hover   → lifts -3px, shadow softens, 5% dark tint overlay fades in,
 *             white circle, coral arrow, arrow nudges +2px right
 *   Active  → scale 0.97, y reset to 0
 *
 * Outline (Figma "All Projects" node 40000150:29768):
 *   Text-link style — no bg, no pill, coral text + coral arrow
 *   Hover → subtle coral tint bg, lift, arrow nudge
 *   Active → scale 0.97
 *
 * All transitions driven by Framer Motion `animate` for smooth easing.
 */
import { useState } from 'react'
import { motion } from 'framer-motion'

const ARROW_WHITE = `${import.meta.env.BASE_URL}images/btn/ba43d650bfed32aa6b7ab5060c5502ff9a78caf1.svg`
const ARROW_CORAL = `${import.meta.env.BASE_URL}images/btn/4c0a9824e4e8a69a4a7aee406449ebe97c232bd7.svg`

// Premium ease curve — snappy out, smooth return
const EASE = [0.25, 0.46, 0.45, 0.94]
const TRANS = { duration: 0.26, ease: EASE }

export default function Button({ variant = 'filled', href, children, className = '', ...rest }) {
  const [isHover, setIsHover]   = useState(false)
  const [isActive, setIsActive] = useState(false)
  const isInteract = isHover || isActive

  const handlers = {
    onMouseEnter: () => setIsHover(true),
    onMouseLeave: () => { setIsHover(false); setIsActive(false) },
    onMouseDown:  () => setIsActive(true),
    onMouseUp:    () => setIsActive(false),
    onFocus:      () => setIsHover(true),
    onBlur:       () => { setIsHover(false); setIsActive(false) },
    onTouchStart: () => setIsActive(true),
    onTouchEnd:   () => { setIsActive(false); setIsHover(false) },
  }

  const MotionTag = href ? motion.a : motion.button
  const tagProps  = href ? { href, ...rest } : { type: 'button', ...rest }

  /* ── Filled (primary) ─────────────────────────────────────────────────── */
  if (variant === 'filled') {
    return (
      <MotionTag
        {...tagProps}
        {...handlers}
        className={[
          'relative inline-flex items-center gap-[8px] overflow-hidden',
          'h-[50px] pl-[24px] pr-[8px] py-[14px]',
          'rounded-[28px] shrink-0',
          'cursor-pointer select-none outline-none',
          'bg-[#FF797E]',
          className,
        ].filter(Boolean).join(' ')}
        animate={{
          y:         isActive ? 0  : isHover ? -3 : 0,
          scale:     isActive ? 0.97 : 1,
          boxShadow: isInteract
            ? '0px 6px 16px 0px rgba(255,121,126,0.18)'
            : '0px 10px 20px 0px rgba(255,121,126,0.30)',
        }}
        transition={TRANS}
      >
        {/* 5% dark tint overlay — fades in on hover/active */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-[28px] bg-black pointer-events-none"
          animate={{ opacity: isInteract ? 0.05 : 0 }}
          transition={TRANS}
        />

        {/* Label */}
        <span
          className="relative z-10 font-fredoka font-medium text-[22px] text-white leading-none whitespace-nowrap shrink-0"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {children}
        </span>

        {/* Icon circle */}
        <motion.span
          className="relative z-10 inline-flex items-center justify-center shrink-0 w-[40px] h-[40px] rounded-[26px]"
          animate={{ backgroundColor: isInteract ? '#ffffff' : '#FFAFB3' }}
          transition={TRANS}
        >
          <img
            src={isInteract ? ARROW_CORAL : ARROW_WHITE}
            alt=""
            aria-hidden="true"
            className="w-[7.5px] h-[15.8px]"
          />
        </motion.span>
      </MotionTag>
    )
  }

  /* ── Outline / text-link (secondary) ─────────────────────────────────── */
  return (
    <MotionTag
      {...tagProps}
      {...handlers}
      className={[
        'inline-flex items-center gap-[8px]',
        'py-[14px] rounded-[24px]',
        'cursor-pointer select-none outline-none',
        className,
      ].filter(Boolean).join(' ')}
      animate={{
        y:     isActive ? 0 : isHover ? -3 : 0,
        scale: isActive ? 0.97 : 1,
      }}
      transition={TRANS}
    >
      {/* Label */}
      <motion.span
        className="font-fredoka font-medium text-[22px] leading-none whitespace-nowrap shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
        animate={{ color: isHover ? '#F27378' : '#FF797E' }}
        transition={TRANS}
      >
        {children}
      </motion.span>

      {/* Arrow */}
      <span className="inline-flex items-center justify-center shrink-0 w-[24px] h-[24px]">
        <img
          src={ARROW_CORAL}
          alt=""
          aria-hidden="true"
          className="w-[7.5px] h-[15.8px]"
        />
      </span>
    </MotionTag>
  )
}



