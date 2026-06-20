import Image from "next/image";

const benefits = [
  {
    icon: "/assets/careers/icon-training.svg",
    title: "Training & Enablement",
    description:
      "Posts, reels, articles, videos, and graphics, all customized to your brand",
  },
  {
    icon: "/assets/careers/icon-leads.svg",
    title: "Qualified Lead Referrals",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/careers/icon-leads.svg",
    title: "Revenue Sharing",
    description:
      "Employees opt-in and instantly access your private library",
  },
  {
    icon: "/assets/careers/icon-territory.svg",
    title: "Territory access",
    description:
      "1-click scheduling, so employees share on-brand content in their own voice, on time",
  },
];

export default function PartnerBenefitsSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-[80px] flex flex-col gap-10 sm:gap-[56px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-[15px] py-[7px]">
            <span className="font-montserrat text-[12px] font-normal tracking-[0.96px] uppercase text-[#ED6B52] leading-[15px]">
              WHAT WE GIVE
            </span>
          </div>
          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.19] tracking-[-2px] text-black text-center">
            Our Partner Benefits
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] p-6"
            >
              <div className="flex flex-col gap-[18px]">
                <div className="w-[52px] h-[52px] rounded-[10px] bg-[rgba(237,107,82,0.1)] flex items-center justify-center">
                  <Image
                    src={benefit.icon}
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="font-montserrat font-bold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#222]">
                    {benefit.title}
                  </p>
                  <p className="font-montserrat text-[14px] font-normal leading-[1.5] tracking-[-0.28px] text-[#5F5F5F]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
