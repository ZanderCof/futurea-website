import React from "react";

export default function Footer() {
    const navItems = [
        { name: "Chi Siamo", link: "/about" },
        { name: "Servizi", link: "/service" },
        { name: "Prodotti", link: "/example" },
        { name: "FAQ", link: "/FAQ" },
        { name: "Contatti", link: "/contatti" },
        { name: "Politiche sulla Privacy", link: "/privacy" }
    ];

    return (
        <footer className=" bg-white shadow ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/Image/Logo_no_bg.png" className="h-8" alt="Futurea Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Futurea</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="hover:underline me-4 md:me-6">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025 <a href="#" className="hover:underline">Futurea™</a>. Tutti i diritti riservati.
                </span>
            </div>
        </footer>
    );
}
