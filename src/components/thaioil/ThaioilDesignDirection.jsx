import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'
import { thaioilImages, thaioilDirections } from '../../data/thaioilData'

export default function ThaioilDesignDirection() {
  return (
    <section
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[190px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="thaioil-direction-heading"
    >
      {/* ── Header ────────────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px] text-center"
      >
        <h2
          id="thaioil-direction-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Design Direction
        </h2>
        <p
          className="font-normal text-body w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Based on the client's requirements, we translated the insights into the following design directions.
        </p>
      </motion.div>

      {/* ── Direction image grid ───────────────────────────── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] w-full"
      >
        {thaioilDirections.map(({ imgKey, alt, labelBold, labelLight }) => (
          <motion.div
            key={imgKey}
            variants={scaleIn}
            whileHover={{ y: -4 }}
            className="flex flex-col gap-[10px] w-full max-w-[630px] mx-auto lg:max-w-none"
          >
            <p
              className="font-fredoka font-medium text-[clamp(14px,_1.4vw,_18px)] leading-[1.3] text-[#001e7f] w-full min-h-[2.6em] max-[1420px]:min-h-[3.9em]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <span className="font-medium">{labelBold}</span>
              <span className="font-normal">{labelLight}</span>
            </p>
            <div className="bg-white rounded-[8px] shadow-grey-card overflow-hidden">
              <img
                src={thaioilImages[imgKey]}
                alt={alt}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
