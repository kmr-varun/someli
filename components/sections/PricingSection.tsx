import Image from 'next/image';

export default function PricingSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 sm:gap-12 md:gap-14 items-center">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4 items-center w-full">
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px] rounded-full">
            <p className="font-montserrat font-normal text-[10px] sm:text-[11px] md:text-[12px] text-[#ED6B52] tracking-[0.8px] sm:tracking-[0.96px] uppercase leading-[15px]">
              Transparent pricing
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-center text-center w-full">
            <h2 className="font-montserrat font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] text-[#222222] tracking-[-1.5px] md:tracking-[-2px] leading-[1.2]">
              One plan. Everything you need to scale employee advocacy.
            </h2>
            <p className="font-montserrat font-normal text-[14px] sm:text-[16px] md:text-[18px] text-[#222222] leading-[1.4]">
              Powerful features.Meaningful impact.
            </p>
          </div>
        </div>

        {/* Three Cards */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-stretch justify-center w-full">
          {/* Left Card - Feature List */}
          <div className="flex-1 border-2 border-[rgba(0,0,0,0.08)] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] px-5 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col gap-3 sm:gap-4">
            {/* AI Content Strategy */}
            <div className="flex gap-3 sm:gap-4 md:gap-[18px] items-center pb-3 sm:pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] flex-shrink-0 relative">
                <Image
                  src="/assets/pricing/ai-content-icon.svg"
                  alt=""
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Al Content Strategy
                </p>
                <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Build data-driven content that resonates.
                </p>
              </div>
            </div>

            {/* Advanced Analytics */}
            <div className="flex gap-[18px] items-center pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-[52px] h-[52px] flex-shrink-0 bg-[rgba(237,107,82,0.1)] rounded-[10px] flex items-center justify-center">
                <Image
                  src="/assets/pricing/analytics-icon.svg"
                  alt=""
                  width={21}
                  height={23}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Advanced Analytics
                </p>
                <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Track performance & optimize for growth.
                </p>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="flex gap-[18px] items-center pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-[52px] h-[52px] flex-shrink-0 bg-[rgba(237,107,82,0.1)] rounded-[10px] flex items-center justify-center">
                <Image
                  src="/assets/pricing/team-icon.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Team Collaboration
                </p>
                <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Empower your team to share & engage.
                </p>
              </div>
            </div>

            {/* Integrations */}
            <div className="flex gap-[18px] items-center pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-[52px] h-[52px] flex-shrink-0 relative">
                <Image
                  src="/assets/pricing/integrations-icon.svg"
                  alt=""
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Integrations
                </p>
                <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Connect with your favorite tools seamlessly.
                </p>
              </div>
            </div>

            {/* Priority Support */}
            <div className="flex gap-[18px] items-center pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-[52px] h-[52px] flex-shrink-0 relative">
                <Image
                  src="/assets/pricing/support-icon.svg"
                  alt=""
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Priority Support
                </p>
                <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Get fast, human support whenever you need it.
                </p>
              </div>
            </div>

            {/* Smart Scheduling */}
            <div className="flex gap-[18px] items-center pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-[52px] h-[53px] flex-shrink-0 relative">
                <Image
                  src="/assets/pricing/scheduling-icon.svg"
                  alt=""
                  width={52}
                  height={53}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Smart Scheduling
                </p>
                <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Post at the perfect time, every time.
                </p>
              </div>
            </div>

            {/* Unlimited Content */}
            <div className="flex gap-[18px] items-center">
              <div className="w-[53px] h-[52px] flex-shrink-0 relative">
                <Image
                  src="/assets/pricing/content-icon.svg"
                  alt=""
                  width={53}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[3px]">
                <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Unlimited Content
                </p>
                <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                  Generate posts, carousels, videos & more.
                </p>
              </div>
            </div>
          </div>

          {/* Center Card - Main Pricing */}
          <div className="group relative w-full lg:w-[417.333px] flex-shrink-0 bg-gradient-to-b from-[#ff821b] to-[#d54050] rounded-[16px] sm:rounded-[18px] md:rounded-[21.149px] transition-all duration-300 hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            {/* Hover gradient overlay — fades in on hover */}
            <div className="absolute inset-0 rounded-[16px] sm:rounded-[18px] md:rounded-[21.149px] bg-gradient-to-b from-[#d54050] to-[#df8251] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10 px-5 sm:px-6 md:px-[33.838px] py-8 sm:py-10 md:py-[42.297px] flex flex-col gap-10 sm:gap-12 md:gap-14">
            <div className="flex flex-col gap-[34px]">
              <div className="flex flex-col gap-6">
                {/* Badge */}
                <div className="flex gap-[10px] items-center">
                  <div className="w-[16.909px] h-[16.909px] relative">
                    <Image
                      src="/assets/pricing/white-dot.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-montserrat font-normal text-[16px] text-white tracking-[0.64px] uppercase leading-none">
                    All-in-one plan
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex-1 flex flex-col gap-[8.459px]">
                    <p className="font-['Space_Grotesk'] font-bold text-[42.297px] text-white tracking-[-0.8459px] leading-none">
                      $1,500
                    </p>
                    <p className="font-['Space_Grotesk'] font-normal text-[16.919px] text-white tracking-[-0.3384px] leading-none">
                      / month
                    </p>
                  </div>
                  <div className="w-[50.757px] h-[50.757px] flex-shrink-0 relative">
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
              <div className="h-[1px] w-full bg-white opacity-20" />

              {/* Checklist */}
              <div className="flex flex-col gap-[10.574px]">
                {[
                  'Brand +24 employees',
                  'Al-powered content strategy',
                  'Unlimited content generation',
                  'Smart scheduling',
                  'Advanced analytics',
                  'Team collaboration',
                  'Integrations & automation',
                  'Priority support',
                  'Employee advocacy training',
                  'Content library & templates',
                ].map((item, index) => (
                  <div key={index} className="flex gap-[12.689px] items-center">
                    <div className="w-[15.861px] h-[15.861px] flex-shrink-0 relative">
                      <Image
                        src="/assets/pricing/check-icon.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-montserrat font-normal text-[14.804px] text-white tracking-[-0.2961px] leading-[1.5]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-2">
              <button className="w-full border border-white rounded-full px-[28px] py-4 flex items-center justify-center hover:bg-white transition-colors">
                <span className="font-montserrat font-bold text-[16px] text-white hover:text-[#ED6B52] leading-none transition-colors">
                  • Start Your Free Trial →
                </span>
              </button>
              <p className="font-montserrat font-normal text-[14.804px] text-white tracking-[-0.2961px] leading-[1.5]">
                30day money back guarantee
              </p>
            </div>
            </div>{/* end z-10 */}
          </div>

          {/* Right Card - Benefits */}
          <div className="flex-1 border-2 border-[rgba(0,0,0,0.08)] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] px-5 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col gap-6 sm:gap-7 md:gap-8">
            <div className="flex flex-col gap-4">
              {/* Scale Your Reach */}
              <div className="flex gap-[18px] items-center pb-4 border-b border-[rgba(0,0,0,0.1)]">
                <div className="w-[51px] h-[52px] flex-shrink-0 relative">
                  <Image
                    src="/assets/pricing/reach-icon.svg"
                    alt=""
                    width={51}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[3px]">
                  <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                    Scale Your Reach
                  </p>
                  <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                    Increase visibility across Linkedln and beyond.
                  </p>
                </div>
              </div>

              {/* Stronger Brand */}
              <div className="flex gap-[18px] items-center pb-4 border-b border-[rgba(0,0,0,0.1)]">
                <div className="w-[52px] h-[52px] flex-shrink-0 bg-[rgba(237,107,82,0.1)] rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/assets/pricing/brand-icon.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[3px]">
                  <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                    Stronger Brand
                  </p>
                  <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                    Build trust and authority with consistent content
                  </p>
                </div>
              </div>

              {/* Engaged Employees */}
              <div className="flex gap-[18px] items-center pb-4 border-b border-[rgba(0,0,0,0.1)]">
                <div className="w-[52px] h-[52px] flex-shrink-0 bg-[rgba(237,107,82,0.1)] rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/assets/pricing/team-engaged-icon.svg"
                    alt=""
                    width={31}
                    height={31}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[3px]">
                  <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                    Engaged Employees
                  </p>
                  <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                    Turn your team into brand advocates.
                  </p>
                </div>
              </div>

              {/* Better Results */}
              <div className="flex gap-[18px] items-center">
                <div className="w-[52px] h-[52px] flex-shrink-0 bg-[rgba(237,107,82,0.1)] rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/assets/pricing/target-icon.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[3px]">
                  <p className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#222222] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                    Better Results
                  </p>
                  <p className="font-montserrat font-normal text-[12px] sm:text-[13px] md:text-[14px] text-[#5F5F5F] tracking-[-0.24px] sm:tracking-[-0.28px] leading-[1.5]">
                    Drive more engagement, leads, and opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="flex-1 bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[21.149px] p-6 flex flex-col gap-8">
              <div className="w-[55.333px] h-[55.333px] bg-[rgba(255,255,255,0.1)] rounded-[69.167px] flex items-center justify-center">
                <Image
                  src="/assets/pricing/guarantee-badge.svg"
                  alt=""
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 text-white">
                <p className="font-montserrat font-bold text-[20px] tracking-[-0.4px] leading-[1.2]">
                  30-Day Money Back Guarantee!
                </p>
                <p className="font-montserrat font-normal text-[14.804px] tracking-[-0.2961px] leading-[1.5]">
                  Not satisfied? Get a full refund within 30 days. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            'Secure & Compliant',
            'CANCEL ANYTIME',
            'USED BY 1000+ TEAMS',
          ].map((label, index) => (
            <div
              key={index}
              className="bg-[rgba(245,245,245,0.5)] rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 flex gap-[8px] sm:gap-[10px] items-center"
            >
              <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[16.909px] md:h-[16.909px] relative">
                <Image
                  src="/assets/pricing/orange-dot.svg"
                  alt=""
                  width={17}
                  height={17}
                  className="object-contain"
                />
              </div>
              <p className="font-montserrat font-normal text-[12px] sm:text-[14px] md:text-[16px] text-[#111111] tracking-[0.5px] sm:tracking-[0.64px] uppercase leading-none">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
