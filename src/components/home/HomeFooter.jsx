/**
 * HomeFooter — simple elegant footer with email link.
 *
 * Figma reference: Footer (node 40000260:3604)
 * - Wave Union shape background
 * - "I'd love to hear from you:  Rachaya.ang@gmail.com"
 * - Email is clickable (opens mail app)
 * - Pink shadow on top
 */
import { homeImages } from '../../data/homeData'

export default function HomeFooter() {
  return (
    <footer
      className="relative w-full overflow-hidden z-10"
      style={{
        height: 'clamp(80px, 8.5vw, 123px)',
        backgroundImage: `url(${homeImages.footerBg})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-label="Site footer"
    >

      {/* ── Email line — centered at 58.57% from top ────── */}
      <p
        className="absolute inset-x-0 text-center font-fredoka font-normal text-grey-700 tracking-[2px] whitespace-nowrap px-4"
        style={{
          top: '58.57%',
          transform: 'translateY(calc(-50% + 10px))',
          fontSize: 'clamp(14px, 1.94vw, 28px)',
          fontVariationSettings: "'wdth' 100",
        }}
      >
        I'd love to hear from you:{' '}
        <a
          href="mailto:Rachaya.ang@gmail.com"
          className="text-coral hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Rachaya.ang@gmail.com
        </a>
      </p>
    </footer>
  )
}
