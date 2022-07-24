import React from "react";

import "./chip-slider.scss";

type TChipSliderProps = {
  category: string;
};

const ChipSlider: React.FC<TChipSliderProps> = ({ category }) => {
  return (
    <a className="chip">
      <div>
        <h3 className="chip-text">{category}</h3>
      </div>
    </a>
  );
};

export default ChipSlider;
