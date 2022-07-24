import React from "react";

import ChipSlider from "../../uis/chip-slider/chip-slider";
import "./category-slider.scss";

const CategorySlider: React.FC = () => {
  return (
    <div className="chip-wrapper">
      <ChipSlider />
      <ChipSlider />
      <ChipSlider />
      <ChipSlider />
      <ChipSlider />
    </div>
  );
};

export default CategorySlider;
