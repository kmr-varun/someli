import { ReactNode } from 'react';
import SectionPill from './SectionPill';

interface SectionHeaderProps {
  pill: ReactNode;
  heading: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  /** When provided, fully replaces the default heading size/tracking/leading classes */
  headingClassName?: string;
  descriptionClassName?: string;
}

const DEFAULT_HEADING = 'text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] leading-[1.2] tracking-[-1.5px] md:tracking-[-2px]';
const DEFAULT_DESCRIPTION = 'font-montserrat text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5]';

export default function SectionHeader({
  pill,
  heading,
  description,
  align = 'left',
  dark = false,
  className = '',
  headingClassName,
  descriptionClassName = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start';
  const headingColor = dark ? 'text-white' : 'text-black';
  const descriptionColor = dark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#444444]';

  return (
    <div className={`flex flex-col gap-6 sm:gap-8 ${alignClass} ${className}`}>
      <div className={`flex flex-col gap-3 sm:gap-4 ${alignClass}`}>
        <SectionPill>{pill}</SectionPill>
        <h2
          className={`font-montserrat font-bold ${headingClassName ?? DEFAULT_HEADING} ${headingColor}`}
        >
          {heading}
        </h2>
      </div>
      {description && (
        <p className={`${DEFAULT_DESCRIPTION} ${descriptionColor} ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}
