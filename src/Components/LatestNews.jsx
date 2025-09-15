import React from "react";
import img from "../assets/news/Image.png";
import img1 from '../assets/news/Image (1).png'
import img2 from '../assets/news/Image (2).png'
import { FaUser } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

export default function LatestNews() {
  return (
    <div className="container mx-auto">
      <div className="latest bg-cover h-[550px] ">
        <div>
          <div className=" text-center mt-20">
            <p className="text-green-500">BLOG</p>
            <h1 className="text-3xl font-semibold">Latest News</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-14">
            <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={img}
                  alt="Orange"
                  className="w-full h-52 object-cover"
                />
                {/* Date Badge */}
                <div className="absolute bottom-4 left-3 bg-white text-black px-3 py-2 text-center rounded-md shadow-md">
                  <p className="text-lg font-bold">18</p>
                  <p className="text-xs uppercase">Nov</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Meta Info */}
                <div className="flex items-center text-gray-500 text-sm space-x-4 mb-3">
                  <span  className="flex gap-2 items-center">
                    <IoFastFoodOutline />
                    Food
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaUser></FaUser> By Admin
                  </span>
                  <span className="flex gap-2 items-center">
                    <MdOutlineModeComment />
                    65 Comments
                  </span>
                </div>

                {/* Title / Description */}
                <p className="text-gray-700 font-medium mb-3">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:underline flex items-center gap-1"
                >
                  Read More <span>→</span>
                </a>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={img1}
                  alt="Orange"
                  className="w-full h-52 object-cover"
                />
                {/* Date Badge */}
                <div className="absolute bottom-4 left-3 bg-white text-black px-3 py-2 text-center rounded-md shadow-md">
                  <p className="text-lg font-bold">23</p>
                  <p className="text-xs uppercase">Jan</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Meta Info */}
                <div className="flex items-center text-gray-500 text-sm space-x-4 mb-3">
                  <span  className="flex gap-2 items-center">
                    <IoFastFoodOutline />
                    Food
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaUser></FaUser> By Admin
                  </span>
                  <span className="flex gap-2 items-center">
                    <MdOutlineModeComment />
                    65 Comments
                  </span>
                </div>

                {/* Title / Description */}
                <p className="text-gray-700 font-medium mb-3">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:underline flex items-center gap-1"
                >
                  Read More <span>→</span>
                </a>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={img2}
                  alt="Orange"
                  className="w-full h-52 object-cover"
                />
                {/* Date Badge */}
                <div className="absolute bottom-4 left-3 bg-white text-black px-3 py-2 text-center rounded-md shadow-md">
                  <p className="text-lg font-bold">15</p>
                  <p className="text-xs uppercase">Nov</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Meta Info */}
                <div className="flex items-center text-gray-500 text-sm space-x-4 mb-3">
                  <span  className="flex gap-2 items-center">
                    <IoFastFoodOutline />
                    Food
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaUser></FaUser> By Admin
                  </span>
                  <span className="flex gap-2 items-center">
                    <MdOutlineModeComment />
                    65 Comments
                  </span>
                </div>

                {/* Title / Description */}
                <p className="text-gray-700 font-medium mb-3">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="text-green-600 font-semibold hover:underline flex items-center gap-1"
                >
                  Read More <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
