import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BeforeAfterSection() {
  return (
    <section className="relative w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] overflow-hidden">
      {/* Union pattern background */}
      <Image
        src="/assets/before-after/union-background.png"
        alt=""
        fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-14 lg:gap-16">
        {/* Left content */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:w-[470px]">
          <SectionHeader
            pill="Visible Growth"
            heading="From invisible to in-demand"
            description={<>See how professionals and teams are{' '}<span className="font-bold">transforming</span> their LinkedIn presence with{' '}<span className="font-bold">Someli AI</span></>}
          />

          {/* CTA button */}
          <button className="inline-flex items-center self-start px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-[#ED6B52] text-[#ED6B52] font-bold text-[14px] sm:text-[15px] md:text-[16px] hover:bg-[#ED6B52] hover:text-white transition-colors duration-300">
            See How it Works →
          </button>
        </div>

        {/* Right content - Overlapping cards */}
        {/* Mobile: stacked vertically with overlap, centered. Tablet+: side by side with absolute positioning */}
        <div className="relative flex flex-col items-center md:block w-full md:w-[592px] md:h-[380px]">
          {/* Before Someli card */}
          <div className="relative md:absolute md:left-0 md:top-[50px] w-[75%] sm:w-[70%] md:w-[278.72px] bg-white border-[2px] md:border-[2.23px] border-[#DF8251] rounded-[20px] md:rounded-[22.3px] px-5 sm:px-6 md:px-[31.22px] py-8 sm:py-9 md:py-[44.6px] flex flex-col gap-6 sm:gap-7 md:gap-[35.68px] z-10">
            <h3 className="font-medium text-[20px] sm:text-[22px] md:text-[24.53px] leading-none tracking-[-0.4px] md:tracking-[-0.49px] text-black">
              Before Someli
            </h3>

            <div className="flex flex-col gap-[10px] md:gap-[11.15px]">
              {['Irregular posting', 'Low engagement', 'Limited reach', 'No personal branding'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-[13.38px]">
                  <Image
                    src="/assets/before-after/x-icon.svg"
                    alt=""
                    width={9}
                    height={9}
                    className="shrink-0 w-[8px] sm:w-[9px]"
                  />
                  <p className="font-normal text-[13px] sm:text-[14px] md:text-[15.61px] leading-[1.5] tracking-[-0.26px] md:tracking-[-0.31px] text-[#5F5F5F]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After Someli card - overlaps upward on mobile, overlaps to the right on tablet+ */}
          <div className="relative md:absolute md:right-0 md:top-0 -mt-6 sm:-mt-8 md:mt-0 w-[85%] sm:w-[80%] md:w-[348.96px] bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[20px] md:rounded-[22.3px] px-5 sm:px-6 md:px-[35.68px] py-10 sm:py-11 md:py-[55.83px] flex flex-col gap-8 sm:gap-9 md:gap-[44.67px] z-20">
            <h3 className="font-medium text-[24px] sm:text-[27px] md:text-[30.71px] leading-none tracking-[-0.48px] md:tracking-[-0.61px] text-white">
              After Someli
            </h3>

            <div className="flex flex-col gap-[12px] md:gap-[13.96px]">
              {['Daily high impact content', '3-5x more impressions', 'Stronger authority', 'Inbound opportunities'].map((text, i) => (
                <div key={i} className="flex items-center gap-[14px] md:gap-[16.75px]">
                  <Image
                    src="/assets/before-after/check-icon.svg"
                    alt=""
                    width={21}
                    height={21}
                    className="shrink-0 w-[18px] sm:w-[20px] md:w-[21px]"
                  />
                  <p className="font-normal text-[16px] sm:text-[17px] md:text-[19.54px] leading-[1.5] tracking-[-0.32px] md:tracking-[-0.39px] text-white">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
