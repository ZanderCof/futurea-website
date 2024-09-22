'use client'

import { useState } from 'react'
import { Dialog, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ModalExample() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Dialog.Panel className="bg-white rounded-lg shadow-xl transform transition-all">
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="flex">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-1/2 rounded-l-lg"
                />
                <div className="w-1/2 p-6">
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                  <p className="mt-2 text-xl text-gray-800">{product.price}</p>

                  <div className="mt-4">
                    <h3 className="font-medium">Color</h3>
                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2 flex space-x-2">
                      {product.colors.map((color) => (
                        <RadioGroup.Option key={color.name} value={color}>
                          {({ checked }) => (
                            <span
                              className={classNames(
                                color.class,
                                checked ? 'ring-2 ring-offset-2' : '',
                                'h-8 w-8 rounded-full cursor-pointer'
                              )}
                            />
                          )}
                        </RadioGroup.Option>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-medium">Size</h3>
                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2 grid grid-cols-4 gap-2">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          className={classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white'
                              : 'cursor-not-allowed bg-gray-50',
                            'border rounded p-2 text-sm text-center'
                          )}
                          disabled={!size.inStock}
                        >
                          {size.name}
                        </RadioGroup.Option>
                      ))}
                    </RadioGroup>
                  </div>

                  <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded w-full">
                    Add to Bag
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
