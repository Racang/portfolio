/**
 * HomeNavbar — sticky glassmorphism floating pill navigation.
 *
 * Figma reference: Header / Tab  (node 40000150:29771)
 * - Centered, all items same pill width
 * - Active item shown in coral, others in grey-800
 * - Backdrop blur + white border + gradient background
 * - Active state driven by react-router-dom NavLink
 */
import { NavLink } from 'react-router-dom'
import { homeNavItems } from '../../data/homeData'

export default function HomeNavbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto flex gap-1 items-center p-3 rounded-pill border border-white shadow-glass-nav"
        style={{
          backdropFilter: 'blur(4.95px)',
          WebkitBackdropFilter: 'blur(4.95px)',
          background: 'linear-gradient(198.6deg, rgba(255,255,255,0.60) 2.68%, rgba(255,255,255,0.40) 95.42%)',
        }}
        aria-label="Main navigation"
      >
        {homeNavItems.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => [
              'flex items-center justify-center px-6 py-[14px] rounded-3xl',
              'font-fredoka font-medium text-[22px] leading-none whitespace-nowrap',
              'transition-colors duration-200',
              isActive ? 'text-coral' : 'text-grey-800 hover:text-coral/70',
            ].join(' ')}
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

