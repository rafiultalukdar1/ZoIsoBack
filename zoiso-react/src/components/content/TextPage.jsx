import ContentPageSection from './ContentPageSection';

/** Page shell for text-only pages (FAQ, terms, privacy): a big title plus body copy. */
export default function TextPage({ title, children }) {
  return (
    <ContentPageSection>
      <div className="flex w-full flex-col items-start gap-5">
        <h4 className="font-condensed text-[30px] font-black md:text-4xl lg:text-[45px]">
          {title}
        </h4>
        <div className="flex w-full flex-col gap-5 text-lg md:text-xl lg:text-2xl">{children}</div>
      </div>
    </ContentPageSection>
  );
}
