import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            className="h-10 transition-transform duration-300 hover:scale-105"
            src="/image/Logo_no_bg.png"
            alt="Futurea Logo"
          />
          <span className="text-3xl font-bold text-black">Futurea</span>
        </Link>

        {/* Mobile menu button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-black rounded-lg md:hidden hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Apri menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border border-black md:border-0 rounded-lg bg-yellow-400 md:bg-transparent">
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 text-black rounded transition-colors duration-300 border-b-2 border-transparent hover:border-black hover:bg-yellow-500 md:hover:bg-transparent"
              >
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="block py-2 px-4 text-black rounded transition-colors duration-300 border-b-2 border-transparent hover:border-black hover:bg-yellow-500 md:hover:bg-transparent"
              >
                Servizi
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" block py-2 px-4 text-black rounded transition-colors duration-300 border-b-2 border-transparent hover:border-black hover:bg-yellow-500 md:hover:bg-transparent"
              >
                Novità
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
