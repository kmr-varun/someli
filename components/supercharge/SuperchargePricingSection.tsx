import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  "28 posts / mo (7 posts / week)",
  "4 Video reels / mo (30 sec each)",
  "Insights and analytics dashboard",
  "Content and strategy",
  "Branding and design",
  "Fully-editable posts (with side write-up)",
  "Add hashtags",
  "Scheduling",
  "Publishing",
  "Content planner",
  "Create own posts (unlimited)",
  "Online networking",
];

const whatYouGet = [
  {
    icon: "/assets/supercharge/pricing/icon-content-planner.svg",
    title: "2-Week Content Planner",
    bgColor: null,
  },
  {
    icon: "/assets/supercharge/pricing/icon-strategic.svg",
    title: "Strategic Content Library",
    bgColor: "rgba(237,107,82,0.1)",
  },
  {
    icon: "/assets/supercharge/pricing/icon-team.svg",
    title: "Branded Posts Library",
    bgColor: "rgba(237,107,82,0.1)",
  },
  {
    icon: "/assets/supercharge/pricing/icon-brand.svg",
    title: "Brand Positioning",
    bgColor: null,
  },
  {
    icon: "/assets/supercharge/pricing/icon-insights.svg",
    title: "Insights Dashboard",
    bgColor: null,
  },
  {
    icon: "/assets/supercharge/pricing/icon-networking.svg",
    title: "Online Networking",
    bgColor: null,
  },
  {
    icon: "/assets/supercharge/pricing/icon-publish.svg",
    title: "Publish to Instagram, Facebook, and LinkedIn",
    bgColor: null,
  },
];

export default function SuperchargePricingSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] flex flex-col gap-10 sm:gap-12 md:gap-14 items-center">
        {/* Header */}
        <SectionHeader
          pill="Transparent pricing"
          heading="One plan. Supercharge Plan"
          align="center"
          headingClassName="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.2] tracking-[-1.5px] lg:tracking-[-2px]"
          className="w-full"
        />

        {/* Pricing Cards - Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-stretch justify-center w-full">
          {/* Gradient Pricing Card */}
          <div className="w-full lg:w-[417.333px] bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[20px] lg:rounded-[21.149px] px-6 sm:px-8 md:px-[33.838px] py-8 sm:py-10 md:py-[42.297px] flex flex-col gap-10 sm:gap-12 md:gap-14 shrink-0">
            {/* Top Section */}
            <div className="flex flex-col gap-6 sm:gap-[34px]">
              {/* Price Header */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* All-in-one pill */}
                <div className="flex gap-2 sm:gap-[10px] items-center">
                  <Image
                    src="/assets/supercharge/pricing/rocket-icon.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="w-4 h-4 sm:w-[17px] sm:h-[17px]"
                  />
                  <span className="text-white text-[14px] sm:text-[16px] font-normal uppercase tracking-[0.56px] sm:tracking-[0.64px] leading-none">
                    All-in-one plan
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex-1 flex flex-col gap-2 text-white">
                    <p className="text-[36px] sm:text-[42.297px] font-bold leading-none tracking-[-0.7px] sm:tracking-[-0.8459px] font-['Space_Grotesk']">
                      $999
                    </p>
                    <p className="text-[14px] sm:text-[16.919px] font-normal leading-none tracking-[-0.28px] sm:tracking-[-0.3384px] font-['Space_Grotesk']">
                      VIP Price (1 year)
                    </p>
                  </div>
                  {/* Rocket Badge */}
                  <div className="shrink-0 w-[45px] h-[45px] sm:w-[50.757px] sm:h-[50.757px]">
                    <Image
                      src="/assets/pricing/rocket-badge.png"
                      alt=""
                      width={51}
                      height={51}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/30" />

              {/* Features List */}
              <div className="flex flex-col gap-2 sm:gap-[10.574px]">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 sm:gap-[12.689px] items-center">
                    <Image
                      src="/assets/supercharge/pricing/checkmark.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="shrink-0 w-4 h-4 sm:w-4 sm:h-4"
                    />
                    <p className="text-[13px] sm:text-[14.804px] font-normal leading-[1.5] tracking-[-0.26px] sm:tracking-[-0.2961px] text-white">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-2">
              <button className="w-full border border-white rounded-full px-6 sm:px-[28px] py-3 sm:py-4 flex items-center justify-center text-white font-bold text-[14px] sm:text-[16px] hover:bg-white/10 transition-colors">
                <span className="flex items-center gap-2">
                  <span>Start Your Free Trial →</span>
                </span>
              </button>
              <p className="text-[13px] sm:text-[14.804px] font-normal leading-[1.5] tracking-[-0.26px] sm:tracking-[-0.2961px] text-white">
                30day money back guarantee
              </p>
            </div>
          </div>

          {/* Right Card - What You Get */}
          <div className="w-full lg:w-[427px] border-2 border-[rgba(0,0,0,0.08)] rounded-[18px] sm:rounded-[20px] px-6 sm:px-8 py-8 sm:py-10 flex flex-col gap-6 sm:gap-8 shrink-0">
            <h3 className="text-[20px] sm:text-[24px] font-bold leading-none tracking-[-0.4px] sm:tracking-[-0.48px] text-[#111111] font-['Space_Grotesk']">
              What You Get
            </h3>

            <div className="flex flex-col gap-3 sm:gap-4">
              {whatYouGet.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-4 sm:gap-[18px] items-center pb-3 sm:pb-4 ${
                    index < whatYouGet.length - 1
                      ? "border-b border-[rgba(0,0,0,0.1)]"
                      : ""
                  }`}
                >
                  <div
                    className={`w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] flex items-center justify-center shrink-0 ${
                      item.bgColor
                        ? "bg-[rgba(237,107,82,0.1)] rounded-[10px]"
                        : ""
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={item.bgColor ? 28 : 52}
                      height={item.bgColor ? 28 : 52}
                      className={item.bgColor ? "w-7 h-7" : "w-12 h-12 sm:w-[52px] sm:h-[52px]"}
                    />
                  </div>
                  <p className="flex-1 text-[13px] sm:text-[14px] font-bold leading-[1.5] tracking-[-0.26px] sm:tracking-[-0.28px] text-[#222222]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
