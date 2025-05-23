import { CheckIcon } from '@heroicons/react/20/solid';

const plusFeatures = [
  'Aggiornamenti gratuiti',
  'Funzionalita premium sito web ',
  'Liberta nella gestione del E-menu ',
  'Canale di chat per assistenza',
];

const eMenuFeatures = [
  'QR Code personale per accedere al tuo E-menu',
  'Suddivisione in categorie',
  'Accesso diretto ad allergeni e info generiche',
];

const eMenuPlusFeatures = [
  'permette di ordinare direttamente da app',
  'Suddivisione in categorie',
  'Accesso diretto ad allergeni e info generiche',
  'Fino a 5 E-Menu creabili' ,
  'Aggiunta modifica ed eliminazione di articoli o categorie' ,
];

const completeFeatures = [
  'Software completo all’ultima versione',
  'Aggiornamenti necessari gratuiti',
  'Aggiornamenti non obbligatori a pagamento',
];

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Potenzia il tuo Futuro</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Scopri i nostri servizi <strong>Futurea Plus+</strong> e il <strong>Gestionale personale</strong> progettato per offrire ai clienti un valore aggiunto e strumenti esclusivi. Con un piccolo pagamento mensile, avrai accesso a funzionalità premium che ti aiuteranno a distinguerti dalla concorrenza.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {/* Card per il servizio Plus  */}
          <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <div className="bg-yellow-300 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-4">Miglior Offerta</div>
              <div className="bg-blue-500 inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mb-4">Plus</div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Futurea Plus+</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Ottieni accesso completo a tutti i servizi Futurea base e ai futuri aggiornamenti. Riceverai inoltre assistenza prioritaria, con accesso a canali di supporto via chat. <br /> <strong>Disponibile per Sitiweb, Gestionale e E-menu</strong> 
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Cosa include</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {plusFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Pagamento mensile</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">€19</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Attiva abbonamento
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Addebito mensile a partire dalle 00:00 del giorno dell'acquisto
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Card per il E-Menu Plus */}
          <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">E-Menu Plus+</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
              Accedi al nostro applicativo avanzato che ti permette di creare, modificare e gestire in totale autonomia il tuo eMenu digitale. Potrai aggiungere, personalizzare o eliminare piatti e categorie con facilità, aggiornando il menu in tempo reale e offrendo ai tuoi clienti un'esperienza moderna e interattiva <br /> 
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Cosa include</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {eMenuPlusFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Prezzo</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">€199</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 line-through">€299</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-red-600">Promo!</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Attiva abbonamento
                  </a>
                </div>
              </div>
            </div>
          </div>
            {/* Card per il E-Menu */}
            <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">E-menu</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
              Il menu digitale sarà creato da noi sulla base delle tue indicazioni iniziali. Non potrà essere modificato autonomamente, ma rispecchierà la tua attività con precisione. Per eventuali modifiche future, potrai passare a un piano superiore che ti permetterà di gestire e aggiornare il tuo eMenu in completa autonomia <br /> <strong>Disponibile anche in modalita Plus+</strong> 
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Cosa include</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {eMenuFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Prezzo</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">€99</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 line-through">€129</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-red-600">Promo!</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Attiva abbonamento
                  </a>
                </div>
              </div>
            </div>
          </div>



          {/* Card per il Servizio Gestionale */}
          <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Futurea Gestionale</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Ottieni il software completo aggiornato all'ultima versione disponibile al momento dell'acquisto. 
                Gli aggiornamenti obbligatori saranno gratuiti, mentre gli aggiornamenti non obbligatori saranno disponibili a pagamento. <br /> <strong>Disponibile Gestionale e E-menu</strong> 
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Cosa include</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {completeFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Prezzo</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">€699</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 line-through">€999</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-red-600">Promo!</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Attiva abbonamento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
