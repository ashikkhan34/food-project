import React from "react";
import img from "../assets/footer/Vector.png";
import footerimg1 from '../assets/footer/Cart.png'
import footerimg2 from '../assets/footer/Method=ApplePay.png'
import footerimg3 from '../assets/footer/Method=Discover.png'
import footerimg4 from '../assets/footer/Method=Mastercard.png'
import footerimg5 from '../assets/footer/Method=Visa.png'

export default function Footer() {
  return (
    <div>
      <div className="footer1 w-full bg-black mt-10 h-[315px]">
        <div>
          <footer className="container mx-auto footer sm:footer-horizontal text-white p-10">
            <aside>
              <div className="flex justify-center gap-2">
                <img src={img} alt="" />
                <h1 className="text-4xl font-semibold text-white ">Ecobazar</h1>
              </div>
              <p className="text-gray-400 w-sm">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>

              <div className="flex gap-3 mt-4">
                <div>
                  <p>(219) 555-0114</p>
                  <hr className="mt-2 border-2 text-green-500" />
                </div>
                <p className="text-gray-500">or</p>
                <div>
                  <p>Proxy@gmail.com</p>
                  <hr className="mt-2 border-2 text-green-500" />
                </div>
              </div>
            </aside>
            <nav>
              <h6 className=" text-white">Services</h6>
              <a className="text-gray-500">Branding</a>
              <a className="text-gray-500">Design</a>
              <a className="text-gray-500">Marketing</a>
              <a className="text-gray-500">Advertisement</a>
            </nav>
            <nav>
              <h6 className=" text-white">Help</h6>
              <a className="text-gray-500">Branding</a>
              <a className="text-gray-500">Design</a>
              <a className="text-gray-500">Marketing</a>
              <a className="text-gray-500">Advertisement</a>
            </nav>
            <nav>
              <h6 className=" text-white">Proxy</h6>
              <a className="text-gray-500">Branding</a>
              <a className="text-gray-500">Design</a>
              <a className="text-gray-500">Marketing</a>
              <a className="text-gray-500">Advertisement</a>
            </nav>
            <nav>
              <h6 className=" text-white">Category</h6>
              <a className="text-gray-500">Branding</a>
              <a className="text-gray-500">Design</a>
              <a className="text-gray-500">Marketing</a>
              <a className="text-gray-500">Advertisement</a>
            </nav>
          </footer>
        </div>
        <hr className="text-gray-400 container mx-auto" />

        <div>
          <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 items-center">
            <div class="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; 2025 eCommerce. All Rights Reserved.
            </div>
            <div class="flex items-center space-x-2 mt-6">
              <img src={footerimg1} alt="" />
              <img src={footerimg2} alt="" />
              <img src={footerimg3} alt="" />
              <img src={footerimg4} alt="" />
              <img src={footerimg5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
