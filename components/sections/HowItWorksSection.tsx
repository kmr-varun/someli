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
      // Pin the section while scrolling through cards
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=3000', // Scroll distance (adjust as needed)
        pin: true,
        pinSpacing: true,
        scrub: 1,
      });

      // Animate each card based on scroll progress
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const leftPanel = card.querySelector('[data-left-panel]') as HTMLElement;
        const number = card.querySelector('[data-number]') as HTMLElement;
        const title = card.querySelector('[data-title]') as HTMLElement;

        // Calculate scroll progress ranges for each card
        // Card 1: 0-33%, Card 2: 33-66%, Card 3: 66-100%
        const startProgress = index / items.length;
        const endProgress = (index + 1) / items.length;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=3000',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Activate when in range
            if (progress >= startProgress && progress < endProgress) {
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
                gsap.to(dotsRef.current[index], {
                  backgroundColor: 'rgba(237,107,82,0.2)',
                  scale: 1.1,
                  duration: 0.3,
                });
              }

              // Animate line fill (if not last item)
              if (index < linesRef.current.length && linesRef.current[index]) {
                gsap.to(linesRef.current[index], {
                  scaleY: 1,
                  duration: 0.3,
                });
              }
            } else if (progress < startProgress) {
              // Deactivate if before range
              gsap.to(card, {
                boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
                duration: 0.3,
              });

              gsap.to(leftPanel, {
                background: 'rgba(247,103,57,0.06)',
                duration: 0.3,
              });

              gsap.to(number, {
                color: '#f76739',
                duration: 0.3,
              });
              gsap.to(title, {
                color: '#222222',
                duration: 0.3,
              });

              if (dotsRef.current[index]) {
                gsap.to(dotsRef.current[index], {
                  backgroundColor: 'transparent',
                  scale: 1,
                  duration: 0.3,
                });
              }

              if (index < linesRef.current.length && linesRef.current[index]) {
                gsap.to(linesRef.current[index], {
                  scaleY: 0,
                  duration: 0.3,
                });
              }
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white px-24 py-[100px]">
      {/* Header */}
      <div className="mx-auto mb-16 flex max-w-[892px] flex-col items-center gap-4 text-center">
        {/* Pill Label */}
        <div className="inline-flex items-center rounded-full border border-[rgba(247,103,57,0.15)] bg-[rgba(247,103,57,0.16)] px-[15px] py-[7px]">
          <span className="font-montserrat text-[10px] font-normal uppercase leading-[15px] tracking-[1px] text-[#f76739]">
            Smart Workflow
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full font-montserrat text-[60px] font-bold leading-[71.4px] tracking-[-2px] text-[#222]">
          How Someli AI works
        </h2>

        {/* Subheading */}
        <p className="font-montserrat text-[18px] font-normal leading-[1.5] text-[#444]">
          AI + Strategy + Consistency + Influence that grows your businesss
        </p>
      </div>

      {/* Items Container */}
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-4">
        {/* Left Sidebar Dots & Lines - Absolute positioned */}
        <div className="absolute left-[-67px] top-0 flex h-full w-[26px] flex-col items-center gap-[9.825px] py-[150px]">
          {/* Dot 1 */}
          <div
            ref={(el) => {
              dotsRef.current[0] = el;
            }}
            className="flex w-full items-center justify-center rounded-full p-[7.369px] transition-all"
          >
            <Image
              src="/assets/how-it-works/ellipse-1.svg"
              alt=""
              width={11}
              height={11}
            />
          </div>

          {/* Line 1 */}
          <div className="relative flex min-h-0 flex-1 w-full items-center justify-center overflow-hidden">
            <div
              ref={(el) => {
                linesRef.current[0] = el;
              }}
              className="h-full w-[2px] origin-top bg-[rgba(237,107,82,0.3)]"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Dot 2 */}
          <div
            ref={(el) => {
              dotsRef.current[1] = el;
            }}
            className="flex w-full items-center justify-center p-[7.369px] transition-all"
          >
            <Image
              src="/assets/how-it-works/ellipse-2.svg"
              alt=""
              width={11}
              height={11}
            />
          </div>

          {/* Line 2 */}
          <div className="relative flex min-h-0 flex-1 w-full items-center justify-center overflow-hidden">
            <div
              ref={(el) => {
                linesRef.current[1] = el;
              }}
              className="h-full w-[2px] origin-top bg-[rgba(237,107,82,0.3)]"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Dot 3 */}
          <div
            ref={(el) => {
              dotsRef.current[2] = el;
            }}
            className="flex w-full items-center justify-center p-[7.369px] transition-all"
          >
            <Image
              src="/assets/how-it-works/ellipse-3.svg"
              alt=""
              width={11}
              height={11}
            />
          </div>
        </div>

        {/* All Items - Always visible */}
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="flex w-full overflow-hidden rounded-[24px] border-2 border-[rgba(0,0,0,0.06)]"
          >
            {/* Left Side - Number & Title */}
            <div
              data-left-panel
              className="flex w-[243px] flex-col items-start justify-center border-r border-[rgba(0,0,0,0.08)] bg-[rgba(247,103,57,0.06)] px-8 py-10"
            >
              <div className="flex w-full flex-col gap-10">
                {/* Number */}
                <div className="flex items-center">
                  <span
                    data-number
                    className="font-montserrat text-[28px] font-bold leading-none text-[#f76739]"
                  >
                    {item.number}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex w-full flex-col gap-1">
                  {/* Icon */}
                  <div className="h-6 w-6">
                    <Image src={item.icon} alt="" width={24} height={24} />
                  </div>

                  {/* Title */}
                  <h3
                    data-title
                    className="font-montserrat text-[32px] font-bold leading-[1.4] tracking-[-2px] text-[#222]"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-1 items-center justify-between px-8 py-10">
              {/* Left Content - Description & Bullets */}
              <div className="flex w-[313px] flex-col gap-6">
                {/* Description */}
                <p className="font-montserrat text-[20px] font-bold leading-[1.5] tracking-[-0.4px] text-[#222]">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="flex flex-col gap-2">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-3">
                      {/* Checkmark */}
                      <div className="mt-0.5 h-[23.861px] w-[15.861px] flex-shrink-0">
                        <Image
                          src="/assets/how-it-works/checkmark.svg"
                          alt=""
                          width={16}
                          height={24}
                        />
                      </div>

                      {/* Bullet Text */}
                      <p className="flex-1 font-montserrat text-[16px] font-normal leading-[1.5] text-[#222]">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Mockup */}
              <div className="flex-shrink-0 rounded-[13.974px] p-[6px]">
                <div className="overflow-hidden rounded-[16px] border-[0.582px] border-[rgba(247,103,57,0.6)] bg-white p-[6.987px]">
                  <div className="relative h-[321.593px] w-[512.102px] overflow-hidden rounded-[4.658px]">
                    <Image
                      src={item.mockup}
                      alt={`${item.title} dashboard`}
                      fill
                      sizes="512px"
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
