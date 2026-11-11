import Container from '../ui/Container';
import ContentWrapper from '../ui/ContentWrapper';
import ActionLink from '../ui/ActionLink';
import { powerIcon, colorPlate, rectangleColored } from '../../assets/images';

/** Green "sign up" call-to-action band that closes most pages. */
export default function ConsultationBanner({
  icon = powerIcon,
  heading = 'ZET NU DE EERSTE STAP',
  showColorPlate = true,
}) {
  return (
    <section className="relative z-[2] bg-primary pb-[70px] pt-[49px] md:pb-20 md:pt-20 lg:pb-[90px] lg:pt-[100px] xl:pb-[100px] xl:pt-[127px]">
      <Container>
        <ContentWrapper className="flex flex-col items-start gap-[30px] md:flex-row md:gap-[49px]">
          <img src={icon} alt="" className="max-w-[60px] md:max-w-[90px]" />
          <div className="mt-2.5 flex flex-1 flex-col gap-4">
            <h2 className="font-condensed text-[30px] font-black text-white md:text-[40px]">
              {heading}
            </h2>
            <p className="text-xl text-[#212529] md:hidden">
              Kies je voor begeleiding van ZOISO, dan ziet het traject er zo uit:
            </p>
            <p className="text-xl text-white">
              Meld je aan voor een vrijblijvend gesprek via onderstaande knop.{' '}
              <br className="hidden md:block" />
              Of bel ons op 088 - 3443 300.{' '}
            </p>
            <ActionLink to="/contact-tow" label="AANMELDEN" variant="lime" />
          </div>
        </ContentWrapper>
      </Container>
      <img
        src={rectangleColored}
        alt=""
        className="absolute bottom-[8%] right-0 -z-10 max-w-[30%] lg:right-[12%] lg:max-w-[17%]"
      />
      {showColorPlate && (
        <div className="absolute right-0 top-[110%] z-10 max-w-[35px] overflow-hidden md:-top-[165px] md:max-w-none">
          <img src={colorPlate} alt="" className="translate-x-5" />
        </div>
      )}
    </section>
  );
}
