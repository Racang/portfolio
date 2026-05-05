import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../../lib/animations'
import { irpcImages, irpcProposal } from '../../data/irpcData'

export default function IrpcProposalDirection() {
  return (
    <motion.section
      className="content-center flex flex-wrap max-lg:flex-col gap-[40px] max-sm:gap-[24px] items-center max-lg:items-start px-[40px] max-sm:px-[24px] lg:px-[80px] py-[64px] max-sm:py-[30px] relative shrink-0 w-full z-10"
      aria-labelledby="irpc-proposal-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* Mobile-only title — sits above image on phones */}
      <h2
        className="hidden max-sm:block max-sm:order-1 font-fredoka font-semibold text-section-title text-grey-800 w-full text-center"
        style={{ fontVariationSettings: "'wdth' 100" }}
        aria-hidden="true"
      >
        Proposal design direction
      </h2>

      {/* ── Left: UI screenshot ────────────────────────────── */}
      <motion.div variants={fadeLeft} className="flex-[1_0_0] max-lg:flex-none max-lg:w-full max-lg:max-w-[620px] max-sm:max-w-none max-sm:order-2 relative aspect-[620/711] rounded-[12px] shadow-card-dark overflow-hidden">
        <img
          src={irpcImages.proposalImage}
          alt="IRPC proposed design direction UI"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          loading="lazy"
        />
      </motion.div>

      {/* ── Right: text ──────────────────────────────────────── */}
      <motion.div variants={fadeRight} className="flex-[1_0_0] max-lg:flex-none max-lg:w-full max-sm:order-3 flex flex-col gap-[24px] items-start relative">
        <h2
          id="irpc-proposal-heading"
          className="font-fredoka font-semibold text-section-title text-grey-800 w-full max-sm:hidden"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Proposal design direction
        </h2>

        <div
          className="flex flex-col gap-[16px] items-start font-fredoka font-normal text-body max-sm:text-[18px] text-grey-700 w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[1.6]">{irpcProposal.intro}</p>

          <div className="flex flex-col gap-[16px] w-full">
            {irpcProposal.directions.map(({ title, desc }, i) => (
              <div key={i}>
                <p
                  className="font-fredoka font-medium text-[28px] max-sm:text-[20px] leading-[1.4] max-sm:leading-none text-grey-800"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {title}
                </p>
                <p className="leading-[1.6] text-body max-sm:text-[18px] max-sm:leading-[1.4] text-grey-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
