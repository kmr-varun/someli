import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white relative w-full overflow-clip px-24 py-[100px]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left Column: Content */}
        <div className="flex flex-col gap-10 w-[611px]">
          {/* Pill Label + Heading */}
          <div className="flex flex-col gap-4 w-full">
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] inline-flex items-center px-[15px] py-[7px] rounded-full w-fit">
              <p className="text-[#ed6b52] text-[12px] font-normal tracking-[0.96px] uppercase leading-[15px]">
                HOW SOMELI WORKS
              </p>
            </div>

            <div className="flex flex-col pb-[0.67px] w-full">
              <h1 className="text-[#222] text-[60px] font-bold tracking-[-2.04px]">
                <span className="block leading-[71.4px] mb-0">One platform.</span>
                <span className="block leading-[71.4px] mb-0">Three layers.</span>
                <span className="block leading-[71.4px] bg-clip-text text-transparent bg-gradient-to-b from-[#df8251] to-[#d54050]">
                  Exponential impact.
                </span>
              </h1>
            </div>
          </div>

          {/* Subtext + CTAs */}
          <div className="flex flex-col gap-6 w-full">
            <p className="text-[#444] text-[18px] font-normal leading-[1.5]">
              Someili turns your brand into a global employee advocacy engine from strategy to content to measurable impact, all in one seamless workflow
            </p>

            <div className="flex gap-2 items-center">
              <button className="border border-[#ed6b52] text-[#ed6b52] font-bold text-[16px] pl-7 pr-10 py-4 rounded-full leading-none">
                • Take a Product Tour
              </button>
              <button className="text-[#ed6b52] font-bold text-[16px] pl-7 pr-10 py-4 rounded-full leading-none">
                • Book a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Background Pattern - positioned absolutely */}
        <div className="absolute inset-[-32.39%_-1.53%_-32.58%_-1.53%] pointer-events-none">
          <Image
            src="/assets/how-someli-works/hero/union-bg.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Right Column: Isometric 3-Layer Visualization */}
        <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-0">
          {/* Background Arrow Path */}
          <div className="col-1 row-1 relative w-[407.97px] h-[366.835px] ml-0 mt-0">
            <Image
              src="/assets/how-someli-works/hero/arrow-path.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Layer 01: Brand Intelligence */}
          <div className="col-1 row-1 relative flex items-center w-[397.001px] ml-[115px] mt-[31.61px]">
            <div className="relative w-[118.593px] h-[102.705px] mr-[-19px] shrink-0">
              <Image
                src="/assets/how-someli-works/hero/pill-group.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[297.407px] h-[99.434px] shrink-0">
              <Image
                src="/assets/how-someli-works/hero/pill-shape.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute left-[152px] top-[24.52px] flex flex-col gap-[3px] text-white">
              <p className="text-[30px] font-bold tracking-[-0.6px] leading-none">01</p>
              <p className="text-[14px] font-normal tracking-[-0.28px] leading-[1.5]">Brand intelligence layer</p>
            </div>
            <div className="absolute left-[41px] top-[33.22px] w-[36px] h-[36px]">
              <div className="absolute inset-[-2.78%]">
                <Image
                  src="/assets/how-someli-works/hero/icon-brand-intelligence.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Layer 02: AI Content Engine */}
          <div className="col-1 row-1 relative flex items-center w-[397.001px] ml-[36px] mt-[158.32px]">
            <div className="relative w-[118.593px] h-[102.705px] mr-[-19px] shrink-0">
              <Image
                src="/assets/how-someli-works/hero/pill-group.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[297.407px] h-[99.434px] shrink-0">
              <Image
                src="/assets/how-someli-works/hero/pill-shape.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute left-[153px] top-[24.52px] flex flex-col gap-[3px] text-white">
              <p className="text-[30px] font-bold tracking-[-0.6px] leading-none">02</p>
              <p className="text-[14px] font-normal tracking-[-0.28px] leading-[1.5]">AI Content Engine</p>
            </div>
            <div className="absolute left-[43px] top-[35.52px] w-[32px] h-[32px]">
              <Image
                src="/assets/how-someli-works/hero/icon-content-engine.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Layer 03: Distribution & Insights */}
          <div className="col-1 row-1 relative flex items-center w-[397.001px] ml-[115px] mt-[285.02px]">
            <div className="relative w-[118.593px] h-[102.705px] mr-[-19px] shrink-0">
              <Image
                src="/assets/how-someli-works/hero/pill-group.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[297.407px] h-[99.434px] shrink-0">
              <Image
                src="/assets/how-someli-works/hero/pill-shape.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute left-[152px] top-[24.52px] flex flex-col gap-[3px] text-white">
              <p className="text-[30px] font-bold tracking-[-0.6px] leading-none">03</p>
              <p className="text-[14px] font-normal tracking-[-0.28px] leading-[1.5]">Distribution and Insights Layer</p>
            </div>
            <div className="absolute left-[40px] top-[33.81px] w-[38px] h-[36px]">
              <div className="absolute inset-[-2.08%_-1.97%]">
                <Image
                  src="/assets/how-someli-works/hero/icon-distribution.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
