import React from "react";
import { Link } from "react-router-dom";

import iconSirclo from "../../../icons/icon-sirclo.svg";
import iconCart from "../../../icons/icon-cart.svg";
import { useAppContext } from "../../../context/state";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const { cartContext } = useAppContext();

  return (
    <header className={styles.header}>
      <div className={styles.header__navWrapper}>
        <Link to="/">
          <img src={iconSirclo} alt="Sirclo" className={styles.header__logo} />
        </Link>
        <Link className={styles.header__navLink} to="/product">
          Produk
        </Link>
      </div>
      <figure className={`${styles.header__iconCartWrapper} cursor-pointer`}>
        <Link to="cart">
          <img src={iconCart} alt="" className={styles.header__iconCart} />
          <figcaption className={styles.header__iconCartCaption}>
            {cartContext?.length}
          </figcaption>
        </Link>
      </figure>
    </header>
  );
};

export default Header;
