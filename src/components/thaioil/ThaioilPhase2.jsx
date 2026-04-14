import { thaioilImages, thaioilPhase2Screens } from '../../data/thaioilData'

function ScreenCard({ src, alt, aspectClass = 'aspect-[2/1]' }) {
  return (
    <div className={`relative w-full rounded-[24px] overflow-hidden ${aspectClass}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  )
}

export default function ThaioilPhase2() {
  return (
    <section
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[80px] py-[64px] relative shrink-0 w-full z-10"
      aria-labelledby="thaioil-phase2-heading"
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-grey-800 w-full">
        <h2
          id="thaioil-phase2-heading"
          className="font-fredoka font-semibold text-section-title text-center w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Phase 2 Content Template
        </h2>
        <p
          className="font-normal text-body w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Due to the large amount of website content, we developed reusable content templates to improve design efficiency and reduce production time. These templates also acted as shared guidelines for both our team and the vendor, enabling collaborative UI design while maintaining consistency across the website.
        </p>
        <p
          className="font-normal text-body w-full text-grey-700"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          We began by reviewing all remaining pages of the website and attempted to group pages that could share the same layout for reuse. After that, I created sample page designs as template references, which were then handed off to the vendor to design the remaining screens while maintaining consistency.
        </p>
      </div>

      {/* ── Screenshots ────────────────────────────────────── */}
      <div className="flex flex-col gap-[40px] w-full">
        {thaioilPhase2Screens.map(({ imgKey, alt, aspectClass }) => (
          <ScreenCard
            key={imgKey}
            src={thaioilImages[imgKey]}
            alt={alt}
            aspectClass={aspectClass}
          />
        ))}
      </div>
    </section>
  )
}
