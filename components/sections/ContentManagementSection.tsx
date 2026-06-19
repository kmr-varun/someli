'use client';

import Image from 'next/image';

export default function ContentManagementSection() {
  const devices = [
    {
      number: '01',
      title: '2-Week Content Planner',
    },
    {
      number: '02',
      title: 'Strategic Content Library',
    },
    {
      number: '03',
      title: 'Branded Posts & Reels',
    },
  ];

  return (
    <section className="bg-[#0D0D0D] px-24 py-[100px]">
      <div className="flex flex-col gap-16">
        {/* Header */}
        <div className="flex items-start justify-between">
          {/* Left: Label + Heading */}
          <div className="flex flex-col gap-4 w-[618px]">
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-[15px] py-[7px] inline-flex w-fit">
              <span className="text-[#ED6B52] text-[10px] font-normal font-['Inter'] tracking-[1px] uppercase leading-[15px]">
                AUTOMATED VISIBILITY
              </span>
            </div>
            <h2 className="text-white text-[60px] font-bold leading-[71.4px] tracking-[-2px]">
              Content Management Made Seamless
            </h2>
          </div>

          {/* Right: Description */}
          <div className="w-[542px] pt-[59px] flex flex-col gap-2 text-white text-lg leading-[1.5]">
            <p>
              Empower your team to become brand ambassadors without adding friction to their day.
            </p>
            <p>
              Someli simplifies the entire production pipeline by housing a centralized library of ready-to-share marketing assets right alongside an intuitive team scheduler.
            </p>
            <p>
              Leaders gain full visibility to plan, curate, and oversee content calendars for the entire organization from a single dashboard.
            </p>
          </div>
        </div>

        {/* Device Mockups + Social Platforms Pill */}
        <div className="flex flex-col gap-10 items-center">
          {/* Three Device Cards Container */}
          <div className="flex gap-7 h-[318px] w-[1277px] overflow-hidden items-start">
            {devices.map((device, index) => (
              <div
                key={index}
                className="flex-1 h-[428.524px] flex items-center justify-center group"
              >
                <div className="-rotate-[10deg] w-full">
                  <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 flex flex-col gap-8 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Card Header */}
                    <div className="flex flex-col gap-3">
                      <div className="text-[17px] leading-[1.5] text-[rgba(255,255,255,0.4)] group-hover:text-[#ED6B52] transition-colors duration-300">
                        {device.number}
                      </div>
                      <h3 className="text-white text-2xl font-bold leading-[1.4] tracking-[-2px]">
                        {device.title}
                      </h3>
                    </div>

                    {/* Screenshot */}
                    <div className="relative w-full rounded-[10px] border-[0.5px] border-[#ED6B52] shadow-[0px_4px_26.1px_0px_rgba(247,103,57,0.25)] overflow-hidden"
                      style={{ aspectRatio: '3420/1948' }}
                    >
                      <Image
                        src="/assets/content-management/dashboard-screenshot.png"
                        alt={device.title}
                        fill
                        sizes="(max-width: 1440px) 33vw, 400px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Platforms Pill */}
          <div className="bg-[#111] border border-white rounded-full px-8 py-4 flex gap-[10px] items-center">
            <div className="w-[16.909px] h-[16.909px] relative">
              <Image
                src="/assets/content-management/social-icon.svg"
                alt=""
                fill
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[rgba(255,255,255,0.4)] text-[10px] tracking-[0.4px] leading-none">
                PUBLISHES DIRECTLY TO
              </div>
              <div className="text-white text-base font-medium tracking-[0.64px] leading-none">
                LinkedIn · Instagram · Facebook
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
