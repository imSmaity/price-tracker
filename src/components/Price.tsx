import React from "react";

const Price = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start">
        <div className="text-xl leading-5">63,179.71</div>
        <div className="text-secondary text-lg leading-4">USD</div>
      </div>
      <div className="text-profit text-base">+ 2,161.42 (3.54%)</div>
    </div>
  );
};

export default Price;
