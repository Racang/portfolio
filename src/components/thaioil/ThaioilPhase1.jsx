import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'
import { thaioilImages, thaioilPhase1Screens } from '../../data/thaioilData'

function ScreenCard({ src, alt, aspectClass = 'aspect-video' }) {
  return (
    <motion.div
      variants={scaleIn}
      className={`relative w-full rounded-[24px] overflow-hidden ${aspectClass}`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />
    </motion.div>
  )
}

export default function ThaioilPhase1() {
  return (
    <section
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[80px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="thaioil-phase1-heading"
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px] text-center"
      >
        <h2
          id="thaioil-phase1-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Phase1 - General UI Design
        </h2>
        <p
          className="font-normal text-body w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          After the client selected Direction 3, they requested a more dynamic visual direction, along with a brighter color palette adapted from the brand CI. Based on this direction, we established the design system and began designing selected UI sections to help the client visualize the overall design approach.
        </p>
      </motion.div>

      {/* ── Screenshots ────────────────────────────────────── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-[40px] w-full"
      >
        {thaioilPhase1Screens.map(({ imgKey, alt, aspectClass }) => (
          <ScreenCard
            key={imgKey}
            src={thaioilImages[imgKey]}
            alt={alt}
            aspectClass={aspectClass}
          />
        ))}
      </motion.div>
    </section>
  )
}
