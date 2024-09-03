import React from "react";


export default function Footer(){


    return(
        
        <footer className="bg-yellow-500 rounded-lg shadow  mx-auto">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="" className="h-8" alt="" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Futurea</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Chi Siamo</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Servizi</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Contatti</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Politiche sulla Privacy </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto y-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="" className="hover:underline">Futurea™</a>. Tutti i diritti riservati.</span>
            </div>
        </footer>



    );
}