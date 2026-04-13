import React from 'react';
import { motion } from 'framer-motion';
import { slowFadeUp, customViewport } from '../../lib/animations';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaChallenge() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[190px] py-[64px] relative shrink-0 w-full z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px]">
        <h2 className="font-fredoka font-semibold text-section-title text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.challenge.title}</h2>
        <p className="font-normal text-body text-center w-full text-grey-700" style={{ fontVariationSettings: "'wdth' 100" }}>
          {genaContent.challenge.subtitle}
        </p>
      </motion.div>
      <div className="content-start flex flex-wrap gap-[30px] items-stretch justify-center relative shrink-0 w-full">
        <div className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <motion.img initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgAi1} />
          <motion.p initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} className="font-normal text-body text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[0]}
          </motion.p>
        </div>
        <div className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <motion.img initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgElearning1} />
          <motion.p initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} className="font-normal text-body text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[1]}
          </motion.p>
        </div>
        <div className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <motion.img initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgShape1} />
          <motion.p initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} className="font-normal text-body text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[2]}
          </motion.p>
        </div>
        <div className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <motion.img initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgArt1} />
          <motion.p initial="hidden" whileInView="visible" viewport={customViewport} variants={slowFadeUp} className="font-normal text-body text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[3]}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
