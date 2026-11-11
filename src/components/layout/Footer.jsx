import Container from '../ui/Container';
import AppLink from '../ui/AppLink';
import { Link } from 'react-router-dom';
import { logo, ossLogo, rectangle } from '../../assets/images';
import { EMAIL, PHONE_HREF, PHONE_NUMBER, footerColumns, legalLinks } from '../../data/navigation';

/** Footer links get a green underline that grows in on hover. */
const underlineOnHover =
  'relative before:absolute before:left-0 before:top-full before:block before:h-0.5 before:w-0 before:bg-primary before:transition-[width] before:duration-300 hover:text-primary hover:before:w-full';

const footerLink = `${underlineOnHover} font-condensed text-base font-black md:text-[19px]`;
const contactLink = `${underlineOnHover} font-calibri text-base font-normal md:text-xl`;

const columnClass = 'flex flex-col items-start justify-end gap-5 md:gap-[30px]';

export default function Footer() {
  return (
    <footer className="relative z-[2]">
      <div className="relative z-[2] overflow-hidden">
        <Container>
          <div className="mx-auto flex w-full max-w-[1210px] flex-col gap-10 py-[50px] md:py-[60px]">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              <div>
                <Link to="/" className="max-w-[120px]">
                  <img src={logo} alt="ZOISO" />
                </Link>
              </div>
              <div className="flex items-end">
                <Link to="/">
                  <img src={ossLogo} alt="Gemeente Oss" className="max-w-[170px] md:max-w-full" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className={columnClass}>
                <a href="#" className={footerLink}>
                  ZOISO
                </a>
                <ul className="grid w-full grid-cols-2 gap-2.5 md:flex md:flex-col">
                  <li className="text-base md:text-lg">Amsterdamseweg 24 </li>
                  <li className="text-base md:text-lg">3812 RS Amersfoort</li>
                  <li className="text-base md:text-lg">
                    <AppLink to={PHONE_HREF} className={contactLink}>
                      {PHONE_NUMBER}
                    </AppLink>
                  </li>
                  <li className="text-base md:text-lg">
                    <AppLink to={`mailto:${EMAIL}`} className={contactLink}>
                      {EMAIL}
                    </AppLink>
                  </li>
                </ul>
              </div>

              {footerColumns.map((column, index) => (
                <div key={index} className={`hidden md:flex ${columnClass}`}>
                  {column.map((link) => (
                    <AppLink key={link.label} to={link.to} className={footerLink}>
                      {link.label}
                    </AppLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
        <img
          src={rectangle}
          alt=""
          className="absolute bottom-5 -right-[25px] -z-10 max-w-[250px] md:-right-[35px] md:max-w-[40%] lg:right-[10%] lg:max-w-[23%]"
        />
      </div>

      <div className="bg-primary py-[25px] text-white">
        <Container>
          <div className="mx-auto flex w-full max-w-[1210px] flex-col flex-wrap items-start gap-2.5 font-nunito text-base font-[250] md:flex-row md:items-center md:gap-[35px] md:text-lg">
            <p className="order-3 md:order-none">© ZOISO 2026 </p>
            <div className="flex flex-col items-start gap-2.5 text-sm md:flex-row md:items-center md:gap-5 md:text-[length:inherit]">
              {legalLinks.map((link) => (
                <AppLink key={link.to} to={link.to}>
                  {link.label}
                </AppLink>
              ))}
            </div>
            <p className="mt-2.5 md:mt-0 lg:ml-auto">
              ZOISO is een initiatief van o.a. de GEMEENTE OSS
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
