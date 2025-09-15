import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { RiShoppingBagLine } from "react-icons/ri";

export default function FeatureProduct() {
  const [activeIndex, setActiveIndex] = useState(null);

  const products = [
    {
      id: 1,
      name: "Green Apple",
      price: 14.99,
      oldPrice: 20.99,
      img: "https://i.ibb.co.com/Z6nkQ1mM/Image-1.png",
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      price: 14.99,
      oldPrice: 14.99,
      img: "https://i.ibb.co.com/qLsVKX8Q/Image-2.png",
    },
    {
      id: 3,
      name: "Green Capsicum",
      price: 14.99,
      oldPrice: 14.99,
      img: "https://i.ibb.co.com/ch0nR5g7/Image-3.png",
    },
    {
      id: 4,
      name: "Ladies Finger",
      price: 14.99,
      oldPrice: 14.99,
      img: "https://i.ibb.co.com/DH2ynvkg/Image-4.png",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between px-10 mt-10">
        <h1 className="font-semibold text-4xl">Feature Product</h1>
        <p className="flex gap-3 items-center text-sm text-green-500">
          View All <FaArrowRight />
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-2 mt-10 ml-10">
        {products.map((product, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className={`w-[300px] h-[400px] rounded-sm mb-10 cursor-pointer transition 
              ${
                isActive
                  ? "border border-green-500 shadow-2xl"
                  : "border border-gray-300"
              }`}
            >
              <div className="w-[300px] h-[250px] mb-10">
                <img src={product.img} alt={product.name} />
                <div className="flex justify-between items-center px-5">
                  <div>
                    <h1 className="text-gray-600 text-xl">{product.name}</h1>
                    <p>
                      ${product.price}{" "}
                      <span className="line-through text-gray-700">
                        ${product.oldPrice}
                      </span>
                    </p>
                    <h1 className="flex">
                      <IoIosStar className="text-orange-400" />
                      <IoIosStar className="text-orange-400" />
                      <IoIosStar className="text-orange-400" />
                      <IoIosStar className="text-orange-400" />
                      <IoIosStar className="text-gray-700" />
                    </h1>
                  </div>
                  <div>
                    <div
                      className={`w-16 h-16 rounded-full relative 
                      ${isActive ? "bg-green-500" : "bg-gray-300"}`}
                    >
                      <RiShoppingBagLine
                        className={`absolute text-3xl ml-4 mt-4 
                        ${isActive ? "text-white" : "text-gray-900"}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
