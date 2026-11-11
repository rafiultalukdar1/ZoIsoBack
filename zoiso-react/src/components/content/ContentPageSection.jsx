import Container from '../ui/Container';
import ContentWrapper from '../ui/ContentWrapper';
import { AccentPlate, ScrollHint } from '../ui/PageAccents';

/** Main white content area used by all text-based pages. */
export default function ContentPageSection({ compact = false, children }) {
  const bottomPadding = compact ? 'lg:py-[60px]' : 'lg:pb-[100px]';

  return (
    <section
      className={`relative overflow-hidden pb-10 pt-20 md:pb-[60px] md:pt-[100px] ${bottomPadding}`}
    >
      <Container>
        <ContentWrapper className="flex flex-col gap-5 md:gap-[50px]">{children}</ContentWrapper>
      </Container>
      <AccentPlate />
      <ScrollHint />
    </section>
  );
}
