import Image from "next/image";

const stats = [
  { value: "2.5x", description: "More engagement than brand posts" },
  { value: "10x", description: "Greater organic reach per share" },
  { value: "30\nDays", description: "Average time to measurable visibility increase" },
];

export default function StatsTestimonialSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-8">
        {/* Left — Bar charts */}
        <div className="w-full lg:w-[592px]">
          <div className="flex gap-2 sm:gap-[8px] md:gap-[11.82px] items-end justify-center h-auto sm:h-[300px] md:h-[340px] lg:h-[374px] w-full max-w-[526px] mx-auto lg:mx-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 sm:gap-4 md:gap-[20px] items-center justify-end flex-1 max-w-[167.453px]"
              >
                <p className="font-montserrat font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[47.281px] text-black text-center tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-1.97px] leading-[1.1] whitespace-pre-line">
                  {stat.value}
                </p>
                <div className="group/bar w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200.944px] hover:h-[200px] sm:hover:h-[230px] md:hover:h-[260px] lg:hover:h-[300px] flex flex-col items-center py-3 sm:py-4 lg:py-[19.7px] relative overflow-hidden transition-all duration-300 bg-gradient-to-b from-[#f76739] to-[#111] hover:from-[#111] hover:to-[#f76739]">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300">
                    <Image src="/assets/pricing-page/stat-bg.png" alt="" width={114} height={135} />
                  </div>
                  <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15.76px] text-white text-center leading-[1.5] px-2 sm:px-3 absolute top-[19.7px] group-hover/bar:top-[calc(100%-100px)] transition-all duration-500 z-10 w-full">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Testimonial text */}
        <div className="w-full lg:w-[586px] flex flex-col gap-6 sm:gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-[16px]">
            {/* Pill */}
            <div className="bg-[rgba(247,103,57,0.16)] border border-[rgba(247,103,57,0.16)] px-[15px] py-[7px] rounded-full w-fit">
              <p className="font-['Space_Grotesk'] font-normal text-[12px] text-[#f76739] tracking-[0.96px] uppercase leading-[15px]">
                Employee Advocacy
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-montserrat font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] text-black tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.19]">
              Rated 5 Stars by the Businesses We Serve
            </h2>
          </div>

          {/* Body */}
          <p className="font-montserrat font-normal text-[15px] sm:text-[16px] md:text-[18px] text-[#444] leading-[1.5]">
            Employee-shared content earns 2.5x more engagement and reaches 10x the audience of brand page posts alone. Someli makes it effortless — your team gets a curated feed of approved, ready-to-share content. One tap. Zero friction. Maximum reach.
          </p>
        </div>
      </div>
    </section>
  );
}
