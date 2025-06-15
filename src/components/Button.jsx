import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCatagories,
  addVideos,
  setActiveCatagoryId,
  setNextPageToken,
} from "../utils/homeVideosSlice";
const Button = ({ id, title }) => {
  const dispatch = useDispatch();
  const activeCatagory = useSelector(
    (store) => store.homeVideos?.activeCatagoryId
  );
  dispatch;
  return (
    <button
      className={`py-[5px] px-[14px] rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
        activeCatagory === id
          ? "bg-gray-900 text-white"
          : "bg-neutral-100 text-black"
      }`}
      onClick={() => {
        dispatch(setNextPageToken(null));
        dispatch(addVideos([]));
        dispatch(setActiveCatagoryId(activeCatagory === id ? null : id));
      }}
    >
      {title}
    </button>
  );
};

export default Button;
