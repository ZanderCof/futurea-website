// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Cookie from "./cookie/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Futurea",
  description: "For the future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${inter.className} flex flex-col min-h-screen w-full `}>
        
       
        
        {/* MAIN CONTENT */}
        <main className="">
          {/* NAVBAR */}
            <Navbar  />
          {/* BANNER */}
            {/* <Banner /> */}
            {children}
          {/* COOKIE */}
            {/* <Cookie  /> */}
          {/* FOOTER */}
            <Footer />
        </main>
        
        
      </body>
    </html>
  );
}
