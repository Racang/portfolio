import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/animations'
import { irpcImages, irpcInfo } from '../../data/irpcData'

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
        className="font-fredoka font-normal text-body max-sm:text-[20px] max-sm:leading-[1.6] text-grey-700"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {children}
      </div>
    </div>
  )
}

export default function IrpcRoleInfoCard() {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip px-[40px] max-sm:px-[24px] lg:px-[213px] py-[37px] max-sm:pt-[48px] max-sm:pb-[30px] relative shrink-0 w-full z-10"
      aria-label="Project information"
    >
      <motion.div
        className="bg-white flex flex-wrap max-[1279px]:flex-col gap-[60px] max-[1279px]:gap-[40px] items-center justify-center px-[40px] max-sm:px-[24px] py-[36px] max-sm:py-[24px] relative rounded-[80px] max-sm:rounded-[24px] shadow-grey-card shrink-0 max-w-[1014px] w-full"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >

        {/* Icon block */}
        <div className="flex gap-[10px] items-center relative shrink-0">
          <div className="absolute bg-[#ffe8e9] h-[93px] w-[99px] rounded-[18px] left-[-16.5px] top-[-15px]" />
          <div className="relative shrink-0 size-[65px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={irpcImages.computerIcon}
            />
          </div>
        </div>

        {/* Metadata columns */}
        <div className="content-start flex flex-wrap max-[1279px]:flex-col gap-[48px] max-[1279px]:gap-[24px] max-sm:gap-[16px] items-start relative shrink-0 max-[1279px]:w-full">
          <StatColumn label="Duration:">
            <p>{irpcInfo.duration}</p>
            <p className="text-[16px] max-sm:text-[18px] leading-[1.3] text-[#6e7390]">{irpcInfo.period}</p>
          </StatColumn>
          <StatColumn label="Platform">
            <p>{irpcInfo.platform}</p>
          </StatColumn>
          <StatColumn label="Role">
            <p>{irpcInfo.role}</p>
            <p className="text-[16px] max-sm:text-[18px] leading-[1.3] text-[#6e7390]">{irpcInfo.roleNote}</p>
          </StatColumn>
        </div>
      </motion.div>
    </div>
  )
}
