import React from "react";
import {
  RiMenuLine,
  RiSearchLine,
  RiUserLine,
  RiYoutubeFill,
} from "@remixicon/react";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Head = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center py-2 px-4 scale-y-95 md:scale-y-100">
      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <RiMenuLine className="text-gray-600 h-[42px] w-[42px] p-[10px] hover:bg-gray-100 rounded-full" />
        </button>
        <Link to={"/"}>
          <RiYoutubeFill size={30} className="text-red-500" />
        </Link>
      </div>
      <div className="flex items-center border-1 border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="w-[38vw] h-10 bg-white rounded-l-full border-r-1 border-gray-300 px-4 focus:outline-1 outline-blue-500"
        />
        <button className="h-full px-4">
          <RiSearchLine className="text-gray-500" />
        </button>
      </div>
      <div className="flex">
        <RiUserLine className="text-gray-600 h-[42px] w-[42px] p-[10px] hover:bg-gray-100 rounded-full" />
      </div>
    </div>
  );
};

export default Head;
