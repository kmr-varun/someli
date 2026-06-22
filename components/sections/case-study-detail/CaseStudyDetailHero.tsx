import Image from 'next/image';

export default function CaseStudyDetailHero() {
  return (
    <section className="relative w-full h-[560px] bg-white overflow-clip px-24 py-[100px] flex items-center justify-between">
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
      <div className="relative z-10 flex flex-col gap-10 items-start w-[503px]">
        <div className="flex flex-col gap-4 items-start w-full">
          {/* Case Study Label */}
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] px-[15px] py-[7px] rounded-full">
            <p className="font-montserrat font-normal text-[12px] text-[#ed6b52] tracking-[0.96px] uppercase leading-[15px]">
              CASE STUDY
            </p>
          </div>

          {/* Company Name */}
          <div className="w-full pb-[0.67px]">
            <h1 className="font-montserrat font-bold text-[60px] text-[#222] tracking-[-2.04px] leading-[71.4px]">
              DP WORLD
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="font-montserrat font-normal text-[18px] text-[#444] leading-[1.5]">
            Someli helps mid-sized organizations turn employees into trusted brand advocates and measurable growth drivers
          </p>
        </div>
      </div>

      {/* Right info card */}
      <div className="relative z-10 bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-[22.298px] w-[348.957px] px-[35.676px] py-[55.833px] flex flex-col gap-8">
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
