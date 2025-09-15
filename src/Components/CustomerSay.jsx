import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function CustomerSay() {
  const testimonials = [
    {
      name: "Robert Fox",
      role: "Customer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      rating: 5,
    },
    {
      name: "Dianne Russell",
      role: "Customer",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      rating: 5,
    },
    {
      name: "Eleanor Pena",
      role: "Customer",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      rating: 5,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="customer w-full h-[480px]">
        <div className="flex justify-between px-4 items-center">
          <div>
            <p className="text-green-500">Testimonial</p>
            <h1 className="text-4xl font-semibold">What Our Customer Says</h1>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-300">
              <FaLongArrowAltLeft className="ml-2.5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-green-500 border border-gray-300">
              <FaLongArrowAltRight className="text-white ml-2.5" />
            </button>
          </div>
        </div>

        <div className=" px-4 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md  hover:shadow-lg transition"
          >
            {/* Quote Icon */}
            <span className="text-green-500 text-4xl font-bold">“</span>
            
            {/* Review Text */}
            <p className="text-gray-600 mb-6">{item.text}</p>
            
            {/* User Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}
