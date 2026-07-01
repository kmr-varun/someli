import Image from "next/image";
import SectionPill from "@/components/ui/SectionPill";

export default function WhySomeliHeroSection() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:h-[560px] bg-white overflow-hidden">
      {/* Grid background pattern */}
      <Image
        src="/assets/why-someli/hero-background.svg"
        alt=""
        fill
        className="object-cover pointer-events-none"
        priority
      />

      <div className="relative max-w-[1440px] mx-auto h-full px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left content */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full lg:w-[651px] shrink-0">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Pill label */}
            <SectionPill>WHY SOMELI</SectionPill>

            {/* Heading */}
            <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#222222] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.04px] leading-[1.2] lg:leading-[71.4px]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #DF8251, #D54050)",
                }}
              >
                The #1
              </span>{" "}
              Employee Advocacy Platform in MENA
            </h1>
          </div>

          {/* Subtext */}
          <p className="font-montserrat font-normal text-[15px] sm:text-[16px] md:text-[18px] text-[#444444] leading-[1.5]">
            So many help leading organizations Unlock the power of their people
            to amplify their brand, engage employees, and drive measurable
            results
          </p>
        </div>

        {/* Right illustration */}
        <div className="relative w-[280px] h-[222px] sm:w-[340px] sm:h-[270px] lg:w-[397.38px] lg:h-[315.42px] shrink-0">
          <Image
            src="/assets/why-someli/hero-illustration.svg"
            alt="Employee advocacy illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
