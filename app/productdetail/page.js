'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const product = {
    name: 'PEDIGRE® chicken and vegetables for adult dogs',
    weight: '10 Kg',
    brand: 'Pedigree',
    animalCategory: 'Dog',
    category: 'Dry Food',
    price: 1200,
    stock: '',
    images: [
    ],
};

export default function ProductDetails() {

    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">

            <div className="flex items-center mb-6">
                <Image src="/logo.svg" alt="PaPaPet" width={40} height={40} />
                <h1 className="text-2xl font-semibold ml-3 text-[#1AA67A]">PaPaPet</h1>
            </div>

            <h2 className="text-xl font-semibold mb-6 text-black">Product Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                
                

                <div className="flex flex-col items-center">

                    <div className="border rounded-md p-2 w-full max-w-sm bg-white">
                        <Image
                            src={product.images[current]}
                            alt="Product Image"
                            width={300}
                            height={300}
                            className="object-contain w-full h-auto"
                        />
                    </div>

                    <div className="flex items-center mt-4 space-x-2">

                        <button onClick={handlePrev} className="p-2 bg-orange-400 rounded-full">
                            <ChevronLeft className="text-white" />
                        </button>

                        <div className="flex overflow-x-auto space-x-2">
                            {product.images.map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    width={50}
                                    height={50}
                                    className={`border rounded-md cursor-pointer ${idx === current ? 'ring-2 ring-orange-500' : ''}`}
                                    onClick={() => setCurrent(idx)}
                                />
                            ))}
                        </div>

                        <button onClick={handleNext} className="p-2 bg-orange-400 rounded-full">
                            <ChevronRight className="text-white" />
                        </button>

                    </div>
                </div>

                
                
                <div className="space-y-4 text-black">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>

                    <p className="text-orange-500 text-lg font-medium">{product.weight}</p>

                    <p><span className="font-semibold">Brand:</span> {product.brand}</p>

                    <p><span className="font-semibold">Animal Category:</span> {product.animalCategory}</p>

                    <p><span className="font-semibold">Category:</span> {product.category}</p>

                    <p><span className="font-semibold">Price:</span> ₹{product.price}</p>

                    <p><span className="font-semibold">Stock:</span> {product.stock || 'Out of Stock'}</p>
                </div>

            </div>
        </div>
    );
}
