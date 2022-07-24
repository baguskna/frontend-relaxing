import React from "react";
import { useAllCategories } from "../../../hooks";

import ChipSlider from "../../uis/chip-slider/chip-slider";
import "./category-slider.scss";

const CategorySlider: React.FC = () => {
  const { data, error } = useAllCategories();

  return (
    <div className="chip-wrapper">
      {data?.map((category: string) => (
        <ChipSlider key={category} category={category} />
      ))}
    </div>
  );
};

export default CategorySlider;
