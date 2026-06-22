import CaseStudyCard from './CaseStudyCard';

export default function CaseStudiesListSection() {
  // Define the case study data (3 identical for now - will be customized per actual data)
  const caseStudies = [
    {
      companyLogo: '/assets/case-studies/dp-world-logo.png',
      industry: 'Logistics & Supply Chain',
      category: 'ENTERPRISE',
      goal: 'Admin sets brand voice, tone, compliance rules, and content themes.',
      outcomes: [
        'Admin sets brand voice, tone, compliance rules, and content themes.',
        'AI ingest company context, industry, and audience profile.',
        'AI ingest company context, industry, and audience profile.'
      ],
      stats: [
        {
          icon: '/assets/case-studies/stat-icon-user.svg',
          value: '2.8X',
          label: 'More Engagement',
          sublabel: 'than brand posts'
        },
        {
          icon: '/assets/case-studies/stat-icon-user.svg',
          value: '4X',
          label: 'More Trust',
          sublabel: 'from audiences'
        },
        {
          icon: '/assets/case-studies/stat-icon-chart.svg',
          value: '3X',
          label: 'More Reach',
          sublabel: 'through employee networks'
        }
      ],
      testimonial: {
        quote: "Most founders think growth comes from ads. It doesn't. It comes from consistent visibility.",
        authorName: 'Ananya Sharma',
        authorRole: 'Founder & CEO',
        authorAvatar: '/assets/case-studies/author-avatar.png',
        timeAgo: '1 month',
        companyIcon: '/assets/case-studies/linkedin-icon-new.png'
      },
      variant: 'gradient' as const
    },
    {
      companyLogo: '/assets/case-studies/dp-world-logo.png',
      industry: 'Logistics & Supply Chain',
      category: 'ENTERPRISE',
      goal: 'Admin sets brand voice, tone, compliance rules, and content themes.',
      outcomes: [
        'Admin sets brand voice, tone, compliance rules, and content themes.',
        'AI ingest company context, industry, and audience profile.',
        'AI ingest company context, industry, and audience profile.'
      ],
      stats: [
        {
          icon: '/assets/case-studies/stat-icon-user.svg',
          value: '2.8X',
          label: 'More Engagement',
          sublabel: 'than brand posts'
        },
        {
          icon: '/assets/case-studies/stat-icon-user.svg',
          value: '4X',
          label: 'More Trust',
          sublabel: 'from audiences'
        },
        {
          icon: '/assets/case-studies/stat-icon-chart.svg',
          value: '3X',
          label: 'More Reach',
          sublabel: 'through employee networks'
        }
      ],
      testimonial: {
        quote: "Most founders think growth comes from ads. It doesn't. It comes from consistent visibility.",
        authorName: 'Ananya Sharma',
        authorRole: 'Founder & CEO',
        authorAvatar: '/assets/case-studies/author-avatar.png',
        timeAgo: '1 month',
        companyIcon: '/assets/case-studies/linkedin-icon-new.png'
      },
      variant: 'light' as const
    },
    {
      companyLogo: '/assets/case-studies/dp-world-logo.png',
      industry: 'Logistics & Supply Chain',
      category: 'ENTERPRISE',
      goal: 'Admin sets brand voice, tone, compliance rules, and content themes.',
      outcomes: [
        'Admin sets brand voice, tone, compliance rules, and content themes.',
        'AI ingest company context, industry, and audience profile.',
        'AI ingest company context, industry, and audience profile.'
      ],
      stats: [
        {
          icon: '/assets/case-studies/stat-icon-user.svg',
          value: '2.8X',
          label: 'More Engagement',
          sublabel: 'than brand posts'
        },
        {
          icon: '/assets/case-studies/stat-icon-user.svg',
          value: '4X',
          label: 'More Trust',
          sublabel: 'from audiences'
        },
        {
          icon: '/assets/case-studies/stat-icon-chart.svg',
          value: '3X',
          label: 'More Reach',
          sublabel: 'through employee networks'
        }
      ],
      testimonial: {
        quote: "Most founders think growth comes from ads. It doesn't. It comes from consistent visibility.",
        authorName: 'Ananya Sharma',
        authorRole: 'Founder & CEO',
        authorAvatar: '/assets/case-studies/author-avatar.png',
        timeAgo: '1 month',
        companyIcon: '/assets/case-studies/linkedin-icon-new.png'
      },
      variant: 'light' as const
    }
  ];

  return (
    <section className="w-full bg-white px-24 py-[100px] flex flex-col items-center gap-16">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4">
        {/* Pill Label */}
        <div className="inline-flex items-center px-[15px] py-[7px] rounded-full bg-[rgba(247,103,57,0.16)] border border-[rgba(247,103,57,0.15)]">
          <span className="font-['Montserrat'] text-[10px] font-normal tracking-[1px] uppercase text-[#f76739] leading-[15px]">
            CASE STUDIES
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-['Montserrat'] text-[60px] font-bold leading-[71.4px] tracking-[-2px] text-[#222] text-center">
          Proven Results Across Industries
        </h2>

        {/* Subheading */}
        <p className="font-['Montserrat'] text-[18px] font-normal leading-[1.5] text-[#444] text-center">
          AI + Strategy + Consistency + Influence that grows your businesss
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="flex flex-col gap-4">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard key={index} {...caseStudy} />
        ))}
      </div>
    </section>
  );
}
