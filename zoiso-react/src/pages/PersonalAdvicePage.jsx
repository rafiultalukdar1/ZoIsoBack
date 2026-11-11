import usePageTitle from '../hooks/usePageTitle';
import Container from '../components/ui/Container';
import ContentWrapper from '../components/ui/ContentWrapper';
import IconBadge from '../components/ui/IconBadge';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import ServiceSteps from '../components/sections/ServiceSteps';
import IconTitleSection, { LeadText } from '../components/sections/IconTitleSection';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import SuccessStory from '../components/sections/SuccessStory';
import { ImageInfoPanel } from '../components/content/ContentBlocks';
import {
  analysisIcon,
  checkMarkIcon,
  contactPersonImage,
  heroAdvice,
  massageIcon,
  providerImage,
  refreshIcon,
  refreshIconLarge,
  storyAdvice,
} from '../assets/images';

const infoButton =
  'flex size-[30px] items-center justify-center rounded-full border border-black text-[21px] font-bold';

function WorkMethodCard({ highlighted = false, children }) {
  return (
    <div
      className={`rounded-[200px] p-[15px] md:p-5 ${highlighted ? 'bg-[#E1EED9]' : 'bg-[#FFEED7]'}`}
    >
      <div
        className={`flex h-full flex-col items-center gap-5 rounded-[200px] px-[15px] py-5 text-center sm:gap-[30px] sm:px-5 sm:py-10 ${
          highlighted ? 'border-2 border-primary bg-[#86C16E]' : 'bg-[#FAC8A4]'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function WorkMethodTitle({ children }) {
  return (
    <h2 className="font-helvetica-lt text-[11px] font-bold leading-normal sm:text-lg md:text-2xl">
      {children}
    </h2>
  );
}

function WorkMethodOptions() {
  return (
    <section className="pb-12 pt-[37px] md:pb-[41px] md:pt-[111px]">
      <Container>
        <ContentWrapper>
          <SectionHeader
            icon={massageIcon}
            title="DOE HET OP JOUW MANIER"
            description="ZOISO biedt drie mogelijkheden."
          />
          <div className="flex flex-col items-center gap-[30px] pt-10">
            <div className="grid w-full max-w-[375px] grid-cols-3 gap-5 sm:max-w-[720px] md:gap-[30px] lg:gap-10">
              <WorkMethodCard>
                <WorkMethodTitle>
                  ZELF <br /> AAN DE <br /> SLAG GAAN{' '}
                </WorkMethodTitle>
                <button type="button" className={infoButton}>
                  i
                </button>
              </WorkMethodCard>
              <WorkMethodCard highlighted>
                <WorkMethodTitle>ALLES LATEN REGELEN DOOR ZOISO</WorkMethodTitle>
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full bg-primary p-2.5 md:size-[60px]"
                >
                  <img src={refreshIcon} alt="" />
                </button>
              </WorkMethodCard>
              <WorkMethodCard>
                <WorkMethodTitle>EEN EIGEN UITVOERDER KIEZEN</WorkMethodTitle>
                <button type="button" className={infoButton}>
                  i
                </button>
              </WorkMethodCard>
            </div>
            <div className="text-center font-condensed text-[21px] text-primary">
              <h4 className="font-black">MEEST GEKOZEN</h4>
              <h4 className="font-black">*******</h4>
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </section>
  );
}

const benefits = [
  'Lagere energiekosten',
  'Meer comfort in huis',
  'Veel voordeel door het combineren van subsidies',
  'Toegang tot voordelige leningen',
  'Duidelijkheid over kosten en besparingen',
];

function ProviderSection() {
  return (
    <section className="md:py-[70px] lg:pb-[145px] lg:pt-[125px]">
      <Container flushOnMobile>
        <ContentWrapper>
          <ImageInfoPanel src={providerImage}>
            <div className="flex flex-col items-start gap-[17px] md:flex-row md:items-center md:gap-10">
              <IconBadge src={analysisIcon} className="size-[60px] p-3.5 md:size-[90px] md:p-0" />
              <h2 className="flex-1 font-condensed text-[30px] font-black md:text-[40px] lg:text-[45px]">
                ZOISO LEVERT JOU OP
              </h2>
            </div>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 mt-[15px] md:gap-px">
              {benefits.map((benefit) => (
                <li key={benefit} className="text-[17px] font-semibold md:text-xl">
                  {benefit}
                </li>
              ))}
            </ul>
          </ImageInfoPanel>
        </ContentWrapper>
      </Container>
    </section>
  );
}

export default function PersonalAdvicePage() {
  usePageTitle('Persoonlijk advies');

  return (
    <>
      <Hero headline="JE ENERGIEREKENING OMLAAG?" image={heroAdvice} />
      <WorkMethodOptions />
      <ConsultationBanner
        icon={refreshIconLarge}
        heading="ALLES LATEN REGELEN? WIJ NEMEN JE ZOVEEL MOGELIJK WERK UIT HANDEN."
      />
      <ServiceSteps>
        <div className="hidden pt-[60px] md:flex">
          <p className="text-2xl italic text-primary">
            Als je besluit om tot isolatie over te gaan, is het persoonlijk advies kosteloos. Mocht
            je besluiten om niet te isoleren, dan wordt voor het advies € 200 in rekening gebracht.
          </p>
        </div>
      </ServiceSteps>
      <IconTitleSection
        icon={checkMarkIcon}
        title="VASTE CONTACTPERSOON"
        image={contactPersonImage}
        compactTitle
      >
        <LeadText>
          <span className="text-primary">De adviseur is jouw vaste contactpersoon</span> tijdens het
          hele traject. De adviseur helpt je kiezen welke isolatiemaatregelen het beste passen bij
          jouw huis en wensen. Jij bepaalt het tempo en wat je wel of niet laat doen. Je neemt pas
          een besluit als alles duidelijk is. Tot die tijd zit je nergens aan vast.
        </LeadText>
      </IconTitleSection>
      <ProviderSection />
      <ConsultationBanner />
      <SuccessStory
        image={storyAdvice}
        quote="‘De adviseur van ZOISO was heel behulpzaam en volgde een helder stappenplan’ "
      />
    </>
  );
}
