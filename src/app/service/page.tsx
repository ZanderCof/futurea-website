import Image from "next/image";

const products = [
  {
    image: "/Image/web-card.jpg",
    title: "Sito Web Personalizzato",
    description:
      "Ti assistiamo dall'inizio alla fine nella realizzazione del tuo sito web personalizzato. Dalla progettazione alla pubblicazione, siamo al tuo fianco.",
    buttonText: "Scopri di più",
    buttonColor: "bg-indigo-600",
  },
  {
    image: "/Image/emenu-card.jpg",
    title: "E-Menu",
    description:
      "Crea un menu digitale e gestisci facilmente tutti i suoi aspetti. Aggiorna o modifica il tuo menu in modo rapido e sicuro.",
    buttonText: "Scopri di più",
    buttonColor: "bg-teal-600",
  },
  {
    image: "/Image/gestional-card.jpg",
    title: "Gestionale Aziendale",
    description:
      "Gestisci appuntamenti, prenotazioni, orari dei dipendenti e scadenze con il nostro gestionale intuitivo e potente.",
    buttonText: "Scopri di più",
    buttonColor: "bg-orange-600",
  },
];

const Service = () => {
  return (
    <div className="py-16">
      {/* Contenitore più grande */}
      <div className="bg-whitre py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              I nostri Prodotti
            </h1>
            <p className="text-lg text-gray-600">
              Scopri le soluzioni che offriamo per portare il tuo business al livello successivo.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="bg-yellow-400 py-8 px-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <a
                      href="#"
                      className={`inline-flex items-center px-5 py-3 ${product.buttonColor} text-white rounded-lg font-medium hover:${product.buttonColor.replace('600', '700')} transition-colors duration-300`}
                      aria-label={product.buttonText}
                    >
                      {product.buttonText}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
