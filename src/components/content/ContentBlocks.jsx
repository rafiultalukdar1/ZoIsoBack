/** Small layout building blocks for the text-heavy pages. */

export function SectionTitle({ children }) {
  return (
    <h2 className="font-condensed text-[30px] font-black uppercase md:text-[40px]">{children}</h2>
  );
}

export function ContentGrid({ children }) {
  return <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]">{children}</div>;
}

export function ContentColumn({ className = '', children }) {
  return <div className={`flex flex-col gap-5 md:gap-[30px] ${className}`}>{children}</div>;
}

const cardVariants = {
  plain: '',
  filled: '-ml-[15px] bg-[#F3F8F1] p-[15px]',
};

export function ContentCard({ variant = 'plain', className = '', children }) {
  return (
    <div className={`text-base md:text-xl [&_a]:underline ${cardVariants[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeading({ children }) {
  return (
    <h5 className="font-condensed text-[25px] font-black uppercase text-primary-dark">
      {children}
    </h5>
  );
}

/** Round-cropped photo used in the insulation and about pages. */
export function PhotoCard({ src, alt = '' }) {
  return (
    <div className="flex w-full">
      <img src={src} alt={alt} className="aspect-square w-4/5 rounded-full object-cover" />
    </div>
  );
}

/** Photo with a green caption bar underneath. */
export function CaptionedImage({ src, alt = '', children }) {
  return (
    <div>
      <div>
        <img src={src} alt={alt} />
      </div>
      <div className="bg-primary px-[15px] py-5">
        <p className="text-base text-white md:text-lg lg:text-xl">{children}</p>
      </div>
    </div>
  );
}

/** Photo next to a light-green text panel (stacked on small screens). */
export function ImageInfoPanel({ src, alt = '', children }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex w-full lg:w-2/5">
        <img src={src} alt={alt} className="size-full object-cover" />
      </div>
      <div className="flex w-full flex-col gap-[30px] bg-[#E1EED9] p-5 md:block md:p-[30px] lg:w-3/5">
        {children}
      </div>
    </div>
  );
}
