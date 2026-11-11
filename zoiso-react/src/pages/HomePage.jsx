import usePageTitle from '../hooks/usePageTitle';
import Container from '../components/ui/Container';
import ContentWrapper from '../components/ui/ContentWrapper';
import ActionLink from '../components/ui/ActionLink';
import Hero from '../components/sections/Hero';
import IconTitleSection, { LeadText } from '../components/sections/IconTitleSection';
import ServiceSteps from '../components/sections/ServiceSteps';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import SuccessStory from '../components/sections/SuccessStory';
import StatsSlider from '../components/sections/StatsSlider';
import { heroHome, questionIcon, storyHome, userIcon, voorWieImage } from '../assets/images';

export default function HomePage() {
  usePageTitle('Home');

  return (
    <>
      <Hero
        headline="ZORGELOOS ISOLEREN BEGINT HIER."
        image={heroHome}
        position="bg-bottom lg:bg-[50%_70%]"
      />

      <section className="pb-[50px] pt-[59px] md:pt-[70px] lg:pb-14 lg:pt-24">
        <Container>
          <ContentWrapper className="flex flex-col gap-[51px] md:gap-[58px]">
            <p className="text-base font-bold leading-[1.7] md:text-lg md:leading-normal lg:text-xl">
              <span className="text-primary">Je huis isoleren is een goed idee.</span> Je
              energierekening gaat omlaag, je woont prettig en je huis wordt meer waard. Toch
              twijfelen veel huiseigenaren. Dat is heel normaal. Isoleren lijkt vaak lastig. Er is
              veel informatie en adviezen spreken elkaar soms tegen. Het is niet altijd duidelijk
              wie je kunt vertrouwen. Ook de kosten en het regelwerk kunnen zorgen voor stress.
            </p>
            <p className="text-base font-bold leading-[1.7] md:text-lg md:leading-normal lg:text-xl">
              <span className="text-primary">ZOISO helpt je hierbij</span>. We geven je inzicht in
              kosten en besparingen, nemen veel werk uit handen en zorgen dat isoleren ook mogelijk
              is als je geen spaargeld hebt. En als je dat wilt, begeleiden we je van begin tot
              eind.
            </p>
          </ContentWrapper>
        </Container>
      </section>

      <IconTitleSection icon={userIcon} title="VOOR WIE?" image={voorWieImage}>
        <LeadText>
          Als je een koophuis hebt met de ingang op de begane grond, kun je meedoen met ZOISO. De
          gemeente stelt subsidie beschikbaar voor isolatie. Aan de subsidie zijn voorwaarden
          verboden. Check hieronder of je recht hebt op subsidie.
        </LeadText>
        <ActionLink to="/contact" label="HEB IK RECHT OP SUBSIDIE? " />
      </IconTitleSection>

      <ServiceSteps />
      <ConsultationBanner icon={questionIcon} heading="WIL JE WETEN WAT ER MOGELIJK IS? " />
      <SuccessStory
        image={storyHome}
        quote="‘ Samen met ZOISO hebben we flink kunnen besparen op onze energierekening’ "
      />
      <StatsSlider />
    </>
  );
}
