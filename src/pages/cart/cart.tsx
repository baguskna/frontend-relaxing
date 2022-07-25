import React from "react";
import { useLocation } from "react-router-dom";

import Breadcrumb from "../../components/uis/breadcrumb/breadcrumb";

const Cart: React.FC = () => {
  return (
    <div>
      <Breadcrumb path={useLocation().pathname} />
      <div className="py-6 px-4 lg:px-[55px] max-w-[1440px] lg:mx-auto lg:pt-8">
        <div>
          <h1 className="text-grey-700 font-bold text-2xl">Keranjang</h1>
          <p className="text-grey-700 font-normal text-sm">3 Produk</p>
        </div>
        <div className="border border-grey-300"></div>
      </div>
    </div>
  );
};

export default Cart;
