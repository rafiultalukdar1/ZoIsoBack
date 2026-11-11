import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GoTriangleUp } from 'react-icons/go';
import { PiXLight } from 'react-icons/pi';
import Container from '../ui/Container';
import AppLink from '../ui/AppLink';
import { logo } from '../../assets/images';
import { mainNavigation } from '../../data/navigation';
import { isItemActive } from './navigationState';

const linkClass = 'font-condensed text-[18px] font-extrabold md:text-[20px]';

function MobileNavItem({ item, pathname, isOpen, onToggle, onNavigate }) {
  const linkColor = isItemActive(item, pathname) ? 'text-primary' : 'hover:text-primary';

  if (!item.children) {
    return (
      <li>
        <AppLink to={item.to} onClick={onNavigate} className={`${linkClass} ${linkColor}`}>
          {item.label}
        </AppLink>
      </li>
    );
  }

  return (
    <li>
      <div className={`flex items-center gap-2.5 ${isOpen ? 'text-primary' : ''}`}>
        <AppLink to={item.to} onClick={onNavigate} className={`${linkClass} ${linkColor}`}>
          {item.label}
        </AppLink>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={`Toon ${item.label.toLowerCase()} submenu`}
          className="text-[13px]"
        >
          <GoTriangleUp
            className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          />
        </button>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col pl-2.5">
            {item.children.map((child) => (
              <AppLink
                key={child.to}
                to={child.to}
                onClick={onNavigate}
                className={`${linkClass} ${pathname === child.to ? 'text-primary' : 'hover:text-primary'}`}
              >
                {child.label}
              </AppLink>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();
  const [openItem, setOpenItem] = useState(null);

  // Lock page scroll while the menu is open.
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    document.body.classList.toggle('h-dvh', open);
    return () => document.body.classList.remove('overflow-hidden', 'h-dvh');
  }, [open]);

  return (
    <div
      className={`fixed top-0 z-[200] h-dvh w-full bg-white transition-[right] duration-300 lg:hidden ${open ? 'right-0' : '-right-full'}`}
    >
      <Container>
        <div className="relative flex items-center justify-center py-2.5">
          <Link to="/" onClick={onClose} className="max-w-[150px]">
            <img src={logo} alt="ZOISO" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Sluit menu"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[50px] text-black"
          >
            <PiXLight />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-x-[30px] gap-y-2.5 pt-5 md:gap-y-[5px]">
          {mainNavigation.map((item) => (
            <MobileNavItem
              key={item.to}
              item={item}
              pathname={pathname}
              isOpen={openItem === item.to}
              onToggle={() => setOpenItem(openItem === item.to ? null : item.to)}
              onNavigate={onClose}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
}
