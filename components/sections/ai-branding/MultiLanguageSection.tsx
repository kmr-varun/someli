import Image from "next/image";

const languagesLeft = [
  { name: "Arabic", flag: "/assets/ai-branding/language/flag-arabic.png" },
  { name: "English", flag: "/assets/ai-branding/language/flag-english.png" },
  { name: "French", flag: "/assets/ai-branding/language/flag-french.png" },
];

const languagesRight = [
  { name: "German", flag: "/assets/ai-branding/language/flag-german.png" },
  { name: "Spanish", flag: "/assets/ai-branding/language/flag-spanish.png" },
  { name: "Hindi", flag: "/assets/ai-branding/language/flag-hindi.png" },
];

const benefitsLeft = ["Translates with context", "Keeps your tone intact"];
const benefitsRight = ["Culturally relevant", "100% brand consistent"];

export default function MultiLanguageSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] flex flex-col gap-12 sm:gap-16 items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-[15px] py-[7px] rounded-full">
            <p className="font-normal text-[12px] text-[#ED6B52] tracking-[0.96px] uppercase leading-[15px]">
              GLOBAL REACH
            </p>
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-bold leading-[1.19] tracking-[-2px] text-black text-center">
            Reach every audience in their language
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center w-full">
          {/* Left Card - White with border, goes behind the right card */}
          <div className="w-full lg:flex-1 lg:mr-[-36px] relative bg-white border-[2.23px] border-[#DF8251] rounded-[22px] px-8 py-11 flex flex-col gap-9">
            <p className="text-[18px] text-black leading-[24.5px]">
              Create authentic content that connects in any language while
              maintaining your voice, brand, and consistency.
            </p>

            {/* Languages 2-col */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-9">
                <div className="flex flex-col gap-3">
                  {languagesLeft.map((lang, i) => (
                    <div key={i} className="flex gap-[14px] items-center">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden shrink-0">
                        <Image src={lang.flag} alt={lang.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <p className="text-[14px] font-semibold text-[#444] leading-[1.2]">{lang.name}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {languagesRight.map((lang, i) => (
                    <div key={i} className="flex gap-[14px] items-center">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden shrink-0">
                        <Image src={lang.flag} alt={lang.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <p className="text-[14px] font-semibold text-[#444] leading-[1.2]">{lang.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[#FF462E] text-[13px] font-bold">+ More Languages</p>
            </div>

            {/* CTA */}
            <button className="border border-[#ED6B52] rounded-full pl-7 pr-10 py-4 text-[#ED6B52] font-bold text-[16px] w-fit flex items-center gap-1 hover:bg-[#ED6B52] hover:text-white transition-colors">
              <span className="ml-6">•</span>
              <span>Reach your Global Audience</span>
            </button>
          </div>

          {/* Right Card - Gradient with post mockups, sits on top of left */}
          <div className="w-full lg:flex-1 relative z-10 bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[22px] p-10 flex flex-col gap-11">
            {/* Post mockups - overlapping grid layout */}
            <div className="relative w-full" style={{ minHeight: '380px' }}>
              {/* English Post - left, higher */}
              <div className="absolute left-0 top-0 flex flex-col gap-2" style={{ width: '40%' }}>
                <div className="bg-[rgba(255,255,255,0.12)] border border-white rounded-full px-[15px] py-[7px] w-fit">
                  <span className="text-[12px] text-white uppercase tracking-[0.96px]">ENGLISH</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-md w-[229px]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-[34px] h-[34px] rounded-full border border-[#bebebe] overflow-hidden relative shrink-0 p-[7px]">
                      <Image src="/assets/logo.png" alt="Someli" fill className="object-contain p-1" sizes="34px" />
                    </div>
                    <div>
                      <p className="text-[9.5px] font-bold text-black leading-none">Someli</p>
                      <p className="text-[6.8px] text-[#878787]">2.3M Followers</p>
                      <p className="text-[6.8px] text-[#878787]">2h ago</p>
                    </div>
                  </div>
                  <p className="text-[9.5px] font-semibold text-[#232323] leading-[1.5] mb-2">
                    Great teams don't just execute, they empower, adapt, and grow together. Proud of what we are building.
                  </p>
                  <p className="text-[9.5px] text-[#4087C8] leading-[1.5] mb-2">
                    #TeamSomeli #Growth #Innovation.
                  </p>
                  <div className="w-full h-[91px] bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[5px] flex items-center justify-center mb-2">
                    <Image src="/assets/logo.png" alt="Someli" width={80} height={30} className="object-contain" />
                  </div>
                  <div className="flex justify-between text-[6.8px] text-[#878787] mb-2">
                    <span>342</span>
                    <span>16 Comments 42 reposts</span>
                  </div>
                  <div className="border-t border-[rgba(35,35,35,0.2)] pt-2 flex justify-between text-[6.8px] text-black">
                    <span>Like</span>
                    <span>Comment</span>
                    <span>Repost</span>
                    <span>Send</span>
                  </div>
                </div>
              </div>

              {/* Switch icon - center */}
              <div className="absolute left-[45%] top-[40%] w-[58px] h-[58px] bg-[rgba(255,255,255,0.08)] border border-white rounded-full flex items-center justify-center z-10">
                <span className="text-white text-[24px] font-bold">↔</span>
              </div>

              {/* Arabic Post - right, lower */}
              <div className="absolute right-0 top-[46px] flex flex-col gap-2" style={{ width: '40%' }}>
                <div className="bg-[rgba(255,255,255,0.12)] border border-white rounded-full px-[15px] py-[7px] w-fit">
                  <span className="text-[12px] text-white uppercase tracking-[0.96px]">Arabic</span>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-md w-[229px]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-[34px] h-[34px] rounded-full border border-[#bebebe] overflow-hidden relative shrink-0 p-[7px]">
                      <Image src="/assets/logo.png" alt="Someli" fill className="object-contain p-1" sizes="34px" />
                    </div>
                    <div>
                      <p className="text-[9.5px] font-bold text-black leading-none">Someli</p>
                      <p className="text-[6.8px] text-[#878787]">2.3M Followers</p>
                      <p className="text-[6.8px] text-[#878787]">2h ago</p>
                    </div>
                  </div>
                  <p className="text-[9.5px] font-semibold text-[#232323] leading-[1.5] text-right mb-2" dir="rtl">
                    الفرق المتميزة لا تكتفي بالتنفيذ فحسب، بل تُمكّن أفرادها، وتتكيف مع المتغيرات، وتنمو معاً. فخورون بما نبنيه.
                    <br />#فريق_سوميلي #نمو #ابتكار
                  </p>
                  <div className="w-full h-[91px] bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[5px] flex items-center justify-center mb-2">
                    <Image src="/assets/logo.png" alt="Someli" width={80} height={30} className="object-contain" />
                  </div>
                  <div className="flex justify-between text-[6.8px] text-[#878787] mb-2">
                    <span>342</span>
                    <span>16 Comments 42 reposts</span>
                  </div>
                  <div className="border-t border-[rgba(35,35,35,0.2)] pt-2 flex justify-between text-[6.8px] text-black">
                    <span>Like</span>
                    <span>Comment</span>
                    <span>Repost</span>
                    <span>Send</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefits */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-[14px] flex-1">
                {benefitsLeft.map((b, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <Image src="/assets/ai-branding/language/checkmark-green.svg" alt="" width={21} height={21} className="shrink-0" />
                    <p className="text-[16px] lg:text-[19.5px] text-white leading-[1.5] tracking-[-0.39px]">{b}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-[14px] flex-1">
                {benefitsRight.map((b, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <Image src="/assets/ai-branding/language/checkmark-green.svg" alt="" width={21} height={21} className="shrink-0" />
                    <p className="text-[16px] lg:text-[19.5px] text-white leading-[1.5] tracking-[-0.39px]">{b}</p>
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
