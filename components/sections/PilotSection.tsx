import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  {
    heading: 'Five Executives',
    body: 'Start small, think big',
  },
  {
    heading: 'Prove ROI',
    body: 'Review results and scale with confidence.',
  },
  {
    heading: '90 Day',
    body: 'Measure, analyze, and optimize',
  },
];

export default function PilotSection() {
  return (
    <section className="bg-white w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-16 sm:pt-20 md:pt-[100px] pb-8 sm:pb-10 md:pb-[40px] flex flex-col gap-10 sm:gap-12 md:gap-[64px]">

        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="inline-flex items-center rounded-full border border-[rgba(247,103,57,0.16)] bg-[rgba(247,103,57,0.16)] px-[15px] py-[7px]">
            <span className="font-['Montserrat'] font-normal text-[12px] uppercase tracking-[0.96px] text-[#ED6B52] leading-[15px]">
              Low Risk High Impact
            </span>
          </div>

          <h2 className="font-['Montserrat'] font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1.19] tracking-[-1.5px] md:tracking-[-2px] text-black w-full">
            Start with a 90-Day Pilot
          </h2>

          <p className="font-['Montserrat'] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[1.36] text-black max-w-[720px]">
            We will start with a small group of executives, Set clear KPI&apos;s and prove the ROI before you scale.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-start sm:items-stretch w-full">
          {STATS.map((stat, i) => (
            <>
              <div key={stat.heading} className="flex flex-1 flex-col gap-4 items-start sm:pr-6 md:pr-8">
                <p
                  className="font-['Montserrat'] font-bold text-[22px] sm:text-[24px] md:text-[28px] leading-[1.2] tracking-[3px] uppercase"
                  style={{
                    background: 'linear-gradient(to bottom, #ff821b, #d54050)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.heading}
                </p>
                <p className="font-['Montserrat'] font-normal text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#444]">
                  {stat.body}
                </p>
              </div>
              {i < STATS.length - 1 && (
                <div key={`divider-${i}`} className="hidden sm:block w-px self-stretch bg-[#E5E5E5] flex-shrink-0 mx-6 md:mx-8" />
              )}
            </>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-b from-[#ff821b] to-[#d54050] rounded-[16px] sm:rounded-[18px] md:rounded-[21px] p-6 sm:p-8 md:p-[36px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          {/* Icon + text */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 md:gap-[60px] flex-1">
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[16px] w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[85px] md:h-[85px] flex items-center justify-center flex-shrink-0">
              <div className="relative w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px]">
                <Image
                  src="/assets/pilot/icon-ribbon.svg"
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 text-white">
              <p className="font-['Montserrat'] font-bold text-[22px] sm:text-[26px] md:text-[32px] leading-[1.4]">
                An entire team, a powerful platform, unlimited potential
              </p>
              <p className="font-['Montserrat'] font-normal text-[13px] sm:text-[14px] leading-[1.5] tracking-[-0.3px]">
                Someli AI is the employee advocacy and executive branding team-as-a-service your company deserves.
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            href="/book-demo"
            className="flex-shrink-0 inline-flex items-center border border-white rounded-full pl-7 pr-10 py-4 text-white font-['Montserrat'] font-bold text-[16px] leading-none hover:bg-white hover:text-[#ff821b] transition-colors duration-200"
          >
            • Book a Demo
          </Link>
        </div>

      </div>
    </section>
  );
}
