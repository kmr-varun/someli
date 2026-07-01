import Image from 'next/image';
import SectionPill from "@/components/ui/SectionPill";

export default function CaseStudyDetailHero() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:h-[560px] bg-white overflow-clip px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
      {/* Background decorative pattern (right side) */}
      <div className="absolute inset-[16.96%_16.74%_17.53%_54.93%]">
        <Image
          src="/assets/case-study-detail/hero-bg-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Union decorative pattern (full bleed) */}
      <div className="absolute inset-[-46.2%_-1.53%_-46.36%_-1.53%]">
        <Image
          src="/assets/case-study-detail/hero-union-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Left content */}
      <div className="relative z-10 flex flex-col gap-6 lg:gap-10 items-start w-full lg:w-[503px]">
        <div className="flex flex-col gap-4 items-start w-full">
          {/* Case Study Label */}
          <SectionPill>CASE STUDY</SectionPill>

          {/* Company Name */}
          <div className="w-full pb-[0.67px]">
            <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#222] tracking-[-2.04px] leading-[1.19]">
              DP WORLD
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="font-montserrat font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-[#444] leading-[1.5]">
            Someli helps mid-sized organizations turn employees into trusted brand advocates and measurable growth drivers
          </p>
        </div>
      </div>

      {/* Right info card */}
      <div className="relative z-10 bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-[22.298px] w-full sm:w-[320px] md:w-[340px] lg:w-[348.957px] px-6 sm:px-7 lg:px-[35.676px] py-8 sm:py-10 lg:py-[55.833px] flex flex-col gap-6 lg:gap-8 shrink-0">
        {/* Logo container */}
        <div className="relative w-full h-[145px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-white rounded-lg" />
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <Image
              src="/assets/case-study-detail/dp-world-logo.png"
              alt="DP World"
              fill
              className="object-cover"
              style={{
                objectPosition: 'left -0.38% top -23.69%'
              }}
            />
          </div>
        </div>

        {/* Company info */}
        <div className="flex flex-col gap-5 text-white">
          {/* Headquarters */}
          <div className="flex flex-col gap-1">
            <p className="font-montserrat font-semibold text-[12px] tracking-[-0.24px] leading-[1.5]">
              Headquarters
            </p>
            <p className="font-montserrat font-normal text-[16px] tracking-[-0.32px] leading-[1.5]">
              Dubai, UAE
            </p>
          </div>

          {/* Industry */}
          <div className="flex flex-col gap-1">
            <p className="font-montserrat font-semibold text-[12px] tracking-[-0.24px] leading-[1.5]">
              Industry
            </p>
            <p className="font-montserrat font-normal text-[16px] tracking-[-0.32px] leading-[1.5]">
              Logistics &amp; Supply Chain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
