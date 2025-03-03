import React from "react";
import {
  RiThumbUpLine,
  RiThumbDownLine,
  RiDownloadLine,
  RiShare2Line,
} from "@remixicon/react";
const ActionsCard = () => {
  return (
    <div className="font-semibold max-w-[950px] mt-2 text-gray-800">
      {/* channelname and thumnail */}
      <div className="flex gap-4 items-center">
        <p className="font-semibold text-xl px-3">Colin Galen</p>
        {/* join and subscribe button */}
        <div className="text-sm sm:text-md">
          <button className="bg-neutral-200 px-4 py-2 rounded-full mx-1">
            Join
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full mx-1">
            Subscribe
          </button>
        </div>
      </div>

      {/* Like, dislike, share, download, options */}
      <div className="flex gap-4 mt-4 text-gray-800 px-1">
        <div className="flex rounded-full bg-neutral-100">
          <button className="px-4 py-2 border-r border-gray-300">
            <RiThumbUpLine width={20} />
          </button>
          <button className="px-4 py-2">
            <RiThumbDownLine width={20} />
          </button>
        </div>
        <button className="flex items-center px-4 py-2 rounded-full bg-neutral-100">
          <RiShare2Line width={20} />
          <p className="text-sm">{" Share"}</p>
        </button>
        <button className="flex items-center px-4 py-2 rounded-full bg-neutral-100">
          <RiDownloadLine width={20} />
          {" Download"}
        </button>
      </div>
    </div>
  );
};

export default ActionsCard;
