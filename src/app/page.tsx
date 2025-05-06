'use client'

import React, { useEffect, useState } from "react";
import Cookie from "./cookie/page";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { MessageCircle } from "lucide-react";
import { Code, PackageSearch, Settings2 } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Porta online la tua attività",
    description: "Realizziamo siti web, menu digitali e piattaforme intuitive per dare alla tua attività una presenza professionale e moderna, sempre accessibile ai tuoi clienti.",
    icon: <Code className="w-6 h-6 text-yellow-600" />,
  },
  {
    id: 2,
    title: 'Automatizza il tuo lavoro',
    description: 'Creiamo e-commerce, gestionali e software personalizzati per aiutarti a vendere online, gestire inventari, fatture e processi interni in modo più efficiente.',
    icon: <PackageSearch className="w-6 h-6 text-yellow-600" />,
  },
  {
    id: 3,
    title: 'Soluzioni su misura per te.',
    description: 'Non ti proponiamo soluzioni preconfezionate: ogni nostro progetto nasce ascoltando attentamente le tue esigenze, così da offrirti solo strumenti realmente utili e perfettamente integrati nel tuo modo di lavorare.',
    icon: <Settings2 className="w-6 h-6 text-yellow-600" />,
  },
];

export default function Example() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-10 lg:px-8">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <DotLottieReact
            src="/animations/home_animation.json"
            loop
            autoplay
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-yellow-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Main Hero */}
        <div className="mx-auto sm:py-32 lg:py-48 relative z-10">
          <div className="text-center select-none">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              Il Futuro a portata di tutti
            </h1>
            <p className={`mt-6 text-base sm:text-lg lg:text-xl leading-8 text-gray-600 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              Inizia subito a creare con noi soluzioni su misura per la tua attività
            </p>
            <div className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              <a
                href="https://wa.me/393487073803?text=Ciao,%20sono%20interessato%20ai%20vostri%20servizi"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <MessageCircle className="w-5 h-5" />
                Parla con noi su WhatsApp
              </a>
              {/* <a
                href="/service"
                className="rounded-md px-4 py-3 text-base font-semibold text-gray-900 bg-yellow-200 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Servizi <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-400 to-yellow-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col h-full">
                <div className="group relative flex flex-col justify-between bg-white rounded-2xl shadow-2xl p-6 h-full transition hover:shadow-yellow-300/50 hover:scale-[1.02] duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    {post.icon}
                    <h3 className="text-lg font-semibold leading-6 text-yellow-600 group-hover:text-yellow-900 italic">
                      <a>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Cookie />
    </div>
  );
}
