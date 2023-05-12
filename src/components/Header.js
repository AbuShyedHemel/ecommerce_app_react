import { CartLogo, MainLogo } from "../asstes";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFOnt">
      <div className="max-w-screen-xl h-full mx-auto flex item-center justify-between ">
        <div>
          <img className="w-20" src={MainLogo} alt="logo" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="max-w-screen-xl h-full item-center justify-between flex items-center gap-8">
            <li
              className="text-base text-black font-bold hover:text-orange-400 
            hover:underline underline-offset-2 decoration-1px cursor-pointer duration-300">
              Home
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-400 
            hover:underline underline-offset-2 decoration-1px cursor-pointer duration-300">
              Shop
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-400 
            hover:underline underline-offset-2 decoration-1px cursor-pointer duration-300">
              Element
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-400 
            hover:underline underline-offset-2 decoration-1px cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-10" src={CartLogo} alt="cartLogo" />
            <span className="absolute w-10 top-4 left-0 text-sm flex items-center justify-center font-semibold font-sans">
             0
            </span>
          </div>
          <img alt="profile" className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1bNiLkJdKgheMl1Bqi1eecDJsufGqq82LA&usqp=CAU"/>
        </div>
      </div>
    </div>
  );
};
export default Header;
