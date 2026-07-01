import { ReactNode } from 'react';

interface SectionPillProps {
  children: ReactNode;
  className?: string;
}

export default function SectionPill({ children, className = '' }: SectionPillProps) {
  return (
    <div
      className={`inline-flex items-center px-[15px] py-[7px] bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] rounded-full w-fit ${className}`}
    >
      <span className="font-montserrat text-[12px] sm:text-[14px] font-normal uppercase tracking-[0.96px] leading-[15px] text-[#ED6B52]">
        {children}
      </span>
    </div>
  );
}
