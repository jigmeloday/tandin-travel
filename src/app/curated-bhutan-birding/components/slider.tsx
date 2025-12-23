'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { getBestSellingPackages } from '@/lib/data';

function SideSelling() {
  const bestSellingPackages = getBestSellingPackages();

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
        {bestSellingPackages.map((tour) => (
          <SwiperSlide
           key={tour.id}>
            <div className="flex-shrink-0 w-full h-full overflow-hidden">
               <Image
                    src={tour.image.src}
                    alt={tour.image.alt}
                    fill
                    className="object-cover"
                  />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SideSelling;