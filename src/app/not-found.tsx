'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-80 h-80 bg-none rounded-full flex items-center justify-center">
        <DotLottieReact
          src="/animations/404_animation.json" // Usa il percorso URL relativo
          loop
          autoplay
        />
      </div>
      <h1 className="text-5xl font-bold mt-6 text-gray-800">Oops, Pagina non trovata</h1>
      <p className="text-xl text-gray-600 mt-4">
        La pagina che stai cercando non esiste.
      </p>
      <a
        href="/"
        className="mt-6 bg-yellow-400 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-all"
      >
        Torna alla Home
      </a>
    </div>
  );
}

