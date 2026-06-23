import Image from "next/image";

const contentTypes = [
  { number: "01", label: "LinkedIn post" },
  { number: "02", label: "Carousals" },
  { number: "03", label: "Reels & Videos" },
  { number: "04", label: "Polls & Questions" },
  { number: "05", label: "Articles" },
  { number: "06", label: "Employee Advocacy" },
  { number: "07", label: "Multi - language Ready" },
  { number: "08", label: "Thought Leadership" },
];

const featuresLeft = [
  "One click publish",
  "LinkedIn Scheduling",
  "Analytics and Insights",
];

const featuresRight = [
  "Approval Workflows",
  "Multi-language Publishing",
];

export default function ContentPlannerSection() {
  return (
    <section className="relative w-full bg-[#111111] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50 overflow-hidden">
        <Image
          src="/assets/ai-branding/planner/bg-pattern.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14 items-center">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[852px]">
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-[15px] py-[7px] rounded-full">
              <p className="font-normal text-[12px] text-[#ED6B52] tracking-[0.96px] uppercase leading-[15px]">
                PROCESS
              </p>
            </div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-bold leading-[1.19] tracking-[-2px] text-white text-center">
              Your next 14 days planned automatically
            </h2>
          </div>

          {/* Main Content - Two Column */}
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            {/* Left - Content Types List */}
            <div className="w-full lg:w-[375px] shrink-0 glass-border bg-[rgba(255,255,255,0.04)] rounded-2xl px-6 sm:px-8 py-8 sm:py-10 flex flex-col gap-8">
              <p className="text-[16px] sm:text-[18px] font-semibold text-white leading-[1.3]">
                A curated mix of content types designed to build your influence and maximize engagement.
              </p>
              <div className="flex flex-col justify-between flex-1 gap-4 sm:gap-0">
                {contentTypes.map((item) => (
                  <div key={item.number} className="flex gap-[14px] items-center">
                    <div className="w-[42px] h-[42px] rounded-full bg-[#1F1F24] flex items-center justify-center shrink-0">
                      <span className="font-bold text-[16px] text-[#FF462E] font-['Inter']">
                        {item.number}
                      </span>
                    </div>
                    <p className="text-[14px] font-semibold text-white leading-[1.2]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Features + Dashboard */}
            <div className="flex-1 bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-2xl pt-10 px-6 sm:px-8 flex flex-col">
              {/* Features Grid */}
              <div className="flex flex-col sm:flex-row gap-3 pb-6 border-b border-[rgba(255,255,255,0.12)]">
                <div className="flex flex-col gap-3 flex-1">
                  {featuresLeft.map((feature, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <Image
                        src="/assets/ai-branding/planner/checkmark.svg"
                        alt=""
                        width={21}
                        height={21}
                        className="shrink-0"
                      />
                      <p className="text-[16px] sm:text-[18px] lg:text-[19.5px] font-medium text-white leading-[1.5] tracking-[-0.39px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  {featuresRight.map((feature, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <Image
                        src="/assets/ai-branding/planner/checkmark.svg"
                        alt=""
                        width={21}
                        height={21}
                        className="shrink-0"
                      />
                      <p className="text-[16px] sm:text-[18px] lg:text-[19.5px] font-medium text-white leading-[1.5] tracking-[-0.39px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Screenshot */}
              <div className="relative w-full aspect-[789/517] mt-6 rounded-t-xl overflow-hidden">
                <Image
                  src="/assets/ai-branding/planner/dashboard.png"
                  alt="Content Planner Dashboard"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
