import { images } from './data/mockData'
import Banner          from './components/Banner'
import RoleInfoCard    from './components/RoleInfoCard'
import WhatIDid        from './components/WhatIDid'
import DesignDirection from './components/DesignDirection'
import FinalUI         from './components/FinalUI'

/**
 * TostemPage — project case-study page for "Tostem Cooperate Website".
 *
 * Layout (top → bottom):
 *   1. Banner         — hero with background image + Navbar + title
 *   2. RoleInfoCard   — project metadata (Duration / Platform / Role)
 *   3. WhatIDid       — two-column: description + scrolling UI preview
 *   4. DesignDirection— three design explorations side-by-side
 *   5. FinalUI        — Phase I final screens gallery
 *
 * The "Union" decorative wave shape from Figma is rendered as an
 * absolutely-positioned, non-interactive background element that sits
 * behind the intro + challenge sections.
 */
export default function App() {
  return (
    <div className="bg-white relative overflow-x-hidden">
      {/* ── Decorative Union background shape ─────────────────── */}
      <img
        src={images.union}
        alt=""
        aria-hidden="true"
        className="
          absolute left-0 pointer-events-none select-none
          w-full max-w-[1442px]
        "
        style={{ top: 'clamp(220px, 23.5vw, 339px)', zIndex: 0 }}
        loading="lazy"
      />

      {/* ── Page content ────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col max-w-[1440px] mx-auto">
        {/* 1. Hero banner */}
        <Banner />

        {/* 2. Intro section */}
        <section aria-label="Project intro">
          <RoleInfoCard />
          <WhatIDid />
        </section>

        {/* 3. Design direction */}
        <DesignDirection />

        {/* 4. Phase I final UI */}
        <FinalUI />
      </div>
    </div>
  )
}
