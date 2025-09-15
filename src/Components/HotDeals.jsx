import React from "react";
import img from "../assets/bestDeals/Image.png";
import img1 from "../assets/bestDeals/Image (1).png";
import img2 from "../assets/bestDeals/Image (2).png";
import img3 from "../assets/bestDeals/Image (3).png";
import img4 from "../assets/bestDeals/Image (4).png";
import img5 from "../assets/bestDeals/Image (5).png";
import img6 from "../assets/bestDeals/Image (6).png";
import img7 from "../assets/bestDeals/Image (7).png";
import img8 from "../assets/bestDeals/Image (8).png";
import { FaRegEye, FaStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HotDeals() {
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-2 mb-10">
      <div>
        <h1 className="text-2xl font-semibold">Hot Deals</h1>
        <div className="w-[300px] h-[110px] border border-gray-300 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img} alt="" />
            <div>
              <p className="text-gray-700">Green Apple</p>
              <h1>$14.99</h1>
              <div className="flex">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[110px] border border-green-500 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img1} alt="" />
            <div>
              <p className="text-green-500">Indian Malta</p>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-full bg-green-500">
                  <HiOutlineShoppingBag className="text-2xl  ml-3 text-white" />
                </button>

                <button className="w-12 h-12 rounded-full border border-gray-300">
                  <FaRegEye className="text-2xl ml-3" />
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-300">
                  <CiHeart className="text-2xl ml-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[110px] border border-gray-300 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img2} alt="" />
            <div>
              <p className="text-gray-700">Green Lettuce</p>
              <h1>$14.99</h1>
              <div className="flex">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Best Seller</h1>
        <div className="w-[300px] h-[110px] border border-gray-300 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img3} alt="" />
            <div>
              <p className="text-gray-700">Eggplant</p>
              <h1>$14.99</h1>
              <div className="flex">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[110px] border border-gray-300 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img4} alt="" />
            <div>
              <p className="text-gray-700">Red Capsicum</p>
              <h1>
                $14.99 <span className="text-gray-500">$20.99</span>
              </h1>
              <div className="flex">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[110px] border border-gray-300 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img5} alt="" />
            <div>
              <p className="text-gray-700">Red Tomatos</p>
              <h1>$14.99</h1>
              <div className="flex">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Top Rated</h1>
        <div className="w-[300px] h-[110px] border border-gray-300 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img6} alt="" />
            <div>
              <p className="text-gray-700">Big Potatos</p>
              <h1>$14.99</h1>
              <div className="flex">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[110px] border border-gray-300 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img7} alt="" />
            <div>
              <p className="text-gray-700">Red Capsicum</p>
              <h1>
                $14.99 <span className="text-gray-500">$20.99</span>
              </h1>
              <div className="flex">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[110px] border border-gray-300 rounded-sm mt-4">
          <div className="flex gap-3.5 items-center">
            <img src={img8} alt="" />
            <div>
              <p className="text-gray-700">Red Tomatos</p>
              <h1>$14.99</h1>
              <div className="flex">
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-orange-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hot w-[310px] h-[410px]">
        <div className="text-center justify-center mt-10">
          <p className="text-sm">HOT SALE</p>
          <h1 className="text-3xl py-3"><span className="font-semibold">Save 37%</span> on <br /> Every Order</h1>
            <button className="w-[160px] h-[40px] rounded-full bg-white text-green-500  font-semibold flex items-center ml-20"><h1 className="ml-5">Shop Now</h1><FaArrowRightLong  className="ml-2 "/></button>
        </div>
      </div>
    </div>
  );
}
