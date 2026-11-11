import usePageTitle from '../hooks/usePageTitle';
import ContentPageSection from '../components/content/ContentPageSection';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import Hero from '../components/sections/Hero';
import LogoSlider from '../components/sections/LogoSlider';
import { aboutImage, heroAbout } from '../assets/images';
import {
  ContentCard,
  ContentColumn,
  ContentGrid,
  PhotoCard,
} from '../components/content/ContentBlocks';

export default function AboutPage() {
  usePageTitle('Over ons');

  return (
    <>
      <Hero
        headline="WIJ KUNNEN ALLES REGELEN?"
        image={heroAbout}
        mobileImage={heroAbout}
        position="bg-center"
      />
      <ContentPageSection>
        <ContentGrid>
          <ContentColumn>
            <ContentCard>
              <p>
                <strong className="text-primary">
                  ZOISO is een initatef van de gemeenten Bernheze, Boekel, Boxtel, ‘s-Hertogenbosch,
                  Maashorst, Meierijstad, Sint-Michielsgestel, Vught en Oss.Vught en Oss.
                </strong>{' '}
                Wij helpen jou als huiseigenaar met onafhankelijk advies. Je krijgt duidelijk
                inzicht in subsidies en kosten. Als je dat wilt, begeleiden we je ook volledig bij
                de uitvoering.
              </p>
            </ContentCard>
            <ContentCard>
              <p>Voor ZOISO werken we samen met De Woonpas.</p>
            </ContentCard>
            <ContentCard>
              <p>
                De Woonpas heef onafankelijke adviseurs, die al jouw wensen en vragen met je
                bespreken. Ook lopen zij samen met jou door je huis om te kijken naar de
                mogelijkheden.
              </p>
              <p>
                Je ontvangt van de adviseur een voorstel dat precies past bij jouw situatie. In dit
                voorstel lees je welke isolatie mogelijk is, wat de kosten zijn, welke subsidies je
                kunt krijgen en hoeveel je kunt besparen met isolate.
              </p>
              <p>
                De adviseur is tjdens het hele traject jouw vaste aanspreekpunt. Je kunt hier
                terecht met al je vragen.
              </p>
            </ContentCard>
          </ContentColumn>
          <ContentColumn>
            <PhotoCard src={aboutImage} />
            <ContentCard>
              <p>
                Voor de uitvoering van de isolatie werkt De Woonpas met bedrijven die voldoen aan
                strenge eisen voor kwaliteit, garanties, duurzaamheid, continuïteit en prijs. Waar
                mogelijk wordt samengewerkt met lokale bedrijven.
              </p>
            </ContentCard>
            <ContentCard>
              <p className="text-primary font-bold">Garantes</p>
              <p>
                Op alle isolatemaatregelen krijg je 10 jaar garante.{' '}
                <span className="text-[#E41F1B]">(ook als je het zelf doet?</span>
              </p>
            </ContentCard>
          </ContentColumn>
        </ContentGrid>
      </ContentPageSection>
      <LogoSlider />
      <ConsultationBanner />
    </>
  );
}
