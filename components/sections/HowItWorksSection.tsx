'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    id: 1,
    number: '01/',
    title: 'Brand Intelligence Layer',
    icon: '/assets/how-it-works/g3473.svg',
    description: 'Build the foundation of your brand voice.',
    bullets: [
      'Admin sets brand voice, tone, compliance rules, and content themes.',
      'AI ingest company context, industry, and audience profile.',
      'Enterprise content library built - approved as its messages, campaigns',
    ],
    mockup: '/assets/how-it-works/dashboard-tab1.png',
    mockupPosition: 'object-[left_-0.04%_top_0%]',
  },
  {
    id: 2,
    number: '02/',
    title: 'AI Content Engine',
    icon: '/assets/how-it-works/icon-content.svg',
    description: 'Build the foundation of your brand voice.',
    bullets: [
      'Admin sets brand voice, tone, compliance rules, and content themes.',
      'AI ingest company context, industry, and audience profile.',
      'Enterprise content library built - approved as its messages, campaigns',
    ],
    mockup: '/assets/how-it-works/dashboard-tab1.png',
    mockupPosition: 'object-[left_-0.04%_top_0%]',
  },
  {
    id: 3,
    number: '03/',
    title: 'Distribution & Insights Layer',
    icon: '/assets/how-it-works/icon-content.svg',
    description: 'Build the foundation of your brand voice.',
    bullets: [
      'Admin sets brand voice, tone, compliance rules, and content themes.',
      'AI ingest company context, industry, and audience profile.',
      'Enterprise content library built - approved as its messages, campaigns',
    ],
    mockup: '/assets/how-it-works/dashboard-tab3.png',
    mockupPosition: 'object-[left_-3.39%_top_-5.3%]',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each card as it enters view
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const leftPanel = card.querySelector('[data-left-panel]') as HTMLElement;
        const number = card.querySelector('[data-number]') as HTMLElement;
        const title = card.querySelector('[data-title]') as HTMLElement;

        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            // Activate card
            gsap.to(card, {
              boxShadow: '0px 4px 25px 0px rgba(0,0,0,0.08)',
              duration: 0.3,
            });

            // Activate left panel
            gsap.to(leftPanel, {
              background: 'linear-gradient(to bottom, #df8251, #d54050)',
              duration: 0.3,
            });

            // Activate text
            gsap.to([number, title], {
              color: '#ffffff',
              duration: 0.3,
            });

            // Activate dot
            if (dotsRef.current[index]) {
              // Add background to container
              gsap.to(dotsRef.current[index], {
                backgroundColor: 'rgba(237,107,82,0.2)',
                scale: 1.1,
                duration: 0.3,
              });

              // Fill the inner circle
              const innerCircle = dotsRef.current[index]?.querySelector('div');
              if (innerCircle) {
                gsap.to(innerCircle, {
                  backgroundColor: '#ED6B52',
                  borderColor: '#ED6B52',
                  duration: 0.3,
                });
              }
            }

            // Animate line fill (if not last item)
            if (index < linesRef.current.length && linesRef.current[index]) {
              gsap.fromTo(
                linesRef.current[index],
                { scaleY: 0 },
                { scaleY: 1, duration: 0.6, ease: 'power2.out' }
              );
            }
          },
          onLeaveBack: () => {
            // Deactivate card
            gsap.to(card, {
              boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
              duration: 0.3,
            });

            // Deactivate left panel
            gsap.to(leftPanel, {
              background: 'rgba(247,103,57,0.06)',
              duration: 0.3,
            });

            // Deactivate text
            gsap.to(number, {
              color: '#f76739',
              duration: 0.3,
            });
            gsap.to(title, {
              color: '#222222',
              duration: 0.3,
            });

            // Deactivate dot
            if (dotsRef.current[index]) {
              // Remove background
              gsap.to(dotsRef.current[index], {
                backgroundColor: 'transparent',
                scale: 1,
                duration: 0.3,
              });

              // Reset inner circle to outline only
              const innerCircle = dotsRef.current[index]?.querySelector('div');
              if (innerCircle) {
                gsap.to(innerCircle, {
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(237,107,82,0.3)',
                  duration: 0.3,
                });
              }
            }

            // Reset line (if not last item)
            if (index < linesRef.current.length && linesRef.current[index]) {
              gsap.to(linesRef.current[index], {
                scaleY: 0,
                duration: 0.3,
              });
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16 flex max-w-[892px] flex-col items-center gap-3 sm:gap-4 text-center">
        {/* Pill Label */}
        <div className="inline-flex items-center rounded-full border border-[rgba(247,103,57,0.15)] bg-[rgba(247,103,57,0.16)] px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px]">
          <span className="font-montserrat text-[9px] sm:text-[10px] font-normal uppercase leading-[15px] tracking-[0.8px] sm:tracking-[1px] text-[#f76739]">
            Smart Workflow
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] md:tracking-[-2px] text-[#222]">
          How Someli AI works
        </h2>

        {/* Subheading */}
        <p className="font-montserrat text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5] text-[#444]">
          AI + Strategy + Consistency + Influence that grows your businesss
        </p>
      </div>

      {/* Items Container */}
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-3 sm:gap-4">
        {/* Left Sidebar Dots & Lines - Hidden on mobile/tablet */}
        <div className="hidden lg:flex absolute left-[-67px] top-0 h-full w-[26px] flex-col items-center gap-[9.825px] py-[150px]">
          {/* Dot 1 */}
          <div
            ref={(el) => {
              dotsRef.current[0] = el;
            }}
            className="flex w-full items-center justify-center rounded-full p-[7.369px] transition-all"
          >
            <div className="h-[10.941px] w-[10.941px] rounded-full border-2 border-[rgba(237,107,82,0.3)] transition-all" />
          </div>

          {/* Line 1 */}
          <div className="relative flex min-h-0 flex-1 w-full items-center justify-center overflow-hidden">
            {/* Background line (light) - always visible */}
            <div className="absolute h-full w-[2px] bg-[rgba(237,107,82,0.15)]" />
            {/* Active line (dark) - animates on scroll */}
            <div
              ref={(el) => {
                linesRef.current[0] = el;
              }}
              className="h-full w-[2px] origin-top bg-[rgba(237,107,82,0.6)]"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Dot 2 */}
          <div
            ref={(el) => {
              dotsRef.current[1] = el;
            }}
            className="flex w-full items-center justify-center rounded-full p-[7.369px] transition-all"
          >
            <div className="h-[10.941px] w-[10.941px] rounded-full border-2 border-[rgba(237,107,82,0.3)] transition-all" />
          </div>

          {/* Line 2 */}
          <div className="relative flex min-h-0 flex-1 w-full items-center justify-center overflow-hidden">
            {/* Background line (light) - always visible */}
            <div className="absolute h-full w-[2px] bg-[rgba(237,107,82,0.15)]" />
            {/* Active line (dark) - animates on scroll */}
            <div
              ref={(el) => {
                linesRef.current[1] = el;
              }}
              className="h-full w-[2px] origin-top bg-[rgba(237,107,82,0.6)]"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Dot 3 */}
          <div
            ref={(el) => {
              dotsRef.current[2] = el;
            }}
            className="flex w-full items-center justify-center rounded-full p-[7.369px] transition-all"
          >
            <div className="h-[10.941px] w-[10.941px] rounded-full border-2 border-[rgba(237,107,82,0.3)] transition-all" />
          </div>
        </div>

        {/* All Items - Always visible */}
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="flex flex-col lg:flex-row w-full overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border-2 border-[rgba(0,0,0,0.06)]"
          >
            {/* Left Side - Number & Title */}
            <div
              data-left-panel
              className="flex w-full lg:w-[243px] flex-col items-start justify-center border-b lg:border-b-0 lg:border-r border-[rgba(0,0,0,0.08)] bg-[rgba(247,103,57,0.06)] px-5 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10"
            >
              <div className="flex w-full flex-col gap-6 sm:gap-8 md:gap-10">
                {/* Number */}
                <div className="flex items-center">
                  <span
                    data-number
                    className="font-montserrat text-[22px] sm:text-[24px] md:text-[28px] font-bold leading-none text-[#f76739]"
                  >
                    {item.number}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex w-full flex-col gap-1">
                  {/* Icon */}
                  <div className="h-5 w-5 sm:h-6 sm:w-6">
                    <Image src={item.icon} alt="" width={24} height={24} />
                  </div>

                  {/* Title */}
                  <h3
                    data-title
                    className="font-montserrat text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold leading-[1.4] tracking-[-1.5px] md:tracking-[-2px] text-[#222]"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col xl:flex-row flex-1 items-start xl:items-center justify-between gap-6 md:gap-8 px-5 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
              {/* Left Content - Description & Bullets */}
              <div className="flex w-full xl:w-[313px] flex-col gap-4 sm:gap-5 md:gap-6">
                {/* Description */}
                <p className="font-montserrat text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[1.5] tracking-[-0.3px] md:tracking-[-0.4px] text-[#222]">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-2 sm:gap-3">
                      {/* Checkmark */}
                      <div className="mt-0.5 h-[20px] w-[13px] sm:h-[23.861px] sm:w-[15.861px] flex-shrink-0">
                        <Image
                          src="/assets/how-it-works/checkmark.svg"
                          alt=""
                          width={16}
                          height={24}
                        />
                      </div>

                      {/* Bullet Text */}
                      <p className="flex-1 font-montserrat text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.5] text-[#222]">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Mockup */}
              <div className="flex-shrink-0 rounded-[12px] sm:rounded-[13.974px] p-[4px] sm:p-[6px] w-full xl:w-auto">
                <div className="overflow-hidden rounded-[14px] sm:rounded-[16px] border-[0.5px] sm:border-[0.582px] border-[rgba(247,103,57,0.6)] bg-white p-[5px] sm:p-[6.987px]">
                  <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[321.593px] w-full xl:w-[512.102px] overflow-hidden rounded-[4px] sm:rounded-[4.658px]">
                    <Image
                      src={item.mockup}
                      alt={`${item.title} dashboard`}
                      fill
                      sizes="(max-width: 1280px) 90vw, 512px"
                      className={`object-cover ${item.mockupPosition}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
