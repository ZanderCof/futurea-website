import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


export default function Home() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Video di Sfondo */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Video/hero_video_loop.mp4" type="video/mp4" />
          Il tuo browser non supporta la riproduzione dei video.
        </video>

        {/* Overlay per scurire il video e migliorare la leggibilità del testo */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Contenuto sopra il video */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white">
            Il futuro è semplice
          </h1>
          <p className="mb-6 text-lg sm:text-xl text-gray-200">
            Progettiamo insieme per garantirti il sito più adatto a te o alla tua impresa
          </p>
          <a
            href="#"
            className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 text-black font-semibold rounded-full inline-flex items-center justify-center px-6 py-3 transition-all duration-300 ease-in-out"
          >
            <span>CONTATTACI</span>
          </a>
        </div>
      </div>
      <div>


      </div>
    </>
  );
}
