import React from "react";
import ProductCart from "./ProductCart"

const Product = () => {
  return (
    <div className="py-10 ">
      <div className="flex flex-col items-center space-y-10 ">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center space-y-10 ">
          Shopping EveryDay
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        {/* //text */}
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductCart/>
      </div>
    </div>
  );
};

export default Product;
