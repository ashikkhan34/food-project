import React from "react";
import img from "../assets/Image.png";
import {
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsDot } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="hero container w-full h-[440px] mb-12">
      <div className="flex items-center justify-evenly ">
        <div className="flex items-center">
          <div className="h-20 w-20 rounded-full bg-white shadow-sm ">
            <FaArrowLeft className="text-2xl ml-7 mt-7" />
          </div>
          <img className="w-[540px] mt-14" src={img} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="text-sm text-green-600">Welcome to shopery</p>
            <h1 className="text-6xl font-semibold py-4">
              Fresh & Healthy <br /> Organic Food
            </h1>
            <p className="text-3xl font-semibold">
              Sale up to <span className="text-orange-400">30% OFF</span>
            </p>
            <p className="text-gray-500 text-sm">
              Free shipping on all your order. we deliver, you enjoy
            </p>
            <button className="w-48 h-14 rounded-4xl bg-green-500 flex justify-center items-center text-center text-white gap-2 mt-6">
              shop now <FaArrowRight />
            </button>
          </div>
          <div className="h-20 w-20 rounded-full bg-white shadow-sm ">
              <FaArrowRightLong className="text-2xl ml-7 mt-7" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <BsDot className="text-4xl" />
        <BsDot className="text-4xl text-green-600" />
        <BsDot className="text-4xl"/>
      </div>
    </div>
  );
}
