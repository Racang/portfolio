import { navItems } from '../data/mockData'

/**
 * Glassmorphism pill-shaped navigation bar.
 * Matches Figma: backdrop-blur, gradient bg, 1px white border, rounded-pill.
 */
export default function Navbar() {
  return (
    <div className="flex items-center justify-center pt-6 relative z-10 w-full">
      <nav
        aria-label="Main navigation"
        className="
          flex items-center gap-[19px] p-3
          rounded-pill border border-white
          backdrop-blur-[5px]
          shadow-glass-nav
        "
        style={{
          background:
            'linear-gradient(198.6deg, rgba(255,255,255,0.4) 2.68%, rgba(255,255,255,0.1) 95.42%)',
        }}
      >
        {navItems.map(({ label, active }) => (
          <button
            key={label}
            className={`
              flex items-center justify-center px-6 py-[14px] rounded-3xl
              font-fredoka font-medium text-[22px] leading-none whitespace-nowrap
              transition-colors duration-200 hover:text-coral focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-1
              ${active ? 'text-coral' : 'text-grey-800'}
            `}
            style={{ fontVariationSettings: "'wdth' 100" }}
            aria-current={active ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}
