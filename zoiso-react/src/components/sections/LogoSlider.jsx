import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
} from '../../assets/images';

const logos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9];

/** Continuously scrolling partner logo strip. */
export default function LogoSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      speed={3000}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      breakpoints={{
        0: { slidesPerView: 2 },
        481: { slidesPerView: 3 },
        769: { slidesPerView: 4 },
        993: { slidesPerView: 7 },
      }}
      className="[--swiper-wrapper-transition-timing-function:linear]"
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={logo} className="flex! items-center justify-center p-5">
          <img src={logo} alt={`Partner ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
