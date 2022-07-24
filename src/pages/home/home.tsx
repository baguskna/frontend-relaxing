import React from "react";

import Banner from "../../components/layouts/banner/banner";
import CategorySlider from "../../components/layouts/category-slider/category-slider";
import Footer from "../../components/layouts/footer/footer";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Banner />
      <CategorySlider />
      <Footer />
    </>
  );
};

export default Home;