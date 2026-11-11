import Container from '../ui/Container';
import { colorPlateHorizontal } from '../../assets/images';

/** Full-bleed photo with a customer quote. */
export default function SuccessStory({
  quote,
  image,
  mobileImage = image,
  mobilePosition = 'bg-[38%_50%]',
  shadow = false,
}) {
  return (
    <section
      style={{
        '--story-image': `url(${image})`,
        '--story-image-mobile': `url(${mobileImage})`,
      }}
      className={`bg-(image:--story-image-mobile) bg-cover bg-no-repeat py-[50px] md:bg-(image:--story-image) md:bg-center ${mobilePosition}`}
    >
      <Container>
        <div className="flex min-h-[440px] items-end gap-10 md:min-h-[700px]">
          <div className="hidden md:block md:max-w-[200px] lg:max-w-none">
            <img src={colorPlateHorizontal} alt="" />
          </div>
          <div
            className={`max-w-[730px] flex-1 font-nunito text-[31px] font-semibold leading-[1.4] text-white md:text-[40px] lg:text-[46px] lg:leading-[62px] ${
              shadow ? 'drop-shadow-[2.121px_2.121px_6.5px_rgba(0,0,0,0.57)]' : ''
            }`}
          >
            {quote}
          </div>
        </div>
      </Container>
    </section>
  );
}
