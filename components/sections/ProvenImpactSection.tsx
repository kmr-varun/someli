import Image from 'next/image';

const stats = [
  {
    icon: '/assets/proven-impact/icon-increase.svg',
    label: 'INCREASE IN IMPRESSIONS',
    number: '3-5x',
    description: 'Within - 30- 60 weeks',
  },
  {
    icon: '/assets/proven-impact/icon-group.svg',
    label: 'INCREASE IN IMPRESSIONS',
    number: '3-5x',
    description: 'Within - 30- 60 weeks',
  },
  {
    icon: '/assets/proven-impact/icon-increase.svg',
    label: 'CONTENT OUTPUT',
    number: '10x',
    description: 'Without increasing output',
  },
];

export default function ProvenImpactSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '46px 46px',
        }}
      />

      {/* Content container */}
      <div className="relative max-w-[1440px] mx-auto px-24 py-[100px] flex items-center justify-end gap-[164px]">
        {/* Left: Stats column with outlined numbers */}
        <div className="flex-1 h-[516px] relative flex flex-col gap-[80px] justify-center overflow-hidden">
          {/* Top fade gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[436px] h-[154px] pointer-events-none">
            <div
              className="w-full h-full scale-y-[-1]"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0), white)',
              }}
            />
          </div>

          {/* Stats - dynamically rendered */}
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-2">
                <div className="w-[15px] h-3 relative shrink-0">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={15}
                    height={12}
                    className="object-contain"
                  />
                </div>
                <p className="text-[12px] font-normal text-[#222222] tracking-[0.96px] uppercase leading-[15px]">
                  {stat.label}
                </p>
              </div>
              <p className="text-[150px] font-bold leading-none tracking-[2px] outlined-stat-number">
                {stat.number}
              </p>
              <p className="text-[12px] font-normal text-[#444444] tracking-[0.48px] leading-[15px]">
                {stat.description}
              </p>
            </div>
          ))}

          {/* Bottom fade gradient */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[436px] h-[164px] pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0), white)',
            }}
          />
        </div>

        {/* Right: Heading + CTA */}
        <div className="w-[648px] shrink-0 flex flex-col gap-8 items-end">
          {/* Pill label */}
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-[15px] py-[7px]">
            <p className="text-[10px] font-normal text-[#ed6b52] tracking-[1px] uppercase leading-[15px] font-['Inter']">
              Proven Impact
            </p>
          </div>

          {/* Heading */}
          <div className="w-full text-right flex flex-col gap-10">
            <h2 className="text-[60px] font-bold text-black leading-[71.4px] tracking-[-2px]">
              Teams using Someli show up every day and the numbers prove it.
            </h2>
            <div className="text-[44px] font-bold text-[#ed6b52] leading-[1.2] tracking-[-2px]">
              <p className="mb-0">Less spend.</p>
              <p className="mb-0">More attention.</p>
              <p className="mb-0">Better conversions.</p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[18px] font-light text-[#424242] leading-[20px]">
            Real results. From real people
          </p>

          {/* CTA button */}
          <button className="border border-[#ed6b52] rounded-full pl-7 pr-10 py-4 text-[#ed6b52] font-bold text-[16px] leading-none hover:bg-[#ed6b52] hover:text-white transition-colors">
            • Calculate your Reach
          </button>
        </div>
      </div>
    </section>
  );
}
