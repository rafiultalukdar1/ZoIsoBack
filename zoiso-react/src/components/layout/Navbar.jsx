import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import Container from '../ui/Container';
import AppLink from '../ui/AppLink';
import { logo } from '../../assets/images';
import { mainNavigation } from '../../data/navigation';
import { isItemActive } from './navigationState';

const linkBase = 'relative z-10 font-condensed text-[20px] font-extrabold 2xl:text-[19px]';

function DesktopNavItem({ item, pathname }) {
  const active = isItemActive(item, pathname);

  if (!item.children) {
    return (
      <li className="relative z-10">
        <AppLink
          to={item.to}
          className={`${linkBase} hover:text-primary ${active ? 'text-primary' : ''}`}
        >
          {item.label}
        </AppLink>
      </li>
    );
  }

  return (
    <li className="group relative z-10">
      <AppLink
        to={item.to}
        className={`${linkBase} hover:text-white! ${active ? 'text-primary' : ''}`}
      >
        {item.label}
      </AppLink>
      <div className="invisible absolute left-1/2 top-[90%] z-[2] flex w-fit -translate-x-1/2 flex-col pt-5 text-center text-white opacity-0 transition-all duration-300 before:absolute before:-top-[24%] before:left-1/2 before:-z-10 before:block before:h-[140%] before:w-[140%] before:-translate-x-1/2 before:rounded-full before:bg-[#FF6C29] group-hover:visible group-hover:opacity-100">
        {item.children.map((child) => (
          <AppLink
            key={child.to}
            to={child.to}
            className={`${linkBase} hover:text-black! ${pathname === child.to ? 'text-black!' : ''}`}
          >
            {child.label}
          </AppLink>
        ))}
      </div>
    </li>
  );
}

export default function Navbar({ onOpenMenu }) {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-[100] bg-white shadow-[0_2px_4px_rgba(100,100,111,0.1)]">
      <Container>
        <div className="relative flex items-center gap-[60px] py-[5px] md:py-0 xl:gap-[100px]">
          <Link
            to="/"
            className="mx-auto -mb-[60px] flex max-w-[200px] rounded-[100px] bg-white p-5 md:max-w-[250px] md:p-[30px] lg:mx-0"
          >
            <img src={logo} alt="ZOISO" />
          </Link>

          <ul className="hidden flex-wrap items-center gap-x-[30px] gap-y-[5px] lg:flex xl:gap-y-5 2xl:gap-x-[60px]">
            {mainNavigation.map((item) => (
              <DesktopNavItem key={item.to} item={item} pathname={pathname} />
            ))}
          </ul>

          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[40px] lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </Container>
    </nav>
  );
}
