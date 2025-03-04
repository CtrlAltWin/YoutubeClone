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
        <h3 className="font-bold text-xl px-2 text-gray-600">Colin Galen</h3>
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
      <div className="flex gap-4 mt-4 px-1 text-sm text-gray-600">
        <div className="flex rounded-full bg-neutral-100">
          <button className="flex gap-1 items-center px-3 py-1 border-r border-gray-300">
            <RiThumbUpLine width={18} /> <span className="">98743</span>
          </button>
          <button className="px-3 py-1 ">
            <RiThumbDownLine width={18} />
          </button>
        </div>
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100">
          <RiShare2Line width={18} />
          <span className="">Share</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100">
          <RiDownloadLine width={18} />
          <span className="">Download</span>
        </button>
      </div>
    </div>
  );
};

export default ActionsCard;
