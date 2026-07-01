import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

const CERTIFICATIONS = [
  { src: "/assets/certifications/google-cloud.png", alt: "Google Cloud" },
  { src: "/assets/certifications/aws.png", alt: "AWS" },
  { src: "/assets/certifications/slack.png", alt: "Slack" },
  { src: "/assets/certifications/openai.png", alt: "OpenAI" },
  { src: "/assets/certifications/anthropic.png", alt: "Anthropic" },
  { src: "/assets/certifications/gemini.png", alt: "Gemini" },
  { src: "/assets/certifications/bitly.png", alt: "Bitly" },
  { src: "/assets/certifications/microsoft.png", alt: "Microsoft" },
  { src: "/assets/certifications/meta.png", alt: "Meta" },
  { src: "/assets/certifications/linkedin.png", alt: "LinkedIn" },
];

export default function CertificationsSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        <SectionHeader
          pill="OUR CERTIFICATIONS"
          heading={<>Engineered for High Performance<br />Advocacy</>}
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full items-stretch">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="flex items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14"
            >
              <div className="relative h-[35px] w-[140px]">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
