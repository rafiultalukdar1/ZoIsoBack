import usePageTitle from '../hooks/usePageTitle';
import ContentPageSection from '../components/content/ContentPageSection';
import InsulationPageNav from '../components/content/InsulationPageNav';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import { topicLinks } from '../data/navigation';
import { spouwmuurImage } from '../assets/images';
import {
  ContentCard,
  ContentColumn,
  ContentGrid,
  PhotoCard,
  SectionTitle,
} from '../components/content/ContentBlocks';

export default function CavityWallInsulationPage() {
  usePageTitle('Spouwmuurisolatie');

  return (
    <>
      <ContentPageSection>
        <SectionTitle>SPOUWMUURISOLATIE</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <ContentCard>
              <p>
                <strong>Wat is het</strong>
              </p>
              <p>
                Bij spouwmuurisolate wordt isolatemateriaal in de ruimte tussen de binnen- en
                buitenmuur gespoten. Deze ruimte heet de spouw. De meeste huizen die na 1930 zijn
                gebouwd, hebben een spouwmuur. <br /> Het isolatemateriaal wordt via kleine gaatjes
                in de buitenmuur aangebracht. Daarna worden de gaatjes weer netjes dichtgemaakt. Je
                ziet hier bijna niets van. <br />
                Er zijn drie soorten isolatemateriaal: minerale wol, isolatieparels en
                isolatieschuim. Welke soort het beste is, hangt af van jouw woning. Ongeveer 25% van
                de warmte in huis verdwijnt via de muren.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Kosten</strong>
              </p>
              <p>
                De kosten voor spouwmuurisolate liggen meestal tussen de € 15 en € 30 per m². De
                prijs hangt af van het soort isolatiemateriaal, hoe goed de muur bereikbaar is en de
                arbeidskosten. <br /> Voor een rijtjeshuis zijn de kosten vaak € 1.000 tot € 1.200.
                Voor een hoekwoning is dit ongeveer € 1.500. Voor een vrijstaande woning kan dit €
                2.500 of meer zijn.
              </p>
            </ContentCard>
            <ContentCard>
              <p className="text-primary italic">
                Let op: de exacte kosten voor jouw woning kunnen pas worden bepaald na een goede
                inspectie. <br /> De bij ZOISO betrokken bedrijven isoleren niet met UF schuim
                (Ureum Formaldehyde), dus daarover hoef je je geen zorgen te maken. Als je zelf gaat
                isoleren of een eigen uitvoerder kiest: voor het gebruik van UF schuim is geen
                subsidie beschikbaar.
              </p>
            </ContentCard>
          </ContentColumn>
          <ContentColumn>
            <ContentCard variant="filled">
              <p>
                <strong>Voordelen</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>Vocht komt minder snel in de binnenmuren.</li>
                <li>Het uiterlijk van de gevel blijf hetzelfde.</li>
                <li>Relatef lage kosten.</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>
                  Rommel indicator <span className="text-primary">✱</span>
                </strong>
              </p>
              <p>
                Spouwmuurisolate geef weinig overlast en weinig rommel. Het werk duurt meestal één
                dag. De vakmensen werken buiten aan je woning. Je kunt gewoon thuisblijven en hoeft
                binnen niets te verplaatsen. Soms moet je buiten wel spullen weghalen die in de weg
                staan, zoals containers of een fetsenrek.
              </p>
            </ContentCard>
            <PhotoCard src={spouwmuurImage} />
            <ContentCard>
              <p>
                <strong>Aandachtspunten</strong>
              </p>
              <p>
                Bij spouwmuurisolate is goede ventlate belangrijk. Ook moet rekening worden gehouden
                met beschermde dieren die in de muren kunnen wonen, zoals vogels en vleermuizen.
                Laat daarom altjd eerst een deskundige je woning controleren.
              </p>
            </ContentCard>
          </ContentColumn>
        </ContentGrid>
      </ContentPageSection>
      <InsulationPageNav
        links={[
          topicLinks.dak,
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
