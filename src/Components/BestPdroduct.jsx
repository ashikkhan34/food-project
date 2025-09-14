import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";


import img1 from "../assets/bestProduct/v.png";
import img2 from '../assets/bestProduct/v1.png'
import img3 from '../assets/bestProduct/v2.png'
import img4 from '../assets/bestProduct/v3.png'
import img from '../assets/bestProduct/v4.png'

export default function BestPdroduct() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between  mx-auto mt-10">
        <h1 className="font-semibold text-4xl">Best Seller Products</h1>
        <p className="flex gap-3 items-center text-sm text-green-500">
          View All <FaArrowRight />
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10  mx-auto justify-center mb-10">
        <div className="w-[248px] h-[340px] border border-green-400 rounded-xl">
          <img src={img3} alt="" />
          <div className=" px-2 flex justify-between items-center">
            <div>
              <h1 className="text-gray-600 text-sm">Green Apple</h1>
            <p>
              $14.99
            </p>
            <h1 className="flex">
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-gray-700" />
            </h1>
            </div>
            <div className="w-14 h-14 rounded-full bg-green-500">
              <SlHandbag className="text-2xl ml-4 mt-3 "/>
            </div>
          </div>
        </div>

        <div className="w-[248px] h-[340px] border border-gray-300 rounded-xl">
          <img src={img1} alt="" />
          <div className=" px-2 flex justify-between items-center">
            <div>
              <h1 className="text-gray-600 text-sm">Chanise Cabbage</h1>
            <p>
              $14.99
            </p>
            <h1 className="flex">
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-gray-700" />
            </h1>
            </div>
            <div className="w-14 h-14 rounded-full bg-gray-200">
              <SlHandbag className="text-2xl ml-4 mt-3 "/>
            </div>
          </div>
        </div>

        <div className="w-[248px] h-[340px] border border-gray-300 rounded-xl">
          <img src={img2} alt="" />
          <div className=" px-2 flex justify-between items-center">
            <div>
              <h1 className="text-gray-600 text-sm">Green Lettuce</h1>
            <p>
              $14.99
            </p>
            <h1 className="flex">
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-gray-700" />
            </h1>
            </div>
            <div className="w-14 h-14 rounded-full bg-gray-200">
              <SlHandbag className="text-2xl ml-4 mt-3 "/>
            </div>
          </div>
        </div>

        <div className="w-[248px] h-[340px] border border-green-500 rounded-xl">
          <img src={img4} alt="" />
          <div className=" px-2 flex justify-between items-center">
            <div>
              <h1 className="text-gray-600 text-sm">Green Chili</h1>
            <p>
              $14.99
            </p>
            <h1 className="flex">
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-gray-700" />
            </h1>
            </div>
            <div className="w-14 h-14 rounded-full bg-green-500">
              <SlHandbag className="text-2xl ml-4 mt-3 "/>
            </div>
          </div>
        </div>

        <div className="w-[248px] h-[340px] border border-gray-300 rounded-xl">
          <img src={img} alt="" />
          <div className=" px-2 flex justify-between items-center">
            <div>
              <h1 className="text-gray-600 text-sm">Corn</h1>
            <p>
              $14.99
            </p>
            <h1 className="flex">
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-orange-400" />
              <IoIosStar className="text-gray-700" />
            </h1>
            </div>
            <div className="w-14 h-14 rounded-full bg-gray-200">
              <SlHandbag className="text-2xl ml-4 mt-3 "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
