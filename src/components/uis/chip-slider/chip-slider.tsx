import React from "react";
import { Link } from "react-router-dom";

import "./chip-slider.scss";

type TChipSliderProps = {
  category: string;
};

const ChipSlider: React.FC<TChipSliderProps> = ({ category }) => {
  return (
    <Link className="chip" to={category}>
      <div>
        <h3 className="chip-text">{category}</h3>
      </div>
    </Link>
  );
};

export default ChipSlider;
