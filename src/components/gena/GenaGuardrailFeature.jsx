import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaGuardrailFeature() {
  return (
    <div className="mx-auto w-full px-[40px] lg:px-[80px] pt-[40px] flex flex-col gap-[30px] bg-[#F7F3F3] items-center relative z-10">
      
      {/* Design Guardrail Feature Details */}
      <div className="content-stretch flex flex-col gap-[24px] items-center text-grey-800 text-center w-full max-w-[798px]">
        <p className="font-semibold text-[60px] leading-[1.1]">{genaContent.guardrail.title}</p>
        <p className="font-normal text-[22px] text-grey-700 leading-[1.4]">
          {genaContent.guardrail.desc}
        </p>
      </div>

      <div className="content-center flex flex-col lg:flex-row gap-[40px] items-center w-full mt-[40px]">
         <div className="w-full lg:flex-[1_0_0] relative min-h-[300px]">
           <img src={genaImages.imgImage1} alt="Competitor Interface" className="w-full rounded-[40px] border border-[#f5f5f5] shadow-grey-card object-contain" />
         </div>
         <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start">
           <p className="font-semibold text-[48px] text-grey-800">{genaContent.guardrail.competitor.title}</p>
           <p className="font-normal text-[22px] text-grey-400 leading-[1.4]">
             {genaContent.guardrail.competitor.desc}
           </p>
         </div>
      </div>

      {/* User Interface Design Sub-section */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px]">
        <p className="font-semibold text-[48px] text-grey-800">{genaContent.guardrail.uiDesign.title}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[48px] w-full">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-[16px] shadow-grey-card">
              <img src={genaImages.imgRectangle82744} alt="" className="w-full rounded-[16px] aspect-video object-cover border border-[#e7e8ed]" />
            </div>
            <p className="text-[22px] text-grey-800 leading-[1.4]">
              {genaContent.guardrail.uiDesign.items[0]}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-[16px] shadow-grey-card">
              <img src={genaImages.imgRectangle82745} alt="" className="w-full rounded-[16px] aspect-video object-cover" />
            </div>
            <p className="text-[22px] text-grey-800 leading-[1.4]">
              {genaContent.guardrail.uiDesign.items[1]}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-[16px] shadow-grey-card">
              <img src={genaImages.imgRectangle82746} alt="" className="w-full rounded-[16px] aspect-video object-cover bg-gray-50" />
            </div>
            <p className="text-[22px] text-grey-800 leading-[1.4]">
              {genaContent.guardrail.uiDesign.items[2]}
            </p>
          </div>
        </div>
      </div>
      
      {/* Handover to Developer Section */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px]">
        <p className="font-semibold text-[48px] text-grey-800">{genaContent.guardrail.handover.title}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[48px] w-full">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-[16px] shadow-grey-card">
              <img src={genaImages.imgRectangle82747} alt="" className="w-full rounded-[16px] aspect-video object-cover border border-gray-100" />
            </div>
            <p className="text-[22px] text-grey-800 leading-[1.4]">
              {genaContent.guardrail.handover.items[0]}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-[16px] shadow-grey-card">
              <img src={genaImages.imgRectangle82748} alt="" className="w-full rounded-[16px] aspect-video object-cover" />
            </div>
            <p className="text-[22px] text-grey-800 leading-[1.4]">
              {genaContent.guardrail.handover.items[1]}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-[16px] shadow-grey-card">
              <img src={genaImages.imgRectangle82749} alt="" className="w-full rounded-[16px] aspect-video object-cover" />
            </div>
            <p className="text-[22px] text-grey-800 leading-[1.4]">
              {genaContent.guardrail.handover.items[2]}
            </p>
          </div>
        </div>
      </div>

      {/* Feedback loop */}
      <div className="w-full flex flex-col items-center mt-[80px] gap-[40px] pb-[80px]">
        <p className="font-semibold text-[48px] text-grey-800 text-center">{genaContent.guardrail.feedback.title}</p>
        
        <div className="flex flex-col lg:flex-row gap-[40px] items-center w-full">
          <div className="flex items-center gap-[16px] shrink-0 justify-center flex-wrap lg:flex-nowrap">
            <img src={genaImages.imgRectangle82750} className="w-[300px] lg:w-[363px] h-[272px] rounded-[16px] border border-gray-300 object-cover" alt="Before" />
            <img src={genaImages.imgFoundationArrowLeft} className="size-[48px] rotate-180" alt="Arrow Right" />
            <img src={genaImages.imgRectangle82751} className="w-[300px] lg:w-[363px] h-[272px] rounded-[16px] border-4 border-[#524fff] object-cover" alt="After" />
          </div>
          <p className="font-normal text-[22px] text-grey-700 leading-[1.5]">
            {genaContent.guardrail.feedback.desc}
          </p>
        </div>
      </div>

    </div>
  );
}
