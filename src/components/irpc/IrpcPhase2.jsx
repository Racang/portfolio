import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations'
import { irpcImages, irpcPhase2 } from '../../data/irpcData'

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

export default function IrpcPhase2() {
  return (
    <section
      className="content-stretch flex flex-col gap-[44px] max-sm:gap-[28px] items-center px-[40px] max-sm:px-[24px] lg:px-[80px] py-[64px] max-sm:py-[30px] relative shrink-0 w-full z-10"
      aria-labelledby="irpc-phase2-heading"
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
          id="irpc-phase2-heading"
          className="font-fredoka font-semibold text-section-title w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Phase2 Content Template
        </h2>
        <p
          className="font-normal text-body max-sm:text-[18px] max-sm:leading-[1.4] w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Given the large amount of website content, we created reusable content templates to streamline the design process and reduce production time. These templates also served as guidelines, allowing the client to independently create new pages while maintaining design consistency.
        </p>
      </motion.div>

      {/* ── Two-up thumbnails + body text ───────────────── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-wrap max-sm:flex-col gap-[30px] items-center w-full"
      >
        {/* Thumbnail 1 */}
        <motion.div variants={scaleIn} className="flex-[1_0_0] max-sm:flex-none max-sm:w-full min-w-[260px] max-sm:min-w-0 aspect-video relative rounded-[16px] overflow-hidden shadow-grey-card">
          <img
            src={irpcImages.phase2Image1}
            alt="IRPC content template preview 1"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
        </motion.div>

        {/* Thumbnail 2 */}
        <motion.div variants={scaleIn} className="flex-[1_0_0] max-sm:flex-none max-sm:w-full min-w-[260px] max-sm:min-w-0 aspect-video relative rounded-[16px] overflow-hidden shadow-grey-card">
          <img
            src={irpcImages.phase2Image2}
            alt="IRPC content template preview 2"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
        </motion.div>

        {/* Body paragraphs */}
        <motion.div
          variants={fadeUp}
          className="flex-[1_0_0] min-w-[280px] flex flex-col gap-[16px] font-fredoka font-normal text-body max-sm:text-[18px] text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {irpcPhase2.bodyText.map((para, i) => (
            <p key={i} className="leading-[1.6]">{para}</p>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Final text ──────────────────────────────────────── */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-fredoka font-normal text-body max-sm:text-[18px] max-sm:leading-[1.4] text-grey-700 w-full leading-[1.6]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {irpcPhase2.finalText}
      </motion.p>

      {/* ── Full-width screens ────────────────────────────────── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-[40px] w-full"
      >
        <ScreenCard
          src={irpcImages.phase2StyleGuide}
          alt="IRPC UI Style Guide 2"
          aspectClass="aspect-[2/1]"
        />
        <ScreenCard
          src={irpcImages.phase2Home}
          alt="IRPC Home page 2"
          aspectClass="aspect-video"
        />
      </motion.div>
    </section>
  )
}
