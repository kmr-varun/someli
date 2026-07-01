import Image from "next/image";
import SectionPill from "@/components/ui/SectionPill";

const steps = [
  {
    number: "01/",
    title: "Kick off and set up.",
    description:
      "We analyze your niche and audience to build a winning content strategy.",
    align: "left" as const,
  },
  {
    number: "02/",
    title: "Content and Campaigns",
    description:
      "We analyze your niche and audience to build a winning content strategy.",
    align: "right" as const,
  },
  {
    number: "03/",
    title: "Engage & Activate",
    description:
      "We analyze your niche and audience to build a winning content strategy.",
    align: "left" as const,
  },
  {
    number: "04/",
    title: "Measure & Optimize",
    description:
      "We analyze your niche and audience to build a winning content strategy.",
    align: "right" as const,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 lg:py-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
          {/* Pill */}
          <SectionPill className="mb-6">PROCESS</SectionPill>

          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black leading-[1.19] tracking-[-2px] mb-6">
            Easy to launch, easy to learn.
          </h2>

          <p className="font-montserrat font-normal text-[18px] text-black leading-[1.36] max-w-[808px]">
            Everything you need to launch, engage, and scale your advocacy
            program
          </p>
        </div>

        {/* Timeline - Desktop only, centered at 1200px */}
        <div className="hidden lg:flex flex-col items-center relative">
          {/* Continuous vertical center line - extends from top through badge */}
          <div className="absolute left-1/2 top-0 w-[1px] -translate-x-1/2 bg-[#F76739] z-0" style={{ height: 'calc(100% + 64px)' }} />

          <div className="relative w-[1200px]">
            {/* Step 1 - Left aligned */}
            <div className="relative flex gap-[140px] items-center py-8">
              <div className="flex flex-col gap-6 items-end w-[500px]">
                <div className="flex flex-col gap-1 items-end">
                  <p className="font-montserrat font-bold text-[28px] text-[#F76739] leading-none">
                    01/
                  </p>
                  <h3 className="font-montserrat font-bold text-[48px] text-[#222] leading-[1.4] tracking-[-2px] text-right">
                    Kick off and set up.
                  </h3>
                </div>
                <p className="font-montserrat font-normal text-[17px] text-[#222] leading-[1.5] text-right">
                  We analyze your niche and audience to build a winning content
                  strategy.
                </p>
              </div>

              {/* Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#DF8251] to-[#D54050] p-[10px]">
                <div className="relative w-[25px] h-[24px]">
                  <Image
                    src="/assets/corporates/process-cycle-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="w-[500px]" />
            </div>

            {/* Step 2 - Right aligned */}
            <div className="relative flex gap-[140px] items-center justify-end py-8">
              <div className="w-[500px]" />

              {/* Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#DF8251] to-[#D54050] p-[10px]">
                <div className="relative w-[25px] h-[24px]">
                  <Image
                    src="/assets/corporates/process-cycle-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 items-start w-[500px]">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-montserrat font-bold text-[28px] text-[#F76739] leading-none">
                    02/
                  </p>
                  <h3 className="font-montserrat font-bold text-[48px] text-[#222] leading-[1.4] tracking-[-2px]">
                    Content and Campaigns
                  </h3>
                </div>
                <p className="font-montserrat font-normal text-[17px] text-[#222] leading-[1.5]">
                  We analyze your niche and audience to build a winning content
                  strategy.
                </p>
              </div>
            </div>

            {/* Step 3 - Left aligned */}
            <div className="relative flex gap-[140px] items-center h-[240px] py-8">
              <div className="flex flex-col gap-6 items-end w-[500px]">
                <div className="flex flex-col gap-1 items-end">
                  <p className="font-montserrat font-bold text-[28px] text-[#F76739] leading-none">
                    03/
                  </p>
                  <h3 className="font-montserrat font-bold text-[48px] text-[#222] leading-[1.4] tracking-[-2px] text-right">
                    Engage & Activate
                  </h3>
                </div>
                <p className="font-montserrat font-normal text-[17px] text-[#222] leading-[1.5] text-right">
                  We analyze your niche and audience to build a winning content
                  strategy.
                </p>
              </div>

              {/* Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#DF8251] to-[#D54050] p-[10px]">
                <div className="relative w-[25px] h-[24px]">
                  <Image
                    src="/assets/corporates/process-cycle-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="w-[500px]" />
            </div>

            {/* Step 4 - Right aligned */}
            <div className="relative flex gap-[140px] items-center justify-end py-8">
              <div className="w-[500px]" />

              {/* Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#DF8251] to-[#D54050] p-[10px]">
                <div className="relative w-[25px] h-[24px]">
                  <Image
                    src="/assets/corporates/process-cycle-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 items-start w-[500px]">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-montserrat font-bold text-[28px] text-[#F76739] leading-none">
                    04/
                  </p>
                  <h3 className="font-montserrat font-bold text-[48px] text-[#222] leading-[1.4] tracking-[-2px]">
                    Measure & Optimize
                  </h3>
                </div>
                <p className="font-montserrat font-normal text-[17px] text-[#222] leading-[1.5]">
                  We analyze your niche and audience to build a winning content
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline - Simplified vertical */}
        <div className="lg:hidden flex flex-col gap-8 relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-1/2 top-[22px] bottom-[22px] w-[2px] -translate-x-1/2 bg-[#F76739] opacity-30" />

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 relative z-10">
              <div
                className="w-[44px] h-[44px] rounded-full flex items-center justify-center bg-gradient-to-b from-[#DF8251] to-[#D54050]"
              >
                <span className="font-montserrat font-bold text-[14px] text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-2 text-center px-4">
                <p className="font-montserrat font-bold text-[20px] sm:text-[24px] text-[#F76739]">
                  {step.number}
                </p>
                <h3 className="font-montserrat font-bold text-[28px] sm:text-[32px] md:text-[40px] text-[#222] leading-[1.1] tracking-[-1px]">
                  {step.title}
                </h3>
                <p className="font-montserrat font-normal text-[15px] sm:text-[16px] text-[#666] leading-[1.5] max-w-[500px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <div className="bg-[#0D0D0D] border border-white rounded-full px-6 sm:px-8 py-4 sm:py-6 flex items-center gap-2 sm:gap-2.5">
            <div className="relative w-[15px] h-[15px] sm:w-[17px] sm:h-[17px]">
              <Image
                src="/assets/corporates/process-icon.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-montserrat font-normal text-[9px] sm:text-[10px] text-[rgba(255,255,255,0.4)] tracking-[0.4px] uppercase leading-none">
                ALWAYS ON
              </span>
              <span className="font-montserrat font-medium text-[14px] sm:text-[16px] text-white tracking-[0.5px] sm:tracking-[0.64px] leading-none">
                IT RUNS WHILE YOU SLEEP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
