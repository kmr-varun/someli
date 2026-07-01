import Image from 'next/image';
import { ReactNode } from 'react';

interface ChecklistItemProps {
  children: ReactNode;
  iconSrc?: string;
  light?: boolean; // true = white text (on dark/gradient bg)
  className?: string;
}

export default function ChecklistItem({
  children,
  iconSrc = '/assets/pricing/check-icon.svg',
  light = false,
  className = '',
}: ChecklistItemProps) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="w-4 h-4 flex-shrink-0 relative mt-0.5">
        <Image src={iconSrc} alt="" fill className="object-contain" />
      </div>
      <span
        className={`text-[14px] sm:text-[15px] font-normal leading-[1.5] tracking-[-0.3px] ${
          light ? 'text-white' : 'text-[#444]'
        }`}
      >
        {children}
      </span>
    </div>
  );
}
