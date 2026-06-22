import Image from "next/image";

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
      <div className="max-w-[1440px] mx-auto px-24 py-[100px] flex flex-col gap-14 items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center w-full">
          {/* Pill Label */}
          <div className="inline-flex items-center px-[15px] py-[7px] bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full">
            <span className="text-[#ED6B52] text-[12px] font-normal uppercase tracking-[0.96px] leading-[15px]">
              Transparent pricing
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[60px] font-bold leading-[71.4px] tracking-[-2px] text-black text-center">
            One plan. Supercharge Plan
          </h2>
        </div>

        {/* Pricing Cards - 2 Column Layout */}
        <div className="flex gap-6 items-center justify-center w-full">
          {/* Center Card - Gradient Pricing Card */}
          <div className="w-[417.333px] bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[21.149px] px-[33.838px] py-[42.297px] flex flex-col gap-14 shrink-0">
            {/* Top Section */}
            <div className="flex flex-col gap-[34px]">
              {/* Price Header */}
              <div className="flex flex-col gap-6">
                {/* All-in-one pill */}
                <div className="flex gap-[10px] items-center">
                  <Image
                    src="/assets/supercharge/pricing/rocket-icon.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                  <span className="text-white text-[16px] font-normal uppercase tracking-[0.64px] leading-none">
                    All-in-one plan
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex-1 flex flex-col gap-[8.459px] text-white">
                    <p className="text-[42.297px] font-bold leading-none tracking-[-0.8459px] font-['Space_Grotesk']">
                      $999
                    </p>
                    <p className="text-[16.919px] font-normal leading-none tracking-[-0.3384px] font-['Space_Grotesk']">
                      VIP Price (1 year)
                    </p>
                  </div>
                  {/* Rocket Badge */}
                  <div className="shrink-0 w-[50.757px] h-[50.757px]">
                    <Image
                      src="/assets/pricing/rocket-badge.png"
                      alt=""
                      width={51}
                      height={51}
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/30" />

              {/* Features List */}
              <div className="flex flex-col gap-[10.574px]">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-[12.689px] items-center">
                    <Image
                      src="/assets/supercharge/pricing/checkmark.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                    <p className="text-[14.804px] font-normal leading-[1.5] tracking-[-0.2961px] text-white">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-2">
              <button className="w-full border border-white rounded-full px-[28px] py-4 flex items-center justify-center text-white font-bold text-[16px] hover:bg-white/10 transition-colors">
                <span className="flex items-center gap-2">
                  <span>•</span>
                  <span>Start Your Free Trial →</span>
                </span>
              </button>
              <p className="text-[14.804px] font-normal leading-[1.5] tracking-[-0.2961px] text-white">
                30day money back guarantee
              </p>
            </div>
          </div>

          {/* Right Card - What You Get */}
          <div className="w-[427px] border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] px-8 py-10 flex flex-col gap-8 shrink-0">
            <h3 className="text-[24px] font-bold leading-none tracking-[-0.48px] text-[#111111] font-['Space_Grotesk']">
              What You Get
            </h3>

            <div className="flex flex-col gap-4">
              {whatYouGet.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-[18px] items-center pb-4 ${
                    index < whatYouGet.length - 1
                      ? "border-b border-[rgba(0,0,0,0.1)]"
                      : ""
                  }`}
                >
                  <div
                    className={`w-[52px] h-[52px] flex items-center justify-center shrink-0 ${
                      item.bgColor
                        ? `bg-[${item.bgColor}] rounded-[10px]`
                        : ""
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={item.bgColor ? 28 : 52}
                      height={item.bgColor ? 28 : 52}
                    />
                  </div>
                  <p className="flex-1 text-[14px] font-bold leading-[1.5] tracking-[-0.28px] text-[#222222]">
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
