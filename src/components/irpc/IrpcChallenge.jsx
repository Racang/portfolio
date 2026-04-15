import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'
import { irpcImages, irpcChallenge } from '../../data/irpcData'

export default function IrpcChallenge() {
  return (
    <motion.section
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[190px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="irpc-challenge-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* ── Header ──────────────────────────────────────── */}
      <motion.div variants={fadeUp} className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px] text-center">
        <h2
          id="irpc-challenge-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Challenge
        </h2>
      </motion.div>

      {/* ── Single card ─────────────────────────────────────── */}
      <motion.div
        variants={scaleIn}
        className="bg-white flex gap-[20px] items-start p-[24px] rounded-[20px] shadow-grey-card w-full"
      >
        <img
          alt=""
          className="shrink-0 size-[50px] object-cover"
          src={irpcImages.challengeIcon}
        />
        <p
          className="font-normal text-body text-grey-700 w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {irpcChallenge.text}
        </p>
      </motion.div>
    </motion.section>
  )
}
