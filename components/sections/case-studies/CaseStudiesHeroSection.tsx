import Image from 'next/image';

export default function CaseStudiesHeroSection() {
  return (
    <section className="relative w-full bg-white px-24 py-[100px] flex items-center justify-between overflow-hidden">
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
      <div className="relative z-10 w-[567px] flex flex-col gap-10">
        {/* Pill Label + Heading */}
        <div className="flex flex-col gap-4">
          {/* Pill Label */}
          <div className="inline-flex items-center self-start px-[15px] py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)]">
            <span className="font-['Montserrat'] text-[12px] font-normal tracking-[0.96px] uppercase text-[#ed6b52] leading-[15px]">
              CASE STUDIES
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Montserrat'] text-[60px] font-bold leading-[71.4px] tracking-[-2.04px]">
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
          <p className="font-['Montserrat'] text-[18px] font-normal leading-[1.5] text-[#444]">
            Someli helps mid-sized organizations turn employees into trusted brand advocates and measurable growth drivers
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center px-[28px] pr-10 py-4 rounded-full border border-[#ed6b52] text-[#ed6b52] font-['Montserrat'] text-[16px] font-bold leading-none">
              <span className="mr-3">•</span> Take a Product Tour
            </button>
            <button className="flex items-center justify-center px-[28px] pr-10 py-4 rounded-full text-[#ed6b52] font-['Montserrat'] text-[16px] font-bold leading-none">
              <span className="mr-3">•</span> Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Floating Stat Cards */}
      <div className="relative z-10 w-[525px] h-[371px]">
        {/* Background Decorative Vectors */}
        <Image
          src="/assets/case-studies/hero-vector-1.svg"
          alt=""
          width={374}
          height={320}
          className="absolute"
          style={{ left: '116px', top: '51px' }}
        />
        <Image
          src="/assets/case-studies/hero-vector-2.svg"
          alt=""
          width={263}
          height={205}
          className="absolute"
          style={{ left: '262px', top: '166px' }}
        />
        <Image
          src="/assets/case-studies/hero-vector-3.svg"
          alt=""
          width={12}
          height={26}
          className="absolute"
          style={{ left: '491px', top: '39px' }}
        />

        {/* Stat Card 1 - Gradient (Bottom Left) */}
        <div
          className="absolute w-[195px] p-[22.4px] rounded-[9px] bg-gradient-to-b from-[#df8251] to-[#d54050] flex flex-col gap-[9px]"
          style={{ left: '97px', top: '187px' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-['Montserrat'] text-[8.97px] font-normal leading-none tracking-[0.538px] uppercase text-white mb-[4.5px]">
                Total Reach
              </p>
              <p className="font-['Montserrat'] text-[23.5px] font-bold leading-[1.1] text-white">
                10X
              </p>
            </div>
            <div className="w-[39.2px] h-[39.2px] rounded-[7.5px] bg-[rgba(255,255,255,0.2)] flex items-center justify-center">
              <Image
                src="/assets/case-studies/stat-card-icon-group.svg"
                alt=""
                width={16}
                height={17}
              />
            </div>
          </div>
          <p className="font-['Montserrat'] text-[8.97px] font-medium leading-[1.5] tracking-[-0.179px] text-white">
            More than Company Pages
          </p>
        </div>

        {/* Stat Card 2 - White with Orange Border (Top Left) */}
        <div
          className="absolute w-[230px] p-[26.4px] rounded-[10.6px] bg-white border-[1.32px] border-[#df8251] flex flex-col gap-[10.6px]"
          style={{ left: '0', top: '54px' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-['Montserrat'] text-[10.56px] font-normal leading-none tracking-[0.634px] uppercase text-[#444] mb-[5.3px]">
                ENGAGEMENT RATE
              </p>
              <p className="font-['Montserrat'] text-[27.7px] font-bold leading-[1.1] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent">
                8.7X
              </p>
            </div>
            <div className="w-[46.2px] h-[46.2px]">
              <Image
                src="/assets/case-studies/stat-card-icon-1.svg"
                alt=""
                width={46}
                height={46}
              />
            </div>
          </div>
          <p className="font-['Montserrat'] text-[10.56px] font-medium leading-[1.5] tracking-[-0.211px] text-[#222]">
            Higher than Brand Channels
          </p>
        </div>

        {/* Stat Card 3 - White with Orange Border (Top Right) */}
        <div
          className="absolute w-[176px] p-[20.3px] rounded-[8.1px] bg-white border-[1.01px] border-[#df8251] flex flex-col gap-[8.1px]"
          style={{ left: '271px', top: '0' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-['Montserrat'] text-[8.11px] font-normal leading-none tracking-[0.486px] uppercase text-[#444] mb-[4.05px]">
                TRUST FACTOR
              </p>
              <p className="font-['Montserrat'] text-[21.3px] font-bold leading-[1.1] bg-gradient-to-b from-[#df8251] to-[#d54050] bg-clip-text text-transparent">
                2.4X
              </p>
            </div>
            <div className="w-[35.5px] h-[35.5px]">
              <Image
                src="/assets/case-studies/stat-card-icon-2.svg"
                alt=""
                width={36}
                height={36}
              />
            </div>
          </div>
          <p className="font-['Montserrat'] text-[8.11px] font-medium leading-[1.5] tracking-[-0.162px] text-[#222] w-[99px]">
            More trusted than Brand Posts
          </p>
        </div>
      </div>
    </section>
  );
}
