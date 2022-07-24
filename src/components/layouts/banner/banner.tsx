import React from "react";

import "./banner.scss";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__content-copy">
          <h2 className="banner__title">SUMMER SALE</h2>
          <h1 className="banner__main-title">
            GEt 30% OFF
            <br />
            On all dress
          </h1>
        </div>
        <div className="banner__content-img"></div>
      </div>
    </div>
  );
};

export default Banner;
