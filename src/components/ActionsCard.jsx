import React, { useEffect, useState } from "react";
import {
  RiThumbUpLine,
  RiThumbDownLine,
  RiDownloadLine,
  RiShare2Line,
  RiMoreLine,
} from "@remixicon/react";
import { videos_By_Id_Url } from "../utils/url";

const ActionsCard = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    if (!videoId) return;

    const fetchVideoDetails = async () => {
      try {
        const url = `${videos_By_Id_Url}&id=${videoId}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideoData(data.items[0]);
        }
      } catch (error) {
        //navigate to err page
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  return (
    <div className="font-semibold border border-gray-200 px-2 py-4 rounded-xl">
      {/* video Title */}
      <h2 className="md:text-xl px-2 text-gray-800">
        {videoData?.snippet.title}
      </h2>
      {/* Channel Name and Subscribe */}
      <div className="flex gap-4 items-center mt-4">
        <h3 className="font-bold text-xl px-2 truncate w-[150px] sm:w-[300px] lg:w-auto">
          {videoData?.snippet?.channelTitle}
        </h3>
        <div className="text-sm">
          <button className="bg-gray-100 px-4 py-2 rounded-full mx-1 hover:bg-gray-200 border border-gray-200">
            Join
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full mx-1 hover:bg-gray-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-5 mt-4 text-sm overflow-x-auto whitespace-nowrap hide-scrollbar">
        {/* Like & Dislike */}
        <div className="flex rounded-full bg-gray-100 border border-gray-200">
          <button className="flex gap-1 items-center px-3 py-[6px] border-r rounded-l-full border-gray-200 hover:bg-gray-200">
            <RiThumbUpLine width={18} />
            <span>
              {(videoData?.statistics?.likeCount || 0).toLocaleString()}
            </span>
          </button>
          <button className="px-3 py-[6px] hover:bg-gray-200 rounded-r-full">
            <RiThumbDownLine width={18} />
          </button>
        </div>

        {/* Other Buttons */}
        <button className="flex items-center gap-1 px-3 py-[6px] rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200">
          <RiShare2Line width={18} />
          <span>Share</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-[6px] rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200">
          <RiDownloadLine width={18} />
          <span>Download</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-[6px] rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200">
          <RiMoreLine width={18} />
        </button>
      </div>
    </div>
  );
};

export default ActionsCard;
