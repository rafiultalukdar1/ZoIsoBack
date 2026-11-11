import Container from './Container';
import { AccentPlate } from './PageAccents';

/** Bordered white card on a padded section, shared by both contact forms. */
export default function FormPageShell({ title, intro, children }) {
  return (
    <section className="relative overflow-hidden pb-[45px] pt-[100px] md:pb-[90px] md:pt-[150px]">
      <Container>
        <div className="mx-auto max-w-[950px] border border-primary px-3 py-6 md:px-[25px] md:py-10 lg:px-[50px] lg:py-[60px]">
          <h2 className="font-condensed text-[30px] font-black text-black md:text-[38px] lg:text-[45px]">
            {title}
          </h2>
          <p className="text-lg font-medium text-black md:text-xl">{intro}</p>
          {children}
        </div>
        <AccentPlate />
      </Container>
    </section>
  );
}
