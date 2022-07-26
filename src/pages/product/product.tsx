import React from "react";
import { useLocation } from "react-router-dom";

import Skeleton from "../../components/layouts/skeleton/skeleton";
import Breadcrumb from "../../components/uis/breadcrumb/breadcrumb";
import ProductPill from "../../components/uis/product-pill/product-pill";
import { useAllProducts, useElementOnScreen } from "../../hooks";
import { TProduct } from "../../utils/interfaces";
import "./product.scss";

const isLoadingContainer = () => {
  return Array.from({ length: 16 }).map((u, i) => (
    <Skeleton
      key={i}
      classes={
        "w-[calc(50%-6px)] mb-6 sm:w-[calc(33%-6px)] lg:w-[calc(25%-15px)] min-h-[179px]"
      }
    />
  ));
};

const Product: React.FC = () => {
  const location = useLocation().pathname.split("/");
  const category = location[location.length - 1];
  const { limit, containerRef } = useElementOnScreen();
  const { data, error } = useAllProducts(category, limit);

  const isLoading = !data && !error;

  return (
    <>
      <Breadcrumb path={useLocation().pathname} />
      <div className="product">
        <div className="product__first-tier">
          <div className="product__copy-wrapper">
            {error ? (
              <h1 className="text-center">
                Something went wrong, try again later!
              </h1>
            ) : category === "product" ? (
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
            {isLoading
              ? isLoadingContainer()
              : data?.products?.map((product: TProduct) => (
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
        <div
          ref={containerRef}
          aria-label="bottom-page"
          data-testid="bottom-page"
        ></div>
      </div>
    </>
  );
};

export default Product;
