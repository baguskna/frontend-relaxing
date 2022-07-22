import React from "react";

import iconSirclo from "../../icons/icon-sirclo.svg";
import iconCart from "../../icons/icon-cart.svg";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__nav-wrapper">
        <img src={iconSirclo} alt="Sirclo" className="header__logo" />
        <a href="#" className="header__nav-link">
          Produk
        </a>
      </div>
      <figure className="header__icon-cart-wrapper">
        <img src={iconCart} alt="" className="header__icon-cart" />
        <figcaption className="header__icon-cart-caption">0</figcaption>
      </figure>
    </header>
  );
};

export default Header;
