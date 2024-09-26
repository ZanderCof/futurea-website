import Image from "next/image";

const Project = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Prodotti targati Futurea
          </h1>
          <p className="text-lg text-gray-600">
            Scopri i nostri servizi su misura per il tuo business e inizia a crescere con noi.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg drop-shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/Image/web-card.jpg"
              alt="Sito Web Personalizzato"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="font-bold text-xl mb-2 text-gray-800">Sito Web Statico</h2>
              <p className="text-gray-600 mb-4">
                Crea un sito elegante e professionale, ideale come biglietto da visita per la tua attività. Perfetto per attrarre nuovi clienti!
              </p>
              <div className="flex justify-center space-x-2">
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-800">
                  #e-commerce
                </span>
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800">
                  #booked
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg drop-shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/Image/web-card.jpg"
              alt="E-Menu"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="font-bold text-xl mb-2 text-gray-800">E-Menu</h2>
              <p className="text-gray-600 mb-4">
                Rivoluziona la tua esperienza di ristorazione con un menu digitale personalizzabile. Facile da usare per i clienti e pratico per il tuo staff!
              </p>
              <div className="flex justify-center space-x-2">
                <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-800">
                  #Menu
                </span>
                <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-800">
                  #Clientela
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg drop-shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/Image/web-card.jpg"
              alt="Gestionale Professionale"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="font-bold text-xl mb-2 text-gray-800">Gestionale Professionale</h2>
              <p className="text-gray-600 mb-4">
                Ottimizza la gestione della tua attività con un software professionale su misura, che si adatta perfettamente alle tue necessità.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-800">
                  #Gestione
                </span>
                <span className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800">
                  #Ordini
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
