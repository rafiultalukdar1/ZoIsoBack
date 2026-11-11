import usePageTitle from '../hooks/usePageTitle';
import TextPage from '../components/content/TextPage';
import ConsultationBanner from '../components/sections/ConsultationBanner';

export default function TermsPage() {
  usePageTitle('Algemene voorwaarden');

  return (
    <>
      <TextPage title="ALGEMENE VOORWAARDEN">
        <p>Versie: 1 februari 2026</p>
        <div>
          <p className="text-primary">
            <strong>1. Identiteit</strong>
          </p>
          <p>De Woonpas B.V.</p>
          <p>Amsterdamseweg 24</p>
          <p>3812 RS Amersfoort</p>
          <p>KvK-nummer: 69513740</p>
        </div>
        <div>
          <p>
            De Woonpas B.V. levert diensten voor het verduurzamen van woningen, waaronder
            procesbegeleiding, subsidieafhandeling en ontzorging van woningeigenaren.
          </p>
        </div>
        <div>
          <p className="text-primary">
            <strong>2. Definities</strong>
          </p>
          <p>In deze algemene voorwaarden wordt verstaan onder:</p>
          <ul className="list-disc pl-5">
            <li>De Woonpas: De Woonpas B.V.</li>
            <li>
              Woningeigenaar: natuurlijke persoon die eigenaar is van een woning en handelt als
              consument.
            </li>
            <li>Woning: de woning waarop de dienstverlening betrekking heeft.</li>
            <li>
              Overeenkomst: iedere overeenkomst of rechtsverhouding tussen De Woonpas en de
              Woningeigenaar die tot stand komt in het kader van de dienstverlening van De Woonpas.
            </li>
            <li>Aanbod: het door De Woonpas uitgebrachte aanbod.</li>
            <li>
              Uitvoerende partij: derde partij, waaronder begrepen installateurs, aannemers of
              leveranciers, die werkzaamheden uitvoert of producten levert in het kader van een
              verduurzamingsmaatregel.
            </li>
            <li>
              Werkzaamheden: alle werkzaamheden of leveringen die verband houden met het uitvoeren
              van verduurzamingsmaatregelen aan de Woning.
            </li>
            <li>Subsidies: financiële bijdragen van overheden of andere instanties.</li>
            <li>
              Dienstvorm: de specifieke route waarin De Woonpas haar dienstverlening levert, zoals
              beschreven in artikel 3.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>3. Dienstvormen</strong>
          </p>
          <p>De Woonpas biedt haar dienstverlening aan in verschillende vormen:</p>
          <p>A. Integrale ontzorging</p>
          <p>Onder integrale ontzorging wordt uitsluitend verstaan:</p>
          <p>Een dienstverlening waarbij De Woonpas:</p>
          <ul className="list-disc pl-5">
            <li>
              als enige contractpartij optreedt richting de Woningeigenaar voor zowel begeleiding
              als uitvoering,
            </li>
            <li>vooraf een volledige woninginspectie uitvoert,</li>
            <li>
              op basis daarvan een integraal aanbod doet waarin alle overeengekomen
              verduurzamingsmaatregelen, kosten, subsidies en uitvoering zijn opgenomen,
            </li>
            <li>
              de uitvoering laat verrichten door door De Woonpas geselecteerde uitvoerende partijen,
            </li>
            <li>
              en waarbij de financiële afwikkeling plaatsvindt via een bouwdepot of vergelijkbare
              constructie.
            </li>
          </ul>
        </div>
        <div>
          <p>
            Van integrale ontzorging is uitsluitend sprake indien dit expliciet als zodanig in het
            Aanbod en de Overeenkomst is benoemd
          </p>
          <p>Van integrale ontzorging is geen sprake indien:</p>
          <ul className="list-disc pl-5">
            <li>De Woonpas uitsluitend subsidie of (doe het zelf) declaratie faciliteert,</li>
            <li>de Woningeigenaar zelf een overeenkomst sluit met een uitvoerende partij,</li>
            <li>
              De Woonpas geen integrale aanbieding heeft gedaan waarin uitvoering en kosten volledig
              zijn opgenomen,
            </li>
            <li>
              of De Woonpas uitsluitend optreedt als procesbegeleider of informatieverstrekker. In
              deze gevallen is sprake van een enkelvoudige maatregel of (doe het zelf)
              declaratieroute, waarop de bepalingen voor integrale ontzorging niet van toepassing
              zijn.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>B. Enkelvoudige maatregel of declaratieroute</strong>
          </p>
          <p>Bij de enkelvoudige maatregel of declaratieroute:</p>
          <ul className="list-disc pl-5">
            <li>
              faciliteert De Woonpas uitsluitend de subsidie, declaratie of administratieve
              afhandeling daarvan,
            </li>
            <li>sluit de Woningeigenaar zelf een overeenkomst met de uitvoerende partij,</li>
            <li>en is De Woonpas geen partij bij die overeenkomst.</li>
          </ul>
          <p>
            Voor zover de kosten van de maatregel hoger zijn dan het bedrag van de toegekende
            subsidie of declaratie, wordt het resterende bedrag (het surplus) rechtstreeks door de
            uitvoerende partij aan de Woningeigenaar gefactureerd.
          </p>
          <p>
            De Woonpas is geen partij bij deze financiële afwikkeling en draagt geen
            verantwoordelijkheid of aansprakelijkheid voor facturatie, betaling of inning van dit
            bedrag.
          </p>
          <p>
            De Woonpas is in deze dienstvorm niet verantwoordelijk voor de uitvoering, kwaliteit,
            planning, garanties of nazorg van de werkzaamheden.
          </p>
        </div>
        <div>
          <p className="text-primary">
            <strong>C. Doe-het-zelf declaratieroute</strong>
          </p>
          <p>Bij de doe-het-zelf declaratieroute:</p>
          <ul className="list-disc pl-5">
            <li>
              publiceert De Woonpas een lijst van subsidiabele producten en de daarbij geldende
              voorwaarden;
            </li>
            <li>
              koopt en betaalt de Woningeigenaar zelf de producten bij een winkel of leverancier
              naar eigen keuze;
            </li>
            <li>
              dient de Woningeigenaar achteraf een aanvraag in bij De Woonpas, voorzien van een
              geldige aankoopbon en de overige gevraagde bewijsstukken;
            </li>
            <li>
              beoordeelt De Woonpas de aanvraag uitsluitend op basis van objectieve criteria: staat
              het product op de gepubliceerde lijst, voldoet de bon aan de gestelde eisen, en is de
              aanvraag binnen de geldende termijn ingediend;
            </li>
            <li>
              en keert de gemeente de subsidie uit op basis van de door De Woonpas afgegeven
              beschikking.
            </li>
          </ul>
          <p>
            De Woonpas is geen partij bij de aankoop van producten door de Woningeigenaar en is niet
            verantwoordelijk of aansprakelijk voor de aankoop, levering, kwaliteit of geschiktheid
            van die producten.
          </p>
          <p>
            De Woningeigenaar draagt zelf het risico dat een product achteraf niet in aanmerking
            komt voor subsidie. De Woonpas geeft geen voorafgaande zekerheid over de toekenning.
          </p>
          <p>
            Een afwijzing vindt plaats op objectieve gronden en is niet deelbaar: er vindt geen
            gedeeltelijke toekenning plaats indien niet aan alle voorwaarden is voldaan.
          </p>
          <p>
            De Woonpas is gerechtigd een aanvraag af te wijzen indien niet aan de gestelde
            voorwaarden is voldaan. Een afwijzing schept geen aanspraak op vergoeding van de
            aankoopkosten of andere door de Woningeigenaar gemaakte kosten.
          </p>
          <p>
            De subsidie wordt eenmalig en in één bedrag uitbetaald. De Woningeigenaar kan per adres
            één aanvraag indienen. Het uit te keren subsidiebedrag is gebaseerd op het bedrag van de
            op de aankoopbon vermelde producten die aantoonbaar op de gepubliceerde lijst van
            subsidiabele producten staan, tot het van toepassing zijnde maximum. Producten op de bon
            die niet op de lijst staan komen niet in aanmerking en worden niet meegeteld bij de
            berekening van het subsidiebedrag. Indien het subsidiabele bonbedrag lager is dan het
            maximale subsidiebedrag, wordt uitsluitend het lagere bedrag uitbetaald. Het verschil
            tussen het subsidiabele bonbedrag en het subsidiemaximum vervalt en kan niet op een
            later moment worden geclaimd via een aanvullende aanvraag of een nieuwe bon. Na
            indiening en beoordeling van de aanvraag is geen aanvulling of herstel van de aanvraag
            meer mogelijk.
          </p>
        </div>
        <div>
          <p className="text-primary">
            <strong>4. Totstandkoming van de Overeenkomst</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              De vaststelling en afgifte van subsidies namens een gemeente geschiedt op grond van de
              voorwaarden van het betreffende gemeentelijke subsidieprogramma en de daarop van
              toepassing zijnde publiekrechtelijke regelgeving. Deze vaststelling staat los van de
              privaatrechtelijke overeenkomst tussen De Woonpas en de Woningeigenaar. De
              Woningeigenaar ontleent aan een subsidiebeschikking geen rechten jegens De Woonpas. De
              beschikking wordt afgegeven namens de gemeente en schept uitsluitend een aanspraak op
              de gemeente voor uitbetaling van de subsidie. De Woonpas is geen partij bij de
              financiële afwikkeling en draagt geen verantwoordelijkheid of aansprakelijkheid voor
              de uitbetaling.
            </li>
            <li>
              Tussen De Woonpas en de Woningeigenaar komt een privaatrechtelijke overeenkomst tot
              stand op het moment dat de Woningeigenaar het door De Woonpas uitgebrachte Aanbod
              uitdrukkelijk aanvaardt, hetzij door ondertekening, hetzij door elektronische
              bevestiging, hetzij door een andere handeling waaruit ondubbelzinnig acceptatie
              blijkt. Loutere registratie, aanmelding of het doorlopen van een digitale keuzehulp
              leidt niet tot het ontstaan van een overeenkomst. Voor de Dienstvormen enkelvoudige
              maatregel of (doe het zelf) declaratieroute gelden de specifieke totstandkomingsregels
              zoals opgenomen in de lid 4e en 4f, die voorgaan boven dit lid.
            </li>
            <li>
              De inhoud en reikwijdte van de overeenkomst is afhankelijk van de gekozen Dienstvorm.
            </li>
            <li>
              <strong>Integrale ontzorging</strong>
              <br /> Bij integrale ontzorging komt de overeenkomst tot stand door acceptatie van het
              door De Woonpas uitgebrachte Aanbod. De overeenkomst omvat zowel de dienstverlening
              als de daarin opgenomen uitvoering van verduurzamingsmaatregelen.
            </li>
            <li>
              <strong>Enkelvoudige maatregel of declaratieroute</strong>
              <br /> Bij een enkelvoudige maatregel of declaratieroute verwerkt De Woonpas de
              ingediende subsidie- of declaratieaanvraag zodra deze voorzien is van de vereiste
              bewijsstukken en informatie. De verwerking heeft uitsluitend betrekking op de
              administratieve afhandeling van de subsidie of declaratie en omvat geen uitvoering van
              werkzaamheden of garantie van toekenning.
            </li>
            <li>
              <strong>Doe-het-zelf declaratieroute</strong>
              <br /> Bij de doe-het-zelf declaratieroute verwerkt De Woonpas de ingediende aanvraag
              zodra deze voorzien is van de vereiste bewijsstukken. De verwerking heeft uitsluitend
              betrekking op de beoordeling van de ingediende aanvraag aan de hand van de
              gepubliceerde voorwaarden en omvat geen uitvoering van werkzaamheden of garantie van
              toekenning.
            </li>
            <li>
              De Woonpas mag een aanvraag of opdracht weigeren indien uitvoering, afhandeling of
              toekenning niet verantwoord, haalbaar of toegestaan is op grond van regelgeving of
              projectvoorwaarden.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>5. Herroepingsrecht</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              De Woningeigenaar heeft bij overeenkomsten op afstand het wettelijke herroepingsrecht
              van 14 dagen.
            </li>
            <li>
              Indien de Woningeigenaar verzoekt om tijdens de bedenktijd te starten met
              werkzaamheden, doet hij afstand van het herroepingsrecht voor reeds uitgevoerde
              diensten.
            </li>
            <li>
              Bij herroeping na aanvang van diensten mag De Woonpas de reeds verrichte werkzaamheden
              en gemaakte kosten in rekening brengen aan de Woningeigenaar.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>6. Informatie en medewerking</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              De Woningeigenaar verstrekt De Woonpas tijdig alle informatie die redelijkerwijs van
              belang is voor de uitvoering van de dienstverlening, waaronder informatie over de
              bouwkundige staat van de woning, installaties, bereikbaarheid en bekende gebreken.
            </li>
            <li>
              De Woningeigenaar staat in voor de juistheid en volledigheid van deze informatie, voor
              zover hij deze kende of redelijkerwijs had kunnen kennen.
            </li>
            <li>
              De Woningeigenaar draagt zorg voor veilige, vrije en tijdige toegang tot de woning en
              voor een werkomgeving die voldoet aan geldende veiligheidsnormen.
            </li>
            <li>
              Indien tijdens de uitvoering blijkt dat verstrekte informatie onjuist of onvolledig
              is, of dat sprake is van gebreken, omstandigheden of beperkingen die redelijkerwijs
              vooraf gemeld hadden moeten worden, heeft De Woonpas het recht om:
              <ul className="list-disc pl-5">
                <li>de werkzaamheden op te schorten,</li>
                <li>de planning aan te passen,</li>
                <li>of de overeenkomst geheel of gedeeltelijk te beëindigen.</li>
              </ul>
            </li>
            <li>
              Kosten die De Woonpas of door haar ingeschakelde derden reeds aantoonbaar en
              redelijkerwijs hebben gemaakt en die het directe gevolg zijn van onjuiste of
              onvolledige informatie van de Woningeigenaar, mogen door De Woonpas aan de
              Woningeigenaar in rekening worden gebracht.
            </li>
            <li>
              Indien voortzetting van de dienstverlening als gevolg van dergelijke omstandigheden
              niet mogelijk is, is De Woonpas gerechtigd de overeenkomst te beëindigen, waarbij
              reeds geleverde diensten en gemaakte kosten worden afgerekend.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>6. Informatie en medewerking</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              De Woningeigenaar verstrekt De Woonpas tijdig alle informatie die redelijkerwijs van
              belang is voor de uitvoering van de dienstverlening, waaronder informatie over de
              bouwkundige staat van de woning, installaties, bereikbaarheid en bekende gebreken.
            </li>
            <li>
              De Woningeigenaar staat in voor de juistheid en volledigheid van deze informatie, voor
              zover hij deze kende of redelijkerwijs had kunnen kennen.
            </li>
            <li>
              De Woningeigenaar draagt zorg voor veilige, vrije en tijdige toegang tot de woning en
              voor een werkomgeving die voldoet aan geldende veiligheidsnormen.
            </li>
            <li>
              Indien tijdens de uitvoering blijkt dat verstrekte informatie onjuist of onvolledig
              is, of dat sprake is van gebreken, omstandigheden of beperkingen die redelijkerwijs
              vooraf gemeld hadden moeten worden, heeft De Woonpas het recht om:
              <ul className="list-disc pl-5">
                <li>de werkzaamheden op te schorten,</li>
                <li>de planning aan te passen,</li>
                <li>of de overeenkomst geheel of gedeeltelijk te beëindigen.</li>
              </ul>
            </li>
            <li>
              Kosten die De Woonpas of door haar ingeschakelde derden reeds aantoonbaar en
              redelijkerwijs hebben gemaakt en die het directe gevolg zijn van onjuiste of
              onvolledige informatie van de Woningeigenaar, mogen door De Woonpas aan de
              Woningeigenaar in rekening worden gebracht.
            </li>
            <li>
              Indien voortzetting van de dienstverlening als gevolg van dergelijke omstandigheden
              niet mogelijk is, is De Woonpas gerechtigd de overeenkomst te beëindigen, waarbij
              reeds geleverde diensten en gemaakte kosten worden afgerekend.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>6. Informatie en medewerking</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              Indien Subsidies in het Aanbod zijn opgenomen, worden deze verrekend met de totale
              aanneemsom, op basis van de op dat moment beschikbare informatie van de gemeente,
              subsidiegever en de Woningeigenaar.
            </li>
            <li>
              Subsidies zijn altijd onder voorbehoud van definitieve toekenning, vaststelling en
              uitbetaling door de betreffende subsidiegever. Aan de vermelding of verrekening van
              Subsidies in het Aanbod kunnen geen rechten worden ontleend.
            </li>
            <li>
              De Woningeigenaar is verplicht alle medewerking te verlenen aan controles,
              bewijsvoering en informatieverzoeken van De Woonpas, de gemeente of de subsidiegever,
              zowel tijdens als na uitvoering van de werkzaamheden.
            </li>
            <li>
              Indien een Subsidie geheel of gedeeltelijk wordt geweigerd, gewijzigd of
              teruggevorderd, om welke reden dan ook, komt het daarmee gemoeide bedrag volledig voor
              rekening van de Woningeigenaar.
            </li>
            <li>
              De Woonpas is gerechtigd de aanneemsom te herberekenen indien:
              <ul className="list-disc pl-5">
                <li>de subsidievoorwaarden wijzigen,</li>
                <li>verstrekte informatie onjuist of onvolledig blijkt,</li>
                <li>of een subsidie lager wordt vastgesteld dan vooraf verrekend.</li>
              </ul>
            </li>
            <li>
              Een herberekening kan leiden tot een aanvullende betalingsverplichting van de
              Woningeigenaar. De Woonpas is niet aansprakelijk voor besluiten of termijnen van
              subsidiegevers.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>8. Prijs en betaling</strong>
          </p>
          <p>
            <strong>Integrale ontzorging</strong>
          </p>
          <p>
            Betaling verloopt via bouwdepot of financiering. Facturatie vindt plaats na volledige
            afronding van werkzaamheden. Betaaltermijn: 30 dagen.
          </p>
          <p>
            <strong>Declaratieroute</strong>
          </p>
          <p>
            Na goedkeuring van de aanvraag door De Woonpas draagt De Woonpas zorg voor tijdige
            doorgeleiding van de beschikking aan de gemeente. Uitbetaling geschiedt door de gemeente
            conform de daarvoor geldende gemeentelijke termijnen.
          </p>
        </div>
        <div>
          <p className="text-primary">
            <strong>9. Meerwerk</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              Binnen de Dienstvorm integrale ontzorging is geen meerwerk mogelijk. De overeengekomen
              prijs is vast en gebaseerd op een voorafgaande inspectie en het daarop gebaseerde
              Aanbod.
            </li>
            <li>
              Het Aanbod en de daarin opgenomen werkzaamheden vormen de volledige en limitatieve
              scope van de overeenkomst. Werkzaamheden die daar niet expliciet in zijn opgenomen,
              vallen buiten de overeenkomst.
            </li>
            <li>
              Indien tijdens of na uitvoering blijkt dat aanvullende werkzaamheden nodig of gewenst
              zijn, vallen deze werkzaamheden buiten de verantwoordelijkheid, verplichtingen en
              financiering van De Woonpas.
            </li>
            <li>
              Eventuele aanvullende werkzaamheden kunnen uitsluitend door de Woningeigenaar
              rechtstreeks met de uitvoerende partij worden overeengekomen en komen volledig voor
              rekening en risico van de Woningeigenaar.
            </li>
            <li>
              De Woonpas is niet aansprakelijk voor de uitvoering, kwaliteit, kosten of gevolgen van
              dergelijke aanvullende werkzaamheden.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>10. Afronding, oplevering en herstel</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              Bij de Dienstvorm integrale ontzorging geldt de uitvoering als afgerond op het moment
              dat:
              <ul className="list-disc pl-5">
                <li>de uitvoerende partij de werkzaamheden heeft voltooid, en</li>
                <li>de Woningeigenaar de opgeleverde maatregel in gebruik neemt, of</li>
                <li>
                  De Woonpas een afrondingsmelding heeft verzonden en de Woningeigenaar daartegen
                  niet binnen 5 werkdagen gemotiveerd bezwaar heeft gemaakt.
                </li>
              </ul>
            </li>
            <li>
              Eventuele zichtbare gebreken of onvolkomenheden worden door de Woningeigenaar zo
              spoedig mogelijk, en uiterlijk binnen 5 werkdagen na afronding, gemeld.
            </li>
            <li>
              Kleine restpunten die het normaal gebruik van de maatregel niet belemmeren, vormen
              geen reden om de afronding te weigeren.
            </li>
            <li>
              De Woonpas zorgt ervoor dat gemelde gebreken die binnen de overeengekomen scope
              vallen, binnen een redelijke termijn worden opgepakt door de uitvoerende partij.
            </li>
            <li>
              Dit artikel laat onverlet de rechten van de Woningeigenaar op grond van wettelijke
              garantie en fabrieksgarantie.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>11. Garantie</strong>
          </p>
          <p>
            Op geleverde producten en uitgevoerde werkzaamheden zijn uitsluitend de garanties van
            toepassing die worden verstrekt door de uitvoerende partij en/of de producent, conform
            hun geldende garantievoorwaarden. De Woonpas verstrekt zelf geen garanties op producten
            of werkzaamheden.
          </p>
          <p>
            Bij de Dienstvorm integrale ontzorging kan De Woonpas de Woningeigenaar ondersteunen bij
            het melden en doorzetten van garantieclaims bij de uitvoerende partij, zonder daarbij
            zelf als garantieverstrekker op te treden.
          </p>
          <p>Dit artikel laat de wettelijke rechten van de Woningeigenaar onverlet.</p>
        </div>
        <div>
          <p className="text-primary">
            <strong>12. Aansprakelijkheid</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              De Woonpas is uitsluitend aansprakelijk voor directe schade die het rechtstreekse
              gevolg is van een toerekenbare tekortkoming in de uitvoering van haar eigen
              dienstverlening.
            </li>
            <li>
              De Woonpas is niet aansprakelijk voor:
              <ul className="list-disc pl-5">
                <li>
                  schade die voortvloeit uit besluiten, handelingen of nalatigheden van uitvoerende
                  partijen, producenten, subsidiegevers, financieringsinstanties of andere derden,
                </li>
                <li>
                  schade als gevolg van het niet, niet tijdig of niet volledig toekennen,
                  vaststellen of uitbetalen van Subsidies,
                </li>
                <li>
                  schade die ontstaat door onjuiste, onvolledige of te laat verstrekte informatie
                  van de Woningeigenaar,
                </li>
                <li>
                  indirecte schade, waaronder begrepen gevolgschade, gederfde besparingen, gemiste
                  subsidies, gederfde winst, financieringskosten of vertraging.
                </li>
              </ul>
            </li>
            <li>
              Bij de Dienstvorm integrale ontzorging is de aansprakelijkheid van De Woonpas voor
              tekortkomingen in de dienstverlening beperkt tot het bedrag dat De Woonpas voor haar
              eigen begeleiding en procesregie aan de Woningeigenaar in rekening heeft gebracht.
              Voor alle overige directe schade waarvoor De Woonpas aansprakelijk is, geldt een
              maximum van [bedrag conform AVB] per gebeurtenis.
            </li>
            <li>
              Bij de Dienstvorm enkelvoudige maatregel, (doe het zelf) declaratieroute is de
              aansprakelijkheid van De Woonpas beperkt tot het bedrag dat De Woonpas voor de
              betreffende dienstverlening heeft ontvangen, dan wel nihil indien de dienstverlening
              kosteloos is verleend.
            </li>
            <li>
              Iedere aanspraak op schadevergoeding vervalt indien de Woningeigenaar niet binnen
              bekwame tijd nadat hij de schade heeft ontdekt of redelijkerwijs had moeten ontdekken,
              schriftelijk melding heeft gemaakt bij De Woonpas.
            </li>
            <li>
              De in dit artikel opgenomen beperkingen van aansprakelijkheid gelden niet indien de
              schade het gevolg is van opzet of bewuste roekeloosheid van de leidinggevenden van De
              Woonpas.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>13. Overmacht</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              Onder overmacht wordt verstaan iedere omstandigheid buiten de redelijke invloedssfeer
              van De Woonpas waardoor nakoming van haar verplichtingen geheel of gedeeltelijk wordt
              verhinderd, waaronder in ieder geval begrepen vertragingen of tekortkomingen van
              uitvoerende partijen, leveranciers, subsidiegevers of financieringsinstanties,
              overheidsmaatregelen, netcongestie, storingen, extreme weersomstandigheden, ziekte of
              uitval van personeel, uitputting of intrekking van subsidiebudgetten, wijziging of
              beëindiging van gemeentelijk of rijksbeleid, faillissement of bedrijfsstaking van door
              De Woonpas ingeschakelde partijen, en uitval of onbeschikbaarheid van digitale
              systemen of platformen waarvan De Woonpas voor haar dienstverlening afhankelijk is.
            </li>
            <li>
              In geval van overmacht is De Woonpas gerechtigd haar verplichtingen op te schorten
              zonder gehouden te zijn tot vergoeding van schade.
            </li>
            <li>
              Indien de overmachtsituatie langer dan 60 dagen voortduurt, zijn beide partijen
              gerechtigd de overeenkomst geheel of gedeeltelijk te beëindigen, zonder verplichting
              tot schadevergoeding.
            </li>
            <li>
              Reeds verrichte werkzaamheden en aantoonbaar gemaakte kosten mogen bij beëindiging als
              gevolg van overmacht door De Woonpas aan de Woningeigenaar in rekening worden
              gebracht.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>15. Privacy en gegevensdeling</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              De Woonpas verwerkt persoonsgegevens van de Woningeigenaar conform de geldende wet- en
              regelgeving en haar privacyverklaring.
            </li>
            <li>
              Afhankelijk van de Dienstvorm en het betreffende project treedt De Woonpas op als
              verwerkingsverantwoordelijke of als verwerker, onder verantwoordelijkheid van
              bijvoorbeeld een gemeente.
            </li>
            <li>
              Voor de uitvoering van de dienstverlening is De Woonpas gerechtigd persoonsgegevens
              van de Woningeigenaar te delen met derden, voor zover dit noodzakelijk is, waaronder
              begrepen:
              <ul className="list-disc pl-5">
                <li>uitvoerende partijen die werkzaamheden uitvoeren of offertes uitbrengen,</li>
                <li>
                  gemeenten en door hen aangewezen instanties in het kader van subsidieaanvragen,
                  vaststelling en verantwoording,
                </li>
                <li>
                  landelijke instanties zoals RVO in het kader van ISDE of vergelijkbare regelingen,
                </li>
                <li>
                  financieringsinstanties zoals het Nationaal Warmtefonds, indien de Woningeigenaar
                  gebruik wenst te maken van een financieringsmogelijkheid,
                </li>
                <li>
                  en andere partijen die betrokken zijn bij de uitvoering, administratie of controle
                  van de dienstverlening.
                </li>
              </ul>
            </li>
            <li>
              De gegevensdeling als bedoeld in dit artikel vindt plaats op grond van een of meer van
              de volgende grondslagen: de uitvoering van de Overeenkomst (artikel 6 lid 1 sub b
              AVG), de uitvoering van een publieke taak (artikel 6 lid 1 sub e AVG), een wettelijke
              verplichting (artikel 6 lid 1 sub c AVG), of een gerechtvaardigd belang van De Woonpas
              of de betrokken partijen (artikel 6 lid 1 sub f AVG). Welke grondslag van toepassing
              is, hangt af van het doel van de verwerking en de ontvanger. Voor zover De Woonpas
              persoonsgegevens verwerkt in het kader van subsidievaststelling en -verantwoording
              namens een gemeente, geschiedt dit onder verantwoordelijkheid van de betreffende
              gemeente als verwerkingsverantwoordelijke. Voor zover de gegevensdeling niet onder een
              van de bovengenoemde grondslagen valt, vraagt De Woonpas voorafgaand afzonderlijk
              toestemming aan de Woningeigenaar.
            </li>
            <li>
              De Woonpas draagt er zorg voor dat met partijen aan wie persoonsgegevens worden
              verstrekt, waar vereist, passende afspraken worden gemaakt over de verwerking en
              beveiliging van persoonsgegevens.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>16. Klachten</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              Klachten over de dienstverlening van De Woonpas worden door de Woningeigenaar zo
              spoedig mogelijk, en uiterlijk binnen 14 dagen na ontdekking van het gebrek,
              schriftelijk of elektronisch bij De Woonpas gemeld, onder duidelijke omschrijving van
              de klacht.
            </li>
            <li>
              Indien een klacht niet binnen de in lid 1 genoemde termijn wordt gemeld, vervalt het
              recht om zich op dat gebrek te beroepen, voor zover wettelijk toegestaan.
            </li>
            <li>
              De Woonpas krijgt altijd de gelegenheid om een gemelde klacht binnen een redelijke
              termijn te onderzoeken en, indien van toepassing, te laten herstellen.
            </li>
            <li>
              Het indienen van een klacht schort de betalingsverplichting van de Woningeigenaar niet
              op.
            </li>
            <li>Dit artikel laat de wettelijke rechten van de Woningeigenaar onverlet.</li>
          </ul>
        </div>
        <div>
          <p className="text-primary">
            <strong>17. Toepasselijk recht en geschillen</strong>
          </p>
          <ul className="list-[lower-alpha] pl-5">
            <li>
              Op deze algemene voorwaarden en alle overeenkomsten tussen De Woonpas en de
              Woningeigenaar is uitsluitend Nederlands recht van toepassing.
            </li>
            <li>
              Partijen zullen zich inspannen om eventuele geschillen eerst in onderling overleg op
              te lossen.
            </li>
            <li>
              Indien een geschil niet in onderling overleg kan worden opgelost, wordt het geschil
              voorgelegd aan de bevoegde rechter in het arrondissement Midden-Nederland, tenzij
              dwingend recht anders bepaalt.
            </li>
          </ul>
        </div>
      </TextPage>
      <ConsultationBanner showColorPlate={false} />
    </>
  );
}
