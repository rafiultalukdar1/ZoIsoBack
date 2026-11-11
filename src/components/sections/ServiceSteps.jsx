import { Fragment } from 'react';
import Container from '../ui/Container';
import ContentWrapper from '../ui/ContentWrapper';
import AppLink from '../ui/AppLink';
import SectionHeader from './SectionHeader';
import { rectangle } from '../../assets/images';
import { PHONE_HREF } from '../../data/navigation';
import { STEPS_PHONE_LABEL, serviceSteps } from '../../data/serviceSteps';

function Lines({ lines }) {
  return lines.map((line, index) => (
    <Fragment key={line}>
      {index > 0 && <br />}
      {line}{' '}
    </Fragment>
  ));
}

function DesktopStep({ step }) {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-[370px] flex-col gap-[15px] rounded-[200px] bg-[#F3F3F1] px-5 py-[45px] text-center text-xl font-bold">
        <p>
          <Lines lines={step.lines} />
          {step.showPhoneLink && <AppLink to={PHONE_HREF}>{STEPS_PHONE_LABEL}</AppLink>}
        </p>
        {step.note && (
          <p className="mt-1">
            <span className="text-primary">{step.note}</span>
          </p>
        )}
      </div>
      <div className="-mt-[30px] flex flex-col items-center gap-5">
        <div className="flex size-[60px] items-center justify-center rounded-full bg-primary font-condensed text-[47px] font-black text-white">
          {step.number}
        </div>
        <h4 className="font-condensed text-[21px] font-bold text-primary">{step.title}</h4>
      </div>
    </div>
  );
}

function MobileStep({ step }) {
  return (
    <div className="relative flex flex-col pl-[15px]">
      <div className="flex flex-col items-start gap-[9px] rounded-[200px] bg-[#F3F3F1] px-[25px] py-5 text-left text-[15px] font-bold leading-[1.25]">
        <h4 className="font-condensed text-[15px] font-black text-primary">{step.title}</h4>
        <p>
          <Lines lines={step.mobileLines} />
        </p>
        {step.note && (
          <p className="mt-1">
            <span className="text-primary">{step.note}</span>
          </p>
        )}
      </div>
      <div className="absolute left-0 top-1/2 flex size-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-primary font-condensed text-[17px] font-black text-white">
        {step.number}
      </div>
    </div>
  );
}

/** Five-step explanation of the full-service ("ontzorging") route. */
export default function ServiceSteps({ children }) {
  return (
    <section className="pb-[37px] pt-[25px] md:pb-[50px] md:pt-[100px] lg:pb-[61px] lg:pt-[133px]">
      <Container>
        <ContentWrapper>
          <SectionHeader
            icon={rectangle}
            title="ZO WERKT VOLLEDIGE ONTZORGING"
            description="Kies je voor begeleiding van ZOISO, dan ziet het stappenplan er zo uit:"
          />

          <div className="mt-[60px] hidden gap-[30px] md:grid md:grid-cols-3 lg:grid-cols-4 xl:mt-20 xl:grid-cols-5">
            {serviceSteps.map((step) => (
              <DesktopStep key={step.number} step={step} />
            ))}
          </div>

          <div className="mt-[35px] grid grid-cols-1 gap-[30px] md:hidden">
            {serviceSteps.map((step) => (
              <MobileStep key={step.number} step={step} />
            ))}
          </div>

          {children}
        </ContentWrapper>
      </Container>
    </section>
  );
}
