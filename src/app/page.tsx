'use client'

import React, { useEffect, useState } from "react"

const posts = [
  {
    id: 1,
    title: "Aumenta la visibilità della tua attività",
    description: "Crea un sito web professionale e ottimizzato per i motori di ricerca, che sappia raccontare al meglio la tua attività e attrarre nuovi clienti ogni giorno.",
    
  },
  {
    id: 2,
    title: 'Migliora il tuo servizio',
    description:
      'Offri ai tuoi clienti un’esperienza digitale semplice e coinvolgente. Dalla prenotazione online al menu digitale, ogni interazione diventa facile e intuitiva, aumentando la soddisfazione e la fidelizzazione dei clienti.',
    
  },
  {
    id: 3,
    title: 'Monitora ogni aspetto della tua attivita',
    description:
      'Gestisci ogni dettaglio della tua attività con strumenti avanzati di monitoraggio e gestione. Dall’inventario alla fatturazione, hai sempre una panoramica chiara e precisa per prendere decisioni informate e strategiche.',
    
  },
  // More posts...
]

export default function Example() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // Mostra il testo dopo 0.5 secondi

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-10 lg:px-8">
        {/* Banner */}
        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Inizia il tuo viaggio con noi e sfrutta gli sconti del lancio!.{' '}
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Scopri di più <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div> */}

        {/* Decorative background elements */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-yellow-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Main content */}
        <div className="mx-auto sm:py-32 lg:py-48 relative z-10">
          <div className="text-center">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'} whitespace-nowrap text-center`}>
              Il Futuro a portata di tutti
            </h1>
            <p className={`mt-6 text-base sm:text-lg lg:text-xl leading-8 text-gray-600 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              Inizia subito a creare con noi soluzioni su misura per la tua attività: dal gestionale al menu digitale.
            </p>
            <div className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              <a
                href="https://wa.me/393487073803?text=Ciao,%20sono%20interessato%20ai%20vostri%20servizi"
                className="rounded-md bg-yellow-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Contattaci
              </a>
              <a
                href="/service"
                className="rounded-md px-4 py-3 text-base font-semibold text-gray-900 bg-yellow-200 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Servizi <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>



        {/* Decorative background elements */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-400 to-yellow-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-yellow-600 group-hover:text-yellow-900">
                  <a >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </div>
    

    
  )
}
