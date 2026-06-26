import Image from "next/image";

export default function PricingHeroSection() {
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
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] px-[15px] py-[7px] rounded-full">
              <p className="font-montserrat font-normal text-[12px] text-[#ED6B52] tracking-[0.96px] uppercase leading-[15px]">
                Pricing
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#222222] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.04px] leading-[1.19]">
              Simple Pricing.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #df8251, #d54050)",
                }}
              >
                Serious Growth.
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="font-montserrat font-normal text-[15px] sm:text-[16px] md:text-[18px] text-[#444444] leading-[1.5]">
            No hidden fees. No long-term lock-ins. Just the tools, strategy, and support your business needs to grow on social media — from day one.
          </p>
        </div>

        {/* Right illustration */}
        <div className="relative w-[280px] h-[187px] sm:w-[360px] sm:h-[241px] md:w-[440px] md:h-[294px] lg:w-[524px] lg:h-[351px] flex-shrink-0">
          <Image
            src="/assets/pricing-page/hero-illustration.png"
            alt="Growth steps illustration"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
