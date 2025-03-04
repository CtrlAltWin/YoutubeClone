import React from "react";
import ReactPlayer from "react-player/lazy";
import { useSearchParams } from "react-router-dom";

const VideoPlayer = ({ videoId }) => {
  if (!videoId) return <p className="text-red-500">No video ID provided</p>;
  console.log(videoId);
  return (
    <div className="w-full h-[55vw] md:h-[450px] lg:h-[520px] max-w-[950px] rounded-lg overflow-hidden">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        width="100%"
        height="100%"
        playing="true"
        playIcon={"icon"}
      />
    </div>
  );
};

export default VideoPlayer;
