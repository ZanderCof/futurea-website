import Image from "next/image";

const Project = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {/* Sito Statico */}
        <div className="m-3 bg-yellow-400 rounded-md max-w-sm overflow-hidden shadow-lg text-black">
          <Image
            src="/Image/web-card.jpg"
            alt="Sito Web Personalizzato"
            width={500}
            height={300}
            className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="m-3 text-center">
            <div className="font-bold text-xl mb-2 text-black">Sito web statico:</div>
            <div>Un sito semplice, perfetto come punto di riferimento o bigletto da visita</div>
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
        <div className="m-3 bg-yellow-400 rounded-md max-w-sm overflow-hidden shadow-lg text-black">
          <Image
            src="/Image/web-card.jpg"
            alt="Sito Web Personalizzato"
            width={500}
            height={300}
            className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="m-3 text-center">
            <div className="font-bold text-xl mb-2 text-black">E-Menu:</div>
            <div>Un menu digitale per la tua attivita completamente personalizzabile</div>
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
        <div className="m-3 bg-yellow-400 rounded-md max-w-sm overflow-hidden shadow-lg text-black">
          <Image
            src="/Image/web-card.jpg"
            alt="Sito Web Personalizzato"
            width={500}
            height={300}
            className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="m-3 text-center">
            <div className="font-bold text-xl mb-2 text-black">Gestionale Professionale:</div>
            <div>Un applicativo creato su misura per le tue necessita, completamente modificabile e personalizzabile</div>
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
    </>
  );
};

export default Project;
