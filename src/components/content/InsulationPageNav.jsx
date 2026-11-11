import Container from '../ui/Container';
import ContentWrapper from '../ui/ContentWrapper';
import AppLink from '../ui/AppLink';

/** Row of links to the other insulation pages, shown under each detail page. */
export default function InsulationPageNav({ links }) {
  return (
    <section className="mx-auto w-full max-w-[1220px] pb-[60px]">
      <Container>
        <ContentWrapper>
          <ul className="flex flex-wrap items-center gap-x-[30px] gap-y-2.5 md:gap-x-[60px]">
            {links.map((link) => (
              <li key={link.to}>
                <AppLink
                  to={link.to}
                  className="font-condensed text-base font-black text-primary hover:text-black md:text-xl lg:text-[22px]"
                >
                  {link.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </ContentWrapper>
      </Container>
    </section>
  );
}
