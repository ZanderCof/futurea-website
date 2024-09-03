import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="max-w-5xl mx-auto bg-white text-black rounded-lg shadow-xl p-8 lg:flex lg:items-center lg:space-x-8">
        {/* Text Section */}
        <div className="lg:flex-1 lg:pr-8 mb-6 lg:mb-0">
          <h1 className="text-4xl font-extrabold mb-4 text-blue-900">Chi Siamo</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Futurea è una startup nata dalla passione di un team di giovani sviluppatori. 
            Il nostro obiettivo è offrire a piccole e medie imprese l'opportunità di utilizzare strumenti digitali professionali e ben strutturati, anche con budget limitati. 
            Vogliamo facilitare e migliorare il tuo business con soluzioni su misura, permettendo a ogni azienda di crescere e prosperare nel mondo digitale. 
            Siamo dedicati a garantire che le tue esigenze siano soddisfatte con creatività e competenza, aiutandoti a raggiungere i tuoi obiettivi aziendali con successo.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="lg:flex-1 lg:pl-8">
          <Image
            src="/Image/web-card.jpg" // Sostituisci con il percorso corretto dell'immagine
            alt="Chi Siamo"
            width={500} // Imposta una larghezza adeguata
            height={300} // Imposta un'altezza adeguata
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
