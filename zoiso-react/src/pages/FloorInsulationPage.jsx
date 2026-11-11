import usePageTitle from '../hooks/usePageTitle';
import ContentPageSection from '../components/content/ContentPageSection';
import InsulationPageNav from '../components/content/InsulationPageNav';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import { topicLinks } from '../data/navigation';
import { vloerImage } from '../assets/images';
import {
  ContentCard,
  ContentColumn,
  ContentGrid,
  PhotoCard,
  SectionTitle,
} from '../components/content/ContentBlocks';

export default function FloorInsulationPage() {
  usePageTitle('Vloerisolatie');

  return (
    <>
      <ContentPageSection>
        <SectionTitle>vloerisolatie</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <ContentCard>
              <p>
                <strong>Wat is het</strong>
              </p>
              <p>
                Bij vloerisolate komt er isolatemateriaal onder de vloer van de begane grond. Dit
                kan bijvoorbeeld schuim, glaswol of folie zijn. Het materiaal houdt kou en vocht uit
                de kruipruimte tegen. Zo blijft je vloer warmer, krijg je warmere voeten en gebruik
                je minder energie. Ongeveer 15% van de warmte in huis gaat via de vloer verloren.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Kosten</strong>
              </p>
              <p>
                De gemiddelde kosten voor vloerisolate liggen tussen de € 40 en € 75 per m². De
                prijs hangt af van het soort isolatiemateriaal, hoe goed de kruipruimte bereikbaar
                is en de arbeidskosten. Voor een rijtjeshuis liggen de kosten meestal tussen € 1400
                en € 1800. Voor een hoekwoning tussen € 1.800 en € 2.200. Voor een vrijstaande
                woning € 3.000 of meer.
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
                <li>Geen koude voeten meer.</li>
                <li>Minder tocht en vocht in huis.</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>
                  Rommel indicator <span className="text-primary">✱</span>
                </strong>
              </p>
              <p>
                Vloerisolate geef weinig overlast. De werkzaamheden duren meestal een halve tot één
                dag. Alles gebeurt onder de vloer, in de kruipruimte. Er is geen breekwerk in huis.
                Soms hoor je wat geluid van machines en kan er tijdelijk een lichte geur zijn,
                vooral bij gebruik van schuim. Je kunt gewoon thuisblijven en de vloer blijf heel en
                bruikbaar.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Aandachtspunten</strong>
              </p>
              <p>
                Bij dakisolate is het belangrijk dat de isolate helemaal luchtdicht en op de juiste
                manier wordt aangebracht. Dit bepaalt hoe goed de isolatie werkt. Goede plaatsing is
                belangrijker dan het duurste materiaal. Isolatie met kieren werkt minder goed, ook
                als het materiaal van hoge kwaliteit is.
              </p>
            </ContentCard>
            <PhotoCard src={vloerImage} />
          </ContentColumn>
        </ContentGrid>
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
