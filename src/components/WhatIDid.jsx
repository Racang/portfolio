import { images, whatIDidItems } from '../data/mockData'

/**
 * Renders a single bullet-point line.
 * Parts with highlight=true are rendered in cyan-accent colour.
 */
function BulletLine({ parts }) {
  return (
    <p
      className="leading-[1.9] font-fredoka font-normal text-[22px] text-grey-700"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      {'• '}
      {parts.map(({ text, highlight }, i) =>
        highlight ? (
          <span key={i} className="text-cyan-accent">
            {text}
          </span>
        ) : (
          <span key={i}>{text}</span>
        )
      )}
    </p>
  )
}

/**
 * "What I did" two-column section.
 * Left: heading + bullet list  |  Right: scrolling UI screenshot preview.
 * Stacks on mobile, side-by-side on lg+.
 */
export default function WhatIDid() {
  return (
    <section
      className="flex flex-wrap items-center gap-10 px-[clamp(16px,5.6vw,80px)] py-16"
      aria-labelledby="what-i-did-heading"
    >
      {/* ── Left: text content ─────────────────────────────── */}
      <div className="flex-1 min-w-[280px] lg:pr-10">
        <div className="flex flex-col gap-6 max-w-[500px]">
          <h2
            id="what-i-did-heading"
            className="font-fredoka font-semibold leading-none text-grey-800"
            style={{
              fontSize: 'clamp(36px, 4.2vw, 60px)',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            What I did
          </h2>

          <div>
            {whatIDidItems.map((item, i) => (
              <BulletLine key={i} parts={item.parts} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: cropped UI screenshot ───────────────────── */}
      {/*
        The container is a fixed-height viewport into the full-page screenshot.
        overflow-hidden clips the tall image to show only the top portion,
        replicating the Figma scroll preview effect (h ≈ 671px, img natural height ≈ 2090px).
      */}
      <div
        className="
          relative rounded-[12px] shadow-card-dark overflow-hidden shrink-0
          w-full sm:w-[585px]
          h-[360px] sm:h-[520px] lg:h-[671px]
        "
        aria-label="UI Homepage screenshot preview"
      >
        <img
          src={images.uiHomepage1}
          alt="Tostem website homepage UI"
          className="absolute top-0 left-0 w-full"
          style={{ height: 'auto', minHeight: '100%' }}
          loading="lazy"
        />
      </div>
    </section>
  )
}
