'use client'
import { React, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const items = [
  {
    label: "HOT",
    labelColor: "bg-red-500",
    stars: 5,
    rating: 738,
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: "$70",
    image: "/img1.png",
  },
  {
    stars: 5,
    rating: 536,
    title: "Samsung Electronics Samsung Galaxy S21 5G",
    price: "$2,300",
    image: "/img2.png",
  },
  {
    label: "BEST DEALS",
    labelColor: "bg-blue-500",
    stars: 5,
    rating: 423,
    title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: "$360",
    image: "/img3.png",
  },
  {
    stars: 4,
    rating: 816,
    title: "Portable Washing Machine, 11lbs capacity Model 18NMF...",
    price: "$80",
    image: "/img4.png",
  },
];

export default function Dashboard() {
  const [pets, setPets] = useState([
    {
      name: "simbaa",
      type: 'dog',
      breed: "Labrador",
      age: "4y/0",
      features: "Birthmark",
      color: "blue"
    },
    {
      name: "simbaa2",
      type: 'dog',
      breed: "Labrador",
      age: "5y/0",
      features: "Birthmark",
      color: "blue"
    }
  ]);

  const addPet = () => {
    console.log("added pet");
  };

  const getColorClasses = (color) => {
    return color === "blue"
      ? "bg-gradient-to-br from-blue-800 to-blue-600"
      : "bg-gradient-to-br from-green-600 to-green-400";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black">
      <h1 className='text-2xl font-semibold mb-6'>Hello, Kaushik</h1>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        

        <div className="border rounded-lg p-6 shadow-sm bg-white">
          <h2 className="text-sm font-semibold text-gray-700 uppercase mb-4">Account Info</h2>

          <div className="flex items-center gap-4 mb-4">
            <img src="/profile.png" alt="Profile" className="w-14 h-14 rounded-full" />
            <div>
              <p className="font-semibold text-gray-900">Kaushik Vishwakarma</p>
              <p className="text-sm text-gray-500">Bhopal, Madhya Pradesh-462002</p>
            </div>

          </div>

          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-semibold">Email:</span> Kaushik.vishwakarma@gmail.com</p>
            <p><span className="font-semibold">Sec Email:</span> Kaushik12345@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +91-132132132132</p>
          </div>

          <button className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition">Edit Account</button>
        
        </div>

        
        

        <div className="border rounded-lg p-6 shadow-sm bg-white">
          <h2 className="text-sm font-semibold text-gray-700 uppercase mb-4">Shipping Address</h2>
          <div className="text-sm text-gray-700 space-y-2">

            <p className="font-semibold text-gray-900">Kaushik Vishwakarma</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, expedita dignissimos reprehenderit.</p>
            <p><span className="font-semibold">Phone Number:</span> +91-12313213312</p>
            <p><span className="font-semibold">Email:</span> Kaushik.vishwakarma@gmail.com</p>

          </div>
          <button className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition">Edit Address</button>
        </div>
      </div>

      
      

      <div className="p-4 border rounded-lg shadow-md max-w-6xl mx-auto mt-8 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">YOUR PETS</h2>
          <button onClick={addPet} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">ADD PET +</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pets.map((pet, index) => (
            <div key={index} className={`${getColorClasses(pet.color)} text-white p-5 rounded-lg relative shadow-md`}>
              <div className="absolute top-3 right-3 text-white cursor-pointer">✏️</div>
              <h3 className="text-2xl font-bold mb-1">{pet.name}</h3>
              <p className="uppercase text-sm text-gray-200">{pet.type}</p>
              <p className="mt-2"><span className="font-semibold">Breed</span> - {pet.breed}</p>
              <p><span className="font-semibold">Age</span> - {pet.age}</p>
              <p className="mt-2 font-semibold">Distinguished Feature</p>
              <p className="text-sm text-gray-200">{pet.features}</p>
            </div>
          ))}
        </div>
      </div>

      
      
      <div className="p-6 border rounded-lg max-w-6xl mx-auto mt-8 shadow bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">BROWSING HISTORY</h2>
          <button className="text-orange-500 font-medium flex items-center gap-1 hover:underline">
            View All <FaArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="border rounded-lg p-3 relative bg-white">
              {item.label && (
                <span className={`${item.labelColor} text-white text-xs px-2 py-1 rounded absolute top-2 left-2`}>
                  {item.label}
                </span>
              )}
              <img src={item.image} alt={item.title} className="h-36 mx-auto object-contain" />
              <div className="mt-3">
                <div className="flex items-center text-orange-500 text-sm">
                  {Array.from({ length: Math.floor(item.stars) }, (_, j) => (
                    <FaStar key={j} />
                  ))}
                  {item.stars % 1 !== 0 && <FaStarHalfAlt />}
                  <span className="ml-1 text-gray-600 text-xs">({item.rating})</span>
                </div>
                <p className="text-sm text-gray-800 mt-1 line-clamp-2">{item.title}</p>
                <p className="text-blue-600 font-semibold mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6 gap-6">
          <button className="text-gray-500 hover:text-orange-500">
            <FaArrowLeft size={20} />
          </button>
          <div className="flex gap-1">
            {Array(5).fill(0).map((_, idx) => (
              <div key={idx} className={`w-2 h-2 rounded-full ${idx === 1 ? "bg-orange-500" : "bg-gray-300"}`}></div>
            ))}
          </div>
          <button className="text-gray-500 hover:text-orange-500">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
