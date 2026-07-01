import Image from "next/image";

interface ResultsDisplaySectionProps {
  currentReach?: number;
  employeesReach?: number;
  totalPotentialReach?: number;
  absoluteIncrease?: number;
  percentageIncrease?: number;
}

export default function ResultsDisplaySection({
  currentReach = 3600,
  employeesReach = 9000,
  totalPotentialReach = 12600,
  absoluteIncrease = 3600,
  percentageIncrease = 99.8,
}: ResultsDisplaySectionProps) {
  // Calculate bar widths for visual comparison (proportional)
  const currentReachBarWidth = (currentReach / totalPotentialReach) * 100;
  const potentialReachBarWidth = 100;

  return (
    <section className="w-full relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-16 sm:py-20 md:py-24 lg:py-[100px]">
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#0D0D0D]" />
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <div className="absolute w-full h-[152.33%] left-[-0.03%] top-[-2.88%]">
            <Image
              src="/assets/boost-10x/results-background.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-[56px] items-center">
          {/* Heading */}
          <h2 className="font-montserrat font-bold text-[40px] sm:text-[48px] lg:text-[60px] text-white text-center tracking-[-2px] leading-[71.4px]">
            Results
          </h2>

          {/* Results Cards */}
          <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-[32px]">
            {/* Top Row - Current vs Potential */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-[20px]">
              {/* Current Reach Card */}
              <div className="flex-1 glass-border-card bg-[rgba(255,255,255,0.04)] rounded-[16px] px-6 sm:px-8 lg:px-[32px] py-8 sm:py-10 lg:py-[40px] flex flex-col gap-6 sm:gap-8 lg:gap-[32px] min-h-[300px] sm:min-h-[350px]">
                <h3 className="font-montserrat font-semibold text-[20px] sm:text-[22px] lg:text-[24px] text-white leading-none">
                  Current Reach
                </h3>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col gap-3 lg:gap-[12px] pb-6 border-b border-[rgba(255,255,255,0.2)]">
                    <p className="font-montserrat font-medium text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.5]">
                      Brand's Current Monthly Reach
                    </p>
                    <p className="font-montserrat font-bold text-[28px] sm:text-[32px] text-transparent bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text leading-[1.1]">
                      {currentReach.toLocaleString()}
                    </p>
                  </div>

                  <p className="font-montserrat font-normal text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.5] mt-auto">
                    Calculated as: Total Brand Followers × 10% Reach Rate × Number of Posts per Month
                  </p>
                </div>
              </div>

              {/* Potential with Someli Card - Gradient */}
              <div className="flex-1 bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-[16px] px-6 sm:px-8 lg:px-[32px] py-8 sm:py-10 lg:py-[40px] flex flex-col gap-6 sm:gap-8 lg:gap-[32px]">
                <h3 className="font-montserrat font-semibold text-[20px] sm:text-[22px] lg:text-[24px] text-white leading-none">
                  Potential with Someli Boost 10X
                </h3>

                <div className="flex flex-col gap-5 sm:gap-6 lg:gap-[24px]">
                  {/* Employees' Reach */}
                  <div className="flex flex-col gap-3 lg:gap-[12px] pb-6 border-b border-[rgba(255,255,255,0.12)]">
                    <div className="flex items-center gap-2">
                      <p className="font-montserrat font-medium text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.5]">
                        Employees' Potential Monthly Reach
                      </p>
                      <Image
                        src="/assets/boost-10x/info-icon.svg"
                        alt="Info"
                        width={12}
                        height={12}
                      />
                    </div>
                    <p className="font-montserrat font-bold text-[36px] sm:text-[42px] text-white leading-[1.1]">
                      {employeesReach.toLocaleString()}
                    </p>
                  </div>

                  {/* Total Potential Reach */}
                  <div className="flex flex-col gap-3 lg:gap-[12px]">
                    <div className="flex items-center gap-2">
                      <p className="font-montserrat font-medium text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.5]">
                        Total Potential Reach
                      </p>
                      <Image
                        src="/assets/boost-10x/info-icon.svg"
                        alt="Info"
                        width={12}
                        height={12}
                      />
                    </div>
                    <p className="font-montserrat font-bold text-[36px] sm:text-[42px] text-white leading-[1.1]">
                      {totalPotentialReach.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gap Analysis Card */}
            <div className="w-full glass-border-card bg-[rgba(255,255,255,0.04)] rounded-[16px] px-6 sm:px-8 lg:px-[32px] py-8 sm:py-10 lg:py-[40px]">
              <h3 className="font-montserrat font-semibold text-[20px] sm:text-[22px] lg:text-[24px] text-white leading-none mb-6 sm:mb-8 lg:mb-[32px]">
                Gap Analysis
              </h3>

              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px]">
                {/* Metrics Row */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 lg:gap-[12px] pb-6 border-b border-[rgba(255,255,255,0.2)]">
                  {/* Absolute Increase */}
                  <div className="flex-1 flex flex-col gap-3 lg:gap-[12px]">
                    <p className="font-montserrat font-medium text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.5]">
                      Absolute Increase in Reach
                    </p>
                    <p className="font-montserrat font-bold text-[28px] sm:text-[32px] text-transparent bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text leading-[1.1]">
                      {absoluteIncrease.toLocaleString()}
                    </p>
                  </div>

                  {/* Percentage Increase */}
                  <div className="flex-1 flex flex-col gap-3 lg:gap-[12px]">
                    <p className="font-montserrat font-medium text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.5]">
                      Percentage Increase
                    </p>
                    <p className="font-montserrat font-bold text-[28px] sm:text-[32px] text-transparent bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text leading-[1.1]">
                      {percentageIncrease}%
                    </p>
                  </div>
                </div>

                {/* Visual Comparison Bars */}
                <div className="flex flex-col gap-4 lg:gap-[16px]">
                  {/* Current Reach Bar */}
                  <div className="flex items-center gap-6 sm:gap-8 lg:gap-[32px]">
                    <p className="font-montserrat font-normal text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.5] w-[120px] sm:w-[166px] flex-shrink-0">
                      Current Reach
                    </p>
                    <div className="flex-1 bg-[rgba(255,255,255,0.08)] rounded-[8px] overflow-hidden h-[42px] sm:h-[48px]">
                      <div
                        className="h-full bg-gradient-to-b from-[#df8251] to-[#d54050] flex items-center px-4"
                        style={{ width: `${currentReachBarWidth}%` }}
                      >
                        <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-white leading-[1.1]">
                          {currentReach.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Potential Reach Bar */}
                  <div className="flex items-center gap-6 sm:gap-8 lg:gap-[32px]">
                    <p className="font-montserrat font-normal text-[14px] sm:text-[16px] text-white tracking-[-0.32px] leading-[1.5] w-[120px] sm:w-[166px] flex-shrink-0">
                      Potential Reach
                    </p>
                    <div className="flex-1 bg-[rgba(255,255,255,0.08)] rounded-[8px] overflow-hidden h-[42px] sm:h-[48px]">
                      <div
                        className="h-full bg-gradient-to-b from-[#df8251] to-[#d54050] flex items-center px-4"
                        style={{ width: `${potentialReachBarWidth}%` }}
                      >
                        <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-white leading-[1.1]">
                          {totalPotentialReach.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-black border border-[#ed6b52] rounded-full px-7 sm:px-10 lg:pl-[28px] lg:pr-[40px] py-4 font-montserrat font-semibold text-[14px] sm:text-[16px] text-[#ed6b52] hover:bg-[#ed6b52] hover:text-white transition-colors duration-300 flex items-center gap-2">
            <span>Start your 14-Day FREE Trial Now! →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
