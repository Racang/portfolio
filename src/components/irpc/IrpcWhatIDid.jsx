import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../../lib/animations'
import { irpcImages, irpcWhatIDid } from '../../data/irpcData'

function BulletLine({ parts }) {
  return (
    <p
      className="mb-2 text-body font-fredoka font-normal text-grey-700 max-sm:text-[18px] max-sm:leading-[1.9]"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      <span className="leading-[1.9]">{'· '}</span>
      {parts.map(({ text, highlight }, i) =>
        highlight ? (
          <span key={i} className="font-normal leading-[1.9] text-cyan-accent">{text}</span>
        ) : (
          <span key={i} className="leading-[1.9]">{text}</span>
        )
      )}
    </p>
  )
}

export default function IrpcWhatIDid() {
  return (
    <motion.section
      className="content-center flex flex-wrap max-lg:flex-col gap-[40px] max-sm:gap-[32px] items-center max-lg:items-start px-[40px] max-sm:px-[24px] lg:px-[80px] py-[64px] max-sm:pt-[30px] max-sm:pb-[48px] relative shrink-0 w-full z-10"
      aria-labelledby="irpc-what-i-did-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* ── Left: text ─────────────────────────────────────── */}
      <motion.div variants={fadeLeft} className="content-stretch flex flex-[1_0_0] max-lg:flex-none max-lg:w-full flex-col gap-[56px] items-start pr-[40px] max-lg:pr-0 relative">
        <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[500px] relative shrink-0 w-full">
          <h2
            id="irpc-what-i-did-heading"
            className="font-fredoka font-semibold text-section-title relative shrink-0 text-grey-800 w-full max-sm:text-center"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            What I did
          </h2>
          <div className="font-normal relative shrink-0 text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {irpcWhatIDid.map((item, i) => (
              <BulletLine key={i} parts={item.parts} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Right: UI screenshot ────────────────────────────── */}
      <motion.div
        variants={fadeRight}
        className="flex-[1_0_0] max-lg:flex-none max-lg:w-full max-lg:max-w-[585px] max-sm:max-w-none relative aspect-[585/671] max-sm:aspect-[327/376] rounded-[24px] max-sm:rounded-[12px] shadow-card-dark overflow-hidden"
        aria-label="IRPC homepage UI screenshot"
      >
        <img
          src={irpcImages.uiHomepage}
          alt="IRPC website homepage UI"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  )
}
