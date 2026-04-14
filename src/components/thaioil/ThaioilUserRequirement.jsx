import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../../lib/animations'
import { thaioilImages } from '../../data/thaioilData'

export default function ThaioilUserRequirement() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="content-center flex flex-wrap max-lg:flex-col gap-[40px] items-center max-lg:items-start px-[40px] lg:px-[80px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="thaioil-requirement-heading"
    >
      {/* ── Left: illustration ─────────────────────────────── */}
      <motion.div variants={fadeLeft} className="flex-[1_0_0] max-lg:flex-none max-lg:w-full max-lg:max-w-[500px] relative aspect-[2129/1978] overflow-hidden">
        <img
          src={thaioilImages.requirementIllustration}
          alt="User requirement illustration"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
      </motion.div>

      {/* ── Right: text ────────────────────────────────── */}
      <motion.div variants={fadeRight} className="flex-[1_0_0] max-lg:flex-none max-lg:w-full flex flex-col gap-[36px] items-start relative">
        <h2
          id="thaioil-requirement-heading"
          className="font-fredoka font-semibold text-section-title text-grey-800 w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          User requirement
        </h2>

        <div
          className="flex flex-col gap-[24px] items-start font-fredoka font-normal text-body text-grey-700 w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {/* Client presentation goals */}
          <div className="w-full">
            <p className="font-medium text-body text-grey-800 mb-0">
              The client wanted the website to present :
            </p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Dynamic Innovative Professional</li>
              <li>Professional Sustainable image using photo-based</li>
            </ul>
          </div>

          {/* Target personas */}
          <div className="w-full">
            <p className="font-medium text-body text-grey-800 mb-0">
              Target Personas :
            </p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Younger generations</li>
              <li>Investors</li>
              <li>Job seekers</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
