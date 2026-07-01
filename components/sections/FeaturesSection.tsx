import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
      <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12">
        {/* Left: Text Content */}
        <div className="flex w-full lg:w-[52%] flex-col gap-6 sm:gap-8 md:gap-10">
          {/* Pill Label + Heading */}
          <SectionHeader
            pill="Automated Influence"
            heading="One Central System to Manage and Oversee Your Entire Organisation and Team Content"
            headingClassName="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] leading-[1.2] tracking-[-1.5px] md:tracking-[-2px] w-full"
          />

          {/* Body Text */}
          <div className="flex w-full flex-col gap-1.5 font-montserrat text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#444] leading-[1.5]">
            <p>
              Someli brings your entire employee advocacy strategy into a single, seamless workflow. Combining seamless team scheduling with total brand control.
            </p>
            <p>
              Ensure your corporate identity remains protected, with smart approvals you empower executives and team members to approve relevant professional content in a few clicks.
            </p>
          </div>
        </div>

        {/* Right: Group 150 illustration */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <Image
            src="/assets/features/group-150.png"
            alt="Someli features overview"
            width={570}
            height={630}
            className="w-full max-w-[570px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
