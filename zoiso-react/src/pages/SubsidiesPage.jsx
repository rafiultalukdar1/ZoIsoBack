import usePageTitle from '../hooks/usePageTitle';
import ContentPageSection from '../components/content/ContentPageSection';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import Hero from '../components/sections/Hero';
import SuccessStory from '../components/sections/SuccessStory';
import { subsidyImageOne, subsidyImageTwo, heroSubsidies, storySubsidies } from '../assets/images';
import {
  CardHeading,
  ContentCard,
  ContentColumn,
  ContentGrid,
} from '../components/content/ContentBlocks';

export default function SubsidiesPage() {
  usePageTitle('Subsidies');

  return (
    <>
      <Hero
        headline="ISOLATIEKOSTEN BESPAREN?"
        image={heroSubsidies}
        mobileImage={heroSubsidies}
        position="bg-center"
      />
      <ContentPageSection compact>
        <ContentCard>
          <p>
            <strong>
              Als je een koophuis hebt met de ingang op de begane grond, kun je meedoen met ZOISO.{' '}
              <br />
              Lees hieronder voor welke subsidies je in aanmerking komt.
            </strong>
          </p>
        </ContentCard>
        <ContentGrid>
          <ContentColumn className="bg-[#D9EACF] px-2 pt-4 lg:pt-6">
            <ContentCard>
              <CardHeading>GEMEENTELIJKE SUBSIDIE</CardHeading>
              <p>
                Binnen jouw gemeente kun je subsidie krijgen om je huis beter te isoleren. Is de
                WOZ-waarde lager dan € 477.000 en is je huis slecht geïsoleerd? Dan kun je € 1.500
                subsidie krijgen van de gemeente. Je huis is slecht geïsoleerd als het energielabel
                D of lager heeft, of als minstens twee delen van je huis niet of slecht zijn
                geïsoleerd. Dit kunnen zijn: de vloer, de bodem, de muren (zoals de spouwmuur), het
                dak, de zoldervloer, ramen of panelen in kozijnen en deuren. Heb je een inkomen dat
                lager is dan 130% van het sociaal minimum? Dan kun je € 3.000 subsidiekrijgen.
              </p>
            </ContentCard>
            <ContentCard>
              <p className="text-primary font-bold">Wil je weten of je recht hebt op deze</p>
              <p>
                <span className="text-primary">subsidie?</span> Check het{' '}
                <a href="#" className="font-bold">
                  hier
                </a>
                . De bedragen van het sociaal minimum vind je{' '}
                <a href="#" className="font-bold">
                  hier
                </a>
                . De volledige subsidieregeling vind je{' '}
                <a href="#" className="font-bold">
                  hier
                </a>
                .
              </p>
            </ContentCard>
          </ContentColumn>
          <ContentColumn>
            <ContentCard className="bg-[#D9EACF] px-2 pt-4 lg:pt-6">
              <CardHeading>LANDELIJKE SUBSIDIE</CardHeading>
              <p>
                Er is landelijk subsidie beschikbaar voor isolatie, de investeringssubsidie duurzame
                energie enenergiebesparing (ISDE). De subsidiebedragen en voorwaarden verschillen
                per isolatemaatregel.
              </p>
              <p>
                Check{' '}
                <a href="#" className="font-bold">
                  de website
                </a>{' '}
                van de Rijksdienst voor Ondernemend Nederland (RVO) voor meer informate.
              </p>
            </ContentCard>
            <div>
              <img src={subsidyImageOne} alt="" />
            </div>
          </ContentColumn>
        </ContentGrid>
        <div className="flex flex-col gap-10 bg-[#F4F4F2] p-[15px] pt-[35px]">
          <h3 className="font-condensed text-[25px] font-black uppercase text-primary-dark">
            HOE VRAAG JE DE SUBSIDIE AAN?
          </h3>
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
            <div className="flex flex-col gap-[50px]">
              <ContentCard>
                <p className="text-primary font-bold">Kies je voor volledige ontzorging?</p>
                <p>
                  Dan hoef je de subsidies niet zelf aan te vragen. ZOISO verrekent alle beschikbare
                  subsidies direct met de kosten van de werkzaamheden. Je hoeft dus geen geld voor
                  te schieten en niet te wachten op de uitbetaling van de subsidie.
                </p>
              </ContentCard>
              <div>
                <img src={subsidyImageTwo} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-[50px]">
              <ContentCard>
                <p className="text-primary">
                  <strong>Kies je zelf een uitvoerder?</strong>
                </p>
                <p>
                  Dan moet je de kosten eerst voorschieten. Upload dan hier na afloop van de
                  werkzaamheden debenodigde documenten. Binnen 2 werkdagen nemen wij je aanvraag in
                  behandeling. Binnen10 werkdagen hoor je of je wel of niet subsidie ontvangt.
                  Landelijke subsidie kun je achteraf aanvragen bij het RVO.
                </p>
              </ContentCard>
              <ContentCard>
                <p className="text-primary italic">
                  Heb je al eerder isolatiemaatregelen laten uitvoeren, maar nog geen subsidie
                  aangevraagd? Dat kan alsnog, als de werkzaamheden na 1 januari 2025 zijn
                  uitgevoerd.
                </p>
              </ContentCard>
            </div>
            <div className="flex flex-col gap-[50px]">
              <ContentCard>
                <p className="text-primary">
                  <strong>Wil je je huis zelf isoleren?</strong>
                </p>
                <p>
                  Voor doe-het-zelvers is € 1.250 subsidie beschikbaar. Deze moet je zelf
                  voorschieten. Koop eerst zelf de benodigde materialen bij de plaatselijke
                  bouwmarkt. Upload dan hier de benodigde documenten om de subsidie aan te vragen.
                  [Link naar een formulier op de website]
                </p>
              </ContentCard>
              <ContentCard>
                <p className="text-primary italic">
                  Let op: voor het krijgen van de subsidie gelden specifieke voorwaarden. Je kunt de
                  voorwaarden{' '}
                  <a href="#" className="font-bold text-[#212529]">
                    hier
                  </a>{' '}
                  downloaden.{' '}
                  <span className="text-[#E41F1B]">
                    [Pdf downloaden, die mensen zelf kunnen printen]
                  </span>
                </p>
              </ContentCard>
            </div>
          </div>
        </div>
      </ContentPageSection>
      <ConsultationBanner />
      <SuccessStory
        image={storySubsidies}
        quote="‘Wij kozen voor de totale ontzorging van ZOISO en dat is ons goed bevallen’ "
      />
    </>
  );
}
