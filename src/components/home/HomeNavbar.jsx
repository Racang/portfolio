/**
 * HomeNavbar — sticky glassmorphism floating pill navigation.
 *
 * Figma reference: Header / Tab  (node 40000150:29771)
 * - Desktop (lg+): centered horizontal pill, all items side-by-side
 * - Mobile/tablet (<lg): compact pill with hamburger toggle; tapping
 *   reveals a vertical dropdown with the same glass treatment
 * - Active state driven by react-router-dom NavLink
 */
import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { homeNavItems } from '../../data/homeData'

const glassStyle = {
  backdropFilter: 'blur(4.95px)',
  WebkitBackdropFilter: 'blur(4.95px)',
  background: 'linear-gradient(198.6deg, rgba(255,255,255,0.60) 2.68%, rgba(255,255,255,0.40) 95.42%)',
}

const desktopLinkClass = ({ isActive }) =>
  [
    'flex items-center justify-center px-6 py-[14px] rounded-3xl',
    'font-fredoka font-medium text-[22px] leading-none whitespace-nowrap',
    'transition-colors duration-200',
    isActive ? 'text-coral' : 'text-grey-800 hover:text-coral/70',
  ].join(' ')

const mobileLinkClass = ({ isActive }) =>
  [
    'flex items-center px-5 py-3 rounded-2xl w-full',
    'font-fredoka font-medium text-[20px] leading-none whitespace-nowrap',
    'transition-colors duration-200',
    isActive ? 'text-coral' : 'text-grey-800 hover:text-coral/70',
  ].join(' ')

function HamburgerIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <rect width="22" height="2.5" rx="1.25" fill="#3E446B" />
      <rect y="6.75" width="22" height="2.5" rx="1.25" fill="#3E446B" />
      <rect y="13.5" width="22" height="2.5" rx="1.25" fill="#3E446B" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 2L18 18M18 2L2 18" stroke="#3E446B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export default function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    function handlePointer(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointer)
    return () => document.removeEventListener('pointerdown', handlePointer)
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen])

  return (
    <div className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
      {/* Shared container — matches hero section padding */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 flex items-start justify-center">

        {/* ── Mobile / tablet: hamburger (< lg), anchored to left edge ── */}
        <div ref={navRef} className="pointer-events-auto lg:hidden mr-auto flex flex-col items-start">
          {/* Pill toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            className="flex items-center justify-center w-12 h-12 rounded-pill border border-white shadow-glass-nav focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-1"
            style={glassStyle}
          >
            <span className="flex items-center justify-center w-5 h-5">
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </span>
          </button>

          {/* Dropdown nav items */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                id="mobile-nav-menu"
                key="mobile-menu"
                initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                style={{ ...glassStyle, transformOrigin: 'top' }}
                className="mt-2 w-[200px] flex flex-col rounded-3xl border border-white shadow-glass-nav p-2"
                aria-label="Mobile navigation"
              >
                {homeNavItems.map(({ label, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    className={mobileLinkClass}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* ── Desktop: centered horizontal pill (lg+) ── */}
        <nav
          className="pointer-events-auto hidden lg:flex gap-1 items-center p-3 rounded-pill border border-white shadow-glass-nav"
          style={glassStyle}
          aria-label="Main navigation"
        >
          {homeNavItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={desktopLinkClass}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

      </div>
    </div>
  )
}

