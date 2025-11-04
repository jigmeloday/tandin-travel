'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { IMAGE_BOX } from '@/lib/dummy-data/dummy-data';
import Link from 'next/link';

function BestSelling() {
  
  return (
    <div className="relative w-full overflow-hidden my-8 px-4">      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
         pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        loop={true}
        
        className="w-full"
      >
        {IMAGE_BOX.filter((item) => item.best_sell).map((tour) => (
          <SwiperSlide
           key={tour.id}>
            <div className="flex-shrink-0 w-full h-[300px] lg:min-h-[550px] border-l-8 border-primary overflow-hidden group">
              {/* Card container */}
              <div className="flex flex-col lg:flex-row h-full w-full bg-black transition-transform duration-300">
                {/* Image section */}
                <div className="w-full lg:w-[60%] h-64 lg:h-full relative">
                  <Image
                    src={tour.image}
                    alt={tour.title || 'img'}
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
                      {tour.category}
                    </span>
                   <div className='my-[12px]'>
                     <h3 className='leading-8'>
                      {tour.title}
                    </h3>
                   </div>
                    <p className="text-sm sm:text-[14px] lg:text-[16px] font-light text-gray-200 leading-[24px]">
                      {tour.description}
                    </p>
                  </div>

                  {/* Call to action */}
                  <div className="mt-2 sm:mt-4 self-start">
                    <Link href={`/packages/${tour.id}`} className="bg-primary hover:bg-primary/90 text-white font-bold px-4 sm:px-6 py-2 transition-colors duration-200 text-sm sm:text-base">
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>      
    </div>
  );
}

export default BestSelling;