import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from '../assets/Group.png'
import img1 from '../assets/fruits 1.png'
import img2 from '../assets/Group (1).png'
import img3 from '../assets/meat 1.png'
import img4 from '../assets/soft-drink 1.png'
import img5 from '../assets/snacks 1.png'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Categorys() {
  return (
    <div>
      <div className="flex justify-between px-10 mt-10">
        <h1 className="font-semibold text-4xl">Shop by top Categories</h1>
        <p className="flex gap-3 items-center text-sm text-green-500">
          View All <FaArrowRight />
        </p>
      </div>

      <div className="flex gap-4 mb-10 justify-center mt-10">
        <div className="w-10 mr-4 h-10 rounded-full bg-white border border-gray-300  mt-20">
            <FaArrowLeftLong  className="ml-3 mt-2.5" />
        </div>
        <div className="w-44 h-52 rounded-xl text-center items-center justify-center border border-green-400 shadow-[0_4px_10px_2px_rgba(0,128,0,0.5)] ">
            <img className="justify-center items-center pt-10 ml-12" src={img} alt="" />
            <h1 className="text-xl text-green-500 pt-5">Vegetables</h1>
            <p className="text-sm text-gray-500">165 Products</p>
        </div>
        <div className="w-44 h-52 shadow-2xl text-center items-center justify-center">
            <img className="justify-center items-center pt-10 ml-12" src={img1} alt="" />
            <h1 className="text-xl text-green-500 pt-5">Fresh Fruit</h1>
            <p className="text-sm text-gray-500">137 Products</p>
        </div>
        <div className="w-44 h-52 shadow-2xl text-center items-center justify-center">
            <img className="justify-center items-center pt-10 ml-12" src={img2} alt="" />
            <h1 className="text-xl text-green-500 pt-5">Fish</h1>
            <p className="text-sm text-gray-500">34 Products</p>
        </div>
        <div className="w-44 h-52 shadow-2xl text-center items-center justify-center">
            <img className="justify-center items-center pt-10 ml-12" src={img3} alt="" />
            <h1 className="text-xl text-green-500 pt-5">Meat</h1>
            <p className="text-sm text-gray-500">165 Products</p>
        </div>
        <div className="w-44 h-52 shadow-2xl text-center items-center justify-center">
            <img className="justify-center items-center pt-10 ml-12" src={img4} alt="" />
            <h1 className="text-xl text-green-500 pt-5">Water and Drinks</h1>
            <p className="text-sm text-gray-500">48 Products</p>
        </div>
        <div className="w-44 h-52 shadow-2xl text-center items-center justify-center">
            <img className="justify-center items-center pt-10 ml-12" src={img5} alt="" />
            <h1 className="text-xl text-green-500 pt-5">Snacks</h1>
            <p className="text-sm text-gray-500">165 Products</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-white border border-gray-300 ml-4 mt-20">
            <FaArrowRight  className="ml-3 mt-2.5" />
        </div>
      </div>
    </div>
  );
}
