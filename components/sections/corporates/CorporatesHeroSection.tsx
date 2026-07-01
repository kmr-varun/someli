import Image from "next/image";
import SectionPill from "@/components/ui/SectionPill";

export default function CorporatesHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0">
        <Image
          src="/assets/pricing-page/union-background.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        {/* Left content */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px] w-full lg:w-[797px]">
          <div className="flex flex-col gap-[16px] items-start">
            {/* Pill label */}
            <SectionPill>SOLUTION FOR CORPORATE 50-500 EMPLOYEES</SectionPill>

            {/* Heading */}
            <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#222222] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.04px] leading-[1.1]">
              Empower your people.
              <br />
              Amplify your brand.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #DF8251, #D54050)",
                }}
              >
                Drive real business results.
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="font-montserrat font-normal text-[15px] sm:text-[16px] md:text-[18px] text-[#444444] leading-[1.5] max-w-[640px]">
            Someli helps mid-sized organizations turn employees into trusted
            brand advocates and measurable growth drivers
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="font-montserrat font-bold text-[16px] text-[#ED6B52] px-7 py-[14px] rounded-full hover:opacity-80 transition-opacity">
              &bull; Book a Demo
            </button>
            <button className="font-montserrat font-bold text-[16px] text-[#ED6B52] border border-[#ED6B52] px-7 py-[14px] rounded-full hover:bg-[#ED6B52] hover:text-white transition-colors">
              &bull; See How it Works
            </button>
          </div>
        </div>

        {/* Right illustration */}
        <div className="relative w-[280px] h-[222px] sm:w-[340px] sm:h-[270px] lg:w-[397px] lg:h-[315px] flex-shrink-0">
          <Image
            src="/assets/corporates/hero-illustration.svg"
            alt="Corporate hero illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
