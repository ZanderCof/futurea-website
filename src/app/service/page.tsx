import Image from "next/image";

const Service = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            I nostri Prodotti
          </h1>
          <p className="text-lg text-gray-600">
            Scopri le soluzioni che offriamo per portare il tuo business al
            livello successivo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden rounded-t-xl">
              <Image
                src="/Image/web-card.jpg"
                alt="Sito Web Personalizzato"
                width={500}
                height={300}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Sito Web Personalizzato
              </h3>
              <p className="text-gray-600 mb-6">
                Ti assistiamo dall'inizio alla fine nella realizzazione del tuo
                sito web personalizzato. Dalla progettazione alla pubblicazione,
                siamo al tuo fianco.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Scopri di più
                <svg
                  className="w-5 h-5 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden rounded-t-xl">
              <Image
                src="/Image/emenu-card.jpg"
                alt="E-Menu"
                width={500}
                height={300}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                E-Menu
              </h3>
              <p className="text-gray-600 mb-6">
                Crea un menu digitale e gestisci facilmente tutti i suoi aspetti.
                Aggiorna o modifica il tuo menu in modo rapido e sicuro.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
              >
                Scopri di più
                <svg
                  className="w-5 h-5 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden rounded-t-xl">
              <Image
                src="/Image/gestional-card.jpg"
                alt="Gestionale Aziendale"
                width={500}
                height={300}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Gestionale Aziendale
              </h3>
              <p className="text-gray-600 mb-6">
                Gestisci appuntamenti, prenotazioni, orari dei dipendenti e
                scadenze con il nostro gestionale intuitivo e potente.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300"
              >
                Scopri di più
                <svg
                  className="w-5 h-5 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
