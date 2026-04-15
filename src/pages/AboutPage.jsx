/**
 * AboutPage — portfolio About page.
 *
 * Sections (top → bottom):
 *   HomeNavbar      sticky floating pill nav (About link auto-activates)
 *   AboutHero       "About" centered title, warm bg
 *   AboutProfile    real profile photo + "More about myself" bio, pink wave bg
 *   CareerTimeline  scroll-driven storytelling timeline — "My Experience / Since 2019"
 *   HomeFooter      "I'd love to hear from you: Rachaya.ang@gmail.com"
 */
import HomeNavbar      from '../components/home/HomeNavbar'
import HomeFooter      from '../components/home/HomeFooter'
import AboutHero       from '../components/about/AboutHero'
import AboutProfile    from '../components/about/AboutProfile'
import CareerTimeline  from '../components/about/CareerTimeline'

export default function AboutPage() {
  return (
    <div className="bg-bg-warm relative overflow-x-hidden">
      {/* Fixed floating nav — "About" NavLink auto-highlights at /about */}
      <HomeNavbar />

      <main>
        {/* 1. Hero — centered "About" title */}
        <AboutHero />

        {/* 2. Profile — "More about myself" + real photo */}
        <AboutProfile />

        {/* Decorative wave — cream (#FEFCF1) waves into warm bg (#F7F3F3), mirrors Gena pattern */}
        <div className="w-full relative shrink-0 bg-[#F7F3F3] -mt-px" aria-hidden="true">
          <svg className="w-full h-auto block" viewBox="0 0 1440 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 37.5629C1192.43 160.809 886.963 66.6697 861.505 65.7594C836.049 64.8498 592.971 -34.2932 402.302 37.5629C249.766 95.0477 70.5442 90.6211 0 81.2222V0H1440V37.5629Z" fill="#FEFCF1"/>
          </svg>
        </div>

        {/* 3. Timeline — scroll-driven "My Experience / Since 2019" */}
        <CareerTimeline />
      </main>

      {/* 4. Footer */}
      <HomeFooter />
    </div>
  )
}
