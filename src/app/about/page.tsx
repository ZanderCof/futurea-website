"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100); // Ritardo per far partire l'animazione

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="grid justify-items-center bg-yellow-500">
      <div className={`w-auto h-auto bg-white text-black shadow-xl p-8 lg:flex lg:items-center lg:space-x-8 transition-opacity duration-700 `}>
        {/* Text Section */}
        <div className="lg:flex-1 lg:pr-8 mb-6 lg:mb-0">
          <h1 className="text-4xl font-extrabold mb-4 text-yellow-500">
            Chi Siamo
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <span className="font-bold">Futurea</span> è una startup fondata dalla passione di un team di giovani sviluppatori, dedicata a trasformare la visione digitale delle piccole e medie imprese. Il nostro obiettivo è fornire soluzioni digitali professionali e strutturate, accessibili anche con budget limitati. Vogliamo semplificare e potenziare il tuo business con strumenti su misura, consentendo a ogni azienda di prosperare nel mondo digitale.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Ci impegniamo a garantire che le tue esigenze siano soddisfatte con creatività e competenza, supportandoti nel raggiungimento dei tuoi obiettivi aziendali. Con Futurea, la tua crescita è la nostra priorità.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="lg:flex-1 lg:pl-8">
          <Image
            src="/Image/web-card.jpg" // Sostituisci con il percorso corretto dell'immagine
            alt="Chi Siamo"
            width={500} // Imposta una larghezza adeguata
            height={300} // Imposta un'altezza adeguata
            className="w-full h-auto rounded-lg shadow-lg object-cover transform transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
