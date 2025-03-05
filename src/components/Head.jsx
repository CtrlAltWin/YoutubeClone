import React from "react";
import { RiMenuLine, RiUserLine, RiYoutubeFill } from "@remixicon/react";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
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
      <Searchbar />
      <div className="flex">
        <RiUserLine className="text-gray-600 h-[42px] w-[42px] p-[10px] hover:bg-gray-100 rounded-full" />
      </div>
    </div>
  );
};

export default Head;
