import React, { useEffect, useState } from "react";
import Button from "./Button";
import { catagoriesUrl } from "../utils/url";
import { useDispatch, useSelector } from "react-redux";
import { addCatagories } from "../utils/homeVideosSlice";
const ButtonList = () => {
  const dispatch = useDispatch();
  const catagories = useSelector((store) => store.homeVideos.catagories);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(catagoriesUrl);
      const json = await data.json();
      dispatch(addCatagories(json?.items));
    };
    if (!catagories || !catagories.length) fetchData();
  }, []);

  if (!catagories.length) return;

  return (
    <div className="overflow-x-scroll w-[75vw] h-10 mt-3 hide-scrollbar scroll-smooth flex gap-3">
      {catagories.map((catagory) => (
        <Button
          key={catagory?.id}
          id={catagory?.id}
          title={catagory?.snippet?.title}
        />
      ))}
    </div>
  );
};

export default ButtonList;
