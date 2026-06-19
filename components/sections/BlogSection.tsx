import Image from 'next/image';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: '/assets/blog/blog-image-1.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
      author: 'Ray Austin',
      avatar: '/assets/blog/author-avatar.png',
      date: '12 August 2024',
      readTime: '4 min read',
      featured: true,
    },
    {
      id: 2,
      image: '/assets/blog/blog-image-2.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
      author: 'Ray Austin',
      avatar: '/assets/blog/author-avatar.png',
      date: '12 August 2024',
      readTime: '4 min read',
      featured: false,
    },
    {
      id: 3,
      image: '/assets/blog/blog-image-3.jpg',
      title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
      author: 'Ray Austin',
      avatar: '/assets/blog/author-avatar.png',
      date: '12 August 2024',
      readTime: '4 min read',
      featured: false,
    },
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/blog/union-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start max-w-[1440px] mx-auto">
        {/* Left column - heading and CTA */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 w-full lg:w-[470px] shrink-0">
          {/* Header section */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Pill label */}
              <div className="inline-flex items-center px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] w-fit">
                <span className="text-[#ED6B52] text-[10px] sm:text-[11px] md:text-[12px] font-normal tracking-[0.8px] sm:tracking-[0.96px] uppercase font-['Space_Grotesk']">
                  BLOGS
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] md:tracking-[-2px] text-black">
                Latest from Blogs
              </h2>
            </div>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5] text-[#444444]">
              Discover how experts and teams are enhancing their LinkedIn profiles using Someli AI.
            </p>
          </div>

          {/* CTA button */}
          <button className="flex items-center justify-center gap-2 pl-5 pr-8 sm:pl-6 sm:pr-9 md:pl-7 md:pr-10 py-3 sm:py-3.5 md:py-4 border border-[#ED6B52] rounded-full text-[#ED6B52] text-[14px] sm:text-[15px] md:text-[16px] font-bold w-fit">
            <span>•</span>
            <span>View all Blogs →</span>
          </button>
        </div>

        {/* Right column - blog cards */}
        <div className="flex flex-col gap-3 flex-1 min-w-0 w-full">
          {/* Top row - two cards */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Card 1 */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.08)] hover:border-[#DF8251] transition-colors duration-300 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col gap-3 cursor-pointer">
              {/* Image */}
              <div className="relative w-full h-[160px] sm:h-[180px] md:h-[202px] rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3 pb-3 sm:pb-4">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[1.5] text-[#022425] line-clamp-2">
                  {blogPosts[0].title}
                </p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-none text-[#FF5722]">
                  Read more &gt;
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-[rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="relative w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]">
                    <Image
                      src={blogPosts[0].avatar}
                      alt={blogPosts[0].author}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-normal leading-none text-[#022425] font-[var(--font-open-sans)]">
                    {blogPosts[0].author}
                  </span>
                </div>
                <div className="flex items-center gap-0 text-[10px] sm:text-[11px] md:text-[12px] font-normal leading-none text-[#2E2316] font-[var(--font-open-sans)]">
                  <span>{blogPosts[0].date}</span>
                  <span className="ml-[14px] sm:ml-[18px] list-disc" style={{ display: 'list-item' }}>
                    {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.08)] hover:border-[#DF8251] transition-colors duration-300 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col gap-3 cursor-pointer">
              {/* Image */}
              <div className="relative w-full h-[160px] sm:h-[180px] md:h-[202px] rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src={blogPosts[1].image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3 pb-3 sm:pb-4">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[1.5] text-[#022425] line-clamp-2">
                  {blogPosts[1].title}
                </p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-none text-[#FF5722]">
                  Read more &gt;
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-[rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="relative w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]">
                    <Image
                      src={blogPosts[1].avatar}
                      alt={blogPosts[1].author}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-normal leading-none text-[#022425] font-[var(--font-open-sans)]">
                    {blogPosts[1].author}
                  </span>
                </div>
                <div className="flex items-center gap-0 text-[10px] sm:text-[11px] md:text-[12px] font-normal leading-none text-[#2E2316] font-[var(--font-open-sans)]">
                  <span>{blogPosts[1].date}</span>
                  <span className="ml-[14px] sm:ml-[18px] list-disc" style={{ display: 'list-item' }}>
                    {blogPosts[1].readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row - wide card */}
          <div className="bg-white border border-[rgba(0,0,0,0.08)] hover:border-[#DF8251] transition-colors duration-300 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3 cursor-pointer">
            {/* Image */}
            <div className="relative w-full sm:w-[200px] md:w-[240px] lg:w-[264px] h-[160px] sm:h-[179px] rounded-lg sm:rounded-xl overflow-hidden shrink-0">
              <Image
                src={blogPosts[2].image}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-2 sm:gap-3 pb-3 sm:pb-4">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[1.5] text-[#022425] line-clamp-2">
                  {blogPosts[2].title}
                </p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-none text-[#FF5722]">
                  Read more &gt;
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-[rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="relative w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]">
                    <Image
                      src={blogPosts[2].avatar}
                      alt={blogPosts[2].author}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-normal leading-none text-[#022425] font-[var(--font-open-sans)]">
                    {blogPosts[2].author}
                  </span>
                </div>
                <div className="flex items-center gap-0 text-[10px] sm:text-[11px] md:text-[12px] font-normal leading-none text-[#2E2316] font-[var(--font-open-sans)]">
                  <span>{blogPosts[2].date}</span>
                  <span className="ml-[14px] sm:ml-[18px] list-disc" style={{ display: 'list-item' }}>
                    {blogPosts[2].readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
