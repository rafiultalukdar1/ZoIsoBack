export const insulationLinks = [
  { label: 'Spouwmuurisolatie', to: '/spouwmuurisolatie' },
  { label: 'Dakisolatie', to: '/dakisolatie' },
  { label: 'Vloerisolatie', to: '/vloerisolatie' },
  { label: 'Hr++ glas', to: '/hr-glas' },
  { label: 'Ventilatie', to: '/ventilatie' },
];

export const mainNavigation = [
  { label: 'PERSOONLIJK ADVIES', to: '/' },
  { label: 'ISOLATIE', to: '/isolatie', children: insulationLinks },
  { label: 'SUBSIDIES', to: '/subsidies' },
  { label: 'AANMELDEN', to: '/contact-tow' },
  { label: 'OVER ONS', to: '/over-ons' },
  { label: 'CONTACT', to: '/contact' },
];

export const footerColumns = [
  [
    { label: 'PERSOONLIJK ADVIES', to: '/persoonlijk-advies' },
    { label: 'ISOLATIE', to: '/isolatie' },
    { label: 'SUBSIDIES', to: '/subsidies' },
  ],
  [
    { label: 'NIEUWS / ERVARINGEN', to: '#' },
    { label: 'OVER ONS', to: '/over-ons' },
    { label: 'VEELGESTELDE VRAGEN', to: '/faq' },
  ],
];

export const legalLinks = [
  { label: 'privacy policy', to: '/privacy-statement' },
  { label: 'algemene voorwaarden ', to: '/terms-condition' },
];

export const PHONE_NUMBER = '088 - 3443 300';
export const PHONE_HREF = 'tel:0883443300';
export const EMAIL = 'contact@zoiso.nl';

/** Links shown in the strip under each insulation detail page. */
export const topicLinks = {
  spouwmuur: { label: 'SPOUWMUURISOLATIE', to: '/spouwmuurisolatie' },
  dak: { label: 'DAKISOLATIE', to: '/dakisolatie' },
  vloer: { label: 'VLOERISOLATIE', to: '/vloerisolatie' },
  bodem: { label: 'BODEMISOLATIE', to: '/bodemisolatie' },
  hrGlas: { label: 'HR++ GLAS', to: '/hr-glas' },
  ventilatie: { label: 'VENTILATIE', to: '/ventilatie' },
};
