import {
  RiFireLine,
  RiHome4Line,
  RiLogoutBoxLine,
  RiMenuUnfoldFill,
  RiQuestionLine,
  RiSettings3Line,
  RiTimeLine,
  RiYoutubeLine,
} from "@remixicon/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const showSlidebar = useSelector((store) => store.slidebar.isOpen);
  if (!showSlidebar) return <div></div>;
  return (
    <div className="border-r-2 w-[200px] border-gray-100 h-[calc(100vh-4rem)] z-10 bg-white absolute md:static">
      <ul className="p-4 font-semibold text-gray-700 w-52">
        <Link to={"/"}>
          <li className="p-2 m-1 hover:bg-gray-100 rounded-lg flex gap-1">
            <RiHome4Line />
            Home
          </li>
        </Link>
        <li className="p-2 m-1 hover:bg-gray-100 rounded-lg flex gap-1">
          <RiFireLine />
          Trending
        </li>
        <li className="p-2 m-1 hover:bg-gray-100 rounded-lg flex gap-1">
          <RiYoutubeLine />
          Subscriptions
        </li>

        <li className="p-2 m-1 hover:bg-gray-100 rounded-lg flex gap-1">
          <RiMenuUnfoldFill />
          Playlist
        </li>
        <li className="p-2 m-1 hover:bg-gray-100 rounded-lg flex gap-1">
          <RiTimeLine />
          History
        </li>
        <li className="p-2 m-1 hover:bg-gray-100 rounded-lg flex gap-1">
          <RiSettings3Line />
          Settings
        </li>
        <li className="p-2 m-1 hover:bg-gray-100 rounded-lg flex gap-1">
          <RiQuestionLine />
          Help
        </li>
        <li className="p-2 m-1 hover:bg-gray-100 rounded-lg flex gap-1">
          <RiLogoutBoxLine />
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
