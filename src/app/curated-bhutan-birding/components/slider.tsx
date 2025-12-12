'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { IMAGE_BOX } from '@/lib/dummy-data/dummy-data';
import Link from 'next/link';

function SideSelling() {
  
  return (
    <div className="relative w-full overflow-hidden h-[400px] lg:h-full">      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
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
        
        className="w-full h-full border"
      >
        {IMAGE_BOX.filter((item) => item.best_sell).map((tour) => (
          <SwiperSlide
           key={tour.id}>
            <div className="flex-shrink-0 w-full h-full overflow-hidden">
               <Image
                    src={tour.image}
                    alt={tour.title || 'img'}
                    fill
                    className="object-cover"
                  />
                  hello
            </div>
          </SwiperSlide>
        ))}
      </Swiper>      
    </div>
  );
}

export default SideSelling;