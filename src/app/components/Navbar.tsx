'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Chi Siamo', href: '/about' },
  { name: 'Prodotti', href: '/example' },
  { name: 'Servizi', href: '/service' },
  { name: 'Marketplace', href: '/plus' },
  { name: 'Demo', href: '#', disabled: true }, // Aggiunto il flag disabled
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleDemoHover = () => {
    setTooltipVisible(true);
  };

  const handleDemoLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <header className="sticky bg-white  absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5 flex items-center">
          <img
            alt="Company Logo"
            src="/Image/Logo_no_bg.png"
            className="h-8 w-auto"
          />
          <span className="text-gray-900 ml-2 text-2xl font-extrabold ">
            Futurea
          </span> 
        </a>


        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Apri menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              <a
                href={item.disabled ? undefined : item.href}
                onMouseEnter={item.disabled ? handleDemoHover : undefined}
                onMouseLeave={item.disabled ? handleDemoLeave : undefined}
                className={`rounded-full text-sm font-semibold leading-6 text-gray-900 transition duration-300 hover:bg-yellow-400 px-4 py-2 ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
              >
                {item.name}
              </a>
              {item.disabled && tooltipVisible && (
                <div className="absolute z-10 mt-1 bg-yellow-700 text-white text-xs rounded-md p-2">
                  In arrivo
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <img
              alt="Company Logo"
              src="/Image/Logo_no_bg.png"
              className="h-8 w-auto"
            />
            <span className="text-gray-900 ml-2">Futurea</span> {/* Aggiunto ml-2 per spazio */}
          </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.disabled ? undefined : item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-50 ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
