import Image from "next/image";

export default function WhySomeliHeroSection() {
  return (
    <section className="relative w-full h-[560px] bg-white overflow-hidden">
      {/* Grid background pattern */}
      <Image
        src="/assets/why-someli/hero-background.svg"
        alt=""
        fill
        className="object-cover pointer-events-none"
        priority
      />

      <div className="relative max-w-[1440px] mx-auto h-full px-24 py-[100px] flex items-center justify-between">
        {/* Left content */}
        <div className="flex flex-col gap-10 w-[651px] shrink-0">
          <div className="flex flex-col gap-4">
            {/* Pill label */}
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] px-[15px] py-[7px] rounded-full w-fit">
              <p className="font-montserrat font-normal text-[12px] text-[#ED6B52] tracking-[0.96px] uppercase leading-[15px]">
                WHY SOMELI
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-montserrat font-bold text-[60px] text-[#222222] tracking-[-2.04px] leading-[71.4px]">
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
          <p className="font-montserrat font-normal text-[18px] text-[#444444] leading-[1.5]">
            So many help leading organizations Unlock the power of their people
            to amplify their brand, engage employees, and drive measurable
            results
          </p>
        </div>

        {/* Right illustration */}
        <div className="relative w-[397.38px] h-[315.42px] shrink-0">
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
