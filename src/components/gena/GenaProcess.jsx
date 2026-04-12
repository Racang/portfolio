import React from 'react';

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#a0a4b8] hidden xl:block">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDown = () => (
  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" className="shrink-0 text-[#a0a4b8] hidden xl:block mx-auto my-[-10px]">
    <path d="M12 5V55M12 55L5 48M12 55L19 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DesktopLoopArrow = () => (
  <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="absolute top-[-50px] left-[50%] -translate-x-[50%] w-[80%] pt-4 hidden xl:block text-[#a0a4b8]" style={{ zIndex: 0 }}>
    <path d="M950 80 V20 Q950 0 930 0 H50 Q30 0 30 20 V80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 73 L30 80 L37 73" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DesktopReturnArrow = () => (
  <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="absolute bottom-[-50px] left-[6%] w-[75%] pb-4 hidden xl:block text-[#a0a4b8]" style={{ zIndex: 0 }}>
    <path d="M950 0 V60 Q950 80 930 80 H50 Q30 80 30 60 V0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
    <path d="M30 0 L37 7 L23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function GenaProcess() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center p-[40px] lg:p-[80px] relative shrink-0 w-full z-10 bg-white">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#3e446b] w-full max-w-[798px]">
        <p className="font-semibold leading-none relative shrink-0 text-[60px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Work Process
        </p>
      </div>

      <div className="w-full max-w-[1262px] flex flex-col gap-[60px] relative mx-auto mt-6">
        
        {/* Brand & Design Foundation */}
        <div className="w-full border-2 border-dashed border-[#F2C5C3] rounded-[16px] p-[30px] lg:p-[60px] relative">
          <div className="absolute top-[-18px] left-[24px] bg-[#F5EBE0] text-[#746A6A] px-4 py-1 rounded-[6px] text-[20px] font-normal leading-[1.3]">
            Brand & Design Foundation
          </div>
          <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-white text-[#918585] px-4 py-1 rounded-[6px] text-[16px] font-normal leading-[1.3] z-10">
             Product& Design Foundation
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between gap-[20px] xl:gap-0">
            {/* Step 1 */}
            <div className="flex flex-col items-center flex-[1] text-center">
               <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px]">
                 Define Theme
               </div>
               <p className="mt-4 text-[#565b7e] text-[16px] xl:h-[48px]">Product visual Direction</p>
            </div>
            <ArrowRight />
            
            {/* Step 2 */}
            <div className="flex flex-col items-center flex-[1] text-center">
               <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px]">
                 Design Logo
               </div>
               <p className="mt-4 text-[#565b7e] text-[16px] xl:h-[48px]">Create brand identity</p>
            </div>
            <ArrowRight />

            {/* Step 3 */}
            <div className="flex flex-col items-center flex-[1] text-center">
               <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                 Confirm with Stakeholders
               </div>
               <p className="mt-4 text-[#565b7e] text-[16px] xl:h-[48px]">Stakeholder validation</p>
            </div>
            <ArrowRight />

            {/* Step 4 */}
            <div className="flex flex-col items-center flex-[1] text-center">
               <div className="bg-[#fcf0f0] w-[220px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                 Design System and UI Components
               </div>
               <p className="mt-4 text-[#565b7e] text-[16px] xl:h-[48px]">Build components based on the theme</p>
            </div>
          </div>
        </div>

        {/* Product UI design */}
        <div className="w-full border-2 border-dashed border-[#F2C5C3] rounded-[16px] p-[30px] lg:p-[80px] lg:py-[100px] relative">
          <div className="absolute top-[-18px] left-[24px] bg-[#F5EBE0] text-[#746A6A] px-4 py-1 rounded-[6px] text-[20px] font-normal leading-[1.3]">
            Product UI design
          </div>
          <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-white text-[#918585] px-4 py-1 rounded-[6px] text-[16px] font-normal leading-[1.3] z-10">
            Product UI design
          </div>

          <div className="relative w-full">
             <DesktopLoopArrow />
             <DesktopReturnArrow />
             
             {/* Top Row */}
             <div className="flex flex-col xl:flex-row items-start justify-between gap-[20px] xl:gap-0 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center flex-[1] text-center relative">
                   <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                     Discover and Define
                   </div>
                   <p className="mt-4 text-[#565b7e] text-[16px] w-[180px]">Review Competitor Analysis</p>
                </div>
                <div className="flex items-center xl:h-[90px]"><ArrowRight /></div>
                
                {/* Step 2 */}
                <div className="flex flex-col items-center flex-[1] text-center">
                   <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                     Wireframes
                   </div>
                   <p className="mt-4 text-[#565b7e] text-[16px] w-[200px]">Create Low-Fidelity Wireframes and User Flows</p>
                </div>
                <div className="flex items-center xl:h-[90px]"><ArrowRight /></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center flex-[1] text-center">
                   <div className="bg-[#e8dad5] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                     Stakeholder Feedback
                   </div>
                   <p className="mt-4 text-[#565b7e] text-[16px] w-[180px]">Review and Gather Feedback</p>
                </div>
                <div className="flex items-center xl:h-[90px]"><ArrowRight /></div>

                {/* Step 4 */}
                <div className="flex flex-col items-center flex-[1] text-center">
                   <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                     UI Design
                   </div>
                   <p className="mt-4 text-[#565b7e] text-[16px] w-[180px]">Create the Product Interface</p>
                </div>
                <div className="flex items-center xl:h-[90px]"><ArrowRight /></div>

                {/* Step 5 */}
                <div className="flex flex-col items-center flex-[1] text-center">
                   <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] inline-flex px-[20px]">
                     Test
                   </div>
                   <p className="mt-4 text-[#565b7e] text-[16px] w-[180px]">Demo and Test with Internal Users</p>
                </div>
             </div>

             {/* Bottom Row */}
             <div className="flex flex-col xl:flex-row-reverse items-start justify-end gap-[20px] xl:gap-0 mt-[60px] xl:mt-[40px] relative z-10 w-full xl:pr-[0]">
                {/* Step 6 */}
                <div className="flex flex-col items-center w-full xl:w-auto xl:flex-[1] text-center mx-auto">
                   <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                     Handover to dev
                   </div>
                   <p className="mt-4 text-[#565b7e] text-[16px] w-[180px]">Design Handoff & Walkthrough</p>
                </div>
                
                <div className="flex flex-row items-center gap-[20px] xl:hidden w-full justify-center"><ArrowDown /></div>
                
                {/* Step 7 */}
                <div className="flex flex-col items-center w-full xl:w-[22%] text-center">
                   <div className="hidden xl:flex items-center w-full justify-center h-[90px] absolute right-[25%] top-[0px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#a0a4b8] rotate-180">
                         <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                   <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                     Development
                   </div>
                </div>

                <div className="flex flex-row items-center gap-[20px] xl:hidden w-full justify-center"><ArrowDown /></div>

                {/* Step 8 */}
                <div className="flex flex-col items-center w-full xl:w-[22%] text-center relative">
                   <div className="hidden xl:flex items-center w-full justify-center h-[90px] absolute right-[56%] top-[0px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#a0a4b8] rotate-180">
                         <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                   <div className="bg-[#fcf0f0] w-[200px] h-[90px] rounded-[30px] flex items-center justify-center font-normal text-[#565b7e] text-[20px] px-[20px]">
                     Design Review
                   </div>
                   <p className="mt-4 text-[#565b7e] text-[16px] w-[180px]">Review and report issues</p>
                   
                   <div className="absolute top-[-30px] right-[40px] hidden xl:flex">
                      <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-[#a0a4b8]">
                        <path d="M12 40V10M12 10L5 17M12 10L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                </div>

             </div>

             <div className="hidden xl:block absolute bottom-[8px] left-[200px] text-[#A6977A] font-medium text-[16px] bg-white px-4 z-20">
               Feature Iteration Loop
             </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}
