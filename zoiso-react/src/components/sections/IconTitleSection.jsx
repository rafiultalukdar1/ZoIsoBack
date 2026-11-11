import Container from '../ui/Container';
import ContentWrapper from '../ui/ContentWrapper';
import IconBadge from '../ui/IconBadge';

/**
 * Grey band with an icon + title + text on one side and a round photo on the other
 * (the photo moves above the text on small screens).
 */
export default function IconTitleSection({ icon, title, image, compactTitle = false, children }) {
  const titleGap = compactTitle ? 'gap-4' : 'gap-4 md:gap-10 xl:gap-[62px]';

  return (
    <section className="bg-[#F0F0EE] py-[55px] md:py-[78px]">
      <Container>
        <ContentWrapper className="flex flex-col-reverse items-start gap-5 md:gap-[70px] lg:flex-row xl:gap-[95px]">
          <div className="flex flex-1 flex-col gap-[30px]">
            <div
              className={`flex flex-col items-start md:mb-[26px] md:flex-row md:items-center ${titleGap}`}
            >
              <IconBadge src={icon} className="size-[60px] p-[5px] md:size-[90px] md:p-0" />
              <h4 className="flex-1 font-condensed text-[30px] font-black md:text-[40px]">
                {title}
              </h4>
            </div>
            {children}
          </div>
          <div className="max-w-[400px] flex-1">
            <img src={image} alt="" className="aspect-square w-full rounded-full object-cover" />
          </div>
        </ContentWrapper>
      </Container>
    </section>
  );
}

/** Bold lead paragraph used inside IconTitleSection. */
export function LeadText({ children }) {
  return <p className="max-w-[750px] text-base font-bold leading-normal md:text-xl">{children}</p>;
}
