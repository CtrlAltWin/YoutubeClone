import React from "react";
import ReactPlayer from "react-player/lazy";
import { useSearchParams } from "react-router-dom";

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  if (!videoId) return <p className="text-red-500">No video ID provided</p>;
  console.log(videoId);
  return (
    <div className="w-full h-[55vw] md:h-[420px] max-w-[800px] rounded-xl overflow-hidden">
      <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${videoId}`} 
        controls
        width="100%" 
        height="100%" 
      />
    </div>
  );
};

export default VideoPlayer;
