import Image from "next/image";

const benefitCards = [
  {
    icon: "/assets/why-someli/icons/icon-plug.svg",
    title: "Local Expertise",
    description:
      "Posts, reels, articles, videos, and graphics, all customized to your brand",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-1.svg",
    title: "Proven methodology",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-1.svg",
    title: "Scalable Solution",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-1.svg",
    title: "Measurable Outcomes",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/why-someli/icons/icon-vector-2.svg",
    title: "Long-term partnership",
    description:
      "1-click scheduling, so employees share on-brand content in their own voice, on time",
  },
];

export default function WhyCompaniesSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-14">
          {/* Pill label */}
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-[15px] py-[7px] rounded-full">
            <p className="font-montserrat font-normal text-[10px] sm:text-[12px] text-[#ED6B52] tracking-[0.96px] uppercase leading-[15px]">
              WHAT WE GIVE
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.2] lg:leading-[71.4px] text-center">
            Why companies choose Someli
          </h2>
        </div>

        {/* Cards - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {benefitCards.map((card, index) => (
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
    </section>
  );
}
