import React from "react";
import img from "../assets/Image (5).png";
import img2 from "../assets/Image (6).png";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FoodStore() {
  return (
    <div className="flex  items-center gap-3 mt-20 mb-10 container mx-auto ">
      <div className="flex w-[40%] gap-3 ">
        <img className="w-68 h-80" src={img} alt="" />
        <img className="w-[400px] h-[357px]" src={img2} alt="" />
      </div>
      <div className="w-[60%] ml-56 space-y-2">
        <h1 className="text-3xl font-semibold">
          100% Trusted <br /> Organic Food Store
        </h1>
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <IoCheckmarkCircleSharp className="text-2xl text-green-500" />
          Healthy & natural food for lovers of healthy food.
        </h2>
        <p className="text-gray-500 ml-8 text-sm">
          Ut quis tempus erat. Phasellus euismod bibendum magna non tristique.
          Pellentesque semper vestibulum elit sed condimentum. Nunc pretium
          fermentum interdum.
        </p>
        <h1 className="text-xl font-semibold gap-2 flex items-center">
          <IoCheckmarkCircleSharp className="text-2xl text-green-500" />
          Every day fresh and quality products for you.
        </h1>
        <p className="text-gray-500 ml-8 text-sm">
          Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
          posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis
          felis. Sed vestibulum nisl sit amet sapien.
        </p>

        <button className="btn bg-green-500 px-12 py-6 mt-6 text-white rounded-full flex items-center">
          Shop now <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
