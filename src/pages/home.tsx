import React from "react";

import Banner from "../components/layouts/banner/banner";
import CategorySlider from "../components/layouts/category-slider/category-slider";
import Header from "../components/layouts/header/header";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="main-content">
        <Banner />
        <CategorySlider />
      </div>
    </>
  );
};

export default Home;
