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

        {/* 3. Timeline — scroll-driven "My Experience / Since 2019" */}
        <CareerTimeline />
      </main>

      {/* 4. Footer */}
      <HomeFooter />
    </div>
  )
}
