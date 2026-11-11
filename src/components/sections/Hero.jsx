import { GoTriangleUp } from 'react-icons/go';
import Container from '../ui/Container';
import AppLink from '../ui/AppLink';
import fillHover from '../ui/fillHover';
import { AccentPlate, ScrollHint } from '../ui/PageAccents';
import { heroMobile } from '../../assets/images';

/**
 * Full-width hero with a white speech card. `image` is used from tablet up,
 * `mobileImage` below 768px. `position` holds the Tailwind background-position classes.
 */
export default function Hero({
  headline,
  image,
  mobileImage = heroMobile,
  position = 'bg-bottom lg:bg-center',
}) {
  return (
    <section
      style={{
        '--hero-image': `url(${image})`,
        '--hero-image-mobile': `url(${mobileImage})`,
      }}
      className={`relative overflow-hidden bg-(image:--hero-image-mobile) bg-cover bg-no-repeat md:bg-(image:--hero-image) ${position}`}
    >
      <Container fluid>
        <div className="mx-auto flex min-h-[455px] w-full max-w-[1220px] items-end justify-center pb-10 pt-[100px] md:min-h-[625px] lg:min-h-[750px] lg:justify-end lg:pb-[100px] xl:min-h-[920px]">
          <div className="relative max-w-[460px] rounded-[150px] bg-white px-[45px] py-[25px] md:max-w-[480px] md:py-10 lg:max-w-[580px] lg:px-[60px] lg:py-[50px] xl:max-w-[610px]">
            <h2 className="font-condensed text-[26px] font-black md:text-[35px] lg:text-[50px] xl:text-[45px]">
              {headline} <span className="text-primary">ZOISO!</span>
            </h2>
            <AppLink
              to="#"
              className={`absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-[15px] py-2.5 text-[13px] font-medium uppercase text-white duration-300 md:text-xl ${fillHover}`}
            >
              <span>CHECK JOUW MOGELIJKHEDEN</span>
              <GoTriangleUp className="rotate-90 text-xs md:text-lg" />
            </AppLink>
          </div>
        </div>
      </Container>
      <AccentPlate />
      <ScrollHint />
    </section>
  );
}
