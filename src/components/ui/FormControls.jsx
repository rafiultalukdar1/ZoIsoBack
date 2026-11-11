import { GoTriangleUp } from 'react-icons/go';

const inputClass =
  'w-full rounded-full border border-transparent bg-[#E6E7E5] px-8 py-4 text-black outline-none placeholder:text-[22px] placeholder:font-medium placeholder:text-[#808285] focus:border-primary';

/** Pill-shaped text input used in the contact forms. */
export function TextField({ id, className = '', ...props }) {
  return <input id={id} type="text" className={`${inputClass} ${className}`} {...props} />;
}

/** Field label with the large spacing used in the contact forms. */
export function FieldLabel({ htmlFor, compact = false, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block font-medium text-[#231F20] ${
        compact
          ? 'mb-2.5 text-xl md:mb-[22px] md:text-[22px]'
          : 'mb-2.5 text-xl md:mb-[18px] md:text-[22px] lg:mb-[22px]'
      }`}
    >
      {children}
    </label>
  );
}

/** Pill-shaped radio option with a custom dot indicator. */
export function RadioOption({ name, children }) {
  return (
    <label className="relative flex cursor-pointer items-center gap-2 rounded-full bg-[#E6E7E5] px-8 py-4 text-black">
      <input type="radio" name={name} className="peer sr-only" />
      <span className="relative size-5 shrink-0 rounded-full border-2 border-[#231F20] after:absolute after:left-1/2 after:top-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:bg-[#231F20] after:transition-transform after:duration-200 peer-checked:after:scale-100" />
      <span className="text-[22px] font-medium text-[#231F20]">{children}</span>
    </label>
  );
}

/** Green submit button with a right-pointing triangle. */
export function SubmitButton({ children }) {
  return (
    <div className="pt-10 text-end md:pt-[70px]">
      <button
        type="submit"
        className="ml-auto flex w-full items-center gap-[18px] rounded-full bg-primary px-5 py-3 text-[22px] font-bold text-white sm:w-auto sm:px-[30px] sm:py-3.5 sm:text-2xl"
      >
        <span>{children}</span>
        <GoTriangleUp className="rotate-90 text-xl" />
      </button>
    </div>
  );
}
