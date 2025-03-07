import React, { useEffect, useState } from "react";
import Button from "./Button";
import { catagoriesUrl } from "../utils/url";

const ButtonList = () => {
  const [catagories, setCatagories] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(catagoriesUrl);
      const json = await data.json();
      setCatagories(json.items);
    };
    fetchData();
  }, []);
  return (
    <div className="overflow-x-scroll w-[90vw] h-10 mt-3 hide-scrollbar scroll-smooth flex gap-3">
      {catagories.map((catagory, index) => (
        <Button
          key={catagory.id}
          index={index}
          title={catagory.snippet.title}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      ))}
    </div>
  );
};

export default ButtonList;
