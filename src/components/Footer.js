import React from "react";
import { MainLogo, PaymentLogo } from "../asstes";
import { ImGithub } from "react-icons/im";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* ============>Icon<========== */}
        <div className="flex flex-col gap-4">
          <img className="w-20 " src={MainLogo} alt="Logo" />
          <p className="text-white text-sm tracking-wide">@ HemelBD.com</p>
          <img className="w-56" src={PaymentLogo} alt="Payment" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* ===================>Icon End<============== */}
        {/* ===================>Locate US End<============== */}
        <div>
          <h2 className="text-2xl font-semibold text-white font-bodyFont mb-4">
            LocaeteUS
          </h2>
          <div className="text-lg text-gray-400 font-serif flex flex-col gap-2">
            <p>Abu Shyed Hemel</p>
            <p>Middle Paikpara, Dhaka-1216</p>
            <p>017000000000</p>
            <p>abushyedhemel01@gmail.com</p>
          </div>
        </div>
        {/* ===================>Locate US End<============== */}
        {/* ===================>Profile Start<============== */}
        <div className="text-lg text-gray-400 font-serif flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white font-bodyFont mb-4">
            Profile
          </h2>
          <div>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>{" "}
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>{" "}
              Order Tracking
            </p>
          </div>
        </div>
        {/* ===================>Profile Start<============== */}
        {/* ===================>Subscribe Start<============== */}
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
