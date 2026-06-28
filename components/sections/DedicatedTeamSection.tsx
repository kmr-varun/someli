import Image from 'next/image';

const CARDS = [
  {
    icon: '/assets/dedicated-team/icon-designer.svg',
    title: 'Graphic Designer',
    description: 'Stunning visuals that make your content stand out and drive engagement',
  },
  {
    icon: '/assets/dedicated-team/icon-video.svg',
    title: 'Video Editor',
    description: 'High-quality videos that bring your message to life and honest reach across every platform.',
  },
  {
    icon: '/assets/dedicated-team/icon-support.svg',
    title: 'Customer Support Manager',
    description: 'Your dedicated point of contact ensuring a smooth experience and quick resolutions.',
  },
];

export default function DedicatedTeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111]">
      {/* Background orange wave */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <Image
          src="/assets/dedicated-team/bg-wave.jpg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-[56px] items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 md:py-[100px] lg:py-[120px]">
        {/* Heading */}
        <h2 className="font-['Montserrat'] font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.19] tracking-[-1.5px] md:tracking-[-2px] text-center text-white w-full">
          Someli AI works as Your Dedicated Creative Team
        </h2>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch w-full">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="glass-border-card-hover flex flex-1 flex-col items-start px-6 sm:px-8 py-8 sm:py-10 rounded-[16px] hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-300"
            >
              <div className="flex flex-col gap-[18px] items-start w-full">
                {/* Icon */}
                <div className="bg-[rgba(237,107,82,0.1)] flex items-center justify-center p-[12px] rounded-[10px] w-[52px] h-[52px] flex-shrink-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={card.icon}
                      alt=""
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[3px] items-start w-full">
                  <p className="font-['Montserrat'] font-bold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                    {card.title}
                  </p>
                  <p className="font-['Montserrat'] font-normal text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
