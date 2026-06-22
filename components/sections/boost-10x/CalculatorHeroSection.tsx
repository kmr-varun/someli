import Image from "next/image";

export default function CalculatorHeroSection() {
  return (
    <section className="w-full bg-white relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Union pattern background - absolutely positioned */}
        <div className="absolute inset-0 pointer-events-none opacity-30 md:opacity-50" style={{
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

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[40px] w-full lg:w-[541px] text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
              {/* Pill Label */}
              <div className="inline-flex items-center px-3 sm:px-4 md:px-[15px] py-[6px] md:py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] w-fit">
                <p className="font-montserrat font-normal text-[10px] sm:text-[11px] md:text-[12px] text-[#ed6b52] tracking-[0.8px] sm:tracking-[0.96px] uppercase leading-[15px]">
                  REACH CALCULATOR
                </p>
              </div>

              {/* Heading */}
              <div className="pb-[0.67px]">
                <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] text-[#222] tracking-[-1.5px] sm:tracking-[-2.04px] leading-[1.2]">
                  <span className="bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent">
                    Boost 10x Plan
                  </span>
                  <span> for Corporates</span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <p className="font-montserrat font-normal text-[14px] sm:text-[16px] md:text-[18px] text-[#444] leading-[1.5] max-w-md lg:max-w-none">
              Turn your employees into powerful brand ambassadors on social media.
            </p>
          </div>

          {/* Right - Dashboard Mockup - Simplified for mobile */}
          <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-auto flex-shrink-0 hidden lg:block">
            {/* Desktop version - complex layout */}
            <div className="relative" style={{ width: '600px', height: '450px' }}>
              {/* Decorative vectors */}
              <div className="absolute" style={{ left: '60%', top: '15%', width: '35%', height: '36%', opacity: 0.7 }}>
                <Image src="/assets/boost-10x/hero/vector-1.svg" alt="" fill className="object-contain" />
              </div>
              <div className="absolute" style={{ left: '30%', top: '2%', width: '63%', height: '71%', opacity: 0.5 }}>
                <Image src="/assets/boost-10x/hero/vector-2.svg" alt="" fill className="object-contain" />
              </div>
              <div className="absolute" style={{ left: '92%', top: '0', width: '20px', height: '26px' }}>
                <Image src="/assets/boost-10x/hero/vector-3.svg" alt="" fill className="object-contain" />
              </div>

              {/* Dashboard */}
              <div className="absolute" style={{ left: '0', top: '13%', width: '70%', height: '81%' }}>
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image src="/assets/boost-10x/hero/dashboard-mockup.png" alt="Dashboard" fill className="object-cover object-top" />
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute bg-white border border-[#df8251] rounded-lg p-3 shadow-lg" style={{ left: '72%', top: '28%', width: '160px' }}>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="font-montserrat font-normal text-[8px] text-[#444] tracking-wider uppercase">REACH</p>
                    <p className="font-montserrat font-bold text-[20px] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent">↑4.2M</p>
                  </div>
                  <div className="flex items-end gap-1 h-[60px]">
                    <div className="w-4 h-[23px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-lg" />
                    <div className="w-4 h-[29px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-lg" />
                    <div className="w-4 h-[35px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-lg" />
                    <div className="w-4 h-[44px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-lg" />
                    <div className="w-4 h-[60px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-t-lg" />
                  </div>
                </div>
              </div>

              <div className="absolute bg-white border border-[#df8251] rounded-lg p-2 flex items-start gap-2 shadow-lg" style={{ left: '28%', top: '64%', width: '120px' }}>
                <div>
                  <p className="font-montserrat font-normal text-[7px] text-[#444] tracking-wider uppercase">ENGAGEMENT</p>
                  <p className="font-montserrat font-bold text-[16px] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent">↑80%</p>
                </div>
                <div className="relative w-[50px] h-[45px]">
                  <Image src="/assets/boost-10x/hero/engagement-chart.svg" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet version - simplified */}
          <div className="relative w-full max-w-[400px] lg:hidden">
            <div className="relative w-full aspect-square">
              <Image
                src="/assets/boost-10x/hero/dashboard-mockup.png"
                alt="Dashboard Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
