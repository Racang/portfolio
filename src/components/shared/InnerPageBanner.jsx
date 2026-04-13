/**
 * InnerPageBanner — shared hero banner for all non-Home pages.
 *
 * Figma reference: instance "Banner" (node 40000192:29450), w=1440 h=518
 * - Background: Inner_Banner_bg.png (warm off-white + pink wavy bottom edge)
 * - Title:  Fredoka 128px / weight 500 / line-height 100% / color grey-800
 * - Subtitle (optional): Fredoka 40px / weight 400 / grey-800 (e.g. "Cooperate website")
 * - Title block is vertically centered in the banner below the fixed nav
 * - Nav is NOT rendered here — parent page provides HomeNavbar above
 *
 * Usage:
 *   <InnerPageBanner title="About" />
 *   <InnerPageBanner title="Tostem" subtitle="Cooperate website" />
 */
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animations'

export default function InnerPageBanner({ title, subtitle }) {
  return (
    <section
      className="relative w-full z-20 flex flex-col"
      aria-label={`${title} banner`}
    >
      <div 
        className="w-full h-[431px] max-[425px]:h-[296px] pt-[98px] max-[425px]:pt-0 bg-[#F7F3F3] flex flex-col items-center justify-center text-center z-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <h1
            className="font-fredoka font-medium text-grey-800 leading-none"
            style={{
              fontSize: 'clamp(56px, 8.9vw, 128px)',
              fontVariationSettings: "'wdth' 100",
              lineHeight: '100%',
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="font-fredoka font-normal text-grey-800 leading-none mt-[8px]"
              style={{
                fontSize: 'clamp(20px, 2.78vw, 40px)',
                fontVariationSettings: "'wdth' 100",
              }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* ── Banner_bg_curve attached directly underneath ── */}
      <div className="w-full relative z-0 -mt-[1px]">
        <svg
          className="w-full h-auto block"
          viewBox="20 451 1442 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <g filter="url(#filter0_d_inner_curve)">
            <path
              d="M214.607 503.905C138.871 458.838 56.7815 477.344 20 491.495V451H1462V499.333C1409.44 533.296 1329.09 513.484 1295.48 499.333C1265.72 482.133 1191.05 455.18 1130.47 484.964C1054.73 522.193 1045.2 518.927 1008.59 518.927C971.971 518.927 904.761 485.617 856.611 473.207C796.423 468.635 745.263 495.414 709.652 509.13C680.227 516.75 609.74 524.675 563.195 495.414C516.65 466.153 449.841 469.288 417.741 477.779C371.597 496.72 286.331 535.909 214.607 503.905Z"
              fill="#F7F3F3"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_inner_curve"
              x="-20"
              y="430"
              width="1500"
              height="180"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.47451 0 0 0 0 0.494118 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_inner_curve" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_inner_curve" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  )
}
