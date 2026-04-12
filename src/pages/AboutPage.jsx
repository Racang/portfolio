/**
 * AboutPage — portfolio About page.
 *
 * Sections (top → bottom):
 *   HomeNavbar          sticky floating pill nav (About link auto-activates)
 *   AboutHero           "About" centered title, warm bg
 *   AboutProfile        real profile photo + "More about myself" bio, pink wave bg
 *   ExperienceTimeline  "My Experience / Since 2019" with alternating timeline
 *   HomeFooter          "I'd love to hear from you: Rachaya.ang@gmail.com"
 */
import HomeNavbar          from '../components/home/HomeNavbar'
import HomeFooter          from '../components/home/HomeFooter'
import AboutHero           from '../components/about/AboutHero'
import AboutProfile        from '../components/about/AboutProfile'
import ExperienceTimeline  from '../components/about/ExperienceTimeline'

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

        {/* 3. Timeline — "My Experience / Since 2019" */}
        <ExperienceTimeline />
      </main>

      {/* 4. Footer */}
      <HomeFooter />
    </div>
  )
}
