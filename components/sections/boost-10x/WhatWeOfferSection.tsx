import Image from "next/image";

const benefits = [
  {
    icon: "/assets/boost-10x/icons/icon-plug.svg",
    title: "Builds a strategic content library",
    description: "Posts, reels, articles, videos, and graphics, all customized to your brand",
  },
  {
    icon: "/assets/boost-10x/icons/icon-team.svg",
    title: "Connects your team",
    description: "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/boost-10x/icons/icon-chart.svg",
    title: "Effortless publishing",
    description: "1-click scheduling, so employees share on-brand content in their own voice, on time",
  },
];

export default function WhatWeOfferSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-16 sm:py-20 md:py-24 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-[56px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-4 lg:gap-[16px] items-center w-full">
            {/* Pill Label */}
            <div className="inline-flex items-center px-[15px] py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)]">
              <p className="font-montserrat font-normal text-[12px] text-[#ed6b52] tracking-[0.96px] uppercase leading-[15px]">
                WHAT WE OFFER
              </p>
            </div>

            {/* Heading and Description */}
            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-[24px] items-center text-center pb-[0.67px]">
              <h2 className="font-montserrat font-bold text-[40px] sm:text-[48px] lg:text-[60px] text-black tracking-[-2px] leading-[71.4px]">
                That Gap? We Close It.
              </h2>
              <p className="font-montserrat font-normal text-[16px] sm:text-[18px] text-black leading-[24.5px] max-w-[808px]">
                Posts shared by employees get 2.5–8x more engagement than brand pages. The challenge has always been getting employees to consistently share company-approved content — without it feeling like extra work.
              </p>
            </div>
          </div>

          {/* Benefit Cards */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[16px]">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] p-6 lg:p-[24px] flex flex-col gap-[18px]"
                >
                  {/* Icon */}
                  <div className="w-[52px] h-[52px] bg-[rgba(237,107,82,0.1)] rounded-[10px] flex items-center justify-center p-[12px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={benefit.icon}
                        alt=""
                        width={29}
                        height={29}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-[3px]">
                    <h3 className="font-montserrat font-bold text-[14px] text-[#222] tracking-[-0.28px] leading-[1.5]">
                      {benefit.title}
                    </h3>
                    <p className="font-montserrat font-normal text-[14px] text-[#5f5f5f] tracking-[-0.28px] leading-[1.5]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
