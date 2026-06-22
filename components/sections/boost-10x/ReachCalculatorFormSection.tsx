"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReachCalculatorFormSection() {
  const [brandFollowers, setBrandFollowers] = useState("");
  const [postsPerMonth, setPostsPerMonth] = useState("");
  const [numEmployees, setNumEmployees] = useState("");
  const [avgFollowersPerEmployee, setAvgFollowersPerEmployee] = useState("");
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const handleCalculate = () => {
    // Calculator logic will be handled by parent or passed down
    // For now, this just validates inputs
    console.log("Calculate with:", {
      brandFollowers,
      postsPerMonth,
      numEmployees,
      avgFollowersPerEmployee,
    });
  };

  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-16 sm:py-20 md:py-24 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Gradient Container */}
        <div className="w-full bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-[16px] px-6 sm:px-8 lg:px-[32px] py-8 sm:py-10 lg:py-[40px] shadow-[0px_4px_10px_rgba(0,0,0,0.12)]">
          {/* Heading */}
          <h2 className="font-montserrat font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-white text-center leading-[1.4] mb-10 sm:mb-12 lg:mb-[56px]">
            Calculate Potential Reach
          </h2>

          {/* Form */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px]">
            {/* Input Grid */}
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[16px]">
                {/* Input 1 */}
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="brandFollowers"
                      className="font-montserrat font-medium text-[14px] text-white leading-none"
                    >
                      Brand's total followers across social media
                    </label>
                    <button
                      type="button"
                      className="relative flex-shrink-0"
                      onMouseEnter={() => setShowTooltip("brandFollowers")}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <Image
                        src="/assets/boost-10x/info-icon.svg"
                        alt="Info"
                        width={12}
                        height={12}
                      />
                    </button>
                  </div>
                  <input
                    type="number"
                    id="brandFollowers"
                    value={brandFollowers}
                    onChange={(e) => setBrandFollowers(e.target.value)}
                    placeholder="e.g., 120000"
                    className="w-full h-[48px] bg-[rgba(255,255,255,0.1)] border-none rounded-[10.821px] px-4 text-white placeholder:text-[rgba(255,255,255,0.5)] font-montserrat font-normal text-[14px] focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>

                {/* Input 2 */}
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="postsPerMonth"
                      className="font-montserrat font-medium text-[14px] text-white leading-none"
                    >
                      Brand's posts per month
                    </label>
                    <button
                      type="button"
                      className="relative flex-shrink-0"
                      onMouseEnter={() => setShowTooltip("postsPerMonth")}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <Image
                        src="/assets/boost-10x/info-icon.svg"
                        alt="Info"
                        width={12}
                        height={12}
                      />
                    </button>
                  </div>
                  <input
                    type="number"
                    id="postsPerMonth"
                    value={postsPerMonth}
                    onChange={(e) => setPostsPerMonth(e.target.value)}
                    placeholder="e.g., 30"
                    className="w-full h-[48px] bg-[rgba(255,255,255,0.1)] border-none rounded-[10.821px] px-4 text-white placeholder:text-[rgba(255,255,255,0.5)] font-montserrat font-normal text-[14px] focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[16px]">
                {/* Input 3 */}
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="numEmployees"
                      className="font-montserrat font-medium text-[14px] text-white leading-none"
                    >
                      Number of employees participating
                    </label>
                    <button
                      type="button"
                      className="relative flex-shrink-0"
                      onMouseEnter={() => setShowTooltip("numEmployees")}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <Image
                        src="/assets/boost-10x/info-icon.svg"
                        alt="Info"
                        width={12}
                        height={12}
                      />
                    </button>
                  </div>
                  <input
                    type="number"
                    id="numEmployees"
                    value={numEmployees}
                    onChange={(e) => setNumEmployees(e.target.value)}
                    placeholder="e.g., 50"
                    className="w-full h-[48px] bg-[rgba(255,255,255,0.1)] border-none rounded-[10.821px] px-4 text-white placeholder:text-[rgba(255,255,255,0.5)] font-montserrat font-normal text-[14px] focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>

                {/* Input 4 */}
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="avgFollowersPerEmployee"
                      className="font-montserrat font-medium text-[14px] text-white leading-none"
                    >
                      Average followers per employee
                    </label>
                    <button
                      type="button"
                      className="relative flex-shrink-0"
                      onMouseEnter={() => setShowTooltip("avgFollowersPerEmployee")}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <Image
                        src="/assets/boost-10x/info-icon.svg"
                        alt="Info"
                        width={12}
                        height={12}
                      />
                    </button>
                  </div>
                  <input
                    type="number"
                    id="avgFollowersPerEmployee"
                    value={avgFollowersPerEmployee}
                    onChange={(e) => setAvgFollowersPerEmployee(e.target.value)}
                    placeholder="e.g., 500"
                    className="w-full h-[48px] bg-[rgba(255,255,255,0.1)] border-none rounded-[10.821px] px-4 text-white placeholder:text-[rgba(255,255,255,0.5)] font-montserrat font-normal text-[14px] focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
              </div>
            </div>

            {/* CTA and Help Link */}
            <div className="flex flex-col items-center gap-3 lg:gap-[12px]">
              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                className="bg-white border border-[#ed6b52] rounded-full px-8 py-4 font-montserrat font-bold text-[16px] text-[#ed6b52] hover:bg-[#ed6b52] hover:text-white transition-colors duration-300"
              >
                Calculate Potential Reach
              </button>

              {/* Help Link */}
              <button
                type="button"
                className="flex items-center gap-2 group"
              >
                <span className="font-montserrat font-medium text-[14px] text-white leading-none">
                  How this calculator works?
                </span>
                <Image
                  src="/assets/boost-10x/info-icon.svg"
                  alt="Info"
                  width={12}
                  height={12}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
