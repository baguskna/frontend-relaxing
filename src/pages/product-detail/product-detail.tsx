import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useProductDetail } from "../../hooks";
import Breadcrumb from "../../components/uis/breadcrumb/breadcrumb";
import iconBag from "../../icons/icon-bag.svg";
import iconChecklist from "../../icons/icon-checklist.svg";
import iconTag from "../../icons/icon-tag.svg";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { data, error } = useProductDetail(id!);
  const [counter, setCounter] = useState<number>(1);
  console.log(data);

  return (
    <div>
      <Breadcrumb path={useLocation().pathname} />
      <div className="lg:flex lg:px-[55px] max-w-[1440px] lg:mx-auto lg:pt-6">
        <div className="lg:max-w-[570px] lg:w-full images__wrapper lg:flex lg:flex-row">
          <div className="hidden lg:flex flex-col pr-[30px]">
            {data?.images.map((image: string) => (
              <figure className="cursor-pointer mb-6">
                <img src={image} alt="" className="w-[70px] object-cover" />
              </figure>
            ))}
          </div>
          <figure>
            <img
              src={data?.images[0]}
              alt={data?.title}
              className="w-full h-[250px] object-cover sm:h-[350px] lg:h-[300px]"
            />
          </figure>
        </div>
        <div className="p-4 lg:pl-8 lg:pt-0">
          <p className="py-2 px-3 bg-grey-200 w-fit uppercase font-medium">
            {data?.brand}
          </p>
          <h1 className="py-4 text-grey-900 font-bold text-2xl">
            {data?.title}
          </h1>
          <p className="text-grey-800 font-bold text-xl pb-4">
            USD {data?.price}
          </p>
          <p className="pb-4">{data?.description}</p>
          <div className="counter">
            <h6 className="font-bold text-sm">Jumlah</h6>
            <div className="border-grey-300 border rounded w-fit flex mt-3">
              <button
                className="w-9 h-9 flex items-center justify-center text-grey-400"
                onClick={() => setCounter(counter - 1)}
              >
                -
              </button>
              <div className="w-9 h-9 flex items-center justify-center text-grey-400">
                {counter}
              </div>
              <button
                className="w-9 h-9 flex items-center justify-center text-grey-400"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
            </div>
            <div className="pt-4">
              <button
                className="w-full text-base h-12 py-2 px-4 rounded flex border border-grey-300 rounded items-center justify-center font-bold lg:max-w-[225px]"
                onClick={() => alert("TODO: Add to cart")}
              >
                <img src={iconBag} alt="" className="pr-3" />
                Tambah ke Keranjang
              </button>
            </div>
            <div className="pt-3 lg:flex">
              <div className="flex items-center justify-center w-fit">
                <img src={iconChecklist} alt="" />
                <span className="pl-2 text-grey-700 font-normal text-xs">
                  Free shipping
                </span>
              </div>
              <div className="flex pt-1 items-center justify-center w-fit lg:pt-0 lg:pl-2.5">
                <img src={iconTag} alt="" />
                <p className="pl-2 text-grey-700 font-normal text-xs">
                  <span className="font-bold">TAGS: </span>
                  News arrivals, Top women
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
