import usePageTitle from '../hooks/usePageTitle';
import ContentPageSection from '../components/content/ContentPageSection';
import InsulationPageNav from '../components/content/InsulationPageNav';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import { topicLinks } from '../data/navigation';
import { bodemImage } from '../assets/images';
import {
  ContentCard,
  ContentColumn,
  ContentGrid,
  ImageInfoPanel,
  SectionTitle,
} from '../components/content/ContentBlocks';

export default function GroundInsulationPage() {
  usePageTitle('Bodemisolatie');

  return (
    <>
      <ContentPageSection>
        <SectionTitle>bodemisolatie</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <ContentCard>
              <p>
                <strong>Wat is het</strong>
              </p>
              <p>
                Bodemisolatie betekent dat de bodem van de kruipruimte onder je huis wordt
                geïsoleerd. Het isolatiemateriaal komt op de grond van de kruipruimte te liggen,
                niet tegen de vloer zelf. Deze vorm van isolatie is vooral geschikt bij een lage
                kruipruimte (minder dan 35 cm), wanneer vloerisolatie niet mogelijk is en als je
                last hebt van vocht, schimmel of een muffe geur. Het doel is om vooral vocht en kou
                uit de grond tegen te houden. Zo wordt je huis droger en comfortabeler. Ongeveer 15%
                van de warmte in huis gaat via de vloer verloren.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Kosten</strong>
              </p>
              <p>
                De gemiddelde kosten van bodemisolatie liggen tussen de € 20 en € 30 per m². De
                prijs hangt af van het soort isolatiemateriaal, hoe goed de kruipruimte bereikbaar
                is en hoe groot deze is. Voor een gemiddelde kruipruimte van 50 m² liggen de totale
                kosten meestal tussen € 1.000 en € 2.000.
              </p>
            </ContentCard>
            <ContentCard>
              <p className="text-primary italic">
                Let op: de werkelijke kosten voor jouw huis kunnen alleen berekend worden na
                zorgvuldige inspectie.
              </p>
            </ContentCard>
          </ContentColumn>
          <ContentColumn>
            <ContentCard variant="filled">
              <p>
                <strong>Voordelen</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>Minder kou en tocht vanuit de vloer.</li>
                <li>De vloer voelt minder kil aan.</li>
                <li>Beschermt de vloer en houten balken tegen vocht.</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>
                  Rommel indicator <span className="text-primary">✱</span>
                </strong>
              </p>
              <p>
                De werkzaamheden duren meestal een halve tot één dag. Alles gebeurt in de
                kruipruimte, op de grond onder je huis. Er is geen breekwerk in huis en je hebt geen
                last van stof of rommel in de woonruimtes. Soms hoor je wat geluid tijdens het
                aanbrengen van het materiaal. Je kunt gewoon thuisblijven en de vloer blijft heel en
                bruikbaar. In sommige situaties is er iets meer werk nodig. Dat is bijvoorbeeld zo,
                als de kruipruimte erg laag of nat is, het kruipluik slecht bereikbaar is of als er
                oude rommel of puin in de kruipruimte ligt.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Aandachtspunten</strong>
              </p>
              <p>
                Bodemisolatie werkt goed als je het voor het juiste doel gebruikt. Maak daarom een
                bewuste keuze tussen bodemisolatie en vloerisolatie.
              </p>
            </ContentCard>
          </ContentColumn>
        </ContentGrid>
        <ImageInfoPanel src={bodemImage}>
          <h4 className="font-condensed text-lg font-black text-primary md:text-xl lg:text-[25px]">
            BODEMISOLATIE OF VLOERISOLATIE?
          </h4>
          <p className="mt-[15px] text-base md:text-lg lg:text-xl">
            Bodemisolatie is geen vervanging van vloerisolatie, maar een alternatief. Met
            bodemisolatie bespaar je minder energie dan met vloerisolatie. Het effect op comfort en
            het verminderen van vochtproblemen is juist groter. Bodemisolatie is vooral bedoeld om
            kou en vocht uit de grond tegen te houden. De vloer voelt minder koud aan, maar wordt
            niet echt warm. Wil je een warme vloer, dan is vloerisolatie een betere keuze.
          </p>
        </ImageInfoPanel>
      </ContentPageSection>
      <InsulationPageNav
        links={[
          topicLinks.spouwmuur,
          topicLinks.vloer,
          topicLinks.bodem,
          topicLinks.hrGlas,
          topicLinks.ventilatie,
        ]}
      />
      <ConsultationBanner />
    </>
  );
}
