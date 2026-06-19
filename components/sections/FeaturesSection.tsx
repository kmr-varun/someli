import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white px-24 py-[100px]">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex w-[602px] shrink-0 flex-col gap-10">
          {/* Pill Label + Heading */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-4 items-start">
              {/* Pill Label */}
              <div className="flex items-center rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-[15px] py-[7px]">
                <div className="relative shrink-0">
                  <div className="flex flex-col">
                    <div className="font-montserrat text-[10px] font-normal uppercase tracking-[1px] text-[#ed6b52] leading-[15px] whitespace-nowrap">
                      Automated Influence
                    </div>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <h2 className="font-montserrat text-[60px] font-bold leading-[71.4px] tracking-[-2px] text-black w-full">
                One Central System to Manage and Oversee Your Entire Organisation and Team Content
              </h2>
            </div>
          </div>

          {/* Body Text */}
          <div className="flex w-full flex-col gap-1.5 font-montserrat text-[18px] font-normal text-[#444] leading-[1.5]">
            <p>
              Someli brings your entire employee advocacy strategy into a single, seamless workflow. Combining seamless team scheduling with total brand control.
            </p>
            <p>
              Ensure your corporate identity remains protected, with smart approvals you empower executives and team members to approve relevant professional content in a few clicks.
            </p>
          </div>
        </div>

        {/* Right: Feature Cards + Dashboard Mockup */}
        <div className="relative shrink-0">
          {/* Feature Cards positioned absolutely */}
          <div className="relative w-[515.474px] h-[569.034px]">
            {/* Card 01 - Content Discovery */}
            <div className="absolute top-0 left-[246.05px] w-[269.424px] h-[83.984px] bg-white border border-[#e4e4e4] rounded-[8.668px] px-[14.446px] py-[7.223px] flex items-center">
              <div className="flex flex-col gap-[5.779px] py-[5.779px]">
                <p className="font-montserrat text-[14.446px] font-bold text-[#ed6b52] leading-none whitespace-nowrap">
                  01/ Content Discovery
                </p>
                <p className="font-montserrat text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Al finds and curates the most relevant content for your team.
                </p>
              </div>
            </div>

            {/* Card 02 - Smart Scheduling */}
            <div className="absolute top-[106.71px] left-0 w-[269.424px] h-[83.984px] bg-white border border-[#e4e4e4] rounded-[8.668px] px-[14.446px] py-[7.223px] flex items-center">
              <div className="flex flex-col gap-[5.779px] py-[5.779px]">
                <p className="font-montserrat text-[14.446px] font-bold text-[#ed6b52] leading-none whitespace-nowrap">
                  02/ Smart Scheduling
                </p>
                <p className="font-montserrat text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Content is scheduled at the best times for maximum reach.
                </p>
              </div>
            </div>

            {/* Card 03 - Auto-Distribution */}
            <div className="absolute top-[239px] left-0 w-[269.424px] h-[83.984px] bg-white border border-[#e4e4e4] rounded-[8.668px] px-[14.446px] py-[7.223px] flex items-center">
              <div className="flex flex-col gap-[5.779px] py-[5.779px]">
                <p className="font-montserrat text-[14.446px] font-bold text-[#ed6b52] leading-none whitespace-nowrap">
                  03/ Auto-Distribution
                </p>
                <p className="font-montserrat text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Posts are automatically distributed to your team.
                </p>
              </div>
            </div>

            {/* Card 04 - Employee Engagement */}
            <div className="absolute top-[378.34px] left-0 w-[269.424px] h-[83.984px] bg-white border border-[#e4e4e4] rounded-[8.668px] px-[14.446px] py-[7.223px] flex items-center">
              <div className="flex flex-col gap-[5.779px] py-[5.779px]">
                <p className="font-montserrat text-[14.446px] font-bold text-[#ed6b52] leading-none whitespace-nowrap">
                  04/ Employee Engagement
                </p>
                <p className="font-montserrat text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Your team shares, likes, and comments - effortlessly.
                </p>
              </div>
            </div>

            {/* Card 05 - Analytics & Optimization */}
            <div className="absolute top-[485.05px] left-[246.05px] w-[269.424px] h-[83.984px] bg-white border border-[#e4e4e4] rounded-[8.668px] px-[14.446px] py-[7.223px] flex items-center">
              <div className="flex flex-col gap-[5.779px] py-[5.779px]">
                <p className="font-montserrat text-[14.446px] font-bold text-[#ed6b52] leading-none whitespace-nowrap">
                  05/ Analytics &amp; Optimization
                </p>
                <p className="font-montserrat text-[12.279px] font-normal text-[#444] leading-[1.5]">
                  Track performance and optimize for even better results.
                </p>
              </div>
            </div>

            {/* Dashboard Mockup - centered behind cards */}
            <div className="absolute top-[122.59px] left-[222.1px] w-[367.896px] h-[317.37px]">
              <Image
                src="/assets/features/dashboard-mockup.png"
                alt="Dashboard mockup showing analytics"
                width={391}
                height={489}
                className="absolute top-[-28.05%] left-[-1.43%] w-[106.29%] h-[154.04%] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
