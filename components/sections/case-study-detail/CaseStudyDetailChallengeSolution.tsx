import Image from 'next/image';

const challenges = [
  'Irregular posting Admin sets brand voice, tone, compliance rules, and content themes.',
  'Irregular posting Admin sets brand voice, tone, compliance rules, and content themes.',
  'Irregular posting Admin sets brand voice, tone, compliance rules, and content themes.',
  'Irregular posting Admin sets brand voice, tone, compliance rules, and content themes.',
];

const solutions = [
  'Daily high impact content AI ingest company context, industry, and audience profile.',
  '3-5x more impressions',
  'Stronger authority',
  'Daily high impact content AI ingest company context, industry, and audience profile.',
  'AI ingest company context, industry, & audience profile.',
];

export default function CaseStudyDetailChallengeSolution() {
  return (
    <section id="challenge" className="bg-white w-full px-24 py-[100px]">
      <div className="flex items-center w-full">
        {/* Left card - The Challenges */}
        <div className="flex-1 min-w-px bg-white border-[2.23px] border-[#df8251] rounded-[22.298px] px-[31.217px] py-[44.595px] flex flex-col gap-[35.676px] mr-[-35.676px] relative z-0">
          <h3 className="font-montserrat font-medium text-[24.527px] text-black tracking-[-0.4905px] leading-none">
            The Challenges
          </h3>
          <div className="flex flex-col gap-[11.149px] w-[512px]">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex gap-[13.379px] items-center w-full">
                <div className="relative shrink-0 w-[8.919px] h-[8.919px]">
                  <Image
                    src="/assets/case-study-detail/bullet-icon-orange.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="flex-1 min-w-px font-montserrat font-normal text-[15.608px] text-[#5f5f5f] tracking-[-0.3122px] leading-[1.5]">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right card - The Solutions */}
        <div className="flex-1 min-w-px bg-gradient-to-b from-[#df8251] to-[#d54050] rounded-[22.298px] px-[35.676px] py-[55.833px] flex flex-col gap-[44.666px] relative z-10">
          <h3 className="font-montserrat font-medium text-[30.708px] text-white tracking-[-0.6142px] leading-none">
            The Solutions
          </h3>
          <div className="flex flex-col gap-[13.958px] w-full">
            {solutions.map((solution, index) => (
              <div key={index} className="flex gap-[16.75px] items-center w-full">
                <div className="relative shrink-0 w-[20.937px] h-[20.937px]">
                  <Image
                    src="/assets/case-study-detail/checkmark-icon-white.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="flex-1 min-w-px font-montserrat font-normal text-[19.542px] text-white tracking-[-0.3908px] leading-[1.5]">
                  {solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
