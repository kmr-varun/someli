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
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !cardsContainerRef.current || !cardsWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      const totalCards = cards.length;
      const cardHeight = cards[0]?.offsetHeight || 400;
      const gap = 24;

      // Wrapper height: card + bottom padding
      cardsWrapperRef.current!.style.height = `${cardHeight + 80}px`;

      // Set CSS variable for sidebar height to match single card
      cardsContainerRef.current!.style.setProperty('--card-height', `${cardHeight}px`);

      // First card starts active
      const firstCard = cards[0];
      if (firstCard) {
        const leftPanel = firstCard.querySelector('[data-left-panel]') as HTMLElement;
        gsap.set(leftPanel, {
          background: 'linear-gradient(to bottom, #df8251, #d54050)',
        });
        gsap.set(firstCard.querySelector('[data-number]'), { color: '#ffffff' });
        gsap.set(firstCard.querySelector('[data-title]'), { color: '#ffffff' });
      }

      // First dot starts active
      if (dotsRef.current[0]) {
        gsap.set(dotsRef.current[0], {
          backgroundColor: 'rgba(237,107,82,0.2)',
          scale: 1.1,
        });
        const innerCircle = dotsRef.current[0]?.querySelector('div');
        if (innerCircle) {
          gsap.set(innerCircle, {
            backgroundColor: '#ED6B52',
            borderColor: '#ED6B52',
          });
        }
      }

      // Position cards 2 & 3 below the first (stacked below, visible)
      cards.forEach((card, index) => {
        if (index === 0) return;
        gsap.set(card, { y: index * (cardHeight + gap) });
      });

      // Pin the container and animate cards into a stack
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 25%',
          end: () => `+=${(totalCards - 1) * cardHeight}`,
          pin: true,
          scrub: 0.8,
        },
      });

      // Animate each card (after the first) sliding up to stack on top
      for (let i = 1; i < totalCards; i++) {
        const card = cards[i];
        if (!card) continue;

        const leftPanel = card.querySelector('[data-left-panel]') as HTMLElement;
        const number = card.querySelector('[data-number]') as HTMLElement;
        const title = card.querySelector('[data-title]') as HTMLElement;

        const segmentStart = (i - 1) / (totalCards - 1);

        // Slide card up to land on top of previous
        tl.to(
          card,
          { y: 0, duration: 0.5, ease: 'power2.out' },
          segmentStart
        );

        // Push ALL previous cards further up and scale them down progressively
        for (let j = i - 1; j >= 0; j--) {
          const depth = i - j; // how many cards are on top of this one
          tl.to(
            cards[j],
            {
              scale: 1 - depth * 0.04,
              y: -(depth * 35),
              duration: 0.5,
              ease: 'power2.out',
            },
            segmentStart
          );
        }

        // Activate current card left panel
        tl.to(
          leftPanel,
          {
            background: 'linear-gradient(to bottom, #df8251, #d54050)',
            duration: 0.3,
          },
          segmentStart + 0.25
        );
        tl.to(
          [number, title],
          { color: '#ffffff', duration: 0.3 },
          segmentStart + 0.25
        );

        // Dots
        if (dotsRef.current[i]) {
          tl.to(
            dotsRef.current[i],
            {
              backgroundColor: 'rgba(237,107,82,0.2)',
              scale: 1.1,
              duration: 0.2,
            },
            segmentStart
          );
          const innerCircle = dotsRef.current[i]?.querySelector('div');
          if (innerCircle) {
            tl.to(
              innerCircle,
              {
                backgroundColor: '#ED6B52',
                borderColor: '#ED6B52',
                duration: 0.2,
              },
              segmentStart + 0.1
            );
          }
        }

        // Lines
        if (linesRef.current[i - 1]) {
          tl.fromTo(
            linesRef.current[i - 1],
            { scaleY: 0 },
            { scaleY: 1, duration: 0.4 },
            segmentStart
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Header */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[100px] pb-8 sm:pb-10 md:pb-12 max-w-[1440px] mx-auto">
        <div className="mx-auto flex max-w-[892px] flex-col items-center gap-3 sm:gap-4 text-center">
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
            AI + Strategy + Consistency + Influence that grows your business
          </p>
        </div>
      </div>

      {/* Trigger element for scroll */}
      <div className="relative">
        <div ref={cardsContainerRef} className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto">
          <div className="relative mx-auto max-w-[1200px]">
            {/* Left Sidebar Dots & Lines - positioned to match first card height only */}
            <div className="hidden lg:flex absolute left-[-67px] top-0 w-[26px] flex-col items-center gap-[9.825px] py-[50px]" style={{ height: 'var(--card-height, 400px)' }}>
              {items.map((item, index) => (
                <div key={item.id} className="flex flex-col items-center flex-1 w-full">
                  {/* Dot */}
                  <div
                    ref={(el) => {
                      dotsRef.current[index] = el;
                    }}
                    className="flex w-full items-center justify-center rounded-full p-[7.369px] transition-all"
                  >
                    <div className="h-[10.941px] w-[10.941px] rounded-full border-2 border-[rgba(237,107,82,0.3)] transition-all" />
                  </div>

                  {/* Line (if not last item) */}
                  {index < items.length - 1 && (
                    <div className="relative flex flex-1 w-full items-center justify-center overflow-hidden">
                      {/* Background line (light) - always visible */}
                      <div className="absolute h-full w-[2px] bg-[rgba(237,107,82,0.15)]" />
                      {/* Active line (dark) - animates on scroll */}
                      <div
                        ref={(el) => {
                          linesRef.current[index] = el;
                        }}
                        className="h-full w-[2px] origin-top bg-[rgba(237,107,82,0.6)]"
                        style={{ transform: 'scaleY(0)' }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cards - stacking on scroll */}
            <div ref={cardsWrapperRef} className="relative overflow-visible">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="absolute top-0 left-0 right-0 flex flex-col lg:flex-row w-full overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border-2 border-[rgba(0,0,0,0.06)] bg-white"
                  style={{
                    zIndex: index + 1,
                  }}
                >
                  {/* Left Side - Number & Title */}
                  <div
                    data-left-panel
                    className="flex w-full md:w-[220px] lg:w-[243px] flex-col items-start justify-center border-b lg:border-b-0 lg:border-r border-[rgba(0,0,0,0.08)] bg-[rgba(247,103,57,0.06)] px-5 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10"
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
          </div>
        </div>
      </div>
    </section>
  );
}
