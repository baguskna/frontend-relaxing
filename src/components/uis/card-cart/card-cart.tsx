import React from "react";
import Counter from "../counter/counter";

import iconTrash from "../../../icons/icon-delete.svg";

const CardCart: React.FC = () => {
  return (
    <article className="flex card-cart relative">
      <figure className="shrink-0">
        <img
          className="w-[78px] h-[78px] rounded"
          src="https://dummyjson.com/image/i/products/11/thumbnail.jpg"
          alt=""
        />
      </figure>
      <div className="pl-3 sm:pl-4 sm:flex sm:justify-between	sm:w-full">
        <p className="text-sm font-normal text-grey-700">Item</p>
        <div className="hidden sm:block">
          <Counter />
        </div>
        <p className="text-sm font-normal text-grey-700 pt-3 sm:pt-0">
          USD 100
        </p>
        <div className="sm:hidden">
          <Counter />
        </div>
      </div>
      <figure className="absolute top-0 right-0 cursor-pointer sm:bottom-0 sm:top-[unset] sm:left-[94px] sm:right-[unset]">
        <img src={iconTrash} alt="" className="h-3 w-[11px]" />
      </figure>
    </article>
  );
};

export default CardCart;
