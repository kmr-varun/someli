import Image from "next/image";

const timelineTop = [
  { year: "2018", text: "The idea for Someli was born in Dubai." },
  { year: "2019", text: "We launched our MVP with our first enterprise customers." },
  { year: "2020", text: "Expanded across the MENA region and built key integrations" },
  { year: "2021", text: "Scaled rapidly and empowered thousands of employee advocates" },
];

const timelineBottom = [
  { year: "2024+", text: "Continuing to innovate and lead the future of employee advocacy." },
  { year: "2023", text: "Crossed 500+ organizations and 1M+ advocates" },
  { year: "2022", text: "Achieved SOC 2 compliance and enterprise-grade security" },
];

export default function IdeaToImpactSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/assets/our-story/dark-bg-pattern.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[120px] flex flex-col gap-12 sm:gap-16 lg:gap-[100px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-[20px] items-start w-full">
          <div className="flex flex-col gap-[12px] items-center w-full">
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-[15px] py-[7px] rounded-full">
              <p className="font-montserrat font-normal text-[10px] text-[#ED6B52] tracking-[1px] uppercase leading-[15px]">
                Our journey
              </p>
            </div>
            <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white text-center tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.19] w-full">
              From an idea to impact
            </h2>
          </div>
          <p className="font-montserrat font-normal text-[15px] sm:text-[16px] lg:text-[18px] text-white text-center leading-[1.5] w-full">
            A journey of passion, innovation, and purpose.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-6 lg:gap-[24px] items-center w-full">

          {/* Top row: 2018 → 2019 → 2020 → 2021 */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-[56px] w-full">
            {timelineTop.map((item, i) => (
              <div key={i} className="flex flex-col gap-4 lg:gap-[24px] items-center">
                <div className="glass-border-card relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] rounded-[12px] flex items-center justify-center">
                  <Image
                    src="/assets/our-story/timeline-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[6px] items-center text-center w-full max-w-[170px]">
                  <p
                    className="font-montserrat font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-clip-text text-transparent leading-[1.1] w-full"
                    style={{
                      backgroundImage: "linear-gradient(to bottom, #df8251, #d54050)",
                    }}
                  >
                    {item.year}
                  </p>
                  <p className="font-montserrat font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white tracking-[-0.32px] leading-[1.5] w-full">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Arrows between icons — only visible on md+ */}
            {[0, 1, 2].map((i) => (
              <div
                key={`arrow-${i}`}
                className="hidden md:block absolute top-[31px] lg:top-[36px] h-[9px] pointer-events-none"
                style={{
                  left: `calc(${(i + 1) * 25}% - 30px)`,
                  width: '60px',
                }}
              >
                <Image
                  src="/assets/our-story/arrow-right.svg"
                  alt=""
                  width={141}
                  height={9}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Down arrow — only on md+, centered under last column */}
          <div className="hidden md:grid grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-[56px] w-full">
            <div className="col-start-4 flex justify-center">
              <svg width="9" height="63" viewBox="0 0 9 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.04 62.44C4.8 62.69 4.4 62.69 4.16 62.44L0.18 58.46C-0.06 58.22 -0.06 57.82 0.18 57.58C0.43 57.34 0.82 57.34 1.07 57.58L4.6 61.12L8.14 57.58C8.38 57.34 8.78 57.34 9.02 57.58C9.27 57.82 9.27 58.22 9.02 58.46L5.04 62.44ZM4.6 0H5.23V62H4.6H3.98V0H4.6Z" fill="#F76739"/>
              </svg>
            </div>
          </div>

          {/* Bottom row: 2024+ ← 2023 ← 2022 + card */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-[56px] w-full">
            {/* Gradient card — first in grid on md+ (order-first), last on mobile (order-last) */}
            <div className="flex items-center justify-center order-last md:order-first">
              <div className="bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-[13.991px] px-3 py-5 flex flex-col gap-5 items-center justify-center w-full max-w-[218.957px]">
                <p className="font-montserrat font-medium text-[15px] sm:text-[16px] lg:text-[18px] text-white text-center tracking-[-0.36px] leading-[1.3]">
                  This is How Someli was born
                </p>
                <div className="relative w-[123px] h-[43px]">
                  <Image
                    src="/assets/our-story/someli-born-card.png"
                    alt="Someli logo"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>

            {/* 2022, 2023, 2024+ on mobile (chronological) / 2024+, 2023, 2022 on desktop (right to left) */}
            {timelineBottom.map((item, i) => (
              <div key={i} className={`flex flex-col gap-4 lg:gap-[24px] items-center ${
                i === 0 ? "order-3 md:order-none" : i === 1 ? "order-2 md:order-none" : "order-1 md:order-none"
              }`}>
                <div className="glass-border-card relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] rounded-[12px] flex items-center justify-center">
                  <Image
                    src="/assets/our-story/timeline-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[6px] items-center text-center w-full max-w-[170px]">
                  <p
                    className="font-montserrat font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-clip-text text-transparent leading-[1.1] w-full"
                    style={{
                      backgroundImage: "linear-gradient(to bottom, #df8251, #d54050)",
                    }}
                  >
                    {item.year}
                  </p>
                  <p className="font-montserrat font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white tracking-[-0.32px] leading-[1.5] w-full">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Left arrows between bottom row icons — only on md+ */}
            {[0, 1].map((i) => (
              <div
                key={`arrow-bottom-${i}`}
                className="hidden md:block absolute top-[31px] lg:top-[36px] h-[9px] pointer-events-none rotate-180"
                style={{
                  left: `calc(${(i + 2) * 25}% - 30px)`,
                  width: '60px',
                }}
              >
                <Image
                  src="/assets/our-story/arrow-right.svg"
                  alt=""
                  width={141}
                  height={9}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
