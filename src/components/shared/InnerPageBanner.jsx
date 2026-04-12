/**
 * InnerPageBanner — shared hero banner for all non-Home pages.
 *
 * Figma reference: instance "Banner" (node 40000192:29450), w=1440 h=518
 * - Background: Banner_BG.png (warm off-white + pink wavy bottom edge)
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
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{ minHeight: 'clamp(320px, 36vw, 518px)' }}
      aria-label={`${title} banner`}
    >
      {/* ── Background ──────────────────────────────────────── */}
      <img
        src={`${import.meta.env.BASE_URL}images/Banner_BG.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
      />

      {/* ── Title block — centred below the fixed nav ────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center flex-1 text-center"
        style={{
          paddingTop:    'clamp(80px, 11.8vw, 170px)',
          paddingBottom: 'clamp(32px, 4vw, 58px)',
        }}
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
