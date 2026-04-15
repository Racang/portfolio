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

function ContactCard({ icon, label, value, href, className: extraClass = '' }) {
  return (
    <motion.a
      href={href}
      variants={scaleIn}
      className={`relative flex flex-col items-center gap-3 w-full max-w-[350px] group ${extraClass}`.trim()}
      whileHover={{ scale: 1.03 }}
    >
      {/* Bubble wrapper SVG */}
      <div className="relative w-full max-w-[411px] h-auto aspect-[411/237] flex items-center justify-center">
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
      className="relative w-full z-10"
      aria-label="Contact"
    >
      {/* ── Desktop background — two independent layers ── */}
      {/* Layer 1: wave curve (1442×190 viewBox) — proportional, never stretched */}
      <div
        className="hidden md:block absolute top-0 inset-x-0 pointer-events-none select-none z-[1]"
        style={{ height: 'calc(100vw * 190 / 1442)' }}
        aria-hidden="true"
      >
        <svg className="w-full h-full block" viewBox="0 0 1442 190" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M326.633 50.7966C194.575 89.5141 53.8534 82.5622 0 74.2466V190H1442V22.3571C1311.14 103.372 1184.19 98.2164 1083.26 92.7576C1064.22 91.728 1046.11 90.6877 1029.07 90.2126C1017.56 89.8918 1004.77 88.599 990.936 86.5498C892.301 71.9378 740.733 18.8644 624.666 5.43721C572.084 -3.10052 526.158 0.291903 509.768 3.05533C475.408 7.51094 429.867 20.5298 326.633 50.7966Z" fill="#F8E9E6"/>
        </svg>
      </div>
      {/* Layer 2: solid pink fill — covers from wave bottom to section bottom */}
      <div
        className="hidden md:block absolute inset-x-0 bottom-0 pointer-events-none select-none z-0 bg-[#F8E9E6]"
        style={{ top: 'calc(100vw * 190 / 1442 - 2px)' }}
        aria-hidden="true"
      />

      {/* ── Mobile: wave transition + solid pink bg ── */}
      <div
        className="md:hidden absolute top-0 inset-x-0 pointer-events-none select-none z-0"
        aria-hidden="true"
        style={{ height: '67px' }}
      >
        <img
          src={homeImages.contactMobileWave}
          alt=""
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
      </div>
      <div
        className="md:hidden absolute inset-x-0 bottom-0 pointer-events-none select-none z-0"
        aria-hidden="true"
        style={{ top: '60px', backgroundColor: '#F8E9E6' }}
      />

      {/* ── Main content — in normal flow, drives section height ────────── */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-20 flex flex-col items-center"
        style={{
          paddingTop:    'clamp(40px, 8.4vw, 150px)',
          paddingBottom: 'clamp(120px, 12vw, 160px)',
        }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Mobile top spacer — accounts for the 67px wave above content area */}
        <div className="md:hidden h-[27px] shrink-0" aria-hidden="true" />

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="font-fredoka font-semibold text-grey-800 text-center mb-[68px] md:mb-10 text-section-title"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Let's Connect
        </motion.h2>

        {/* Cards row + centre character */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 w-full mb-6 md:mb-12"
        >
          {/* Email card */}
          <ContactCard
            icon={homeImages.emailIcon}
            label="Email me"
            value="rachaya.ang@gmail.com"
            href="mailto:rachaya.ang@gmail.com"
            className="order-2 md:order-1"
          />

          {/* Centre character illustration (desktop: between cards; mobile: below both cards) */}
          <motion.div
            variants={scaleIn}
            className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px] shrink-0 order-3 md:order-2"
          >
            {/* Left decoration — desktop only */}
            <motion.div
              className="absolute -left-14 bottom-16 w-[82px] pointer-events-none select-none z-10 hidden md:block"
              variants={floatY}
              animate="animate"
            >
              <img src={homeImages.contactDecor2} alt="" aria-hidden="true" className="w-full h-auto" />
            </motion.div>

            {/* Right decoration — desktop only */}
            <motion.div
              className="absolute -right-14 top-16 w-[88px] pointer-events-none select-none z-10 hidden md:block"
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
            className="order-1 md:order-3"
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
