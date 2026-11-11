import usePageTitle from '../hooks/usePageTitle';
import TextPage from '../components/content/TextPage';
import Accordion from '../components/ui/Accordion';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import { privacyItems } from '../data/accordions';

export default function PrivacyPage() {
  usePageTitle('Privacy statement');

  return (
    <>
      <TextPage title="PRIVACY STATEMENT">
        <div>
          <div>
            <p>
              BijDeWoonpashechtenwe veel waardeaan uw privacy. Wij vinden dat privacy draait om
              transparantie, vertrouwen en veiligheid.
            </p>
            <p>De Woonpas hanteert daarom de volgende basisprincipes:</p>
            <p>
              We zorgen ervoor dat u weet welke gegevens wij van of over u gebruiken, waarom wij
              deze gebruiken, hoe lang wij deze gebruiken en wie deze gegevens kunnen gebruiken.
            </p>
            <p>
              Uw gegevens zijn uw eigendom. We gebruiken deze alleen voor het doel waarvoor u deze
              aan ons hebt verstrekt. Wanneer u het niet eens bent met de manier waarop wij dit
              doen, dan heeft u een aantal rechten om hiertegen bezwaar te maken.
            </p>
            <p>
              Wij beschermen uw gegevens zo goed mogelijk om te voorkomen dat deze in verkeerde
              handen vallen. We houden ons aan de geldende Europese privacywetgeving (AVG). De
              Europese privacywetgeving wordt in het algemeen beschouwd als de strengste ter wereld.
              Dit resulteert in een hoge mate van bescherming, omdat we uw gegevens alleen mogen
              gebruiken wanneer we voldoen aan de strenge voorwaarden van deze wet.
            </p>
            <p>
              U kunt er als cliënt van De Woonpas dus op vertrouwen dat wij zorgvuldig met uw
              gegevens omgaan.
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>
              Wilt u meer weten? Lees dan verder. In dit privacy statement leggen wij uit hoe wij uw
              persoonsgegevens verwerken, met welk doel, hoe de bescherming wordt gewaarborgd en wat
              uw rechten zijn met betrekking tot de verwerking van deze gegevens.
            </p>
          </div>
        </div>
        <Accordion items={privacyItems} />
      </TextPage>
      <ConsultationBanner showColorPlate={false} />
    </>
  );
}
