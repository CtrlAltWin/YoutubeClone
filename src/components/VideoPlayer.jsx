import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({ videoId }) => {
  if (!videoId) return <p className="text-red-500">No video ID provided</p>;
  return (
    <div className="aspect-video rounded-lg overflow-clip">
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