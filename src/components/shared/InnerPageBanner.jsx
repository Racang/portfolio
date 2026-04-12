/**
 * InnerPageBanner — shared hero banner for all non-Home pages.
 *
 * Figma reference: instance "Banner" (node 40000192:29450), w=1440 h=518
 * - Background: Inner_Banner_bg.png (warm off-white + pink wavy bottom edge)
 * - Title:  Fredoka 128px / weight 500 / line-height 100% / color grey-800
 * - Subtitle (optional): Fredoka 40px / weight 400 / grey-800 (e.g. "Cooperate website")
 * - Title block is vertically centered in the banner below the fixed nav
 * - Nav is NOT rendered here — parent page provides HomeNavbar above
 *
 * Usage:
 *   <InnerPageBanner title="About" />
 *   <InnerPageBanner title="Tostem" subtitle="Cooperate website" />
 */
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animations'

export default function InnerPageBanner({ title, subtitle }) {
  return (
    <section
      className="relative w-full z-20"
      aria-label={`${title} banner`}
    >
      {/* ── Background — natural height so bottom glow is never clipped ── */}
      <img
        src={`${import.meta.env.BASE_URL}images/Inner_Banner_bg.png`}
        alt=""
        aria-hidden="true"
        className="block w-full h-auto select-none pointer-events-none"
      />

      {/* ── Title block — absolute over the image, centred below fixed nav ── */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center"
        style={{ paddingTop: '170px' }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1
          className="font-fredoka font-medium text-grey-800 leading-none"
          style={{
            fontSize: 'clamp(56px, 8.9vw, 128px)',
            fontVariationSettings: "'wdth' 100",
            lineHeight: '100%',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="font-fredoka font-normal text-grey-800 leading-none mt-2"
            style={{
              fontSize: 'clamp(20px, 2.78vw, 40px)',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  )
}
