/**
 * Steps of the "volledige ontzorging" process.
 * `lines` are the (hard-wrapped) lines shown on tablet/desktop,
 * `mobileLines` the lines shown on phones.
 */
export const serviceSteps = [
  {
    number: 1,
    title: 'AANMELDEN',
    lines: ['Meld je', 'aan via', 'deze website', 'of bel ons op'],
    showPhoneLink: true,
    mobileLines: ['Meld je aan via deze website of', 'bel ons op 088 - 344 3300'],
  },
  {
    number: 2,
    title: 'INTAKE',
    lines: ['Een onafhankelijk adviseur bespreekt jouw wensen', 'en vragen'],
    mobileLines: ['Een onafhankelijk adviseur bespreekt', 'jouw wensen en vragen'],
  },
  {
    number: 3,
    title: 'INSPECTIE',
    lines: ['De adviseur bekijkt samen met jou de mogelijkheden bij jou thuis'],
    mobileLines: ['De adviseur bekijkt samen met jou de', 'mogelijkheden bij jou thuis'],
  },
  {
    number: 4,
    title: 'AANBOD OP MAAT',
    lines: ['Je ontvangt', 'een persoonlijk advies, inclusief', 'kosten en besparingen'],
    mobileLines: ['Je ontvangt een persoonlijk advies,', 'inclusief kosten en besparingen'],
  },
  {
    number: 5,
    title: 'UITVOERING',
    lines: ['Ga je akkoord? Dan regelen wij', 'de uitvoering'],
    mobileLines: ['Ga je akkoord? Dan regelen wij de uitvoering'],
    note: 'Tot je akkoord zit je nergens aan vast',
  },
];

export const STEPS_PHONE_LABEL = '088 - 344 3300';
