import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'
import { irpcImages, irpcDirections, irpcDesignDirectionSubtitleParts } from '../../data/irpcData'

export default function IrpcDesignDirection() {
  return (
    <section
      className="content-stretch flex flex-col gap-[44px] max-sm:gap-[28px] items-center px-[40px] max-sm:px-[24px] lg:px-[80px] py-[64px] max-sm:py-[30px] relative shrink-0 w-full z-10"
      aria-labelledby="irpc-direction-heading"
    >
      {/* ── Header ────────────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[900px] text-center"
      >
        <h2
          id="irpc-direction-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Design Direction
        </h2>
        <p
          className="font-normal text-body max-sm:text-[18px] max-sm:leading-[1.4] w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {irpcDesignDirectionSubtitleParts.map(({ text, bold }, i) =>
            bold ? (
              <span key={i} className="font-medium text-grey-800">{text}</span>
            ) : (
              <span key={i}>{text}</span>
            )
          )}
        </p>
      </motion.div>

      {/* ── Colour palette overview strip ───────────────── */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative w-full aspect-[2500/831] rounded-[8px] shadow-grey-card overflow-hidden"
      >
        <img
          src={irpcImages.paletteImage}
          alt="IRPC design direction colour palette overview"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
      </motion.div>

      {/* ── Direction cards (3-column grid) ───────────────── */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-[40px] gap-y-[30px] w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {irpcDirections.map(({ imgKey, alt, labelBold, labelLight, hasBreak }) => (
          <motion.div
            key={imgKey}
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="flex flex-col gap-[10px] max-sm:gap-[8px] w-full max-w-[630px] mx-auto lg:max-w-none"
          >
            {/* Label — all reserved to 2 lines so images start at same position */}
            <p
              className="font-fredoka font-medium text-[clamp(14px,_1.4vw,_18px)] max-sm:text-[18px] leading-[1.3] text-[#001e7f] w-full min-h-[2.6em] max-[1420px]:min-h-[3.9em] max-sm:min-h-0"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <span className="font-medium">{labelBold}</span>
              {hasBreak && <br />}
              <span className="font-normal max-sm:text-[18px] max-sm:leading-[1.4]">{labelLight}</span>
            </p>
            {/* Image — fixed aspect ratio matches Figma equal-height intent */}
            <div className="bg-white rounded-[8px] shadow-grey-card overflow-hidden aspect-[399/1427]">
              <img
                src={irpcImages[imgKey]}
                alt={alt}
                className="w-full h-full object-cover object-top block"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
