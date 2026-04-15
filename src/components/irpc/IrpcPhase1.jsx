import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'
import { irpcImages, irpcPhase1Screens } from '../../data/irpcData'

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

export default function IrpcPhase1() {
  return (
    <section
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[80px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="irpc-phase1-heading"
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
          id="irpc-phase1-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Phase1 - General UI Design
        </h2>
        <p
          className="font-normal text-body w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          The first phase focused on building the design system and finalizing key pages with unique layouts. This helped give the client a clear visual direction for the initial delivery.
        </p>
      </motion.div>

      {/* ── Screenshots ──────────────────────────────────── */}
      <motion.div
        className="flex flex-col gap-[40px] w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {irpcPhase1Screens.map(({ imgKey, alt, aspectClass }) => (
          <ScreenCard
            key={imgKey}
            src={irpcImages[imgKey]}
            alt={alt}
            aspectClass={aspectClass}
          />
        ))}
      </motion.div>
    </section>
  )
}
