'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

function BestSelling() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 600; // width of one card + gap
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const cards = [1, 2, 3, 4, 5]; // placeholder, replace with your tour data

  return (
    <div className="relative w-full overflow-hidden my-[32px]">
      <div className="flex items-center justify-between">
        <button onClick={() => scroll('left')}>
          <ChevronLeft size={32} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-8"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 max-w-[650px] lg:w-[650px] h-[400px] lg:h-[600px] border-l-8 border-primary overflow-hidden group"
            >
              {/* Card container */}
              <div className="flex flex-col lg:flex-row h-full w-full bg-black transition-transform duration-300 group-hover:scale-105">
                {/* Image section */}
                <div className="w-full lg:w-[60%] h-64 lg:h-full relative">
                  <Image
                    src="/images/dummy/img5.jpg"
                    alt="img"
                    fill
                    className="object-cover"
                  />
                  {/* Optional overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-between flex-1 px-4 sm:px-6 py-4 sm:py-6 text-white bg-black">
                  <div className="flex flex-col items-start text-start">
                    <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white">
                      WOMEN ONLY TOUR
                    </span>
                    <h2 className="mt-2 sm:mt-4 mb-1 sm:mb-2 font-extrabold text-lg sm:text-2xl lg:text-3xl text-primary">
                      HER BHUTAN, HER STORY
                    </h2>
                    <p className="text-sm sm:text-[16px] lg:text-[18px] font-light text-gray-200">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                  </div>

                  {/* Call to action */}
                  <div className="mt-2 sm:mt-4 self-start">
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 sm:px-6 py-2 transition-colors duration-200 text-sm sm:text-base">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scroll('right')}>
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default BestSelling;
