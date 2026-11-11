import usePageTitle from '../hooks/usePageTitle';
import Container from '../components/ui/Container';
import ContentWrapper from '../components/ui/ContentWrapper';
import ActionLink from '../components/ui/ActionLink';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import ConsultationBanner from '../components/sections/ConsultationBanner';
import SuccessStory from '../components/sections/SuccessStory';
import {
  energyOverviewImage,
  heroInsulation,
  massageIcon,
  measureIcon,
  storyInsulation,
  storyInsulationMobile,
} from '../assets/images';

const measureIntro =
  'In onderstaande tabel zie je wat de verschillende isolatiemaatregelen gemiddeld kosten en hoeveel rommel het geeft. De werkelijke kosten voor jouw huis kunnen alleen berekend worden na zorgvuldige inspectie.';

const measures = [
  { area: 'Muren', loss: '25%', insulation: 'Spouwmuur', cost: '€ 15 - 30', mess: '✱' },
  { area: 'Dak', loss: '30%', insulation: 'Schuin dak', cost: '€ 20 - 55', mess: '✱✱✱' },
  { area: 'Dak', loss: '30%', insulation: 'Plat dak', cost: '€ 20 - 40', mess: '✱✱✱' },
  { area: 'Vloer', loss: '15%', insulation: 'Vloer', cost: '€ 40 - 75', mess: '✱' },
  { area: 'Vloer', loss: '30%', insulation: 'Bodem', cost: '€ 20 - 30', mess: '✱' },
  { area: 'Ramen', loss: '15%', insulation: 'HR++ glas', cost: '€ 110 - 170', mess: '✱✱' },
  {
    area: 'Naden en kieren',
    loss: '15%',
    insulation: (
      <>
        Dichten van <br /> naden en kieren{' '}
      </>
    ),
    cost: 'nvt',
    mess: '✱',
  },
];

const subsidyLinks = [
  { label: 'SPOUWMUURISOLATIE ', to: '/spouwmuurisolatie' },
  { label: 'VLOERISOLATIE', to: '/vloerisolatie' },
  { label: 'HR++ GLAS', to: '/hr-glas' },
  { label: 'DAKISOLATIE', to: '/dakisolatie' },
  { label: 'BODEMISOLATIE', to: '/bodemisolatie' },
  { label: 'VENTILATIE', to: '/ventilatie' },
];

const headerCell =
  'whitespace-normal px-1.5 py-[5px] text-left font-condensed text-sm font-black uppercase sm:whitespace-nowrap md:p-1.5 lg:px-[15px] lg:py-2.5 lg:text-[19px] xl:text-[21px]';
const cell = 'px-2.5 py-2 text-xs md:text-sm lg:px-3.5 lg:py-2.5 lg:text-xl';

function EnergyOverview() {
  return (
    <section className="pb-9 pt-[86px] md:pb-[50px] xl:pb-[90px] xl:pt-[90px]">
      <Container>
        <ContentWrapper className="flex flex-col-reverse items-center gap-7 md:flex-row md:gap-10 lg:gap-[60px] xl:gap-20">
          <div className="max-w-[522px] flex-1">
            <img src={energyOverviewImage} alt="" />
          </div>
          <div className="flex-1">
            <p className="text-lg font-thin leading-normal md:text-xl">
              In een gemiddeld huis gaat de meeste warmte verloren via het dak (30%). Daarna volgen
              de muren (25%), kieren en ventilatie (15%), ramen (15%) en de vloer (15%). Omdat er
              warmte ontsnapt uit je huis, gebruik je meer energie en wordt je energierekening
              hoger. Ook voelt je huis minder comfortabel aan. Door de warmteverliezen aan te pakken
              met goede isolatie, kun je flink besparen op je energiekosten.
            </p>
          </div>
        </ContentWrapper>
      </Container>
    </section>
  );
}

function MeasureTable() {
  return (
    <section className="bg-[#F0F0EE] py-16">
      <Container>
        <ContentWrapper className="overflow-hidden md:overflow-visible">
          <SectionHeader
            icon={measureIcon}
            title="KENMERKEN MAATREGELEN"
            description={measureIntro}
            mobileLayout="rowCentered"
            hideDescriptionOnMobile
          />
          <p className="mt-4 md:hidden">{measureIntro}</p>
          <div className="pt-2.5 md:pt-[50px]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className={headerCell} />
                  <th className={`${headerCell} text-center! text-primary`}>Warmteverlies</th>
                  <th className={headerCell}>Isolatie</th>
                  <th className={headerCell}>Kosten per m²</th>
                  <th className={headerCell}>Rommelindicator</th>
                </tr>
              </thead>
              <tbody>
                {measures.map((row, index) => {
                  const highlight = index % 2 === 1;
                  const rounded = highlight
                    ? 'bg-white first:rounded-l-[50px] last:rounded-r-[50px]'
                    : '';

                  return (
                    <tr key={`${row.area}-${row.insulation}-${index}`}>
                      <td className={`${cell} font-bold ${rounded}`}>{row.area}</td>
                      <td className={`${cell} text-center font-bold text-primary ${rounded}`}>
                        {row.loss}
                      </td>
                      <td className={`${cell} font-semibold ${rounded}`}>{row.insulation}</td>
                      <td className={`${cell} whitespace-nowrap font-semibold ${rounded}`}>
                        {row.cost}
                      </td>
                      <td
                        className={`${cell} font-semibold tracking-[2px] text-primary ${rounded}`}
                      >
                        {row.mess}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="mt-[26px] text-base italic text-primary md:text-xl">
              Let op: de werkelijke kosten voor jouw huis kunnen alleen berekend worden na
              zorgvuldige inspectie.
            </p>
          </div>
        </ContentWrapper>
      </Container>
    </section>
  );
}

function SubsidyAvailability() {
  return (
    <section className="pb-12 pt-[37px] md:pb-[41px] md:pt-[111px]">
      <Container>
        <ContentWrapper>
          <SectionHeader
            icon={massageIcon}
            title="ZOISO HEEFT SUBSIDIE BESCHIKBAAR VOOR:"
            mobileLayout="row"
          />
          <div className="grid grid-cols-1 gap-x-10 gap-y-3 pt-10 md:grid-cols-2 lg:gap-x-16 lg:pt-14 xl:grid-cols-3">
            {subsidyLinks.map((link) => (
              <ActionLink key={link.to} to={link.to} label={link.label} variant="block" />
            ))}
          </div>
        </ContentWrapper>
      </Container>
    </section>
  );
}

export default function InsulationOverviewPage() {
  usePageTitle('Isolatie');

  return (
    <>
      <Hero headline="ENERGIEREKENING OMLAAG?" image={heroInsulation} />
      <EnergyOverview />
      <MeasureTable />
      <SubsidyAvailability />
      <ConsultationBanner />
      <SuccessStory
        image={storyInsulation}
        mobileImage={storyInsulationMobile}
        mobilePosition="bg-center"
        shadow
        quote="‘De adviseur van ZOISO was heel behulpzaam en volgde een helder stappenplan’ "
      />
    </>
  );
}
