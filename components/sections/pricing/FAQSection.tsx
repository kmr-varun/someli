"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "When will I feel a difference?",
    answer: "Most teams see measurable results within 30 days. Employee-shared content typically generates 2.5x more engagement than brand page posts alone, and reach grows exponentially as more team members participate.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No long-term lock-ins. You can cancel anytime. We also offer a 30-day money back guarantee — if you're not satisfied, get a full refund with no questions asked.",
  },
  {
    question: "How many employees can use the platform?",
    answer: "Our plan includes your brand account plus 24 employees. Need more seats? Contact us for custom pricing that scales with your team.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "You get priority support with fast, human responses whenever you need help. Our team is available to assist with onboarding, strategy, and any technical questions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0D0D0D] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-12 md:gap-[64px] items-center">
        {/* Heading */}
        <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white text-center tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.19]">
          FAQ&apos;s
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3 sm:gap-[16px] w-full max-w-[840px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-border-card bg-[rgba(255,255,255,0.04)] rounded-[10.109px] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-[20px] min-h-[60px] sm:min-h-[70px] cursor-pointer gap-4"
              >
                <p className="font-['Open_Sans'] font-normal text-[13px] sm:text-[14px] text-white leading-[1.6] text-left">
                  {faq.question}
                </p>
                <Image
                  src="/assets/pricing-page/chevron-down-white.svg"
                  alt=""
                  width={11}
                  height={6}
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-[20px] pb-4 sm:pb-[20px]">
                  <p className="font-['Open_Sans'] font-normal text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.7)] leading-[1.6]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
