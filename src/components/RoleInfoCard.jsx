import { images, projectInfo } from '../data/mockData'
import { genaImages } from '../data/genaData'

/**
 * Reusable stat column used inside the role card.
 */
function StatColumn({ label, children }) {
  return (
    <div className="flex flex-col gap-[12px] items-start relative min-w-[220px] max-[1279px]:min-w-0 max-[1279px]:w-full">
      <span
        className="font-fredoka font-medium text-[20px] leading-none text-cyan-accent"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </span>
      <div
        className="font-fredoka font-normal text-body text-grey-700"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * Role info card — matches GenaRoleSection card style.
 * Pill-shaped white card (rounded-[80px]) with shadow, centered, max-w-[1014px].
 */
export default function RoleInfoCard() {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip px-[40px] lg:px-[213px] py-[37px] relative shrink-0 w-full z-10"
      aria-label="Project information"
    >
      <div className="bg-white flex flex-wrap max-[1279px]:flex-col gap-[60px] max-[1279px]:gap-[40px] items-center justify-center px-[40px] py-[36px] relative rounded-[80px] shadow-grey-card shrink-0 max-w-[1014px] w-full">

        {/* Icon block — exact clone of GenaRoleSection */}
        <div className="flex gap-[10px] items-center relative shrink-0">
          <div className="absolute bg-[#ffe8e9] h-[93px] w-[99px] rounded-[18px] left-[-16.5px] top-[-15px]" />
          <div className="relative shrink-0 size-[65px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={genaImages.imgComputer21}
            />
          </div>
        </div>

        {/* Metadata columns */}
        <div className="content-start flex flex-wrap max-[1279px]:flex-col gap-[48px] max-[1279px]:gap-[24px] items-start relative shrink-0 max-[1279px]:w-full">
          <StatColumn label="Duration:">
            <p>{projectInfo.duration}</p>
            <p className="text-body-small text-grey-600 mt-1">{projectInfo.period}</p>
          </StatColumn>
          <StatColumn label="Platform">
            <p>{projectInfo.platform}</p>
          </StatColumn>
          <StatColumn label="Role">
            <p>{projectInfo.role}</p>
          </StatColumn>
        </div>
      </div>
    </div>
  )
}
