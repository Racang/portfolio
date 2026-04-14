import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../lib/animations';
import { genaImages, genaContent } from '../../data/genaData';

export default function GenaChallenge() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="content-stretch flex flex-col gap-[44px] items-center px-[40px] lg:px-[190px] py-[64px] relative shrink-0 w-full z-10"
    >
      <motion.div variants={fadeUp} className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-grey-800 w-full max-w-[798px]">
        <h2 className="font-fredoka font-semibold text-section-title text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{genaContent.challenge.title}</h2>
        <p className="font-normal text-body text-center w-full text-grey-700" style={{ fontVariationSettings: "'wdth' 100" }}>
          {genaContent.challenge.subtitle}
        </p>
      </motion.div>
      <div className="content-start flex flex-wrap gap-[30px] items-stretch justify-center relative shrink-0 w-full">
        <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <img alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgAi1} />
          <p className="font-normal text-body text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[0]}
          </p>
        </motion.div>
        <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <img alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgElearning1} />
          <p className="font-normal text-body text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[1]}
          </p>
        </motion.div>
        <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <img alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgShape1} />
          <p className="font-normal text-body text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[2]}
          </p>
        </motion.div>
        <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="bg-white flex flex-[1_0_0] gap-[20px] items-start max-w-[530px] min-h-px min-w-[300px] lg:min-w-[400px] p-[24px] rounded-[20px] shadow-grey-card">
          <img alt="" className="shrink-0 size-[50px] object-cover" src={genaImages.imgArt1} />
          <p className="font-normal text-body text-grey-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {genaContent.challenge.items[3]}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
