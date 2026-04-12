/**
 * ContactPage — portfolio Contact page.
 *
 * Figma reference: node 40000260:3653 "UI: Contact"
 * Sections (top → bottom):
 *   HomeNavbar       sticky floating pill nav (Contact link auto-activates)
 *   InnerPageBanner  "Contact" centred title, warm bg + wave edge
 *   ConnectSection   "Let's Connect" + three contact cards (Email / Call / Address)
 *   HomeFooter       "I'd love to hear from you: Rachaya.ang@gmail.com"
 */
import HomeNavbar       from '../components/home/HomeNavbar'
import HomeFooter       from '../components/home/HomeFooter'
import InnerPageBanner  from '../components/shared/InnerPageBanner'
import ConnectSection   from '../components/contact/ConnectSection'

export default function ContactPage() {
  return (
    <div className="bg-bg-warm relative overflow-x-hidden">
      {/* Fixed floating nav — "Contact" NavLink auto-highlights at /contact */}
      <HomeNavbar />

      <main>
        {/* 1. Banner — centred "Contact" title */}
        <InnerPageBanner title="Contact" />

        {/* 2. Connect — three contact cards on pastel wave */}
        <ConnectSection />
      </main>

      {/* 3. Footer */}
      <HomeFooter />
    </div>
  )
}
