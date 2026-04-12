/**
 * HomePage — portfolio homepage assembling all sections.
 *
 * Sections (top → bottom):
 *   HomeNavbar       sticky floating pill nav
 *   HeroSection      above-the-fold with girl illustration
 *   AboutSection     pink wave + profile photo + intro text
 *   ProjectsSlider   horizontal project cards carousel
 *   ContactSection   Let's Connect with email & phone bubbles
 *   HomeFooter       minimal footer with email
 */
import HomeNavbar      from '../components/home/HomeNavbar'
import HeroSection     from '../components/home/HeroSection'
import AboutSection    from '../components/home/AboutSection'
import ProjectsSlider  from '../components/home/ProjectsSlider'
import ContactSection  from '../components/home/ContactSection'
import HomeFooter      from '../components/home/HomeFooter'

export default function HomePage() {
  return (
    <div className="bg-bg-warm relative overflow-x-hidden">
      {/* Fixed floating nav, always on top */}
      <HomeNavbar />

      <main>
        {/* 1. Hero — top padding to clear the fixed nav */}
        <HeroSection />

        {/* 2. About preview */}
        <AboutSection />

        {/* 3. Projects slider */}
        <ProjectsSlider />

        {/* 4. Contact */}
        <ContactSection />
      </main>

      {/* 5. Footer — overlaps Contact section bottom; sits 80px below the CTA button */}
      <div style={{ marginTop: 'calc(-1 * clamp(80px, 8.5vw, 123px))', position: 'relative', zIndex: 20 }}>
        <HomeFooter />
      </div>
    </div>
  )
}
