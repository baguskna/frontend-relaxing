import React from "react";

import ProductPill from "../../components/uis/product-pill/product-pill";
import { useAllProducts } from "../../hooks";
import { TProduct } from "../../utils/interfaces";
import "./product.scss";

const Product: React.FC = () => {
  const { data, error } = useAllProducts();
  console.log(data);

  return (
    <div className="product">
      <div className="product__first-tier">
        <div className="product__copy-wrapper">
          <h1 className="product__headline">Semua Produk</h1>
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
              images={product.images}
              price={product.price}
              thumbnail={product.thumbnail}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
