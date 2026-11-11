import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { colorPlate } from '../../assets/images';

/** Narrow decorative colour strip on the right edge of a section. */
export function AccentPlate() {
  return (
    <img
      src={colorPlate}
      alt=""
      className="absolute right-[-12px] top-[30px] max-w-[26px] md:right-[-15px] md:top-[50px] md:max-w-[35px] lg:right-[-24px] lg:max-w-full"
    />
  );
}

/** Rotated "SCROLL" hint shown on large screens only. */
export function ScrollHint() {
  return (
    <a
      href="#"
      className="absolute right-[70px] top-[100px] hidden -rotate-90 items-center gap-2.5 text-2xl font-bold lg:flex"
    >
      <HiOutlineArrowLongLeft />
      <span>SCROLL</span>
    </a>
  );
}
