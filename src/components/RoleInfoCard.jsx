import { images, projectInfo } from '../data/mockData'

/**
 * Reusable stat column used inside the role card.
 */
function StatColumn({ label, children }) {
  return (
    <div className="flex flex-col gap-3 flex-1 min-w-[180px]">
      <span
        className="font-fredoka font-medium text-[22px] leading-none text-cyan-accent"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </span>
      <div
        className="font-fredoka font-normal text-[22px] leading-[1.4] text-grey-700"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * Role info card — white card with shadow showing project metadata.
 * Matches Figma: rounded-[20px], shadow-grey-card, px-10 py-9, flex-wrap.
 */
export default function RoleInfoCard() {
  return (
    <div
      className="px-[clamp(16px,14.8vw,213px)] py-[37px]"
      aria-label="Project information"
    >
      <div className="bg-white rounded-[20px] shadow-grey-card px-10 py-9 flex flex-wrap items-center gap-6">
        {/* Logo */}
        <img
          src={images.logo}
          alt="Tostem logo"
          className="w-[86px] h-[88px] object-contain shrink-0"
          loading="lazy"
        />

        {/* Duration */}
        <StatColumn label="Duration:">
          <p>{projectInfo.duration}</p>
          <p
            className="text-[16px] leading-[1.3] text-grey-600 mt-1"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {projectInfo.period}
          </p>
        </StatColumn>

        {/* Platform */}
        <StatColumn label="Platform">
          <p>{projectInfo.platform}</p>
        </StatColumn>

        {/* Role */}
        <StatColumn label="Role">
          <p>{projectInfo.role}</p>
        </StatColumn>
      </div>
    </div>
  )
}
