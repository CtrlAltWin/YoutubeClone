import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({ videoId }) => {
  if (!videoId) return <p className="text-red-500">No video ID provided</p>;
  return (
    <div className="w-full h-[55vw] md:h-[480px] lg:h-[495px] lg:min-w-[700px] max-w-[880px] rounded-lg overflow-hidden">
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
