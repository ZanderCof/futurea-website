import Image from "next/image";

const Project = () => {
  return (
    <div className="py-16">
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              I nostri Progetti
            </h1>
            <p className="text-lg text-gray-600">
              Scopri i progetti che abbiamo realizzato per aiutare le aziende a crescere.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="bg-yellow-400 py-8 px-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sito Statico */}
              <div className="bg-white rounded-md overflow-hidden shadow-lg text-black">
                <Image
                  src="/Image/web-card.jpg"
                  alt="Sito Web Personalizzato"
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="m-3 text-center">
                  <div className="font-bold text-xl mb-2 text-black">Sito web statico:</div>
                  <div>Un sito semplice, perfetto come punto di riferimento o biglietto da visita</div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #e-commerce
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #booked
                    </span>
                  </div>
                </div>
              </div>

              {/* E-menu */}
              <div className="bg-white rounded-md overflow-hidden shadow-lg text-black">
                <Image
                  src="/Image/web-card.jpg"
                  alt="E-Menu"
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="m-3 text-center">
                  <div className="font-bold text-xl mb-2 text-black">E-Menu:</div>
                  <div>Un menu digitale per la tua attività completamente personalizzabile</div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Menu
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Clientela
                    </span>
                  </div>
                </div>
              </div>

              {/* Gestionale */}
              <div className="bg-white rounded-md overflow-hidden shadow-lg text-black">
                <Image
                  src="/Image/web-card.jpg"
                  alt="Gestionale Professionale"
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="m-3 text-center">
                  <div className="font-bold text-xl mb-2 text-black">Gestionale Professionale:</div>
                  <div>Un applicativo creato su misura per le tue necessità, completamente modificabile e personalizzabile</div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Gestione
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Ordini
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
