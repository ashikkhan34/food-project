import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import img from "../assets/Group.png";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Categorys() {
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(null); // active category id

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-10">
        <h1 className="font-semibold text-4xl">Shop by top Categories</h1>
        <p className="flex gap-3 items-center text-sm text-green-500">
          View All <FaArrowRight />
        </p>
      </div>

      <div className="flex gap-4 mb-10 justify-center mt-10">
        {/* Left Arrow */}
        <div className="w-10 mr-4 h-10 rounded-full bg-white border border-gray-300 mt-20">
          <FaArrowLeftLong className="ml-3 mt-2.5" />
        </div>

        {/* Categories */}
        {categories?.categories?.map((category) => (
          <div
            key={category.id}
            onClick={() => setActiveId(category.id)}
            className={`w-44 h-52 rounded-xl text-center flex flex-col items-center justify-center cursor-pointer transition 
              ${
                activeId === category.id
                  ? "border-2 border-green-600 bg-green-50 shadow-[0_4px_10px_2px_rgba(0,128,0,0.5)]"
                  : "border border-gray-400 "
              }`}
          >
            <img
              className="w-16 h-16 object-contain"
              src={img}
              alt={category.name}
            />
            <h1
              className={`text-xl pt-3 ${
                activeId === category.id
                  ? "text-green-600 font-bold"
                  : "text-green-500"
              }`}
            >
              {category.name}
            </h1>
            <p className="text-sm text-gray-500">
              {category.products_count} Products
            </p>
          </div>
        ))}

        {/* Right Arrow */}
        <div className="w-10 h-10 rounded-full bg-white border border-gray-300 ml-4 mt-20">
          <FaArrowRight className="ml-3 mt-2.5" />
        </div>
      </div>
    </div>
  );
}
