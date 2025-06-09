import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import ActionsCard from "./ActionsCard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className="max-w-[1350px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] pt-7 px-4 gap-2">
      {/* video and video details */}
      <div className="w-[93vw] lg:w-[62vw] mx-auto">
        <VideoPlayer videoId={videoId} />
        {/* Actions */}
        <ActionsCard videoId={videoId} />
      </div>
      {/* comments */}
      <div className="w-[93vw] lg:w-auto mx-auto">
        <Comments videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
