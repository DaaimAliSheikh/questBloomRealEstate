import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({ filterFunctions }) => {
  const [price, setPrice] = useState({ value: { min: 0, max: 10000000 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });

    filterFunctions?.handlepriceRange([value.min || 0, value.max]);
  };

  return (
    <>
      <div className="range-wrapper">
        <InputRange
          formatLabel={() => ``}
          maxValue={10000000}
          minValue={0}
          value={{
            min: filterFunctions?.priceRange[0],
            max: filterFunctions?.priceRange[1],
          }}
          onChange={(value) => handleOnChange(value)}
          id="slider"
        />
        <div className="d-flex align-items-center">
          <span id="slider-range-value1">${price.value.min}</span>
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
          <span id="slider-range-value2">${price.value.max}</span>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
