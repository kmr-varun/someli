import Image from 'next/image';

export default function CaseStudyDetailClientSays() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
      {/* Union decorative pattern */}
      <div className="absolute inset-[-44.18%_-1.53%_-41.46%_-1.53%]">
        <Image
          src="/assets/case-study-detail/client-union-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Left side - "Our Client Says" text (outline) */}
      <div className="relative z-10 flex items-center w-full lg:w-[541px]">
        <h2 className="font-montserrat font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] tracking-[2px] leading-none outlined-text-orange">
          Our Client Says
        </h2>
      </div>

      {/* Right side - Testimonial card */}
      <div className="relative z-10 flex-1 min-w-px">
        <div className="bg-white border border-[#df8251] rounded-lg p-6 sm:p-8 lg:p-[40.435px] flex flex-col gap-6 lg:gap-[30.326px]">
          {/* Top section - quote icon and text */}
          <div className="flex flex-col items-start justify-between flex-1 min-h-px w-full">
            {/* Quote icon */}
            <div className="flex items-center justify-center mb-[30px]">
              <div className="rotate-180">
                <div className="relative w-[34.117px] h-[24.008px]">
                  <Image
                    src="/assets/case-study-detail/quote-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Quote text */}
            <p className="font-['Space_Grotesk'] font-normal text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-[#444] leading-[1.5]">
              Most founders think growth comes from ads. It doesn&apos;t. It comes from consistent visibility.
            </p>
          </div>

          {/* Bottom section - Author info */}
          <div className="flex items-center justify-between pt-[10.109px] border-t-[1.264px] border-[rgba(0,0,0,0.1)] w-full">
            <div className="flex gap-[10.109px] items-center">
              <div className="relative w-[53.071px] h-[55.598px]">
                <Image
                  src="/assets/case-study-detail/client-avatar.png"
                  alt="Ananya Sharma"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[4px] w-[151.252px]">
                <div className="flex gap-[4px] items-center text-[#444] whitespace-nowrap">
                  <p className="font-['Space_Grotesk'] font-normal text-[16px] leading-normal">
                    Ananya Sharma
                  </p>
                  <p className="font-['Space_Grotesk'] font-light text-[8px] leading-normal">
                    1 month
                  </p>
                </div>
                <p className="font-['Space_Grotesk'] font-normal text-[8px] text-[#888] leading-normal">
                  Founder &amp; CEO
                </p>
              </div>
            </div>

            {/* Company logo */}
            <div className="flex items-center self-stretch">
              <div className="relative h-full aspect-square rounded-[6.318px] overflow-hidden">
                <Image
                  src="/assets/case-study-detail/client-logo.png"
                  alt="Company logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
