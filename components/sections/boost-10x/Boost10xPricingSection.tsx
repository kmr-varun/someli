import Image from "next/image";

const features = [
  "Connect 25 social media accounts",
  "28 posts/mo (7 posts/week)",
  "10 video reels/mo (30 sec each)",
  "Content strategy and branding",
  "Fully-editable posts with side write-up",
  "Hashtags, scheduling, and publishing",
  "Content planner + unlimited own post creation",
  "Insights and analytics dashboard",
  "Online networking",
  "Content planner",
  "Dedicated marketing team (graphic design, editing, customer support)",
  "Create your own",
];

const benefits = [
  { icon: "/assets/boost-10x/pricing/benefit-1.svg", title: "2-Week Content Planner" },
  { icon: "/assets/boost-10x/pricing/benefit-2.svg", title: "Strategic Content Library" },
  { icon: "/assets/boost-10x/pricing/benefit-3.svg", title: "Branded Posts Library" },
  { icon: "/assets/boost-10x/pricing/benefit-4.svg", title: "Brand Positioning" },
  { icon: "/assets/boost-10x/pricing/benefit-5.svg", title: "Insights Dashboard" },
  { icon: "/assets/boost-10x/pricing/benefit-6.svg", title: "Online Networking" },
  { icon: "/assets/boost-10x/pricing/benefit-7.svg", title: "Publish to Instagram, Facebook, and LinkedIn" },
];

export default function Boost10xPricingSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-16 sm:py-20 md:py-24 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-[56px]">
          {/* Header */}
          <div className="flex flex-col gap-4 lg:gap-[16px] items-center">
            {/* Pill Label */}
            <div className="inline-flex items-center px-[15px] py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)]">
              <p className="font-montserrat font-normal text-[12px] text-[#ed6b52] tracking-[0.96px] uppercase leading-[15px]">
                Transparent pricing
              </p>
            </div>

            {/* Heading */}
            <div className="pb-[0.67px]">
              <h2 className="font-montserrat font-bold text-[40px] sm:text-[48px] lg:text-[60px] text-black text-center tracking-[-2px] leading-[71.4px]">
                The Boost 10x Plan
              </h2>
            </div>
          </div>

          {/* Pricing Cards Container */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[24px]">
            {/* Left Card - Gradient Pricing Card */}
            <div className="w-full lg:w-[417px] bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-[21px] px-[34px] py-[42px] flex flex-col gap-12 lg:gap-[56px]">
              {/* Top Section */}
              <div className="flex flex-col gap-7 lg:gap-[34px]">
                {/* Price Block */}
                <div className="flex flex-col gap-5 sm:gap-6 lg:gap-[24px]">
                  {/* Trial Badge */}
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src="/assets/boost-10x/pricing/trial-badge.svg"
                      alt=""
                      width={17}
                      height={17}
                    />
                    <p className="font-montserrat font-normal text-[16px] text-white tracking-[0.64px] uppercase leading-none">
                      14 Day FREE TRIAL
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[8.5px]">
                      <p className="font-space-grotesk font-bold text-[42px] text-white tracking-[-0.85px] leading-none">
                        $999
                      </p>
                      <p className="font-montserrat font-normal text-[17px] text-white tracking-[-0.34px] leading-[1.3]">
                        / month (ex. tax)
                      </p>
                    </div>
                    {/* Rocket Icon */}
                    <div className="w-[51px] h-[51px] flex-shrink-0 relative">
                      <Image
                        src="/assets/pricing/rocket-badge.png"
                        alt=""
                        width={51}
                        height={51}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20" />

                {/* Features List */}
                <div className="flex flex-col gap-[10.5px]">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-[12.7px]">
                      <Image
                        src="/assets/boost-10x/pricing/checkmark.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="flex-shrink-0 mt-[2px]"
                      />
                      <p className="font-montserrat font-normal text-[14.8px] text-white leading-[1.5] flex-1">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="flex flex-col gap-2 lg:gap-[8px]">
                <button className="w-full border border-white rounded-full px-7 py-4 font-montserrat font-bold text-[16px] text-white hover:bg-white hover:text-[#df8251] transition-colors duration-300 flex items-center justify-center">
                  <span>• Start Your Free Trial →</span>
                </button>
                <button className="w-full font-montserrat font-bold text-[14.8px] text-white text-center leading-[1.5] tracking-[-0.3px] hover:underline">
                  Book a Free Demo  →
                </button>
              </div>
            </div>

            {/* Right Card - What You Get */}
            <div className="w-full lg:w-[427px] border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] px-6 sm:px-8 lg:px-[32px] py-8 sm:py-10 lg:py-[40px]">
              <h3 className="font-space-grotesk font-bold text-[24px] text-[#111] tracking-[-0.48px] leading-none mb-6 sm:mb-8 lg:mb-[32px]">
                What You Get
              </h3>

              <div className="flex flex-col gap-4 lg:gap-[16px]">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-[18px] pb-4 ${
                      index < benefits.length - 1 ? "border-b border-[rgba(0,0,0,0.1)]" : ""
                    }`}
                  >
                    <div className="w-[52px] h-[52px] flex items-center justify-center flex-shrink-0">
                      <Image
                        src={benefit.icon}
                        alt=""
                        width={52}
                        height={52}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-montserrat font-bold text-[14px] text-[#222] tracking-[-0.28px] leading-[1.5] flex-1">
                      {benefit.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
