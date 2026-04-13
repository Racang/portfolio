import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaGuardrailFeature() {
  return (
    <div className="mx-auto w-full px-[40px] lg:px-[80px] pt-[40px] flex flex-col gap-[30px] bg-[#F7F3F3] items-center relative z-10">
      
      {/* Design Guardrail Feature Details */}
      <div className="content-stretch flex flex-col gap-[24px] items-center text-grey-800 text-center w-full max-w-[798px]">
        <h2 className="font-fredoka font-semibold text-section-title">{genaContent.guardrail.title}</h2>
        <p className="font-normal text-body text-grey-700">
          {genaContent.guardrail.desc}
        </p>
      </div>

      <div className="content-center flex flex-col lg:flex-row gap-[40px] items-center w-full mt-[40px]">
         <div className="w-full lg:flex-[1_0_0] grid-rows-[1fr] grid-cols-[1fr] inline-grid leading-[0] place-items-start relative shrink-0 aspect-[625/392]">
           <div className="border border-[rgba(0,0,0,0.2)] border-solid col-[1] row-[1] h-full w-full rounded-[50px] shadow-[0px_3px_24.3px_0px_rgba(24,74,234,0.09)]" />
           <div className="border border-[#f5f5f5] bg-white border-solid col-[1] row-[1] h-[95.18%] ml-[1.5%] mt-[2.41%] relative rounded-[40px] w-[96.96%]">
             <div className="absolute inset-0 rounded-[40px]" style={{ backgroundImage: "linear-gradient(241.132deg, rgba(255, 255, 255, 0.4) 2.6827%, rgba(255, 255, 255, 0.1) 95.418%)" }} />
             <div className="absolute inset-0 overflow-hidden rounded-[40px]">
               <img src={genaImages.imgImage1} alt="Competitor Interface" className="absolute h-[223.62%] left-[-3.17%] max-w-none top-[-3.44%] w-[128.63%]" />
             </div>
           </div>
           <div className="col-[1] row-[1] h-full w-full relative pointer-events-none">
             <div className="absolute inset-[-5.42%_-4.19%_-6.95%_-4.19%]">
               <img src={genaImages.imgFrame} alt="" className="block max-w-none size-full" />
             </div>
           </div>
         </div>
         <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start">
           <h3 className="font-fredoka font-semibold text-subsection-title text-grey-800">{genaContent.guardrail.competitor.title}</h3>
           <p className="font-normal text-body text-grey-400">
             {genaContent.guardrail.competitor.desc}
           </p>
         </div>
      </div>

      {/* User Interface Design Sub-section */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px]">
        <h3 className="font-fredoka font-semibold text-subsection-title text-grey-800">{genaContent.guardrail.uiDesign.title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[48px] w-full">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden bg-white">
                <img src={genaImages.imgRectangle82744} alt="" className="absolute inset-0 max-w-none object-contain size-full" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.uiDesign.items[0]}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden">
                <img src={genaImages.imgRectangle82745} alt="" className="absolute h-[117%] left-[-4.69%] max-w-none top-[-3.69%] w-[148.77%]" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.uiDesign.items[1]}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden bg-[#fbf7ff]">
                <img src={genaImages.imgRectangle82746} alt="" className="absolute h-[83.89%] left-[-2.96%] max-w-none top-[12.83%] w-[112.85%]" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.uiDesign.items[2]}
            </p>
          </div>
        </div>
      </div>
      
      {/* Handover to Developer Section */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px]">
        <h3 className="font-fredoka font-semibold text-subsection-title text-grey-800">{genaContent.guardrail.handover.title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[48px] w-full">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden">
                <img src={genaImages.imgRectangle82747} alt="" className="absolute h-full left-[0.05%] max-w-none top-[-0.15%] w-[128.38%]" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.handover.items[0]}
            </p>
          </div>
          <div className="flex flex-col gap-4">
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
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-[16px] rounded-[16px] shadow-[0px_3px_16px_0px_rgba(24,74,234,0.09)] border border-[#e7e8ed]">
              <div className="relative w-full aspect-[363/272] rounded-[16px] overflow-hidden">
                <img src={genaImages.imgRectangle82749} alt="" className="absolute h-full left-[-4.23%] max-w-none top-[-0.11%] w-[137.12%]" />
              </div>
            </div>
            <p className="text-body text-grey-800">
              {genaContent.guardrail.handover.items[2]}
            </p>
          </div>
        </div>
      </div>

      {/* Feedback loop */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px] pb-[80px]">
        <h3 className="font-fredoka font-semibold text-subsection-title text-grey-800 text-center">{genaContent.guardrail.feedback.title}</h3>
        
        <div className="flex flex-col lg:flex-row gap-[40px] items-center w-full">
          <div className="flex items-center gap-[16px] shrink-0 justify-center flex-wrap lg:flex-nowrap">
            <div className="relative w-[300px] lg:w-[363px] h-[272px] rounded-[20px] border border-[#e7e8ed] shrink-0 bg-white">
               <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                  <img src={genaImages.imgRectangle82750} alt="Before" className="absolute h-[120.52%] left-[-31.57%] max-w-none top-[-10.5%] w-[163.52%]" />
               </div>
            </div>
            <img src={genaImages.imgFoundationArrowLeft} className="size-[48px] rotate-180 shrink-0" alt="Arrow Right" />
            <div className="relative w-[300px] lg:w-[363px] h-[272px] rounded-[20px] border-4 border-[#524fff] shrink-0 bg-white">
               <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                  <img src={genaImages.imgRectangle82751} alt="After" className="absolute h-[147.1%] left-[-49.72%] max-w-none top-[-23.71%] w-[199.59%]" />
               </div>
            </div>
          </div>
          <p className="font-normal text-body text-grey-700">
            {genaContent.guardrail.feedback.desc}
          </p>
        </div>
      </div>

    </div>
  );
}
