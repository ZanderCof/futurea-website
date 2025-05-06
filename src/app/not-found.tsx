import React from 'react';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-80 h-80 bg-none rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-32 text-yellow-600 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 0v3m0-3h3m-3 0H9"
          />
        </svg>
      </div>
      <h1 className="text-5xl font-bold mt-6 text-gray-800">Oops,Pagina non trovata</h1>
      <p className="text-xl text-gray-600 mt-4">
        La pagina che sta cercando non esite.
      </p>
      <a
        href="/"
        className="mt-6 bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-all"
      >
        Torna alla Home
      </a>
    </div>
  );
}
