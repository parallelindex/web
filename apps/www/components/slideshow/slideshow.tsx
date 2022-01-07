import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export function Slideshow({ images }: { images: string[] }) {
  return (
    <Swiper
      style={{
        margin: '0 -5vw',
        position: 'relative',
        width: 'calc(100% + 10vw)',
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <Image
            alt={`slide-${index}`}
            height="1200"
            objectFit="cover"
            priority
            src={image}
            width="1600"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
