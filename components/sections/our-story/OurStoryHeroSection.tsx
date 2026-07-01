import Image from "next/image";
import SectionPill from "@/components/ui/SectionPill";

export default function OurStoryHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid background pattern */}
      <Image
        src="/assets/pricing-page/union-background.png"
        alt=""
        fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left content */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px] w-full lg:w-[759px]">
          <div className="flex flex-col gap-[16px] items-start">
            {/* Pill label */}
            <SectionPill>OUR STORY</SectionPill>

            {/* Heading */}
            <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#222222] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.04px] leading-[1.19]">
              Built in the MENA region.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #df8251, #d54050)",
                }}
              >
                For the world
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="font-montserrat font-normal text-[15px] sm:text-[16px] md:text-[18px] text-[#444444] leading-[1.5]">
            Someli was founded with a simple belief: when you empower your people to share, everyone wins. We built the leading employee advocacy platform to help organizations unlock the full potential of their greatest asset, their people
          </p>
        </div>

        {/* Right illustration */}
        <div className="relative w-[250px] h-[216px] sm:w-[320px] sm:h-[277px] md:w-[370px] md:h-[320px] lg:w-[406px] lg:h-[351px] flex-shrink-0">
          <Image
            src="/assets/our-story/hero-illustration.png"
            alt="Growth chart illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
