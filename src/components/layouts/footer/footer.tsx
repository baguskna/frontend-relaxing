import React from "react";

import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        © 2022 Design Starter Kit. Powered by SIRCLO.
      </p>
    </footer>
  );
};

export default Footer;
