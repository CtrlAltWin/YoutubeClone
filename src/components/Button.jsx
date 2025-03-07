import React, { useState } from "react";

const Button = ({ index, title, activeButton, setActiveButton }) => {
  return (
    <button
      className={`py-[5px] px-[14px] rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
        activeButton === index
          ? "bg-gray-900 text-white"
          : "bg-neutral-100 text-black"
      }`}
      onClick={() => setActiveButton((prev) => (prev === index ? null : index))}
    >
      {title}
    </button>
  );
};

export default Button;
