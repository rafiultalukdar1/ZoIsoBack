import { FaArrowRight } from 'react-icons/fa6';
import usePageTitle from '../hooks/usePageTitle';
import AppLink from '../components/ui/AppLink';
import FormPageShell from '../components/ui/FormPageShell';
import { FieldLabel, SubmitButton, TextField } from '../components/ui/FormControls';
import {
  measureChoice1,
  measureChoice2,
  measureChoice3,
  measureChoice4,
  measureChoice5,
  measureChoice6,
} from '../assets/images';

const measureChoices = [
  measureChoice1,
  measureChoice2,
  measureChoice3,
  measureChoice4,
  measureChoice5,
  measureChoice6,
];

const stepHeading = 'text-[22px] font-bold text-[#231F20]';

export default function QuoteRequestPage() {
  usePageTitle('Offerte aanvragen');

  const handleSubmit = (event) => event.preventDefault();

  return (
    <FormPageShell
      title={
        <>
          KIES DE ISOLATIEMAATREGEL
          <br /> WAARVOOR JE EEN OFFERTE WIL
        </>
      }
      intro="We vragen direct een offerte aan bij onze gecertificeerde uitvoerders"
    >
      <div className="my-5 rounded-[30px] bg-[#F0F1EF] p-5 md:my-[45px] md:rounded-full md:px-[60px] md:py-[30px] lg:px-20">
        <h4 className="text-xl font-bold text-[#231F20]">
          Wist je dat je meer kunt besparen met een integraal advies?
        </h4>
        <p className="text-lg font-normal text-[#231F20] md:text-xl">
          Door maatregelen slim te combineren, krijg je meer subsidie. Een adviseur bekijkt of dit
          ook voor jou geldt.
        </p>
        <AppLink
          to="/persoonlijk-advies"
          className="mt-3 flex items-center gap-3 text-lg font-bold text-[#31B44A] md:mt-[30px] md:text-xl"
        >
          <FaArrowRight />
          <span>Toch kiezen voor advies aan huis</span>
        </AppLink>
      </div>

      <form onSubmit={handleSubmit} className="px-0 md:px-5 xl:px-[50px]">
        <h4 className={`${stepHeading} pb-8`}>
          1. Kies je isolatiemaatregel en klik op een van de groene knoppen hieronder
        </h4>
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] text-center sm:grid-cols-2 md:gap-x-[50px] lg:grid-cols-3">
          {measureChoices.map((image, index) => (
            <label key={image} className="cursor-pointer">
              <input type="radio" name="house" className="peer sr-only" />
              <img
                src={image}
                alt={`Isolatiemaatregel ${index + 1}`}
                className="mx-auto w-full max-w-[200px] rounded-[150px] border-[25px] border-[#D7EBD4] transition-[border-color] duration-300 peer-checked:border-[#31B44A] lg:max-w-none"
              />
            </label>
          ))}
        </div>

        <h4 className={`${stepHeading} pb-[30px] pt-10 md:pb-10 md:pt-[55px]`}>
          2. Vul je gegevens in
        </h4>
        <div className="flex flex-col gap-5 md:gap-[50px]">
          <div>
            <FieldLabel htmlFor="voornaam" compact>
              Naam
            </FieldLabel>
            <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
              <TextField id="voornaam" placeholder="Voornaam" required />
              <TextField id="achternaam" placeholder="Achternaam" aria-label="Achternaam" />
            </div>
          </div>
          <div>
            <FieldLabel htmlFor="email" compact>
              E-mailadres
            </FieldLabel>
            <TextField id="email" placeholder="naam@voorbeeld.nl" />
          </div>
          <div>
            <FieldLabel htmlFor="telefoon" compact>
              Telefoonnummer
            </FieldLabel>
            <TextField id="telefoon" placeholder="06 12 34 56 78" />
          </div>
        </div>
        <SubmitButton>VRAAG OFFERTE AAN</SubmitButton>
      </form>
    </FormPageShell>
  );
}
