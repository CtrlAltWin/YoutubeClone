import React, { useState } from "react";

const Button = ({title}) => {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`py-[5px] px-[14px] rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
        active ? "bg-gray-900 text-white" : "bg-neutral-100 text-black"
      }`}
      onClick={() => setActive(!active)}
    >
      {title}
    </button>
  );
};

export default Button;
