"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const products = [
  {
    image: "/Image/web-card.jpg",
    title: "Sito Web Su Misura",
    description:
      "Trasforma la tua idea in realtà con un sito web personalizzato che rispecchia l'identità del tuo brand. Ti guidiamo in ogni fase del processo.",
    buttonText: "Scopri di più",
    priceBase: "€299",
    pricePlus: "€399",
  },
  {
    image: "/Image/emenu-card.jpg",
    title: "E-Menu Interattivo",
    description:
      "Offri ai tuoi clienti un'esperienza unica con un menu digitale facile da usare. Modifica i piatti in tempo reale e gestisci le ordinazioni senza stress.",
    buttonText: "Scopri di più",
    priceBase: "€199",
    pricePlus: "€19/Mese",
  },
  {
    image: "/Image/gestional-card.jpg",
    title: "Gestionale Avanzato",
    description:
      "Ottimizza la gestione della tua azienda con il nostro software intuitivo. Pianifica appuntamenti, gestisci risorse e resta sempre organizzato.",
    buttonText: "A breve", // Modificato per il placeholder
    priceBase: "€699",
    pricePlus: "€999",
  },
];

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    image: string;
    priceBase: string;
    pricePlus: string;
  } | null>(null);

  const openModal = (product: { title: string; description: string; image: string; priceBase: string; pricePlus: string }) => {
    setModalContent(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="py-16">
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fade-in">
              I Nostri Prodotti
            </h1>
            <p className="text-lg text-gray-600 animate-fade-in">
              Scopri le soluzioni innovative che offriamo per far crescere il tuo business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {truncateText(product.description, 100)}
                  </p>


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalContent && (
        <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-lg w-full">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                  onClick={closeModal}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                <Image
                  src={modalContent.image}
                  alt={modalContent.title}
                  width={500}
                  height={300}
                  className="rounded-t-lg object-cover w-full"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold">{modalContent.title}</h2>
                  <p className="mt-4 text-gray-600">{modalContent.description}</p>
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="p-4 rounded-lg border shadow-sm bg-white w-1/2 text-center">
                      <span className="block text-lg font-bold text-gray-700">
                        {modalContent.priceBase}
                      </span>
                      <span className="block text-sm text-gray-500">Base</span>
                    </div>
                    <div className="p-4 rounded-lg border shadow-sm bg-white w-1/2 text-center relative">
                      <span className="block text-lg font-bold text-gray-700">
                        {modalContent.pricePlus}
                      </span>
                      <span className="block text-sm text-gray-500">Plus</span>
                      <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                        PLUS
                      </span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Service;
