import React, { useState } from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://m.media-amazon.com/images/I/81d5OrWJAkL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
  ];

  const prevSlide =()=>{
    setCurrentSlide(currentSlide === 0?2:(prev)=>prev-1)
  }
  const nextSlide =()=>{
    setCurrentSlide(currentSlide === 2?0:(prev)=>prev+1)
  }
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen-h-[650px] relative">
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} 
        className="w-full h-full flex transition-transform duration-1000">
          <img
            className="w-full h-auto"
            alt="banner1"
            src={data[0]}
            loading="priority"
          />
          <img className="w-full h-auto" alt="banner2" src={data[1]} />
          <img className="w-full h-auto" alt="banner3" src={data[2]} />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center 
          justify-center hover:cursor-point hover:bg-gray-700 
          hover:text-white active:bg-gray-900 duration-300">
            <HiOutlineArrowRight />
          </div>
          <div onClick={prevSlide} 
            className="w-14 h-12 border-[1px] border-gray-700 flex 
            items-center justify-center hover:cursor-point hover:bg-gray-700 
            hover:text-white active:bg-gray-900 duration-300">
            <HiOutlineArrowLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
