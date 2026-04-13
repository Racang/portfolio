import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';
import ProcessSteps from '../shared/ProcessSteps';

export default function GenaWhatIDid() {
  const renderBullet = (text) => {
    const parts = text.split('**');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index} className="font-normal leading-[1.9] text-cyan-accent" style={{ fontVariationSettings: "'wdth' 100" }}>{part}</span>;
      }
      return <span key={index} className="leading-[1.9]">{part}</span>;
    });
  };

  return (
    <div className="content-center flex flex-wrap max-lg:flex-col gap-[40px] items-center max-lg:items-start px-[40px] lg:px-[80px] py-[64px] relative shrink-0 w-full z-10">
      <div className="content-stretch flex flex-[1_0_0] max-lg:flex-none max-lg:w-full flex-col gap-[56px] items-start pr-[40px] max-lg:pr-0 relative">
        <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[500px] relative shrink-0 w-full">
          <h2 className="font-fredoka font-semibold text-section-title relative shrink-0 text-[#2E3A59] w-full">
            {genaContent.whatIDid.title}
          </h2>
          <div className="font-normal relative shrink-0 text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.whatIDid.bullets.map((bullet, i) => (
              <p key={i} className="mb-2 text-body">
                <span className="leading-[1.9]">{'· '}</span>
                {renderBullet(bullet)}
              </p>
            ))}
          </div>
        </div>
        
        {/* Visual Process Setup */}
        <ProcessSteps steps={[
          { label: genaContent.whatIDid.process[0], src: genaImages.imgSearch1 },
          { label: genaContent.whatIDid.process[1], src: genaImages.imgContract1 },
          { label: genaContent.whatIDid.process[2], src: genaImages.imgPaint1 },
          { label: genaContent.whatIDid.process[3], src: genaImages.imgComputer11 },
        ]} />
      </div>
      
      {/* Main Visuals layout Right — rebuilt from Figma node 40000482:23325 */}
      <div className="flex-[1_0_0] max-lg:flex-none max-lg:w-full max-lg:max-w-[630px] bg-white border border-[#e7e8ed] p-[16px] shadow-grey-card" style={{ borderRadius: 'clamp(24px, 3.3vw, 48px)' }}>
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '588 / 441', borderRadius: 'clamp(16px, 2.8vw, 40px)' }}>
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src={genaImages.imgImage}
          />
          {/* Inset shadow overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-3px_24.3px_0px_rgba(24,74,234,0.09)]" />
        </div>
      </div>
    </div>
  );
}
