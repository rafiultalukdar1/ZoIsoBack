import { FaCaretRight } from 'react-icons/fa6';
import AppLink from './AppLink';
import fillHover from './fillHover';

const variants = {
  primary: 'w-fit bg-primary',
  lime: 'w-fit bg-[#A7C627] hover:bg-black',
  block: 'w-full justify-between bg-primary hover:bg-primary-dark',
};

/** Pill-shaped call-to-action link with a trailing caret icon. */
export default function ActionLink({ to = '#', label, variant = 'primary', className = '' }) {
  return (
    <AppLink
      to={to}
      className={`relative z-[2] inline-flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[17px] font-medium text-white duration-300 md:text-xl ${fillHover} ${variants[variant]} ${className}`}
    >
      <span>{label}</span>
      <FaCaretRight />
    </AppLink>
  );
}
