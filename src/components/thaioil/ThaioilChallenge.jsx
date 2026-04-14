import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'
import { thaioilImages, thaioilChallenges } from '../../data/thaioilData'

export default function ThaioilChallenge() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[190px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="thaioil-challenge-heading"
    >
      {/* ── Header ────────────────────────────────────────── */}
      <motion.div variants={fadeUp} className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px] text-center">
        <h2
          id="thaioil-challenge-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Challenge
        </h2>
      </motion.div>

      {/* ── Cards ───────────────────────────────────────── */}
      <div className="content-start flex flex-wrap gap-[30px] items-stretch justify-center relative shrink-0 w-full">
        {thaioilChallenges.map(({ iconKey, text }) => (
          <motion.div
            key={iconKey}
            variants={scaleIn}
            whileHover={{ y: -4 }}
            className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card"
          >
            <img
              alt=""
              className="shrink-0 size-[50px] object-cover"
              src={thaioilImages[iconKey]}
            />
            <p
              className="font-normal text-body text-grey-700 w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
