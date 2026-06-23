import Image from "next/image";

export default function AIBrandingHeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '46px 46px'
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-[622px] flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {/* Pill Label */}
          <div className="inline-flex items-center px-3 sm:px-4 md:px-[15px] py-[6px] md:py-[7px] bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] rounded-full w-fit">
            <span className="text-[#ED6B52] text-[10px] sm:text-[11px] md:text-[12px] font-normal uppercase tracking-[0.8px] md:tracking-[0.96px] leading-[15px]">
              Unlock Your Marketing Team
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] lg:tracking-[-2.04px]">
            <span className="text-[#222222]">AI-powered personal branding </span>
            <span className="bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
              for executives and C-Suite leaders
            </span>
          </h1>

          {/* Description */}
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444444] leading-[1.5] font-normal">
            Someli AI understands your voice, personality, leadership style, and goals to create a personalized content engine that builds your influence and grows your impact consistently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 items-start sm:items-center">
            <button className="border border-[#ED6B52] rounded-full px-6 sm:px-7 md:px-10 py-3 sm:py-4 text-[#ED6B52] font-bold text-[14px] sm:text-[16px] hover:bg-[#ED6B52] hover:text-white transition-colors flex items-center gap-2">
              <span>•</span>
              <span>Book a Demo</span>
            </button>
            <button className="rounded-full px-6 sm:px-7 md:px-10 py-3 sm:py-4 text-[#ED6B52] font-bold text-[14px] sm:text-[16px] hover:bg-[rgba(237,107,82,0.1)] transition-colors flex items-center gap-2">
              <span>•</span>
              <span>See How it Works</span>
            </button>
          </div>
        </div>

        {/* Right Side - Executive Photo with Cards (Desktop only) */}
        <div className="hidden lg:block relative w-[530px] h-[409px] shrink-0">
          {/* Executive Photo */}
          <div className="absolute top-[11px] left-[122px] w-[286px] h-[398px] rounded-tl-[100px] rounded-tr-[100px] overflow-hidden">
            <Image
              src="/assets/ai-branding/hero/executive-photo.jpg"
              alt="Executive"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 1: Someli AI Understands You (Left) */}
          <div className="absolute top-[19px] left-0 w-[172px] bg-white border-[1.5px] border-[#DF8251] rounded-[15px] p-[23px] shadow-lg">
            <h3 className="text-[11.4px] font-medium tracking-[0.45px] uppercase text-black mb-5 leading-[1.2]">
              Someli AI UNDERSTANDS YOU
            </h3>
            <div className="flex flex-col gap-[4.5px]">
              {[
                'Your voice and personality',
                'Your expertise and role',
                'Your goals and objectives',
                'Your audience',
                'Your preferred tone'
              ].map((item, i) => (
                <div key={i} className="flex gap-[4.5px] items-center">
                  <div className="w-[7.6px] h-[7.6px] shrink-0">
                    <Image
                      src="/assets/ai-branding/hero/checkmark.svg"
                      alt=""
                      width={8}
                      height={8}
                    />
                  </div>
                  <p className="text-[10.3px] text-black tracking-[-0.2px] leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Content Engine Output (Right) */}
          <div className="absolute top-[90px] right-0 bg-gradient-to-b from-[#DF8251] to-[#D54050] border-[1.5px] border-[#DF8251] rounded-[12px] p-4 shadow-lg">
            <h3 className="text-[11.4px] font-medium tracking-[0.45px] uppercase text-white mb-4 leading-[1.2]">
              CONTENT ENGINE<br/>OUTPUT
            </h3>
            <div className="flex flex-col gap-[4.5px]">
              {[
                { label: 'Posts', bg: false },
                { label: 'Reels', bg: true },
                { label: 'Carousels', bg: true },
                { label: 'Articles', bg: true },
                { label: 'Polls', bg: true },
                { label: 'Thought Leadership', bg: true }
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <div className={`w-[15px] h-[15px] shrink-0 flex items-center justify-center rounded ${item.bg ? 'bg-[rgba(255,255,255,0.1)]' : ''}`}>
                    <div className="w-2 h-2 bg-white/40 rounded-sm"></div>
                  </div>
                  <p className="text-[8px] text-white tracking-[-0.16px] leading-[1.5]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Multiple Languages (Bottom Right) */}
          <div className="absolute bottom-0 right-[31px] bg-white border-[1.2px] border-[#DF8251] rounded-[12px] p-[18px] shadow-lg">
            <h3 className="text-[9.2px] font-medium tracking-[0.37px] uppercase text-black mb-[10px] leading-[1.2]">
              MULTIple LANGUAGES
            </h3>
            <div className="flex flex-col gap-1">
              <div className="flex gap-[3px] items-center">
                {['flag-uk.png', 'flag-fr.png', 'flag-es.png', 'flag-de.png', 'flag-it.png', 'flag-pt.png'].map((flag, i) => (
                  <div key={i} className="w-5 h-5 shrink-0 relative rounded-full overflow-hidden">
                    <Image
                      src={`/assets/ai-branding/hero/${flag}`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[4.8px] font-bold text-[#FF462E] text-center leading-none">+ more</p>
            </div>
          </div>
        </div>

        {/* Mobile: Simplified Feature List */}
        <div className="lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border-2 border-[#DF8251] rounded-xl p-4">
            <h3 className="text-sm font-bold text-black mb-3 uppercase tracking-wide">
              AI Understands You
            </h3>
            <ul className="space-y-2 text-xs text-black">
              <li>✓ Your voice & personality</li>
              <li>✓ Expertise & role</li>
              <li>✓ Goals & objectives</li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-xl p-4">
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
              Content Output
            </h3>
            <ul className="space-y-2 text-xs text-white">
              <li>• Posts & Reels</li>
              <li>• Carousels & Articles</li>
              <li>• Thought Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
