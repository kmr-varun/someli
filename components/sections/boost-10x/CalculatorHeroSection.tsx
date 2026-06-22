import Image from "next/image";

export default function CalculatorHeroSection() {
  return (
    <section className="w-full bg-white relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-16 sm:py-20 md:py-24 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Union pattern background - absolutely positioned */}
        <div className="absolute inset-0 pointer-events-none" style={{
          left: '-1.53%',
          right: '-1.53%',
          top: '-46.2%',
          bottom: '-46.36%'
        }}>
          <Image
            src="/assets/boost-10x/hero/union-pattern.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-8 lg:gap-[40px] w-full lg:w-[541px]">
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {/* Pill Label */}
              <div className="inline-flex items-center px-[15px] py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] w-fit">
                <p className="font-montserrat font-normal text-[12px] text-[#ed6b52] tracking-[0.96px] uppercase leading-[15px]">
                  REACH CALCULATOR
                </p>
              </div>

              {/* Heading */}
              <div className="pb-[0.67px]">
                <h1 className="font-montserrat font-bold text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] text-[#222] tracking-[-2.04px]">
                  <span className="bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent leading-[71.4px]">
                    Boost 10x Plan
                  </span>
                  <span className="leading-[71.4px]"> for Corporates</span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <p className="font-montserrat font-normal text-[16px] sm:text-[18px] text-[#444] leading-[1.5]">
              Turn your employees into powerful brand ambassadors on social media.
            </p>
          </div>

          {/* Right - Dashboard Mockup with Floating Cards */}
          <div className="relative w-full lg:w-auto flex-shrink-0">
            {/* Complex grid positioning for decorative vectors and dashboard */}
            <div className="relative inline-grid" style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
              {/* Vector 1 - Top right decorative */}
              <div className="relative" style={{
                gridColumn: 1,
                gridRow: 1,
                marginLeft: '356.89px',
                marginTop: '80px',
                width: '208.738px',
                height: '162.64px'
              }}>
                <Image
                  src="/assets/boost-10x/hero/vector-1.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Vector 2 - Middle decorative */}
              <div className="relative" style={{
                gridColumn: 1,
                gridRow: 1,
                marginLeft: '178.63px',
                marginTop: '11.95px',
                width: '374.539px',
                height: '319.994px'
              }}>
                <Image
                  src="/assets/boost-10x/hero/vector-2.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Vector 3 - Small top accent */}
              <div className="relative" style={{
                gridColumn: 1,
                gridRow: 1,
                marginLeft: '553.16px',
                marginTop: '0',
                width: '12.414px',
                height: '25.685px'
              }}>
                <Image
                  src="/assets/boost-10x/hero/vector-3.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Nested grid for dashboard and cards */}
              <div className="relative inline-grid" style={{
                gridColumn: 1,
                gridRow: 1,
                marginLeft: '0',
                marginTop: '58.32px',
                gridTemplateColumns: 'max-content',
                gridTemplateRows: 'max-content'
              }}>
                {/* Dashboard mockup */}
                <div className="relative overflow-hidden" style={{
                  gridColumn: 1,
                  gridRow: 1,
                  marginLeft: '0',
                  marginTop: '0',
                  width: '422.023px',
                  height: '364.062px'
                }}>
                  <div className="absolute pointer-events-none" style={{
                    width: '448.5px',
                    height: '560.7px',
                    left: '-6px',
                    top: '-102px'
                  }}>
                    <Image
                      src="/assets/boost-10x/hero/dashboard-mockup.png"
                      alt="Dashboard Preview"
                      width={449}
                      height={561}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Reach Card - Top right floating card */}
                <div
                  className="absolute bg-white border-[0.88px] border-[#df8251] rounded-[7.041px] px-[14.081px] py-[17.602px] flex flex-col gap-2"
                  style={{
                    gridColumn: 1,
                    gridRow: 1,
                    marginLeft: '434.63px',
                    marginTop: '125.43px',
                    width: '153.134px'
                  }}
                >
                  {/* Reach label and value */}
                  <div className="flex flex-col gap-[3.52px]">
                    <p className="font-montserrat font-normal text-[7.041px] text-[#444] tracking-[0.4224px] uppercase leading-none w-full">
                      REACH
                    </p>
                    <p className="font-montserrat font-bold text-[18.482px] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent leading-[1.1] w-full">
                      ↑4.2M
                    </p>
                  </div>

                  {/* Bar chart with CSS gradient bars */}
                  <div className="relative flex items-end gap-[7px] h-[60px] justify-center">
                    {/* Horizontal divider line */}
                    <div className="absolute bottom-0 left-[2.75px] w-[116px] h-[1px] bg-gradient-to-r from-[#df8251] to-[#d54050]" />

                    {/* Bar 1 */}
                    <div className="w-[18px] h-[23px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-[9px]" />

                    {/* Bar 2 */}
                    <div className="w-[18px] h-[29px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-[9px]" />

                    {/* Bar 3 */}
                    <div className="w-[18px] h-[35px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-[9px]" />

                    {/* Bar 4 */}
                    <div className="w-[18px] h-[44px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-[9px]" />

                    {/* Bar 5 */}
                    <div className="w-[18px] h-[60px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-[9px]" />
                  </div>
                </div>

                {/* Engagement Card - Bottom left floating card */}
                <div
                  className="absolute bg-white border-[0.655px] border-[#df8251] rounded-[5.244px] p-[7.327px] flex items-start gap-2 h-[69.534px]"
                  style={{
                    gridColumn: 1,
                    gridRow: 1,
                    marginLeft: '172.63px',
                    marginTop: '284.87px',
                    width: '115.262px'
                  }}
                >
                  <div className="flex flex-col gap-[2.622px]">
                    <p className="font-montserrat font-normal text-[5.244px] text-[#444] tracking-[0.3146px] uppercase leading-none w-full">
                      ENGAGEMENT
                    </p>
                    <p className="font-montserrat font-bold text-[13.765px] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent leading-[1.1] w-full">
                      ↑80%
                    </p>
                  </div>
                  {/* Small line chart - positioned to the right */}
                  <div className="relative w-[58px] h-[55px]">
                    <Image
                      src="/assets/boost-10x/hero/engagement-chart.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
