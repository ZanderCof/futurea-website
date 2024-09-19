"use client";
import React, { useState, useEffect, useRef } from "react";

export default function ScrollTitle() {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Modifica questo valore per decidere quando attivare l'animazione
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <>
    <div className="flex justify-center mt-8 text-center w-auto">
      <h1
        ref={titleRef}
        className={`mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Il{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-yellow-400">
          Futuro
        </span>{" "}
        è semplice.
      </h1>
    </div>

    <div>
          

        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Entra a far parte del Futuro</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Fissa un appuntamento per discutere del progetto migliore per le tue esigenze</p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="mailto:info@futurea.com" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M502.3 190.8l-198.8 158c-21.3 17-51.5 17-72.8 0L32.2 190.8c-11.2-8.9-27.4-1-27.4 13.4v204.7c0 48.5 39.4 88 88 88h352c48.5 0 88-39.4 88-88V204.2c0-14.4-16.3-22.3-27.5-13.4zM32 108.1v.9l198.8 158.2c21.3 17 51.5 17 72.8 0L512 109v-.9c0-48.5-39.4-88-88-88H120c-48.5 0-88 39.4-88 88z"></path>
              </svg>
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">E-mail</div>
                <div className="-mt-1 font-sans text-sm font-semibold">info@futurea.com</div>
              </div>
            </a>


                <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M380.9 97.1C339.3 55.4 282.5 32 224.1 32 118.7 32 32 118.6 32 224c0 48.5 16.4 93.2 46.2 130.2L32 480l128.9-46.2c36 26.7 79.7 41.3 123.9 41.3 105.4 0 192-86.6 192-192 0-58.5-23.3-115.3-64.9-156.9zM224.1 438.6c-39.1 0-77.2-12.1-109.3-34.8l-7.8-5.3-76.6 27.5 26.3-73.6-5.1-8C34.6 314.4 22.3 269.7 22.3 224 22.3 130 130.1 32 224.1 32c52.8 0 102.4 20.6 139.7 58 37.3 37.4 58 86.9 58 139.7 0 108.6-88.2 208.9-197.7 208.9zm116.1-139.2c-6.1-3-36-17.7-41.6-19.7-5.5-2-9.5-3-13.5 3-3.9 5.9-15.5 19.7-19 23.8-3.5 3.9-7.1 4.5-13.2 1.5-6.1-3-25.7-9.5-49.1-30.5-18.2-16.2-30.5-36.1-34.1-42.2-3.5-6.1-.4-9.3 2.6-12.3 2.7-2.6 6.1-6.9 9-10.4 3-3.5 4-5.9 6-9.8 2-3.9 1-7.4-.5-10.4-1.5-3-13.5-32.5-18.5-44.4-4.9-11.9-9.9-10.3-13.5-10.5-3.5-.2-7.4-.2-11.4-.2-3.9 0-10.4 1.5-15.7 7.4-5.5 5.9-20.4 19.9-20.4 48.5s20.9 56.2 23.8 60.1c3 3.9 41 62.7 99.4 87.9 58.4 25.2 58.4 16.7 68.9 15.7 10.5-1 35.1-14.3 40.1-28.3 4.9-14.1 4.9-26.2 3.4-28.3-1.5-2-5.5-3.9-11.6-6.9z"></path>
                  </svg>
                  <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Whatsapp</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">333-4587412</div>
                  </div>
                </a>

            </div>
        </div>

    </div>
    
    </>
  );
}
