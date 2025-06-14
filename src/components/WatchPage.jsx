import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import ActionsCard from "./ActionsCard";
import VideoSuggestions from "./VideoSuggestions";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <div className="max-w-[1380px] w-full h-[calc(100vh-4rem)] overflow-y-scroll hide-scrollbar mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] pt-7 px-4 space-y-4">
      {/* video and video details */}
      <div className="w-[93vw] lg:w-[62vw] mx-auto space-y-4">
        <VideoPlayer videoId={videoId} />
        {/* Actions */}
        <ActionsCard videoId={videoId} />
        {/* comments */}
        <Comments videoId={videoId} />
      </div>
      {/* suggestions */}
      <div className="sm:mx-2">
        <VideoSuggestions searchQuery="" />
      </div>
    </div>
  );
};

export default WatchPage;
