import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'outlined' | 'ghost' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'pl-5 pr-7 py-3 text-[14px]',
  md: 'pl-6 pr-9 py-3.5 text-[15px] sm:text-[16px]',
  lg: 'pl-7 pr-10 py-4 text-[16px]',
};

const variantClasses: Record<ButtonVariant, string> = {
  outlined:
    'border border-[#ED6B52] text-[#ED6B52] hover:bg-[#ED6B52] hover:text-white transition-colors',
  ghost:
    'text-[#ED6B52] hover:bg-[rgba(237,107,82,0.1)] transition-colors',
  gradient:
    'bg-gradient-to-b from-[#DF8251] to-[#D54050] text-white hover:opacity-90 transition-opacity',
};

export default function Button({
  children,
  variant = 'outlined',
  size = 'lg',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base = `inline-flex items-center gap-2 rounded-full font-montserrat font-bold leading-none whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
