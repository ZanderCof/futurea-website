'use client'

import React, { useEffect, useState } from "react"

export default function Example() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // Mostra il testo dopo 0.5 secondi

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Banner */}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Inizia il tuo viaggio con noi e sfrutta gli sconti del lancio!.{' '}
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Scopri di più <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

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

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">
          <div className="text-center sticky top-0 transform transition-transform duration-700">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'} whitespace-nowrap`}>
              Il Futuro a portata di tutti
            </h1>
            <p className={`mt-6 text-lg sm:text-xl leading-8 text-gray-600 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              Inizia subito a creare con noi soluzioni su misura per la tua attività: dal gestionale al menu digitale.
            </p>
            <div className={`mt-10 flex items-center justify-center gap-x-6 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              <a
                href="https://wa.me/393487073803?text=Ciao,%20sono%20interessato%20ai%20vostri%20servizi
>
"
                className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800"
              >
                Contattaci
              </a>
              <a
                href="/service"
                className="rounded-md text-sm font-semibold leading-6 text-gray-900 px-3.5 py-2.5 shadow-sm transition duration-300 ease-in-out hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800"
              >
                Servizi <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

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
    </div>
  )
}
