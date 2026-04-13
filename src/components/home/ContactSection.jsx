/**
 * ContactSection — "Let's Connect" section.
 *
 * Figma reference: node 40000190:29273 (contact section, y:2339)
 * Layout:
 *   - Decorative wave background (Group 1321314646 SVG)
 *   - "Let's Connect" heading
 *   - Email bubble card (left) + character illustration (centre) + phone bubble card (right)
 *   - "Contact Us" CTA button
 */
import { motion } from 'framer-motion'
import { homeImages } from '../../data/homeData'
import Button from '../ui/Button'
import { fadeUp, scaleIn, staggerContainer, floatY, viewportOnce } from '../../lib/animations'

function ContactCard({ icon, label, value, href }) {
  return (
    <motion.a
      href={href}
      variants={scaleIn}
      className="relative flex flex-col items-center gap-3 w-[350px] max-w-full group"
      whileHover={{ scale: 1.03 }}
    >
      {/* Bubble wrapper SVG */}
      <div className="relative w-[411px] max-w-full h-[237px] flex items-center justify-center">
        <img
          src={homeImages.bubbleShape}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-fill"
        />

        <div className="relative z-10 flex flex-col items-center gap-3 px-8 text-centre">
          {/* Icon circle */}
          <div className="relative inline-grid place-items-start">
            <div className="col-start-1 row-start-1 w-[70px] h-[70px]">
              <img src={homeImages.bubbleCircle} alt="" aria-hidden="true" className="w-full h-full" />
            </div>
            <div className="col-start-1 row-start-1 ml-[12px] mt-[9px] w-[46px] h-[46px]">
              <img src={icon} alt="" aria-hidden="true" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Label + value */}
          <div className="flex flex-col items-center gap-2 text-centre text-grey-800">
            <p
              className="font-fredoka font-normal leading-[1.4] text-center"
              style={{ fontSize: 'clamp(16px, 1.7vw, 24px)', fontVariationSettings: "'wdth' 100" }}
            >
              {label}
            </p>
            <p
              className="font-fredoka font-medium leading-[1.2] text-center group-hover:text-coral transition-colors"
              style={{ fontSize: 'clamp(16px, 1.9vw, 28px)', fontVariationSettings: "'wdth' 100" }}
            >
              {value}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-x-hidden z-10"
      aria-label="Contact"
    >
      {/* ── Background image — natural aspect ratio (2884×1808), full width ── */}
      <img
        src={homeImages.contactBg}
        alt=""
        aria-hidden="true"
        className="w-full h-auto block pointer-events-none select-none"
      />

      {/* ── Main content — overlaid on the background ────────── */}
      <motion.div
        className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-8 lg:px-20 flex flex-col items-center"
        style={{
          paddingTop:    'clamp(80px, 8.4vw, 150px)',
          paddingBottom: '80px',
        }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="font-fredoka font-semibold text-grey-800 text-center mb-10 text-section-title"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Let's Connect
        </motion.h2>

        {/* Cards row + centre character */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center justify-between gap-6 w-full mb-12"
        >
          {/* Email card */}
          <ContactCard
            icon={homeImages.emailIcon}
            label="Email me"
            value="rachaya.ang@gmail.com"
            href="mailto:rachaya.ang@gmail.com"
          />

          {/* Centre character illustration */}
          <motion.div
            variants={scaleIn}
            className="relative w-[300px] h-[300px] shrink-0 hidden md:block"
          >
            {/* Left decoration — anchored to girl container */}
            <motion.div
              className="absolute -left-14 bottom-16 w-[82px] pointer-events-none select-none z-10"
              variants={floatY}
              animate="animate"
            >
              <img src={homeImages.contactDecor2} alt="" aria-hidden="true" className="w-full h-auto" />
            </motion.div>

            {/* Right decoration — anchored to girl container */}
            <motion.div
              className="absolute -right-14 top-16 w-[88px] pointer-events-none select-none z-10"
              variants={floatY}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <img src={homeImages.contactDecor1} alt="" aria-hidden="true" className="w-full h-auto" />
            </motion.div>

            <div className="w-full h-full overflow-hidden">
              <img
                src={homeImages.contactChar}
                alt="Contact illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Phone card */}
          <ContactCard
            icon={homeImages.phoneIcon}
            label="Call me"
            value="+66955892108"
            href="tel:+66955892108"
          />
        </motion.div>

        {/* CTA button */}
        <motion.div variants={fadeUp}>
          <Button href="mailto:rachaya.ang@gmail.com" variant="filled">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
