import Image from 'next/image';

export default function CaseStudiesHeroSection() {
  return (
    <section className="relative w-full bg-white px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 overflow-hidden">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '46px 46px'
        }}
      />

      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-[567px] flex flex-col gap-8 lg:gap-10">
        {/* Pill Label + Heading */}
        <div className="flex flex-col gap-4">
          {/* Pill Label */}
          <div className="inline-flex items-center self-start px-[15px] py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)]">
            <span className="font-['Montserrat'] text-[12px] font-normal tracking-[0.96px] uppercase text-[#ed6b52] leading-[15px]">
              CASE STUDIES
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Montserrat'] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold leading-[1.19] tracking-[-0.04em]">
            <span className="text-[#222] block mb-0">Real results,</span>
            <span
              className="block bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent"
            >
              real impact.
            </span>
          </h1>
        </div>

        {/* Description + CTAs */}
        <div className="flex flex-col gap-6">
          <p className="font-['Montserrat'] text-[16px] md:text-[18px] font-normal leading-[1.5] text-[#444]">
            Someli helps mid-sized organizations turn employees into trusted brand advocates and measurable growth drivers
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">
            <button className="flex items-center justify-center px-[28px] pr-10 py-4 rounded-full border border-[#ed6b52] text-[#ed6b52] font-['Montserrat'] text-[14px] md:text-[16px] font-bold leading-none whitespace-nowrap hover:bg-[#ED6B52] hover:text-white transition-colors">
              <span className="mr-3">•</span> Take a Product Tour
            </button>
            <button className="flex items-center justify-center px-[28px] pr-10 py-4 rounded-full text-[#ed6b52] font-['Montserrat'] text-[14px] md:text-[16px] font-bold leading-none whitespace-nowrap">
              <span className="mr-3">•</span> Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Floating Stat Cards */}
      <div className="relative z-10 w-full lg:w-[525px] h-[280px] sm:h-[320px] lg:h-[371px] flex-shrink-0">
        {/* Background Decorative Vectors - Hidden on mobile */}
        <Image
          src="/assets/case-studies/hero-vector-1.svg"
          alt=""
          width={374}
          height={320}
          className="absolute hidden lg:block"
          style={{ left: '22%', top: '14%' }}
        />
        <Image
          src="/assets/case-studies/hero-vector-2.svg"
          alt=""
          width={263}
          height={205}
          className="absolute hidden lg:block"
          style={{ left: '50%', top: '45%' }}
        />
        <Image
          src="/assets/case-studies/hero-vector-3.svg"
          alt=""
          width={12}
          height={26}
          className="absolute hidden lg:block"
          style={{ left: '94%', top: '10%' }}
        />

        {/* Stat Card 1 - Gradient (Bottom Left) */}
        <div
          className="absolute w-[140px] sm:w-[160px] lg:w-[195px] p-[16px] sm:p-[20px] lg:p-[22.4px] rounded-[9px] bg-gradient-to-b from-[#df8251] to-[#d54050] flex flex-col gap-[6px] lg:gap-[9px]"
          style={{ left: '18.5%', top: '50.4%' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-['Montserrat'] text-[7px] sm:text-[8px] lg:text-[8.97px] font-normal leading-none tracking-[0.538px] uppercase text-white mb-[3px] lg:mb-[4.5px]">
                Total Reach
              </p>
              <p className="font-['Montserrat'] text-[18px] sm:text-[20px] lg:text-[23.5px] font-bold leading-[1.1] text-white">
                10X
              </p>
            </div>
            <div className="w-[28px] sm:w-[34px] lg:w-[39.2px] h-[28px] sm:h-[34px] lg:h-[39.2px] rounded-[7.5px] bg-[rgba(255,255,255,0.2)] flex items-center justify-center flex-shrink-0">
              <div className="relative w-[12px] sm:w-[14px] lg:w-[15.614px] h-[13px] sm:h-[15px] lg:h-[17.349px]">
                <Image
                  src="/assets/case-studies/stat-card-icon-group.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <p className="font-['Montserrat'] text-[7px] sm:text-[8px] lg:text-[8.97px] font-medium leading-[1.5] tracking-[-0.179px] text-white">
            More than Company Pages
          </p>
        </div>

        {/* Stat Card 2 - White with Orange Border (Top Left) */}
        <div
          className="absolute w-[165px] sm:w-[190px] lg:w-[230px] p-[18px] sm:p-[22px] lg:p-[26.4px] rounded-[10.6px] bg-white border-[1.32px] border-[#df8251] flex flex-col gap-[8px] lg:gap-[10.6px]"
          style={{ left: '0', top: '14.6%' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-['Montserrat'] text-[8px] sm:text-[9px] lg:text-[10.56px] font-normal leading-none tracking-[0.634px] uppercase text-[#444] mb-[4px] lg:mb-[5.3px]">
                ENGAGEMENT RATE
              </p>
              <p className="font-['Montserrat'] text-[20px] sm:text-[24px] lg:text-[27.7px] font-bold leading-[1.1] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent">
                8.7X
              </p>
            </div>
            <div className="w-[34px] sm:w-[40px] lg:w-[46.2px] h-[34px] sm:h-[40px] lg:h-[46.2px] flex-shrink-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/case-studies/stat-card-icon-1.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <p className="font-['Montserrat'] text-[8px] sm:text-[9px] lg:text-[10.56px] font-medium leading-[1.5] tracking-[-0.211px] text-[#222]">
            Higher than Brand Channels
          </p>
        </div>

        {/* Stat Card 3 - White with Orange Border (Top Right) */}
        <div
          className="absolute w-[130px] sm:w-[150px] lg:w-[176px] p-[14px] sm:p-[18px] lg:p-[20.3px] rounded-[8.1px] bg-white border-[1.01px] border-[#df8251] flex flex-col gap-[6px] lg:gap-[8.1px]"
          style={{ left: '51.6%', top: '0' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-['Montserrat'] text-[6.5px] sm:text-[7.5px] lg:text-[8.11px] font-normal leading-none tracking-[0.486px] uppercase text-[#444] mb-[3px] lg:mb-[4.05px]">
                TRUST FACTOR
              </p>
              <p className="font-['Montserrat'] text-[16px] sm:text-[19px] lg:text-[21.3px] font-bold leading-[1.1] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent">
                2.4X
              </p>
            </div>
            <div className="w-[26px] sm:w-[30px] lg:w-[35.5px] h-[26px] sm:h-[30px] lg:h-[35.5px] flex-shrink-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/case-studies/stat-card-icon-2.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <p className="font-['Montserrat'] text-[6.5px] sm:text-[7.5px] lg:text-[8.11px] font-medium leading-[1.5] tracking-[-0.162px] text-[#222]">
            More trusted than Brand Posts
          </p>
        </div>
      </div>
    </section>
  );
}
