// components/Footer.js

import { TwitterLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  SiSamsungpay,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-[#000] text-white px-6 py-10 rounded-xl mb-10 md:mb-16 text-center md:flex md:items-center md:justify-center gap-3">
          <h1 className="text-3xl md:text-5xl  font-bold mb-4 text-muted">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="flex flex-col items-center justify-center  mt-8 gap-4 md:items-center md:justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-full w-full md:w-80 "
            />
            <button className="bg-[#ffff]  w-full px-6 py-3 rounded-full font-semibold text-[#000]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <div className=" flex flex-col md:flex md:flex-row gap-4 md:gap-2">
          <div className="md:w-4/12">
            <div className="">
              <h3 className="text-2xl font-extrabold mb-4">SHOP.CO</h3>
              <p className="mb-4 text-muted-foreground">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
            </div>
            <div className="flex flex-row space-x-4 sm:col-span-2 ">
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagramSquare />
              </a>
              <a href="#" aria-label="Pinterest">
                <FaPinterest />
              </a>
            </div>
          </div>

          <div className="grid grid-rows-2 grid-cols-2 gap-4 md:grid md:grid-rows-1 md:grid-cols-4 md:gap-14">
            <div className="">
              <h4 className="font-bold">COMPANY</h4>
              <a href="#" className="block text-muted-foreground">
                About
              </a>
              <a href="#" className="block text-muted-foreground">
                Features
              </a>
              <a href="#" className="block text-muted-foreground">
                Works
              </a>
              <a href="#" className="block text-muted-foreground">
                Career
              </a>
            </div>
            <div className="">
              <h4 className="font-bold">HELP</h4>
              <a href="#" className="block text-muted-foreground">
                Customer Support
              </a>
              <a href="#" className="block text-muted-foreground">
                Delivery Details
              </a>
              <a href="#" className="block text-muted-foreground">
                Terms & Conditions
              </a>
              <a href="#" className="block text-muted-foreground">
                Privacy Policy
              </a>
            </div>
            <div className="">
              <h4 className="font-bold">FAQ</h4>
              <a href="#" className="block text-muted-foreground">
                Account
              </a>
              <a href="#" className="block text-muted-foreground">
                Manage Deliveries
              </a>
              <a href="#" className="block text-muted-foreground">
                Orders
              </a>
              <a href="#" className="block text-muted-foreground">
                Payment
              </a>
            </div>
            <div className="">
              <h4 className="font-bold">RESOURCES</h4>
              <a href="#" className="block text-muted-foreground">
                Free eBooks
              </a>
              <a href="#" className="block text-muted-foreground">
                Development Tutorial
              </a>
              <a href="#" className="block text-muted-foreground">
                How to - Blog
              </a>
              <a href="#" className="block text-muted-foreground">
                YouTube Playlist
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6">
          <p className="text-muted-foreground">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcApplePay />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
