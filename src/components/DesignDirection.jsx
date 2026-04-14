import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../lib/animations'
import { images } from '../data/mockData'

const directions = [
  {
    src:        images.direction1,
    alt:        'Design direction 1 — Based on Brand CI',
    labelBold:  'Direction 1 - ',
    labelLight: 'Based on Brand CI\n(Modern, Lively, Sustainability)',
  },
  {
    src:        images.direction2,
    alt:        'Design direction 2 — Dark Mode',
    labelBold:  'Direction 2 - ',
    labelLight: 'Dark Mode\n(Modern, Creative, Product)',
  },
  {
    src:        images.direction3,
    alt:        'Design direction 3 — White Mode',
    labelBold:  'Direction 3 - ',
    labelLight: 'White Mode\n(Modern, Neat, Product)',
  },
]

export default function DesignDirection() {
  return (
    <section
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[190px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="design-direction-heading"
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
          id="design-direction-heading"
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
        {directions.map(({ src, alt, labelBold, labelLight }) => (
          <motion.div
            key={labelBold}
            variants={scaleIn}
            whileHover={{ y: -4 }}
            className="flex flex-col gap-[10px] w-full max-w-[630px] mx-auto lg:max-w-none"
          >
            <p
              className="font-fredoka font-medium text-[clamp(14px,_1.4vw,_20px)] leading-[1.3] text-[#001e7f] whitespace-pre-wrap w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <span className="font-medium">{labelBold}</span>
              <span className="font-normal">{labelLight}</span>
            </p>
            <div className="bg-white rounded-[8px] shadow-grey-card overflow-hidden">
              <img
                src={src}
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
