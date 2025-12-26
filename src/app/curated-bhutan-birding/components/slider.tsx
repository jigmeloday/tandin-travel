'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

interface Package {
  id?: number | string;
  title: string;
  image: string;
}

interface SideSellingProps {
  packages?: Package[];
}

function SideSelling({ packages = [] }: SideSellingProps) {
  // Show placeholder if no packages provided
  if (!packages || packages.length === 0) {
    return (
      <div className="relative w-full overflow-hidden h-[400px] lg:h-full border flex items-center justify-center bg-gray-200">
        <p className="text-gray-500">No packages available</p>
      </div>
    );
  }

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
        {packages.map((tour, index) => (
          <SwiperSlide
           key={tour.id || index}>
            <div className="flex-shrink-0 w-full h-full overflow-hidden relative">
               <Image
                    src={tour.image}
                    alt={tour.title}
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