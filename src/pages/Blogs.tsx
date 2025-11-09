import React from "react";
import blogMain from "../assets/blog-1.png";
import thumbnail1 from "../assets/blog_1.png";
import thumbnail2 from "../assets/blog_2.png";
import thumbnail3 from "../assets/blog_3.png";
import thumbnail4 from "../assets/blog_4.png";
import thumbnail5 from "../assets/blog_5.png";
import thumbnail6 from "../assets/blog_6.png";
import { TalkToExpert } from "../components/Partnership";

type BlogCarouselProps = {
  title?: string;
  featuredSrc?: string;
  thumbnails?: string[];
  className?: string;
  duration?: number;
};

export const BlogCarousel: React.FC<BlogCarouselProps> = ({
  title = "How to Register as a Seller on Amazon, Flipkart & Other Marketplaces in India",
  featuredSrc = blogMain,
  thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6],
  className,
  duration = 16,
}) => {
  const duplicated = [...thumbnails, ...thumbnails];

  return (
    <section className={`w-full px-4 py-10 my-30 ${className ?? ""}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-8">
          <div className="flex justify-center lg:justify-start">
            <img
              src={featuredSrc && featuredSrc}
              alt="featured"
              className="w-[80%]"
              loading="lazy"
            />
          </div>

          <div className="px-2 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{title}</h2>
            <p className="mt-4 text-gray-600 max-w-xl"></p>
          </div>
        </div>

        <div className="relative mt-30">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-6 md:h-8 bg-black" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 md:h-8 bg-black" />

          <div className="overflow-hidden relative rounded-sm mt-6 py-8" aria-hidden={false}>
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-20 bg-linear-to-r from-gray-900 to-transparent" />

            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-20 bg-linear-to-l from-gray-900 to-transparent" />

            <div className="marquee flex items-center gap-6" style={{ animationDuration: `${duration}s` }}>
              {duplicated.map((src, i) => (
                <div
                  key={i}
                  className="flex-none w-40 h-40 sm:w-44 sm:h-44 md:w-50 md:h-50 bg-white border-4 border-white rounded-md p-1 overflow-hidden shadow-sm"
                >
                  {src ? (
                    <img
                      src={src}
                      alt={`thumb-${i}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                      Image
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <style>{`
            .marquee {
              display: flex;
              align-items: center;
              gap: 1.5rem;
              animation: marquee linear infinite;
              will-change: transform;
            }
            /* pause on hover of the wrapper (user intent) */
            .marquee:hover {
              animation-play-state: paused;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            /* ensure duplicated list is wide enough */
            .marquee > div:nth-child(1) {
              /* no-op to ensure children considered */
            }
          `}</style>
        </div>
         <TalkToExpert/>
      </div>
    </section>
  );
};

export default BlogCarousel;
