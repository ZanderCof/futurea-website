import Image from "next/image";

const products = [
  {
    image: "/Image/web-card.jpg",
    title: "Sito Web Su Misura",
    description:
      "Trasforma la tua idea in realtà con un sito web personalizzato che rispecchia l'identità del tuo brand. Ti guidiamo in ogni fase del processo.",
    buttonText: "Scopri di più",
    buttonColor: "bg-indigo-600",
  },
  {
    image: "/Image/emenu-card.jpg",
    title: "E-Menu Interattivo",
    description:
      "Offri ai tuoi clienti un'esperienza unica con un menu digitale facile da usare. Modifica i piatti in tempo reale e gestisci le ordinazioni senza stress.",
    buttonText: "Scopri di più",
    buttonColor: "bg-teal-600",
  },
  {
    image: "/Image/gestional-card.jpg",
    title: "Gestionale Avanzato",
    description:
      "Ottimizza la gestione della tua azienda con il nostro software intuitivo. Pianifica appuntamenti, gestisci risorse e resta sempre organizzato.",
    buttonText: "Scopri di più",
    buttonColor: "bg-orange-600",
  },
];

const Service = () => {
  return (
    <div className="py-16">
      {/* Contenitore principale */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              I Nostri Prodotti
            </h1>
            <p className="text-lg text-gray-600">
              Scopri le soluzioni innovative che offriamo per far crescere il tuo business.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <a
                    href="#"
                    className={`inline-flex items-center px-5 py-3 ${product.buttonColor} text-white rounded-lg font-medium transition-colors duration-300 hover:${product.buttonColor.replace('600', '700')}`}
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
  );
};

export default Service;
