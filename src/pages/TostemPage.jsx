/**
 * TostemPage — project case-study page for "Tostem Cooperate Website".
 * (Previously App.jsx)
 */
import { images } from '../data/mockData'
import HomeNavbar      from '../components/home/HomeNavbar'
import Banner          from '../components/Banner'
import RoleInfoCard    from '../components/RoleInfoCard'
import WhatIDid        from '../components/WhatIDid'
import DesignDirection from '../components/DesignDirection'
import FinalUI         from '../components/FinalUI'

export default function TostemPage() {
  return (
    <div className="bg-white relative overflow-x-hidden">
      {/* Shared floating pill nav */}
      <HomeNavbar />
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
