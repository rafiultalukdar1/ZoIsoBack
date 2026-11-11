import usePageTitle from '../hooks/usePageTitle';
import ContentPageSection from '../components/content/ContentPageSection';
import InsulationPageNav from '../components/content/InsulationPageNav';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import { topicLinks } from '../data/navigation';
import { hrGlasImage } from '../assets/images';
import {
  ContentCard,
  ContentColumn,
  ContentGrid,
  PhotoCard,
  SectionTitle,
} from '../components/content/ContentBlocks';

export default function GlazingPage() {
  usePageTitle('HR++ glas');

  return (
    <>
      <ContentPageSection>
        <SectionTitle>hr++ glas</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <ContentCard>
              <p>
                <strong>Wat is het</strong>
              </p>
              <p>
                Isolate met HR++ glas betekent dat je ramen worden vervangen door speciaal dubbel
                glas met een hoog rendement. Dit glas isoleert veel beter dan gewoon dubbel glas.
                HR++ glas bestaat uit twee glasplaten. Tussen deze platen zit een speciale laag en
                een gasvulling. Hierdoor blijft de warmte beter binnen en komt kou minder snel naar
                binnen. Ongeveer 15% van de warmte in huis gaat via de ramen verloren.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Kosten</strong>
              </p>
              <p>
                De gemiddelde kosten van HR++ glas liggen tussen de € 110 en € 170 per m². Een
                gemiddeld huis met ongeveer 20 m² aan ramen kost dan meestal tussen de € 2200 en €
                3400, inclusief montage. Als ook de kozijnen vervangen moeten worden, komen daar
                extra kosten bij.
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
                <li>Minder kou en koudestraling bij ramen.</li>
                <li>Betere geluidsisolate.</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>
                  Rommel indicator <span className="text-primary">✱</span>
                </strong>
              </p>
              <p>
                Per raam is gemiddeld 30 tot 60 minuten nodig. De werkzaamheden duren daarom meestal
                één dag. De oude ruiten worden verwijderd en de nieuwe ruiten worden geplaatst. Er
                kan wat stof of kleine glasresten ontstaan. Ook is er kort geluid van gereedschap te
                horen. Er is geen breekwerk in muren of vloeren. Je kunt meestal gewoon
                thuisblijven. Zorg wel dat de ruimte rond het raam vrij is. Soms is het prettig om
                tijdens en na het plaatsen even te ventleren.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Aandachtspunten</strong>
              </p>
              <p>Zorg voor voldoende ventlateroosters in huis.</p>
            </ContentCard>
            <PhotoCard src={hrGlasImage} />
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
