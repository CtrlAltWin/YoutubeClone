import React from "react";
import {
  RiThumbUpLine,
  RiThumbDownLine,
  RiDownloadLine,
  RiShare2Line,
  RiMoreLine,
} from "@remixicon/react";

const ActionsCard = () => {
  return (
    <div className="font-semibold max-w-[950px] mt-2 text-gray-800">
      {/* Channel Name and Subscribe */}
      <div className="flex gap-4 items-center">
        <h3 className="font-bold text-xl px-2 text-gray-600">Colin Galen</h3>
        <div className="text-sm">
          <button className="bg-neutral-200 px-4 py-2 rounded-full mx-1 hover:bg-neutral-300">
            Join
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full mx-1 hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-5 mt-4 px-1 text-sm text-gray-600 overflow-x-auto whitespace-nowrap hide-scrollbar">
        {/* Like & Dislike */}
        <div className="flex rounded-full bg-neutral-100">
          <button className="flex gap-1 items-center px-3 py-1 border-r border-gray-300 hover:bg-neutral-200">
            <RiThumbUpLine width={18} /> <span>98,743</span>
          </button>
          <button className="px-3 py-1 hover:bg-neutral-200">
            <RiThumbDownLine width={18} />
          </button>
        </div>

        {/* Other Buttons */}
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200">
          <RiShare2Line width={18} />
          <span>Share</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200">
          <RiDownloadLine width={18} />
          <span>Download</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200">
          <RiMoreLine width={18} />
        </button>
      </div>
    </div>
  );
};

export default ActionsCard;
