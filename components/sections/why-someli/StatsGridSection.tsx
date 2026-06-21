import Image from "next/image";

const statsCards = [
  // Row 1
  {
    icon: "/assets/why-someli/icons/icon-plug.svg",
    title: "Product Innovation",
    description:
      "Posts, reels, articles, videos, and graphics, all customized to your brand",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-1.svg",
    title: "ROI Guaranteed",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-1.svg",
    title: "Arabic Content Excellence",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-2.svg",
    title: "AI-Personal branding",
    description:
      "1-click scheduling, so employees share on-brand content in their own voice, on time",
  },
  // Row 2
  {
    icon: "/assets/why-someli/icons/icon-plug.svg",
    title: "Ease of Setup",
    description:
      "Posts, reels, articles, videos, and graphics, all customized to your brand",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-1.svg",
    title: "Dedicated Account Managers",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-1.svg",
    title: "Training and Support",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-2.svg",
    title: "Enterprise Security",
    description:
      "1-click scheduling, so employees share on-brand content in their own voice, on time",
  },
];

export default function StatsGridSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16">
          {/* Pill label */}
          <div className="bg-[rgba(247,103,57,0.16)] border border-[rgba(247,103,57,0.15)] px-[15px] py-[7px] rounded-full">
            <p className="font-montserrat font-normal text-[10px] text-[#F76739] tracking-[1px] uppercase leading-[15px]">
              Smart Workflow
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#222222] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.2] lg:leading-[71.4px] text-center">
            Why Someli leads the MENA region?
          </h2>

          {/* Subtext */}
          <p className="font-montserrat font-normal text-[16px] sm:text-[17px] lg:text-[18px] text-[#444444] leading-[1.5] text-center">
            Purpose built for the region, proven by results
          </p>
        </div>

        {/* Cards Grid - Responsive */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {statsCards.slice(0, 4).map((card, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] p-6 flex flex-col gap-[18px]"
              >
                {/* Icon */}
                <div className="bg-[rgba(237,107,82,0.1)] w-[52px] h-[52px] rounded-[10px] flex items-center justify-center shrink-0">
                  <Image
                    src={card.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[3px]">
                  <h3 className="font-montserrat font-bold text-[14px] text-[#222222] tracking-[-0.28px] leading-[1.5]">
                    {card.title}
                  </h3>
                  <p className="font-montserrat font-normal text-[14px] text-[#5F5F5F] tracking-[-0.28px] leading-[1.5]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {statsCards.slice(4, 8).map((card, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] p-6 flex flex-col gap-[18px]"
              >
                {/* Icon */}
                <div className="bg-[rgba(237,107,82,0.1)] w-[52px] h-[52px] rounded-[10px] flex items-center justify-center shrink-0">
                  <Image
                    src={card.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[3px]">
                  <h3 className="font-montserrat font-bold text-[14px] text-[#222222] tracking-[-0.28px] leading-[1.5]">
                    {card.title}
                  </h3>
                  <p className="font-montserrat font-normal text-[14px] text-[#5F5F5F] tracking-[-0.28px] leading-[1.5]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
