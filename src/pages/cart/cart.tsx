import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Breadcrumb from "../../components/uis/breadcrumb/breadcrumb";
import CardCart from "../../components/uis/card-cart/card-cart";
import { useAppContext } from "../../context/state";
import "./cart.scss";

const Cart: React.FC = () => {
  const { cartContext } = useAppContext();
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    setProducts(cartContext);
  }, [cartContext, setProducts]);

  // total price
  const totalPrice = products?.reduce((acc: number, cur: any) => {
    return acc + cur.price * cur.count;
  }, 0);

  return (
    <div>
      <Breadcrumb path={useLocation().pathname} />
      <div className="py-6 px-4 lg:px-[55px] max-w-[1440px] lg:mx-auto lg:pt-8 sm:flex sm:flex-row sm:justify-between">
        <div className="grow sm:pr-[30px]">
          <div className="sm:flex sm:justify-between">
            <h1 className="text-grey-700 font-bold text-2xl">Keranjang</h1>
            <p className="text-grey-700 font-normal text-sm">
              {products?.length ?? "0"} Produk
            </p>
          </div>
          <div className="border border-grey-300 mt-4 rounded p-4">
            {products?.length > 0 ? (
              products?.map((product: any) => {
                return (
                  <CardCart
                    key={product.id}
                    image={product.image}
                    id={product.id}
                    count={product.count}
                    title={product.title}
                    price={product.price}
                  />
                );
              })
            ) : (
              <div className="text-center">
                <h1 className="text-grey-700 font-bold text-2xl">
                  Keranjang Kosong
                </h1>
                <p className="text-grey-700 font-normal text-sm">
                  Silahkan tambah produk ke keranjang anda
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          {products?.length > 0 ? (
            <>
              <div className="mt-[21px] border border-grey-300 rounded p-4 bg-grey-050 sm:mt-0 lg:min-w-[370px]">
                <div className="flex items-center justify-between">
                  <p className="font-normal text-grey-700 text-xs">
                    Harga barang
                  </p>
                  <p className="font-normal text-grey-700 text-xs">
                    USD {totalPrice}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="font-normal text-grey-700 text-xs">
                    Pengiriman (ANTERAJA - REG)
                  </p>
                  <p className="font-normal text-grey-700 text-xs">USD 5</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="font-normal text-grey-700 text-xs">
                    Biaya pembayaran
                  </p>
                  <p className="font-normal text-grey-700 text-xs">USD 0</p>
                </div>
                <div className="divider border-dashed	border-[0.5px] border-grey-300 my-3"></div>
                <div className="flex items-center justify-between pt-2">
                  <p className="font-bold text-grey-700 text-xs">
                    Total Tagihan
                  </p>
                  <p className="font-bold text-grey-700 text-xs">
                    USD {totalPrice + 5}
                  </p>
                </div>
              </div>
              <button className="bg-blue-300 mt-[21px] text-white	rounded h-12 w-full flex items-center justify-center font-bold text-base">
                Beli Sekarang
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cart;
