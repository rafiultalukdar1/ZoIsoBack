import usePageTitle from '../hooks/usePageTitle';
import ContentPageSection from '../components/content/ContentPageSection';
import InsulationPageNav from '../components/content/InsulationPageNav';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import { topicLinks } from '../data/navigation';
import { dakImage } from '../assets/images';
import {
  ContentCard,
  ContentColumn,
  ContentGrid,
  PhotoCard,
  SectionTitle,
} from '../components/content/ContentBlocks';

export default function RoofInsulationPage() {
  usePageTitle('Dakisolatie');

  return (
    <>
      <ContentPageSection>
        <SectionTitle>DAKISOLATIE</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <ContentCard>
              <p>
                <strong>Wat is het</strong>
              </p>
              <p>
                Bij dakisolate wordt een schuin of plat dak van binnen geïsoleerd. Dit gebeurt
                bijvoorbeeld met glaswol. De isolatie kan worden afgewerkt met gipsplaten of
                spaanplaten met een kunststof decorfolie. Warme lucht stijgt op. Zonder isolatie
                gaat daarom veel warmte via het dak verloren. <br />
                Dit is ongeveer 30% van het totale warmteverlies in huis. Met dakisolatie blijft de
                warmte in de winter binnen en in de zomer juist buiten.
              </p>
            </ContentCard>
            <PhotoCard src={dakImage} />
            <ContentCard>
              <p>
                <strong>Kosten</strong>
              </p>
              <p>
                De kosten voor dakisolate liggen meestal tussen € 20 en € 55 per m² voor een schuin
                dak. Het isoleren van een plat dak kost vaak tussen € 20 en € 40 per m². De prijs
                hangt af van het soort isolatiemateriaal, hoe goed het dak bereikbaar is en de
                arbeidskosten. Voor een gemiddeld huis met 70 tot 80 m² dak liggen de totale kosten
                ongeveer tussen € 2.000 en € 9.000.
              </p>
            </ContentCard>
            <ContentCard>
              <p className="text-primary italic">
                Let op: de exacte kosten voor jouw woning kunnen pas worden bepaald na een goede
                inspectie.
              </p>
            </ContentCard>
          </ContentColumn>
          <ContentColumn>
            <ContentCard variant="filled">
              <p>
                <strong>Voordelen</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>Vermindert het grootste deel van het warmteverlies.</li>
                <li>Minder kans op schimmel, lekkage, vocht en tocht.</li>
                <li>Minder geluid van regen en verkeer.</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>
                  Rommel indicator <span className="text-primary">✱</span>
                </strong>
              </p>
              <p>
                Dakisolate zorgt voor redelijk wat rommel. De werkzaamheden duren meestal één of
                twee dagen. Het werk gebeurt op zolder of in de dakruimte. Tijdens het werk is er
                tijdelijk stof, isolatiemateriaal en rommel. Soms moeten gipsplaten of houten
                afwerking worden losgemaakt. Je kunt ook geluid horen van zagen en schroeven.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                Je kunt gewoon thuisblijven, maar de zolder is tijdelijk niet te gebruiken. Het werk
                gaat sneller als de zolder leeg is. Het leegmaken van de zolder kan extra werk
                geven. Soms moeten na de isolatie wanden of verwarming opnieuw worden geplaatst.
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
