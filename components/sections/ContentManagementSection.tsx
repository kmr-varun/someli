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
    <section className="w-full overflow-hidden bg-[#0D0D0D] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
          {/* Left: Label + Heading */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[618px]">
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px] inline-flex w-fit">
              <span className="text-[#ED6B52] text-[9px] sm:text-[10px] font-normal font-['Inter'] tracking-[0.8px] sm:tracking-[1px] uppercase leading-[15px]">
                AUTOMATED VISIBILITY
              </span>
            </div>
            <h2 className="text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] md:tracking-[-2px]">
              Content management and distribution made seamless
            </h2>
          </div>

          {/* Right: Description */}
          <div className="w-full lg:w-[542px] lg:pt-[59px] flex flex-col gap-2 text-white text-[14px] sm:text-[16px] md:text-lg leading-[1.5]">
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
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Three Device Cards Container */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-7 w-full items-center md:items-start">
            {devices.map((device, index) => (
              <div
                key={index}
                className="flex-1 w-full max-w-[400px] md:max-w-none flex items-center justify-center group"
              >
                <div className="md:-rotate-[10deg] w-full transition-transform duration-300 md:group-hover:scale-105">
                  <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6 md:gap-8 opacity-60 md:opacity-30 md:group-hover:opacity-100 transition-opacity duration-300">
                    {/* Card Header */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <div className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.5] text-[rgba(255,255,255,0.4)] md:group-hover:text-[#ED6B52] transition-colors duration-300">
                        {device.number}
                      </div>
                      <h3 className="text-white text-[18px] sm:text-[20px] md:text-2xl font-bold leading-[1.4] tracking-[-1.5px] md:tracking-[-2px]">
                        {device.title}
                      </h3>
                    </div>

                    {/* Screenshot */}
                    <div className="relative w-full rounded-[8px] md:rounded-[10px] border-[0.5px] border-[#ED6B52] shadow-[0px_4px_26.1px_0px_rgba(247,103,57,0.25)] overflow-hidden"
                      style={{ aspectRatio: '3420/1948' }}
                    >
                      <Image
                        src="/assets/content-management/dashboard-screenshot.png"
                        alt={device.title}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1440px) 33vw, 400px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Platforms Pill */}
          <div className="bg-[#111] border border-white rounded-full px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 flex gap-[8px] sm:gap-[10px] items-center">
            <div className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16.909px] md:h-[16.909px] relative shrink-0">
              <Image
                src="/assets/content-management/social-icon.svg"
                alt=""
                fill
              />
            </div>
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <div className="text-[rgba(255,255,255,0.4)] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3px] sm:tracking-[0.4px] leading-none">
                PUBLISHES DIRECTLY TO
              </div>
              <div className="text-white text-[13px] sm:text-[14px] md:text-base font-medium tracking-[0.5px] sm:tracking-[0.64px] leading-none">
                LinkedIn · Instagram · Facebook
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
