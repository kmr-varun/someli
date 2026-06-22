'use client';

import Image from 'next/image';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'solution', label: 'The Solution' },
  { id: 'results', label: 'The Results' },
  { id: 'takeaways', label: 'Key Takeaways' },
];

export default function CaseStudyDetailTabNav() {
  const handleTabClick = (tabId: string) => {
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full overflow-clip px-24 py-10">
      {/* Dark background with pattern overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#111]" />
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <Image
            src="/assets/case-study-detail/tab-nav-bg.png"
            alt=""
            fill
            className="object-cover"
            style={{
              objectPosition: 'left -0.03% top -2.88%',
            }}
          />
        </div>
      </div>

      {/* Tab buttons */}
      <div className="relative z-10 flex gap-2 items-start w-full">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              flex-1 min-w-px flex items-center justify-center
              pl-7 pr-10 py-4 rounded-full
              font-montserrat font-bold text-[16px] leading-none
              transition-all duration-300
              ${
                index === 0
                  ? 'bg-[#f76739] text-white drop-shadow-[0px_4px_4px_rgba(247,103,57,0.2)]'
                  : 'border border-[#ed6b52] text-[#ed6b52] hover:bg-[#ed6b52] hover:text-white'
              }
            `}
          >
            <span className="inline-flex items-center">
              <span className="mr-2">•</span>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
