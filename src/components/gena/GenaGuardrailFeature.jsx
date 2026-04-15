import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaGuardrailFeature() {
  return (
    <div className="mx-auto w-full px-[40px] lg:px-[80px] pt-[40px] flex flex-col gap-[30px] bg-[#F7F3F3] items-center relative z-10">
      
      {/* Design Guardrail Feature Details */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="content-stretch flex flex-col gap-[24px] items-center text-grey-800 text-center w-full max-w-[798px]"
      >
        <h2 className="font-fredoka font-semibold text-section-title">{genaContent.guardrail.title}</h2>
        <p className="font-normal text-body text-grey-700">
          {genaContent.guardrail.desc}
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="content-center flex flex-col lg:flex-row gap-[40px] items-center w-full mt-[40px]"
      >
         {/* Competitor Analytic image — rebuilt from Figma node 40000482:23329 */}
         <motion.div variants={fadeLeft} className="w-full max-lg:max-w-[630px] lg:flex-[1_0_0] bg-white border border-[#e7e8ed] p-[16px] shadow-grey-card" style={{ borderRadius: 'clamp(24px, 3.3vw, 48px)' }}>
           <div className="relative w-full overflow-hidden" style={{ aspectRatio: '588 / 441', borderRadius: 'clamp(16px, 2.8vw, 40px)' }}>
             {/* Layer 1: wider context view */}
             <img src={genaImages.imgCompetitorBg} alt="" className="absolute h-[94.78%] left-[-21.89%] max-w-none top-0 w-[121.87%] pointer-events-none" />
             {/* Layer 2: zoomed competitor interface */}
             <img src={genaImages.imgImage1} alt="Competitor Interface" className="absolute h-[223.62%] left-[-3.17%] max-w-none top-[-3.44%] w-[128.63%] pointer-events-none" />
             <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-3px_24.3px_0px_rgba(24,74,234,0.09)]" />
           </div>
         </motion.div>
         <motion.div variants={fadeRight} className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start">
           <h3 className="font-fredoka font-semibold text-subsection-title text-grey-800">{genaContent.guardrail.competitor.title}</h3>
           <p className="font-normal text-body text-grey-400">
             {genaContent.guardrail.competitor.desc}
           </p>
         </motion.div>
      </motion.div>

      {/* User Interface Design Sub-section */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px]">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-fredoka font-semibold text-subsection-title text-grey-800"
        >{genaContent.guardrail.uiDesign.title}</motion.h3>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[48px] w-full"
        >
          <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden bg-white">
                <img src={genaImages.imgRectangle82744} alt="" className="absolute inset-0 max-w-none object-contain size-full" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.uiDesign.items[0]}
            </p>
          </motion.div>
          <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden">
                <img src={genaImages.imgRectangle82745} alt="" className="absolute h-[117%] left-[-4.69%] max-w-none top-[-3.69%] w-[148.77%]" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.uiDesign.items[1]}
            </p>
          </motion.div>
          <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden bg-[#fbf7ff]">
                <img src={genaImages.imgRectangle82746} alt="" className="absolute h-[83.89%] left-[-2.96%] max-w-none top-[12.83%] w-[112.85%]" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.uiDesign.items[2]}
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Handover to Developer Section */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px]">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-fredoka font-semibold text-subsection-title text-grey-800"
        >{genaContent.guardrail.handover.title}</motion.h3>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[48px] w-full"
        >
          <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden">
                <img src={genaImages.imgRectangle82747} alt="" className="absolute h-full left-[0.05%] max-w-none top-[-0.15%] w-[128.38%]" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.handover.items[0]}
            </p>
          </motion.div>
          <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden bg-white">
                <img src={genaImages.imgRectangle82744} alt="" className="absolute inset-0 max-w-none object-contain size-full" />
                <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                  <img src={genaImages.imgRectangle82748} alt="" className="absolute h-full left-[0.05%] max-w-none top-[-0.15%] w-[128.38%]" />
                </div>
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.handover.items[1]}
            </p>
          </motion.div>
          <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden">
                <img src={genaImages.imgRectangle82749} alt="" className="absolute h-full left-[-4.23%] max-w-none top-[-0.11%] w-[137.12%]" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.handover.items[2]}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Feedback loop */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px] pb-[80px]">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-fredoka font-semibold text-subsection-title text-grey-800 text-center"
        >{genaContent.guardrail.feedback.title}</motion.h3>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-[40px] items-center w-full"
        >
          <motion.div variants={fadeLeft} className="flex flex-col md:flex-row items-center gap-[16px] shrink-0 justify-center">
            <div className="relative w-[300px] lg:w-[363px] h-[272px] rounded-[20px] border border-[#e7e8ed] shrink-0 bg-white">
               <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                  <img src={genaImages.imgRectangle82750} alt="Before" className="absolute h-[120.52%] left-[-31.57%] max-w-none top-[-10.5%] w-[163.52%]" />
               </div>
            </div>
            <img src={genaImages.imgFoundationArrowLeft} className="size-[48px] -rotate-90 md:rotate-180 shrink-0" alt="Arrow Right" />
            <div className="relative w-[300px] lg:w-[363px] h-[272px] rounded-[20px] border-4 border-[#524fff] shrink-0 bg-white">
               <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                  <img src={genaImages.imgRectangle82751} alt="After" className="absolute h-[147.1%] left-[-49.72%] max-w-none top-[-23.71%] w-[199.59%]" />
               </div>
            </div>
          </motion.div>
          <motion.p variants={fadeRight} className="font-normal text-body text-grey-700 text-center max-w-[798px]">
            {genaContent.guardrail.feedback.desc}
          </motion.p>
        </motion.div>
      </div>

    </div>
  );
}
