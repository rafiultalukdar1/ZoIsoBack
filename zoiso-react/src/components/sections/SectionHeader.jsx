import IconBadge from '../ui/IconBadge';

const mobileLayouts = {
  stacked: 'flex-col items-start md:flex-row md:items-center',
  row: 'flex-row items-start md:items-center',
  rowCentered: 'flex-row items-center',
};

/** Round icon + big condensed title (+ optional intro line). */
export default function SectionHeader({
  icon,
  title,
  description,
  mobileLayout = 'stacked',
  hideDescriptionOnMobile = false,
}) {
  return (
    <div className={`flex gap-5 md:gap-10 lg:gap-[50px] ${mobileLayouts[mobileLayout]}`}>
      <IconBadge
        src={icon}
        className="size-[60px] aspect-square p-[15px] md:size-[90px] md:p-5"
        imageClassName="w-full"
      />
      <div className="flex flex-1 flex-col gap-2.5">
        <h2 className="font-condensed text-[30px] font-black md:text-[40px]">{title}</h2>
        {description && (
          <p
            className={`max-w-[235px] text-base md:max-w-none md:text-xl ${hideDescriptionOnMobile ? 'hidden md:block' : ''}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
