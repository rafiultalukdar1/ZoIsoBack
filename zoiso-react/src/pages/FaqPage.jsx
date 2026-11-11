import usePageTitle from '../hooks/usePageTitle';
import TextPage from '../components/content/TextPage';
import Accordion from '../components/ui/Accordion';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import { faqItems } from '../data/accordions';

export default function FaqPage() {
  usePageTitle('Veelgestelde vragen');

  return (
    <>
      <TextPage title="VEELGESTELDE VRAGEN">
        <Accordion items={faqItems} defaultOpen={0} />
      </TextPage>
      <ConsultationBanner showColorPlate={false} />
    </>
  );
}
