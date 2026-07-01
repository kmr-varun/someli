import Image from "next/image";
import SectionPill from "@/components/ui/SectionPill";

const plans = [
  {
    name: "PROFESSIONAL",
    price: "$1,500",
    subtitle: "Individual executives",
    featured: false,
    features: [
      "Individual executives",
      "2-week content planner",
      "Advanced analytics",
      "Strategic consultation",
      "2-week content planner",
      "Multi-language support",
      "Team collaboration",
      "AI personal branding engine",
      "Employee advocacy training",
      "Content library & templates",
    ],
  },
  {
    name: "EXECUTIVE",
    price: "$1,900",
    subtitle: "Senior leaders",
    featured: true,
    features: [
      "Senior leaders",
      "AI personal branding engine",
      "Multi-language support",
      "Team collaboration",
      "AI personal branding engine",
      "Priority support",
      "Dedicated success manager",
      "Multi-format content",
      "Employee advocacy training",
      "Content library & templates",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "$2,400",
    subtitle: "C-Suite teams",
    featured: false,
    features: [
      "C-Suite teams",
      "Multi-format content",
      "Priority support",
      "Dedicated success manager",
      "Multi-format content",
      "Advanced analytics",
      "Strategic consultation",
      "2-week content planner",
      "Employee advocacy training",
      "Content library & templates",
    ],
  },
];

const bottomFeatures = [
  "AI-Powered Content Engine",
  "Brand Safety And Compliance",
  "Secure And Enterprise-Grade",
  "Continuous Optimization",
];

export default function PricingSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center mb-10 sm:mb-14 lg:mb-16">
          <SectionPill>PRICING</SectionPill>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-bold leading-[1.19] tracking-[-2px] text-black text-center max-w-[900px]">
            Premium platform. Proven results. Measurable impact.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center mb-10 sm:mb-14">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`w-full lg:w-[417px] rounded-[21px] flex flex-col justify-between ${
                plan.featured
                  ? "bg-gradient-to-b from-[#DF8251] to-[#D54050] px-[34px] py-[42px] lg:scale-105 z-10"
                  : "border-[2px] border-[#DF8251] px-[34px] py-[42px]"
              }`}
            >
              {/* Top section */}
              <div className="flex flex-col gap-[34px]">
                {/* Plan name */}
                <div className="flex gap-[10px] items-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#ED6B52] shrink-0" />
                  <span className={`text-[14px] font-normal uppercase tracking-[0.64px] leading-none ${plan.featured ? "text-white" : "text-black"}`}>
                    {plan.name}
                  </span>
                </div>

                {/* Price + Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-[4px]">
                    <p className={`text-[42px] font-bold leading-none tracking-[-0.85px] font-['Space_Grotesk'] ${plan.featured ? "text-white" : "text-black"}`}>
                      {plan.price}
                    </p>
                    <p className={`text-[17px] font-normal leading-none tracking-[-0.34px] font-['Space_Grotesk'] ${plan.featured ? "text-white" : "text-[#666]"}`}>
                      / month
                    </p>
                  </div>
                  <div className="w-[51px] h-[51px] relative shrink-0">
                    <Image src="/assets/pricing/rocket-badge.png" alt="" width={51} height={51} />
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px w-full ${plan.featured ? "bg-white/30" : "bg-[rgba(0,0,0,0.08)]"}`} />

                {/* Features */}
                <div className="flex flex-col gap-[11px]">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex gap-[13px] items-center">
                      <div className="w-4 h-4 shrink-0 relative">
                        <Image src="/assets/pricing/check-icon.svg" alt="" fill />
                      </div>
                      <p className={`text-[15px] font-normal leading-[1.5] tracking-[-0.3px] ${plan.featured ? "text-white" : "text-[#444]"}`}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-14">
                <button className={`w-full rounded-full py-4 font-bold text-[16px] flex items-center justify-center gap-2 transition-colors ${
                  plan.featured
                    ? "border border-white text-white hover:bg-white/10"
                    : "border border-[#ED6B52] text-[#ED6B52] hover:bg-[#ED6B52] hover:text-white"
                }`}>
                  <span>Book a Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Features Row */}
        <div className="flex flex-nowrap justify-center gap-4 sm:gap-5 overflow-x-auto">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-[rgba(214,214,214,0.14)] rounded-[12px] px-6 py-4 shrink-0">
              <div className="w-[29px] h-[29px] rounded-[14.5px] bg-gradient-to-b from-[#DF8251] to-[#D54050] flex items-center justify-center shrink-0">
                <span className="font-['Inter'] font-bold text-[15.19px] text-white leading-none">✓</span>
              </div>
              <span className="text-[16px] text-black font-normal tracking-[-0.32px] leading-[1.2] whitespace-nowrap">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
