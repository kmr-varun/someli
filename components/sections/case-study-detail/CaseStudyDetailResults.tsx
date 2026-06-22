import Image from 'next/image';

const statsLeft = [
  { label: "Brand's Current Monthly Reach", value: '3,600' },
  { label: "Brand's Current Monthly Reach", value: '3,600' },
  { label: "Brand's Current Monthly Reach", value: '3,600' },
  { label: "Brand's Current Monthly Reach", value: '3,600' },
];

export default function CaseStudyDetailResults() {
  return (
    <section id="results" className="relative w-full overflow-clip px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-[100px]">
      {/* Dark background with pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#111]" />
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <Image
            src="/assets/case-study-detail/results-bg.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: 'left -0.03% top -2.88%' }}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-8 md:gap-10 lg:gap-14 items-center justify-center w-full">
        {/* Heading */}
        <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white tracking-[-2px] leading-[1.19] text-center w-full">
          The Results
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch w-full">
          {/* Left column - Stats list */}
          <div className="glass-border-card bg-[rgba(255,255,255,0.04)] rounded-[16px] px-6 sm:px-7 lg:px-8 py-8 lg:py-10 w-full lg:w-[375px] flex flex-col gap-6 lg:gap-8 shrink-0">
            <p className="font-montserrat font-semibold text-[18px] text-white leading-[1.3]">
              Within 12 Months of Launching their platform with Someli
            </p>
            {statsLeft.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 pb-6 border-b border-[rgba(255,255,255,0.2)]"
              >
                <p className="font-montserrat font-medium text-[16px] text-white tracking-[-0.32px] leading-[1.5]">
                  {stat.label}
                </p>
                <p className="font-montserrat font-bold text-[32px] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent leading-[1.1]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Right column - Potential with chart */}
          <div className="flex-1 min-w-px bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-[16px] px-6 sm:px-7 lg:px-8 py-8 lg:py-10 flex flex-col gap-6 lg:gap-8 self-stretch">
            <p className="font-montserrat font-semibold text-[24px] text-white leading-none">
              Potential with Someli Boost 10X
            </p>

            <div className="flex flex-col gap-6">
              {/* Employees Reach */}
              <div className="flex flex-col gap-3 pb-6 border-b border-[rgba(255,255,255,0.12)]">
                <div className="flex gap-2 items-center">
                  <p className="font-montserrat font-medium text-[16px] text-white tracking-[-0.32px] leading-[1.5]">
                    Employees&apos; Potential Monthly Reach
                  </p>
                  <div className="relative w-3 h-3">
                    <Image
                      src="/assets/case-study-detail/info-icon.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-montserrat font-bold text-[42px] text-white leading-[1.1]">
                  9,000
                </p>
              </div>

              {/* Total Reach */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <p className="font-montserrat font-medium text-[16px] text-white tracking-[-0.32px] leading-[1.5]">
                    Total Potential Reach
                  </p>
                  <div className="relative w-3 h-3">
                    <Image
                      src="/assets/case-study-detail/info-icon.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-montserrat font-bold text-[42px] text-white leading-[1.1]">
                  12,600
                </p>
              </div>
            </div>

            {/* Chart image */}
            <div className="relative w-full h-[242.515px] overflow-hidden">
              <Image
                src="/assets/case-study-detail/chart.png"
                alt="Growth chart"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
