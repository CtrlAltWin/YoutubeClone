import React, { useState } from "react";

const Button = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <button
      className={`py-[5px] px-[14px] rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
        active ? "bg-gray-900 text-white" : "bg-neutral-100 text-black"
      }`}
      onClick={() => setActive(!active)}
    >
      Game Development
    </button>
  );
};

export default Button;
