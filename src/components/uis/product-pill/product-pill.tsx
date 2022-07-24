import React from "react";
import { Link } from "react-router-dom";

import { TProduct } from "../../../utils/interfaces";
import "./product-pill.scss";

const ProductPill: React.FC<TProduct> = ({
  brand,
  category,
  id,
  images,
  price,
  thumbnail,
  title,
}) => {
  return (
    <article className="w-[calc(50%-6px)] mb-6 sm:w-[calc(33%-6px)] lg:w-[calc(25%-15px)] cursor-pointer">
      <Link to={`/product/${category}/${id}`}>
        <figure className="relative pb-[56.25%] overflow-hidden">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={thumbnail}
            alt={title}
          />
        </figure>
        <footer className="pt-3">
          <h1 className="product__brand">{brand}</h1>
          <h1 className="product__title pb-2">{title}</h1>
          <p className="product__price">USD {price}</p>
        </footer>
      </Link>
    </article>
  );
};

export default ProductPill;
