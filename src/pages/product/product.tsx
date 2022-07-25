import React from "react";
import { useLocation } from "react-router-dom";

import Breadcrumb from "../../components/uis/breadcrumb/breadcrumb";
import ProductPill from "../../components/uis/product-pill/product-pill";
import { useAllProducts } from "../../hooks";
import { TProduct } from "../../utils/interfaces";
import "./product.scss";

const Product: React.FC = () => {
  const location = useLocation().pathname.split("/");
  const category = location[location.length - 1];
  const { data, error } = useAllProducts(category);
  console.log(data);

  return (
    <>
      <Breadcrumb path={useLocation().pathname} />
      <div className="product">
        <div className="product__first-tier">
          <div className="product__copy-wrapper">
            {category === "product" ? (
              <h1 className="product__headline">Semua Produk</h1>
            ) : (
              <h1 className="product__headline">Produk {category}</h1>
            )}
            {data?.products?.length ? (
              <p className="product__total-product">
                Menampilkan {data?.products?.length} produk
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap justify-between pt-6">
            {data?.products?.map((product: TProduct) => (
              <ProductPill
                key={product.id}
                brand={product.brand}
                category={product.category}
                id={product.id}
                images={product.images}
                price={product.price}
                thumbnail={product.thumbnail}
                title={product.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
