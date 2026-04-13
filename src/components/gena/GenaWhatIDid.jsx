import React from 'react';
import { genaImages, genaContent } from '../../data/genaData';

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
    <div className="content-center flex flex-wrap gap-[40px] items-center px-[40px] lg:px-[80px] py-[64px] relative shrink-0 w-full z-10">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start pr-[40px] relative">
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
        <div className="content-start flex flex-wrap gap-y-[10px] items-start relative shrink-0 w-full mt-4">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
            <div className="flex-none w-full">
              <div className="content-center flex flex-wrap gap-[43px] items-start relative w-full">
                <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
                  <p className="font-medium leading-none text-grey-700 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.whatIDid.process[0]}</p>
                  <img alt="" className="size-[40px] object-cover" src={genaImages.imgSearch1} />
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
                  <p className="font-medium leading-none text-grey-700 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.whatIDid.process[1]}</p>
                  <img alt="" className="size-[40px] object-cover" src={genaImages.imgContract1} />
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
                  <p className="font-medium leading-none text-grey-700 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.whatIDid.process[2]}</p>
                  <img alt="" className="size-[40px] object-cover" src={genaImages.imgPaint1} />
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
                  <p className="font-medium leading-none text-grey-700 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.whatIDid.process[3]}</p>
                  <img alt="" className="size-[40px] object-cover" src={genaImages.imgComputer11} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Visuals layout Right */}
      <div className="flex-[1_0_0] h-[422.871px] max-h-[422.870px] max-w-[625px] relative">
        <div className="-translate-y-1/2 absolute aspect-[625/423.270] contents left-0 right-[-0.81%] top-[calc(50%+0.2px)]">
          <div className="-translate-y-1/2 absolute aspect-[606.021/402.870] left-[1.45%] right-[0.65%] top-[calc(50%+0.33px)]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="403.521" src={genaImages.imgImage} width="607" />
          </div>
          <div className="-translate-y-1/2 absolute aspect-[624.999/423.27] border border-[rgba(0,0,0,0.2)] border-solid left-0 right-[-0.81%] rounded-[50px] shadow-grey-card top-[calc(50%+0.2px)]" />
          <div className="-translate-y-1/2 absolute aspect-[625/423.27] left-0 right-[-0.81%] top-[calc(50%+0.2px)]">
            <div className="absolute inset-[-5.03%_-3.89%_-6.45%_-3.89%]">
              <img alt="" className="block max-w-none size-full" src={genaImages.imgUnion} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
