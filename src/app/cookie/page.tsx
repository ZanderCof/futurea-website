"use client";
import React, { useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const acceptCookies = () => {
    // Logica per gestire il consenso ai cookie
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-black p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <p className="text-center md:text-left text-sm font-medium">
          Questo sito al momento non utilizza cookie tecnici, ne cookie di terze parti. Per ulteriori informazioni, consulta la nostra{" "}
          <a
            href="/privacy"
            className="underline font-semibold hover:text-gray-800 transition"
          >
            Privacy Policy
          </a>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Accetta
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
