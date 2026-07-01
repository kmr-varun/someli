import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0D0D0D] inset-0" />
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <Image src="/assets/ai-branding/benefits/bg-pattern.png" alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          {/* Left Card - Gradient */}
          <div className="flex-1 bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-2xl px-8 py-10 flex flex-col gap-8 self-stretch">
            <p className="font-semibold text-[24px] text-white leading-none">
              Benefits for your organization
            </p>

            {/* Stats 2x2 */}
            <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-3">
                <div className="border-b border-[rgba(255,255,255,0.12)] pb-3 flex flex-col gap-2">
                  <p className="font-medium text-[16px] text-white tracking-[-0.32px] leading-[1.5]">Total Reach</p>
                  <p className="font-bold text-[28px] text-white leading-[1.1]">↑ 10x</p>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.12)] pb-3 flex flex-col gap-2">
                  <p className="font-medium text-[16px] text-white tracking-[-0.32px] leading-[1.5]">Engagement</p>
                  <p className="font-bold text-[28px] text-white leading-[1.1]">↑ 5.6X</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="border-b border-[rgba(255,255,255,0.12)] pb-3 flex flex-col gap-2">
                  <p className="font-medium text-[16px] text-white tracking-[-0.32px] leading-[1.5]">Leads Generated</p>
                  <p className="font-bold text-[28px] text-white leading-[1.1]">↑ 3.8X</p>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.12)] pb-3 flex flex-col gap-2">
                  <p className="font-medium text-[16px] text-white tracking-[-0.32px] leading-[1.5]">Brand Mentions</p>
                  <p className="font-bold text-[28px] text-white leading-[1.1]">↑ 4.2X</p>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col gap-[14px]">
              {[
                "Build a powerful personal brand and industry authority.",
                "Increase visibility with the right audience.",
                "Attract new opportunities and speaking engagements.",
                "Grow your network with decision makers.",
                "Strengthen your career and leadership influence.",
              ].map((item, i) => (
                <div key={i} className="flex gap-[16.75px] items-center">
                  <div className="w-[21px] h-[21px] shrink-0 relative">
                    <Image src="/assets/ai-branding/benefits/checkmark-org.svg" alt="" fill />
                  </div>
                  <p className="flex-1 text-[18px] text-white leading-[1.5] tracking-[-0.36px]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Dark glass */}
          <div className="flex-1 glass-border bg-[rgba(255,255,255,0.04)] rounded-2xl px-8 py-10 flex flex-col gap-8 self-stretch">
            <p className="font-semibold text-[24px] text-white leading-none">
              Benefits for You (The Executive)
            </p>

            <div className="flex flex-col gap-10">
              {/* Benefits List */}
              <div className="flex flex-col gap-[14px]">
                {[
                  "Build a powerful personal brand and industry authority.",
                  "Increase visibility with the right audience.",
                  "Attract new opportunities and speaking engagements.",
                  "Grow your network with decision makers.",
                  "Strengthen your career and leadership influence.",
                  "Save hours every week with AI-powered content.",
                  "Stay consistent and relevant always.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-[16.75px] items-center">
                    <div className="w-[21px] h-[21px] shrink-0 relative">
                      <Image src="/assets/ai-branding/benefits/checkmark-exec.svg" alt="" fill />
                    </div>
                    <p className="flex-1 text-[18px] text-white leading-[1.5] tracking-[-0.36px]">{item}</p>
                  </div>
                ))}
              </div>

              {/* Personal Impact Stats Bar */}
              <div className="relative bg-[#222] border-[1.176px] border-[rgba(255,255,255,0.12)] rounded-[16px] h-[85px] w-full max-w-[482px] shadow-[0px_18.81px_19.985px_rgba(0,0,0,0.07)]">
                <p className="absolute font-medium text-[13px] text-[#e0e0e0] leading-[1.1] left-[25px] top-[18px]">
                  Profile Views
                </p>
                <p className="absolute font-bold text-[21px] leading-none left-[25px] top-[41px] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                  ↑ 312%
                </p>
                <p className="absolute font-medium text-[13px] text-[#e0e0e0] leading-[1.1] left-[175px] top-[18px]">
                  Engagement
                </p>
                <p className="absolute font-bold text-[21px] leading-none left-[175px] top-[41px] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                  ↑ 240%
                </p>
                <p className="absolute font-medium text-[13px] text-[#e0e0e0] leading-[1.1] left-[326px] top-[18px]">
                  Growth
                </p>
                <p className="absolute font-bold text-[21px] leading-none left-[326px] top-[41px] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                  ↑ 185%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
