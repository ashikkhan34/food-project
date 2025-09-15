import React from "react";
import logo from "../assets/companyLogo/bookoff-corporation-logo.png";
import logo1 from "../assets/companyLogo/food.png";
import logo2 from "../assets/companyLogo/Group.png";
import logo3 from "../assets/companyLogo/mango-1.png";
import logo4 from "../assets/companyLogo/Vector (1).png";
import logo5 from "../assets/companyLogo/Vector.png";
import icon from '../assets/companyLogo/Icon.png'
import icon2 from '../assets/companyLogo/Icon (1).png'
import icon3 from '../assets/companyLogo/phn.png'

export default function CompanyLogo() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-around">
        <img src={logo5} alt="" />
        <img src={logo3} alt="" />
        <img src={logo2} alt="" />
        <img src={logo1} alt="" />
        <img src={logo} alt="" />
        <img src={logo4} alt="" />
      </div>

      <div className="flex gap-2 mt-14 ">
        <div className="flex gap-2">
            <div className="w-[310px] h-[150px] border rounded-sm border-gray-300">
                <div className="ml-4">
                    <img src={icon} alt="" />
                <h3>Our Location</h3>
                <p className="text-gray-500">1901 Thornridge Cir. Shiloh, Washington DC 20020, United States</p>
                </div>
            </div>
            <div className="w-[310px] h-[150px] border rounded-sm border-gray-300">
                <div className="ml-4">
                    <img src={icon3} alt="" />
                <h3>Call Us 24/7</h3>
                <p className="text-green-500 text-2xl">Call Us 24/7</p>
                </div>
            </div>
        </div>
        <div className="border border-gray-300 rounded-sm w-full">
            <div className="ml-4 px-4 ">
                <img src={icon2} alt="" />
                <p className="font-semibold text-sm">Subscribe Newsletter</p>
                <div className="flex relative">
                    <input type="email" placeholder="Your Email Address" className="w-full border border-gray-300 rounded-full p-2 mt-2"  />
                    <button className="btn bg-green-400 text-white px-10 py-6 rounded-full absolute ml-[455px] items-center mt-1">Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
