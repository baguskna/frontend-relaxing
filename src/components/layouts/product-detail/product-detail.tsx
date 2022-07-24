import React from "react";
import { useLocation } from "react-router-dom";

import Breadcrumb from "../../uis/breadcrumb/breadcrumb";

const ProductDetail: React.FC = () => {
  return (
    <div>
      <Breadcrumb path={useLocation().pathname} />
      <h1>Product detail</h1>
    </div>
  );
};

export default ProductDetail;
