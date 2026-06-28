import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
      <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12">
        {/* Left: Text Content */}
        <div className="flex w-full lg:w-[602px] shrink-0 flex-col gap-6 sm:gap-8 md:gap-10">
          {/* Pill Label + Heading */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-3 sm:gap-4 items-start">
              {/* Pill Label */}
              <div className="flex items-center rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px]">
                <div className="relative shrink-0">
                  <div className="flex flex-col">
                    <div className="font-montserrat text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.8px] sm:tracking-[1px] text-[#ed6b52] leading-[15px] whitespace-nowrap">
                      Automated Influence
                    </div>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <h2 className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] md:tracking-[-2px] text-black w-full">
                One Central System to Manage and Oversee Your Entire Organisation and Team Content
              </h2>
            </div>
          </div>

          {/* Body Text */}
          <div className="flex w-full flex-col gap-1.5 font-montserrat text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#444] leading-[1.5]">
            <p>
              Someli brings your entire employee advocacy strategy into a single, seamless workflow. Combining seamless team scheduling with total brand control.
            </p>
            <p>
              Ensure your corporate identity remains protected, with smart approvals you empower executives and team members to approve relevant professional content in a few clicks.
            </p>
          </div>
        </div>

        {/* Right: Feature Cards + Dashboard Mockup */}
        <div className="relative shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
          {/* Feature Cards positioned absolutely - scale down on smaller screens */}
          <div className="relative w-full max-w-[515px] lg:w-[515.474px]" style={{ aspectRatio: '515.474/569.034' }}>
            {/* Dashboard Mockup - rendered first so cards stack above it */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:translate-y-0 lg:top-[21.5%] lg:right-auto lg:left-[43.1%] w-[50%] sm:w-[60%] lg:w-[367.896px]" style={{ aspectRatio: '367.896/317.37' }}>
              <Image
                src="/assets/features/dashboard-mockup.png"
                alt="Dashboard mockup showing analytics"
                width={391}
                height={489}
                className="absolute top-[-28.05%] left-[-1.43%] w-[106.29%] h-[154.04%] max-w-none"
              />
            </div>

            {/* Card 01 - Content Discovery */}
            <div className="absolute top-0 right-0 lg:left-[47.7%] w-[52%] lg:w-[269.424px] bg-white border border-[#e4e4e4] hover:border-[#ED6B52] rounded-[8.668px] px-2 sm:px-[14.446px] py-1.5 sm:py-[7.223px] flex items-center transition-colors duration-300">
              <div className="flex flex-col gap-0.5 sm:gap-[5.779px] py-0.5 sm:py-[5.779px]">
                <p className="font-montserrat text-[9px] sm:text-[13px] md:text-[14.446px] font-bold text-[#ed6b52] leading-none">
                  01/ Content Discovery
                </p>
                <p className="font-montserrat text-[8px] sm:text-[11px] md:text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Al finds and curates the most relevant content for your team.
                </p>
              </div>
            </div>

            {/* Card 02 - Smart Scheduling */}
            <div className="absolute top-[18.7%] left-0 w-[52%] lg:w-[269.424px] bg-white border border-[#e4e4e4] hover:border-[#ED6B52] rounded-[8.668px] px-2 sm:px-[14.446px] py-1.5 sm:py-[7.223px] flex items-center transition-colors duration-300">
              <div className="flex flex-col gap-0.5 sm:gap-[5.779px] py-0.5 sm:py-[5.779px]">
                <p className="font-montserrat text-[9px] sm:text-[13px] md:text-[14.446px] font-bold text-[#ed6b52] leading-none">
                  02/ Smart Scheduling
                </p>
                <p className="font-montserrat text-[8px] sm:text-[11px] md:text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Content is scheduled at the best times for maximum reach.
                </p>
              </div>
            </div>

            {/* Card 03 - Auto-Distribution */}
            <div className="absolute top-[42%] left-0 w-[52%] lg:w-[269.424px] bg-white border border-[#e4e4e4] hover:border-[#ED6B52] rounded-[8.668px] px-2 sm:px-[14.446px] py-1.5 sm:py-[7.223px] flex items-center transition-colors duration-300">
              <div className="flex flex-col gap-0.5 sm:gap-[5.779px] py-0.5 sm:py-[5.779px]">
                <p className="font-montserrat text-[9px] sm:text-[13px] md:text-[14.446px] font-bold text-[#ed6b52] leading-none">
                  03/ Auto-Distribution
                </p>
                <p className="font-montserrat text-[8px] sm:text-[11px] md:text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Posts are automatically distributed to your team.
                </p>
              </div>
            </div>

            {/* Card 04 - Employee Engagement */}
            <div className="absolute top-[66.5%] left-0 w-[52%] lg:w-[269.424px] bg-white border border-[#e4e4e4] hover:border-[#ED6B52] rounded-[8.668px] px-2 sm:px-[14.446px] py-1.5 sm:py-[7.223px] flex items-center transition-colors duration-300">
              <div className="flex flex-col gap-0.5 sm:gap-[5.779px] py-0.5 sm:py-[5.779px]">
                <p className="font-montserrat text-[9px] sm:text-[13px] md:text-[14.446px] font-bold text-[#ed6b52] leading-none">
                  04/ Employee Engagement
                </p>
                <p className="font-montserrat text-[8px] sm:text-[11px] md:text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Your team shares, likes, and comments - effortlessly.
                </p>
              </div>
            </div>

            {/* Card 05 - Analytics & Optimization */}
            <div className="absolute top-[85.2%] right-0 lg:left-[47.7%] w-[52%] lg:w-[269.424px] bg-white border border-[#e4e4e4] hover:border-[#ED6B52] rounded-[8.668px] px-2 sm:px-[14.446px] py-1.5 sm:py-[7.223px] flex items-center transition-colors duration-300">
              <div className="flex flex-col gap-0.5 sm:gap-[5.779px] py-0.5 sm:py-[5.779px]">
                <p className="font-montserrat text-[9px] sm:text-[13px] md:text-[14.446px] font-bold text-[#ed6b52] leading-none">
                  05/ Analytics &amp; Optimization
                </p>
                <p className="font-montserrat text-[8px] sm:text-[11px] md:text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Track performance and optimize for even better results.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
