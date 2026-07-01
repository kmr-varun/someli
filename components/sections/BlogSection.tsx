import Image from 'next/image';
import SectionPill from '@/components/ui/SectionPill';
import BlogCard from '@/components/BlogCard';

const blogPosts = [
  {
    id: 1,
    image: '/assets/blog/blog-image-1.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
  {
    id: 2,
    image: '/assets/blog/blog-image-2.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
  {
    id: 3,
    image: '/assets/blog/blog-image-3.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
];

export default function BlogSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/assets/blog/union-pattern.svg" alt="" fill className="object-cover" />
      </div>

      <div className="relative flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start max-w-[1440px] mx-auto">
        {/* Left column */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 w-full lg:w-[470px] shrink-0">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="flex flex-col gap-3 sm:gap-4">
              <SectionPill>BLOGS</SectionPill>
              <h2 className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] md:tracking-[-2px] text-black">
                Latest from Blogs
              </h2>
            </div>
            <p className="font-montserrat text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5] text-[#444444]">
              Discover how experts and teams are enhancing their LinkedIn profiles using Someli AI.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 pl-5 pr-8 sm:pl-6 sm:pr-9 md:pl-7 md:pr-10 py-3 sm:py-3.5 md:py-4 border border-[#ED6B52] rounded-full text-[#ED6B52] text-[14px] sm:text-[15px] md:text-[16px] font-bold w-fit hover:bg-[#ED6B52] hover:text-white transition-colors">
            <span>View all Blogs →</span>
          </button>
        </div>

        {/* Right column - blog cards */}
        <div className="flex flex-col gap-3 flex-1 min-w-0 w-full">
          {/* Top row: first two cards */}
          <div className="flex flex-col sm:flex-row gap-3">
            {blogPosts.slice(0, 2).map((post) => (
              <div key={post.id} className="flex-1">
                <BlogCard
                  image={post.image}
                  title={post.title}
                  author={post.author}
                  avatar={post.avatar}
                  date={post.date}
                  readTime={post.readTime}
                />
              </div>
            ))}
          </div>
          {/* Bottom: wide card */}
          <BlogCard
            image={blogPosts[2].image}
            title={blogPosts[2].title}
            author={blogPosts[2].author}
            avatar={blogPosts[2].avatar}
            date={blogPosts[2].date}
            readTime={blogPosts[2].readTime}
            wide
          />
        </div>
      </div>
    </section>
  );
}
