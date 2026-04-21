import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewportOnce } from '../../lib/animations';
import { genaImages } from '../../data/genaData';

export default function GenaBackground() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="content-center flex flex-wrap max-lg:flex-col gap-[40px] items-center max-lg:items-start p-[40px] lg:px-[80px] lg:pb-[80px] lg:pt-[120px] relative shrink-0 w-full z-10"
    >
      {/* Hero image — framed card */}
      <motion.div variants={fadeLeft} className="content-stretch flex flex-[1_0_0] max-lg:flex-none max-lg:w-full max-lg:max-w-[630px] max-lg:min-w-0 max-lg:min-h-0 flex-col items-start max-h-[456.94px] max-w-[625px] min-h-[292.44px] min-w-[400px] pr-[40px] max-lg:pr-0 relative max-lg:order-2">
        <div className="bg-white border border-[#E7E8ED] flex flex-col items-start p-[16px] relative rounded-[48px] shadow-grey-card shrink-0 w-full">
          <div className="overflow-clip relative rounded-[40px] w-full">
            <img alt="GENA AI workspace interface" className="block w-full object-cover pointer-events-none rounded-[40px]" src={genaImages.imgPG05} />
            <div className="absolute inset-0 pointer-events-none rounded-[40px] shadow-[inset_0px_-3px_24px_0px_rgba(24,74,234,0.09)]" />
          </div>
        </div>
      </motion.div>

      {/* Text content */}
      <motion.div variants={fadeRight} className="content-stretch flex flex-[1_0_0] max-lg:flex-none max-lg:w-full max-lg:min-w-0 flex-col gap-[24px] items-start min-h-px min-w-[500px] relative max-lg:order-1">
        <h2 className="font-fredoka font-semibold text-section-title relative shrink-0 text-grey-800 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Background
        </h2>
        <p className="font-normal text-body relative shrink-0 text-grey-400 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          GENA (Generative AI for Enterprise Assistant) is a B2B (Business-to-Business) enterprise AI platform designed to help organizations integrate generative AI into their workflows in a secure and scalable way. The platform enables teams to create and manage AI assistants, connect with internal tools and data, and streamline various business processes through a centralized system.
        </p>
      </motion.div>

      {/* GENA Interface Showcase */}
      <motion.div variants={fadeUp} className="content-stretch flex flex-col gap-[48px] items-center pt-[20px] relative shrink-0 w-full">
        <h3 className="font-fredoka font-medium text-[32px] leading-[1.2] relative shrink-0 text-grey-800 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          GENA Interface Showcase
        </h3>
        <div className="content-start flex flex-wrap gap-[24px] lg:gap-[30px_40px] items-start justify-center relative shrink-0 w-full">
          {/* Column 1 */}
          <div className="content-stretch flex flex-[1_0_0] max-lg:flex-none max-lg:w-full flex-col gap-[24px] items-start min-w-[300px] lg:min-w-[400px] relative">
            <div className="aspect-[2160/1205] relative rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] shrink-0 w-full overflow-hidden">
              <img alt="GENA agent list view" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={genaImages.imgGenaAgent03} />
            </div>
            <div className="aspect-[2160/2906] relative rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] shrink-0 w-full overflow-hidden">
              <img alt="GENA create agent form" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={genaImages.imgGenaAgent04} />
            </div>
          </div>
          {/* Column 2 */}
          <div className="content-stretch flex flex-[1_0_0] max-lg:flex-none max-lg:w-full flex-col gap-[24px] items-start min-w-[300px] lg:min-w-[400px] relative">
            <div className="aspect-[2160/1205] relative rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] shrink-0 w-full overflow-hidden">
              <img alt="GENA AI agent overview" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={genaImages.imgGenaAgent01} />
            </div>
            <div className="aspect-[2160/2906] relative rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] shrink-0 w-full overflow-hidden">
              <img alt="GENA agent configuration" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={genaImages.imgGenaAgent02} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
