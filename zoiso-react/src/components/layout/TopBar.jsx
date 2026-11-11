import Container from '../ui/Container';
import { headerBadge, ossLogo } from '../../assets/images';

/** Grey strip above the navigation naming the initiating municipalities. */
export default function TopBar() {
  return (
    <header className="bg-[#F2F2F0]">
      <Container>
        {/* Desktop */}
        <div className="relative hidden items-start justify-between gap-2.5 pb-[30px] pt-5 lg:flex">
          <p className="text-xs font-semibold">
            ZOISO IS EEN INITIATIEF VAN DE GEMEENTE BERNHEZE, BOEKEL, BOXTEL,{' '}
          </p>
          <img src={ossLogo} alt="Gemeente Oss" className="w-[150px]" />
          <p className="text-xs font-semibold">
            ‘S-HERTOGENBOSCH, SINT-MICHIELSGESTEL, MAASHORST, MEIERIJSTAD EN VUGHT{' '}
          </p>
          <a href="#" className="absolute bottom-[13px] right-0">
            <img src={headerBadge} alt="" className="w-[150px]" />
          </a>
        </div>

        {/* Mobile & tablet */}
        <div className="flex flex-col gap-[15px] py-2.5 lg:hidden">
          <p>
            ZOISO is een initiatief van de gemeente Bernheze, Boekel, Boxtel, ‘s-Hertogenbosch,
            Sint-Michielsgestel, Maashorst, Meierijstad, Vught en
          </p>
          <div className="flex items-center justify-between">
            <a href="#" className="max-w-[150px]">
              <img src={ossLogo} alt="Gemeente Oss" />
            </a>
            <a href="#">
              <img src={headerBadge} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
