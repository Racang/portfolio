import { images, whatIDidItems } from '../data/mockData'

/**
 * Renders a single bullet-point line.
 * Parts with highlight=true are rendered in cyan-accent colour.
 */
function BulletLine({ parts }) {
  return (
    <p
      className="mb-2 text-body font-fredoka font-normal text-grey-700"
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

/**
 * "What I did" two-column section.
 * Matches GenaWhatIDid layout: flex-wrap, flex-[1_0_0], responsive stacking.
 */
export default function WhatIDid() {
  return (
    <section
      className="content-center flex flex-wrap gap-[40px] items-center px-[40px] lg:px-[80px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="what-i-did-heading"
    >
      {/* ── Left: text content ─────────────────────────────── */}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start pr-[40px] relative min-w-[280px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[500px] relative shrink-0 w-full">
          <h2
            id="what-i-did-heading"
            className="font-fredoka font-semibold text-section-title relative shrink-0 text-grey-800 w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            What I did
          </h2>
          <div className="font-normal relative shrink-0 text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {whatIDidItems.map((item, i) => (
              <BulletLine key={i} parts={item.parts} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: cropped UI screenshot ───────────────────── */}
      {/* Mobile: natural h-auto; Desktop: fixed-height crop showing top of page */}
      <div
        className="relative rounded-[24px] shadow-card-dark overflow-hidden w-full max-w-[625px] h-auto lg:h-[671px]"
        aria-label="UI Homepage screenshot preview"
      >
        <img
          src={images.uiHomepage1}
          alt="Tostem website homepage UI"
          className="w-full h-auto block lg:absolute lg:top-0 lg:left-0"
          loading="lazy"
        />
      </div>
    </section>
  )
}
