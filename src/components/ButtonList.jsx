import React from "react";
import Button from "./Button";
const ButtonList = () => {
  return (
    <div className="overflow-x-scroll w-[90vw] mt-3 hide-scrollbar scroll-smooth flex gap-3 ">
      {Array(16)
        .fill(0)
        .map((_, index) => (
          <Button key={index} />
        ))}
    </div>
  );
};

export default ButtonList;
