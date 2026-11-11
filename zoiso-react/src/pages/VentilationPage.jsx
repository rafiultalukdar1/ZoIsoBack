import usePageTitle from '../hooks/usePageTitle';
import ContentPageSection from '../components/content/ContentPageSection';
import InsulationPageNav from '../components/content/InsulationPageNav';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import { topicLinks } from '../data/navigation';
import { ventilatieImage } from '../assets/images';
import {
  CaptionedImage,
  ContentCard,
  ContentColumn,
  ContentGrid,
  SectionTitle,
} from '../components/content/ContentBlocks';

export default function VentilationPage() {
  usePageTitle('Ventilatie');

  return (
    <>
      <ContentPageSection>
        <SectionTitle>ventilatie</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <ContentCard>
              <p>
                <strong>Waarom belangrijk</strong>
              </p>
              <p>
                In je huis ontstaat contnu vervuilde lucht door o.a. ademen (CO₂), koken, douchen,
                wassen en drogen, huisdieren en schoonmaakmiddelen. Zonder ventilatie blijft de
                vervuilde lucht hangen, wat kan leiden tot hoofdpijn, slaperigheid, schimmelvorming,
                slechte luchtkwaliteit, houtrot of vochtproblemen. Naarmate je huis beter geïsoleerd
                is, wordt ventlate belangrijker.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Wat is het</strong>
              </p>
              <p>
                Ventlate is het structureel verversen van lucht in je woning om gezond, droog en
                comfortabel te wonen. <br /> Natuurlijke ventlate gebeurt via open ramen, roosters
                boven ramen, kieren en naden. Bij mechanische ventilatie zuigt een ventilatiesysteem
                lucht af uit badkamer, toilet en keuken. Frisse lucht komt binnen via roosters. Via
                kieren en ventilatie gaat ongeveer 15% van de warmte in huis verloren.
              </p>
            </ContentCard>
            <ContentCard>
              <p>
                <strong>Kosten</strong>
              </p>
              <p>
                De roosters in ramen/muren of ventilatieventielen kosten tussen € 70 en € 125 per
                rooster inclusief plaatsing. Dit zijn roosters voor frisse lucht, geen volledig
                systeem. De ventilatiemaatregel komt alleen voor subsidie in aanmerking als deze
                wordt gecombineerd met minimaal één energiebesparende isolatemaatregel.
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
                <li>Vervuilde lucht verdwijnt uit je huis.</li>
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
                Het aanbrengen van ventlateroosters geef slechts beperkte rommel. Er is sprake van
                licht boorwerk, meestal duurt het werk 1 tot 2 uur per raam en er kunnen resten van
                zaagsel of glas achterblijven. Er vindt geen hak- of breekwerk plaats in muren.
              </p>
            </ContentCard>
            <CaptionedImage src={ventilatieImage}>
              Via ventilatie en kieren gaat veel warmte verloren. Je kunt zelf ook maatregelen nemen
              om dit terug te brengen, zoals het plaatsen van tochtstrips.
            </CaptionedImage>
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
