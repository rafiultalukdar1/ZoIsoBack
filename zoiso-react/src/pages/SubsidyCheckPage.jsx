import { useNavigate } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import FormPageShell from '../components/ui/FormPageShell';
import { FieldLabel, RadioOption, SubmitButton, TextField } from '../components/ui/FormControls';

function RadioQuestion({ question, name, options }) {
  return (
    <div className="pt-5 lg:pt-[45px]">
      <p className="mb-[22px] text-lg font-medium text-[#231F20] md:text-[22px]">{question}</p>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {options.map((option) => (
          <RadioOption key={option} name={name}>
            {option}
          </RadioOption>
        ))}
      </div>
    </div>
  );
}

export default function SubsidyCheckPage() {
  usePageTitle('Check je subsidie');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/contact-tow');
  };

  return (
    <FormPageShell
      title="CHECK OF JE SUBSIDIE KAN ONTVANGEN"
      intro="Vul de vragen in en ontdek direct welke subsidie voor jou beschikbaar is."
    >
      <form
        onSubmit={handleSubmit}
        className="px-0 pt-[30px] md:px-5 md:pt-[50px] lg:pt-[55px] xl:px-[50px] xl:pt-[70px]"
      >
        <h4 className="text-xl font-bold text-black">Vul je gegevens in</h4>

        <div className="grid grid-cols-1 gap-5 pt-5 lg:grid-cols-3 lg:pt-[45px] xl:gap-10">
          <div>
            <FieldLabel htmlFor="postcode">Postcode</FieldLabel>
            <TextField id="postcode" placeholder="1234 AB" required />
          </div>
          <div>
            <FieldLabel htmlFor="huisnummer">Huisnummer</FieldLabel>
            <TextField id="huisnummer" placeholder="123" />
          </div>
          <div>
            <FieldLabel htmlFor="toevoeging">Toevoeging</FieldLabel>
            <TextField id="toevoeging" placeholder="A" />
          </div>
        </div>

        <RadioQuestion
          question="Heb je een koopwoning?"
          name="koopwoning"
          options={['Ja, koopwoning', 'Nee, huurwoning']}
        />
        <RadioQuestion
          question="Ben je lid van een VvE?"
          name="vve"
          options={['Ja, VvE-lid', 'Nee, geen VvE']}
        />

        <SubmitButton>NU CHECKEN</SubmitButton>
      </form>
    </FormPageShell>
  );
}
