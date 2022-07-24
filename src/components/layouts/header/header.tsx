import React from "react";
import { Link } from "react-router-dom";

import iconSirclo from "../../../icons/icon-sirclo.svg";
import iconCart from "../../../icons/icon-cart.svg";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__nav-wrapper">
        <Link to="/">
          <img src={iconSirclo} alt="Sirclo" className="header__logo" />
        </Link>
        <Link className="header__nav-link" to="/product">
          Produk
        </Link>
      </div>
      <figure className="header__icon-cart-wrapper">
        <img src={iconCart} alt="" className="header__icon-cart" />
        <figcaption className="header__icon-cart-caption">0</figcaption>
      </figure>
    </header>
  );
};

export default Header;
