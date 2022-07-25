import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useProductDetail } from "../../hooks";
import Breadcrumb from "../../components/uis/breadcrumb/breadcrumb";
import iconBag from "../../icons/icon-bag.svg";
import iconChecklist from "../../icons/icon-checklist.svg";
import iconTag from "../../icons/icon-tag.svg";
import Counter from "../../components/uis/counter/counter";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { data, error } = useProductDetail(id!);
  const [counter, setCounter] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<number>(0);

  const addToCart: () => void = () => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");

    // update data in localStorage if find the same id
    const index = data.findIndex((a: any) => a.id === id);
    if (index !== -1) {
      data[index].count = counter;
    }
    // add new data if not find the same id
    else {
      data.push({ id, count: counter });
    }
    localStorage.setItem("cart", JSON.stringify(data));
  };

  return (
    <div>
      <Breadcrumb path={useLocation().pathname} />
      <div className="lg:flex lg:px-[55px] max-w-[1440px] lg:mx-auto lg:pt-6">
        <div className="lg:max-w-[570px] lg:w-full images__wrapper lg:flex lg:flex-row">
          <div className="hidden lg:flex flex-col pr-[30px] shrink-0">
            {data?.images.map((image: string, index: number) => (
              <figure
                key={index}
                className={`cursor-pointer mb-6 ${
                  activeImage === index
                    ? "border-2 border-grey-800"
                    : "border-2 border-transparent"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt="" className="w-[70px] object-cover" />
              </figure>
            ))}
          </div>
          <figure>
            <img
              src={data?.images[activeImage]}
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
            <div className="mt-3">
              <Counter counter={counter} setCounter={setCounter} />
            </div>
            <div className="pt-4">
              <button
                className="w-full text-base h-12 py-2 px-4 rounded flex border border-grey-300 rounded items-center justify-center font-bold lg:max-w-[225px]"
                onClick={addToCart}
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
