"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className={`navbar bg-transparent sticky top-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-black rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          onClick={toggleMenu}
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
        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:space-x-8`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0">
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 text-black transition-all duration-300 rounded-full w-40 text-center hover:bg-yellow-400 active:bg-yellow-400 focus:outline-none    hover:shadow-lg hover:text-white transform hover:scale-105 hover:rotate-1"
                onClick={closeMenu}
              >
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="block py-2 px-4 text-black transition-all duration-300 rounded-full w-40 text-center hover:bg-yellow-400 active:bg-yellow-400 focus:outline-none    hover:shadow-lg hover:text-white transform hover:scale-105 hover:rotate-1"
                onClick={closeMenu}
              >
                Servizi
              </Link>
            </li>
            <li>
              <Link
                href="/example"
                className="block py-2 px-4 text-black transition-all duration-300 rounded-full w-40 text-center hover:bg-yellow-400 active:bg-yellow-400 focus:outline-none    hover:shadow-lg hover:text-white transform hover:scale-105 hover:rotate-1"

                onClick={closeMenu}
              >
                Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
