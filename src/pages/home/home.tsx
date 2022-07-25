import React from "react";

import Banner from "../../components/layouts/banner/banner";
import CategorySlider from "../../components/layouts/category-slider/category-slider";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <CategorySlider />
    </>
  );
};

export default Home;
