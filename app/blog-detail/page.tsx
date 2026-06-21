import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const recentPosts = [
  {
    id: 1,
    image: '/assets/blog-detail/recent-1.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    date: 'June 28, 2018',
    readTime: '4 min read',
  },
  {
    id: 2,
    image: '/assets/blog-detail/recent-2.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    date: 'June 28, 2018',
    readTime: '4 min read',
  },
  {
    id: 3,
    image: '/assets/blog-detail/recent-3.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    date: 'June 28, 2018',
    readTime: '4 min read',
  },
];

export default function BlogDetailPage() {
  return (
    <div className="bg-white w-full">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative bg-gray-900 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] h-[400px] sm:h-[480px] md:h-[520px] xl:h-[560px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/assets/blog-detail/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full lg:w-[1094px] flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Category Pill */}
            <div className="inline-flex items-center px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px] rounded-full bg-[#ED6B52] border border-[rgba(237,107,82,0.15)] w-fit">
              <span className="text-white text-[10px] sm:text-[11px] md:text-[12px] font-normal tracking-[0.8px] sm:tracking-[0.96px] uppercase">
                CATEGORY
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.5] tracking-[-1.5px] md:tracking-[-2px]">
              Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.
            </h1>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 text-white">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/blog-detail/author-icon.svg"
                alt=""
                width={16}
                height={16}
              />
              <span className="text-[16px] sm:text-[18px] font-normal leading-[1.6] tracking-[-0.36px]">
                John Doe
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/blog-detail/clock-icon.svg"
                alt=""
                width={16}
                height={18}
              />
              <span className="text-[16px] sm:text-[18px] font-normal leading-[1.6] tracking-[-0.36px]">
                4 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column - Article Content */}
          <article className="flex-1 max-w-[792px] flex flex-col gap-5">
            {/* Introduction Section */}
            <h2 className="text-[18px] sm:text-[20px] font-bold leading-[1.5] tracking-[-0.4px] text-[#222]">
              Introduction
            </h2>

            <div className="flex flex-col gap-3 text-[16px] sm:text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[#5F5F5F]">
              <p>
                Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades. Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
              </p>
              <p>
                Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
              </p>
            </div>

            {/* Content Image */}
            <div className="py-3">
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/blog-detail/content-image.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 792px"
                />
              </div>
            </div>

            {/* Second Section */}
            <h2 className="text-[18px] sm:text-[20px] font-bold leading-[1.5] tracking-[-0.4px] text-[#222]">
              Introduction
            </h2>

            <div className="flex flex-col gap-3 text-[16px] sm:text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[#5F5F5F]">
              <p>
                Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades. Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
              </p>
              <p>
                Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
              </p>
            </div>
          </article>

          {/* Right Column - Sidebar */}
          <aside className="w-full lg:w-[402px] shrink-0 flex flex-col gap-6">
            {/* Recent Posts */}
            <div className="border border-[#E7E5E5] rounded-lg px-6 sm:px-[30px] py-5 sm:py-[20px] flex flex-col gap-6">
              <h3 className="text-[#022425] text-[20px] sm:text-[24px] font-semibold leading-[1.6] text-center pb-2 border-b border-[#DCDBDB]">
                Recent Posts
              </h3>

              <div className="flex flex-col gap-2">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="relative w-[87px] h-[88px] rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="87px"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <p className="text-[#022425] text-[14px] font-medium leading-[1.6]">
                        {post.title}
                      </p>
                      <div className="flex items-center gap-0 text-[#6C757D] text-[12px]">
                        <span>{post.date}</span>
                        <span className="ml-[18px] list-disc" style={{ display: 'list-item' }}>
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stay in Touch */}
            <div className="border border-[#E7E5E5] rounded-lg px-6 sm:px-[30px] py-5 sm:py-[20px] flex flex-col gap-6">
              <h3 className="text-[#022425] text-[20px] sm:text-[24px] font-semibold leading-[1.6] text-center pb-2 border-b border-[#DCDBDB]">
                Stay in Touch
              </h3>

              <div className="flex items-center justify-center gap-[17px]">
                {/* Facebook */}
                <div className="relative w-[51px] h-[51px] cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/blog-detail/social-icon-bg.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="51px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/blog-detail/facebook-icon.svg"
                      alt="Facebook"
                      width={27}
                      height={27}
                    />
                  </div>
                </div>

                {/* Twitter */}
                <div className="relative w-[51px] h-[51px] cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/blog-detail/social-icon-bg.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="51px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/blog-detail/twitter-icon.svg"
                      alt="Twitter"
                      width={27}
                      height={27}
                    />
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="relative w-[51px] h-[51px] cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/blog-detail/social-icon-bg.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="51px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/blog-detail/linkedin-icon.svg"
                      alt="LinkedIn"
                      width={27}
                      height={27}
                    />
                  </div>
                </div>

                {/* YouTube */}
                <div className="relative w-[51px] h-[51px] cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/blog-detail/social-icon-bg.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="51px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/blog-detail/youtube-icon.svg"
                      alt="YouTube"
                      width={27}
                      height={27}
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
