import Image from "next/image";

export default function CareersHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/careers/hero-grid-pattern.svg"
          alt=""
          fill
          className="object-cover opacity-100"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto flex items-center justify-between px-24 py-[100px]">
        {/* Left content */}
        <div className="flex flex-col gap-10 items-start w-[618px] shrink-0">
          <div className="flex flex-col gap-4 items-start w-full">
            {/* Pill label */}
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] rounded-full px-[15px] py-[7px]">
              <span className="font-montserrat text-[12px] font-normal tracking-[0.96px] uppercase text-[#ED6B52] leading-[15px]">
                CAREERS & PARTNERSHIPS
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-montserrat font-bold text-[60px] leading-[1.19] tracking-[-2.04px] text-[#222]">
              Build growth, create impact,{" "}
              <span className="bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                grow with Someli
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="font-montserrat text-[18px] font-normal leading-[1.5] text-[#444]">
            Partner with the leading employee advocacy platform across MENA, and beyond and join our growing global team.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 items-center">
            <button className="border border-[#ED6B52] rounded-full pl-7 pr-10 py-4 font-montserrat font-bold text-[16px] text-[#ED6B52] leading-none cursor-pointer">
              • Become a Partner
            </button>
            <button className="rounded-full pl-7 pr-10 py-4 font-montserrat font-bold text-[16px] text-[#ED6B52] leading-none cursor-pointer">
              • View open Positions
            </button>
          </div>
        </div>

        {/* Right illustration - bar chart with arrow */}
        <div className="relative shrink-0 w-[422px] h-[397px]">
          <Image
            src="/assets/careers/hero-bg-simple.svg"
            alt=""
            width={399}
            height={272}
            className="absolute top-0 left-[11.69px]"
          />
          <Image
            src="/assets/careers/hero-bars.svg"
            alt=""
            width={227}
            height={242}
            className="absolute top-[154.68px] left-[174.7px]"
          />
          <Image
            src="/assets/careers/hero-arrow.svg"
            alt=""
            width={247}
            height={240}
            className="absolute top-[117.54px] left-[158.46px]"
          />
          <Image
            src="/assets/careers/hero-floor.svg"
            alt=""
            width={422}
            height={1}
            className="absolute top-[396.15px] left-0"
          />
        </div>
      </div>
    </section>
  );
}
