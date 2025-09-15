import React from "react";
import { CiHeart, CiLocationOn, CiUser } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiThreeLeaves } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  
  return (
    <div>
      <header className="head items-center w-full">
        <nav className=" container mx-auto  flex justify-between  ">
          <div className="flex gap-2 items-center ">
            <CiLocationOn className="text-xl" />
            <p className="text-green-800 font-sm">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>
          <div className="mt-2 ">
            <select className="text-sm text-green-800">
              <option value="">English</option>
              <option value="">Bangle</option>
            </select>

            <select className="text-sm text-green-800">
              <option value="">USD</option>
              <option value="">BDT</option>
            </select>
          </div>
        </nav>

        <nav>
          <div className="flex justify-around h-18 bg-white mb-20 items-center">
            <div className="flex gap-4 items-center">
              <ul className="flex gap-6">
                <NavLink to='/'><li><a href="">Home</a></li></NavLink>
                <NavLink to='/shop'><li><a href="">Shop</a></li></NavLink>
                <NavLink><li><a href="">Page</a></li></NavLink>
                <NavLink><li><a href="">Blog</a></li></NavLink>
                <NavLink><li><a href="">About</a></li></NavLink>
              </ul>
            </div>

            <div>
              <h1 className="text-2xl flex gap-1 items-center">
                <GiThreeLeaves className="text-green-600 text-2xl " />
                Ecobazar
              </h1>
            </div>

            <div className="flex gap-4">
              <h1 className="flex gap-2 items-center">
                <FiPhoneCall className="text-xl" />
                (219) 555-0114
              </h1>
              <GoSearch className="text-xl" />
              <CiHeart className="text-xl" />
              <IoBagOutline className="text-xl" />
              <CiUser className="text-xl" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
