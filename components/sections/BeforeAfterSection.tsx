import Image from 'next/image';

export default function BeforeAfterSection() {
  return (
    <section className="relative w-full bg-white px-24 py-[120px] overflow-hidden">
      {/* Union pattern background */}
      <Image
        src="/assets/before-after/union-background.png"
        alt=""
        fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto flex items-center justify-between gap-16">
        {/* Left content */}
        <div className="flex flex-col gap-6 w-[470px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                {/* Pill label */}
                <div className="inline-flex items-center self-start px-[15px] py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)]">
                  <span className="font-['Space_Grotesk'] text-[12px] font-normal tracking-[0.96px] uppercase text-[#ED6B52] leading-[15px]">
                    Visible Growth
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-bold text-[60px] leading-[71.4px] tracking-[-2px] text-black">
                  From invisible to in-demand
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-[18px] leading-[1.5] text-[#444444]">
              See how professionals and teams are{' '}
              <span className="font-bold">transforming</span> their LinkdIn presence with{' '}
              <span className="font-bold">Someli AI</span>
            </p>
          </div>

          {/* CTA button */}
          <button className="inline-flex items-center self-start px-7 py-4 rounded-full border-2 border-[#ED6B52] text-[#ED6B52] font-bold text-[16px] hover:bg-[#ED6B52] hover:text-white transition-colors duration-300">
            • See How it Works →
          </button>
        </div>

        {/* Right content - Overlapping cards */}
        <div className="relative flex items-center w-[592px] h-[380px]">
          {/* Before Someli card */}
          <div className="absolute left-0 top-[50px] w-[278.72px] bg-white border-[2.23px] border-[#DF8251] rounded-[22.3px] px-[31.22px] py-[44.6px] flex flex-col gap-[35.68px] z-10">
            <h3 className="font-medium text-[24.53px] leading-none tracking-[-0.49px] text-black">
              Before Someli
            </h3>

            <div className="flex flex-col gap-[11.15px]">
              <div className="flex items-center gap-[13.38px]">
                <Image
                  src="/assets/before-after/x-icon.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="shrink-0"
                />
                <p className="font-normal text-[15.61px] leading-[1.5] tracking-[-0.31px] text-[#5F5F5F]">
                  Irregular posting
                </p>
              </div>

              <div className="flex items-center gap-[13.38px]">
                <Image
                  src="/assets/before-after/x-icon.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="shrink-0"
                />
                <p className="font-normal text-[15.61px] leading-[1.5] tracking-[-0.31px] text-[#5F5F5F]">
                  Low engagement
                </p>
              </div>

              <div className="flex items-center gap-[13.38px]">
                <Image
                  src="/assets/before-after/x-icon.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="shrink-0"
                />
                <p className="font-normal text-[15.61px] leading-[1.5] tracking-[-0.31px] text-[#5F5F5F]">
                  Limited reach
                </p>
              </div>

              <div className="flex items-center gap-[13.38px]">
                <Image
                  src="/assets/before-after/x-icon.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="shrink-0"
                />
                <p className="font-normal text-[15.61px] leading-[1.5] tracking-[-0.31px] text-[#5F5F5F]">
                  No personal branding
                </p>
              </div>
            </div>
          </div>

          {/* After Someli card - overlapping on the right */}
          <div className="absolute right-0 top-0 w-[348.96px] bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[22.3px] px-[35.68px] py-[55.83px] flex flex-col gap-[44.67px] z-20">
            <h3 className="font-medium text-[30.71px] leading-none tracking-[-0.61px] text-white">
              After Someli
            </h3>

            <div className="flex flex-col gap-[13.96px]">
              <div className="flex items-center gap-[16.75px]">
                <Image
                  src="/assets/before-after/check-icon.svg"
                  alt=""
                  width={21}
                  height={21}
                  className="shrink-0"
                />
                <p className="font-normal text-[19.54px] leading-[1.5] tracking-[-0.39px] text-white">
                  Daily high impact content
                </p>
              </div>

              <div className="flex items-center gap-[16.75px]">
                <Image
                  src="/assets/before-after/check-icon.svg"
                  alt=""
                  width={21}
                  height={21}
                  className="shrink-0"
                />
                <p className="font-normal text-[19.54px] leading-[1.5] tracking-[-0.39px] text-white">
                  3-5x more impressions
                </p>
              </div>

              <div className="flex items-center gap-[16.75px]">
                <Image
                  src="/assets/before-after/check-icon.svg"
                  alt=""
                  width={21}
                  height={21}
                  className="shrink-0"
                />
                <p className="font-normal text-[19.54px] leading-[1.5] tracking-[-0.39px] text-white">
                  Stronger authority
                </p>
              </div>

              <div className="flex items-center gap-[16.75px]">
                <Image
                  src="/assets/before-after/check-icon.svg"
                  alt=""
                  width={21}
                  height={21}
                  className="shrink-0"
                />
                <p className="font-normal text-[19.54px] leading-[1.5] tracking-[-0.39px] text-white">
                  Inbound opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
