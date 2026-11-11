import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../ui/Container';
import IconBadge from '../ui/IconBadge';
import { statIconEnergy, statIconThermostat, statIconValue } from '../../assets/images';

const statText = 'font-helvetica text-[17px] text-primary md:text-xl';

function Stat({ icon, children }) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <IconBadge
        src={icon}
        className="size-[70px] p-2.5 md:size-[75px] md:p-2 lg:size-[90px] lg:p-0"
      />
      <div className="flex flex-col items-center gap-2.5">{children}</div>
    </div>
  );
}

function StatNumber({ children }) {
  return (
    <h4 className="font-helvetica text-[33px] font-extrabold text-primary md:text-[40px]">
      {children}
    </h4>
  );
}

/** Three energy facts in a Swiper carousel (1 / 2 / 3 slides per view). */
export default function StatsSlider() {
  return (
    <section className="bg-[#F0F0EE] pb-[70px] pt-24 md:pb-[100px] md:pt-[100px] lg:pb-[129px] lg:pt-[134px]">
      <Container>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="[--swiper-pagination-bullet-size:15px] [--swiper-pagination-color:var(--color-primary)] [&_.swiper-pagination]:static! [&_.swiper-pagination]:mt-10"
        >
          <SwiperSlide>
            <Stat icon={statIconEnergy}>
              <p className={statText}>
                Slecht geïsoleerde <br /> huizen verbruiken tot{' '}
              </p>
              <StatNumber>3 keer </StatNumber>
              <p className={statText}>
                meer energie dan goed <br />
                geïsoleerde huizen.
              </p>
            </Stat>
          </SwiperSlide>
          <SwiperSlide>
            <Stat icon={statIconThermostat}>
              <p className={statText}>Na isolatie kunnen </p>
              <p className={statText}>bewoners de thermostaat vaak </p>
              <StatNumber>1 tot 2°C</StatNumber>
              <p className={statText}>
                lager zetten terwijl het <br /> comfort gelijk blijft.{' '}
              </p>
            </Stat>
          </SwiperSlide>
          <SwiperSlide>
            <Stat icon={statIconValue}>
              <p className={statText}>
                Een beter <br /> energielabel verhoogt <br /> de woningwaarde <br /> gemiddeld
                met{' '}
              </p>
              <StatNumber>5 tot 10%.</StatNumber>
            </Stat>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
