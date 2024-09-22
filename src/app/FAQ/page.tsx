"use client"
import { useState } from 'react';
import { Transition } from '@headlessui/react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Quali servizi offrite?',
    answer: 'Offriamo servizi di sviluppo web e software professionali, specializzati per piccole e medie imprese locali.'
  },
  {
    question: 'Come posso contattarvi per avere maggiori informazioni?',
    answer: 'Puoi contattarci tramite il nostro modulo di contatto sul sito o inviando un’email a info@futurea.com.'
  },
  {
    question: 'Offrite supporto tecnico?',
    answer: 'Sì, forniamo supporto tecnico per tutti i nostri prodotti. Puoi contattarci per assistenza via email o telefono.'
  },
  {
    question: 'Ci sono costi nascosti nei vostri servizi?',
    answer: 'No, tutte le informazioni sui costi sono trasparenti e indicate chiaramente nel nostro sito.'
  },
  {
    question: 'Posso provare i vostri prodotti prima di acquistare?',
    answer: 'Sì, offriamo demo gratuite per permetterti di testare i nostri servizi prima di prendere una decisione.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Domande Frequenti</h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index: number) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full px-4 py-3 text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
              </button>
              <Transition
                show={openIndex === index}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <div className="px-4 py-2 text-gray-600">
                  {faq.answer}
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
