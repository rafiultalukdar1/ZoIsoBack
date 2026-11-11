import { useState } from 'react';
import { GoTriangleUp } from 'react-icons/go';
import usePageTitle from '../hooks/usePageTitle';
import Container from '../components/ui/Container';
import AppLink from '../components/ui/AppLink';
import IconBadge from '../components/ui/IconBadge';
import { analysisIcon, landingImage, rectangle } from '../assets/images';

const subsidyLinks = [
  { label: 'Vloerisolatie', to: '/vloerisolatie' },
  { label: 'Bodemisolatie', to: '/bodemisolatie' },
  { label: 'Spouwmuurisolatie', to: '/spouwmuurisolatie' },
  { label: 'Isolatieglas', to: '/isolatie' },
  { label: 'Dakisolatie (plat dak en schuin dak)', to: '/dakisolatie' },
];

const benefits = [
  'Lagere energierekening',
  'Meer wooncomfort',
  'Waardestijging huis',
  'Bijdrage aan beter milieu',
];

const condensedHeading = 'font-condensed text-[25px] font-black';

/** Stand-alone postcode-check landing page (no site header or footer). */
export default function LandingPage() {
  usePageTitle('Postcodecheck');
  const [postcode, setPostcode] = useState('5343 AD');

  return (
    <main className="relative z-[2] flex flex-col overflow-hidden pb-0 pt-[50px] md:pt-20 lg:block lg:pb-[60px] lg:pt-[125px]">
      <Container>
        <div className="flex flex-col items-start gap-[35px] md:gap-[60px]">
          <h2 className="font-condensed text-[40px] font-black md:text-[70px] xl:text-[80px]">
            ZORGELOOS ISOLEREN <br /> BEGINT HIER. <br />
            <span className="text-primary">ZOISO!</span>
          </h2>

          <div className="flex flex-col gap-5 md:mt-5">
            <p className="max-w-[505px] text-lg">
              Je huis isoleren is een goed idee. Wil je weten of jouw woning in aanmerking komt voor
              een subsidie. Doe hier vrijblijvend de postcodecheck. Vul je postcode in en we
              verwijzen je door naar de juiste startpagina van jouw gemeente.
            </p>
            <div className="flex flex-col items-start gap-5">
              <p className="text-lg font-semibold text-primary">
                <span>VUL HIER JE POSTCODE IN</span>
              </p>
              <div className="flex w-full max-w-[350px] items-center gap-2.5 rounded-full bg-[#E3E3DF]">
                <input
                  type="text"
                  value={postcode}
                  onChange={(event) => setPostcode(event.target.value)}
                  aria-label="Postcode"
                  className="w-full flex-1 border border-transparent bg-transparent px-2.5 text-center text-2xl font-bold text-white outline-none"
                />
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-full bg-primary py-[15px] pl-[25px] pr-2.5 text-xl font-bold uppercase text-white duration-300 hover:bg-black"
                >
                  CHECK <GoTriangleUp className="rotate-90" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center xl:gap-20">
            <div className="flex flex-col gap-5 bg-[#FDE4D2] p-5">
              <h4 className={condensedHeading}>
                Er is subsidie beschikbaar <br />
                voor de volgende isolatie:{' '}
              </h4>
              <ul className="list-disc pl-5">
                {subsidyLinks.map((link) => (
                  <li key={link.to}>
                    <AppLink to={link.to} className="font-bold hover:text-primary">
                      {link.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-2.5">
                <IconBadge src={analysisIcon} className="size-[70px] p-[15px]" />
                <h4 className={condensedHeading}>VOORDELEN OP RIJ</h4>
              </div>
              <ul className="list-disc pl-5">
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <a href="#" className="font-bold">
                      {benefit}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-sm font-bold uppercase">
            ZOISO is een initiatief van de gemeente Bernheze, Boekel, Boxtel, ‘s-Hertogenbosch,
            Sint-Michielsgestel, Maashorst, Meierijstad, Oss EN Vught{' '}
          </div>
        </div>
      </Container>

      <img
        src={landingImage}
        alt=""
        className="ml-auto mt-[50px] w-4/5 max-w-[820px] lg:absolute lg:bottom-0 lg:right-0 lg:-z-10 lg:mt-0 lg:w-1/2"
      />
      <img
        src={rectangle}
        alt=""
        className="absolute -bottom-[45px] -left-[45px] -z-20 hidden w-full max-w-[780px] lg:block"
      />
    </main>
  );
}
