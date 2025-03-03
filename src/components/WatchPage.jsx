import React from "react";
import VideoPlayer from "./VideoPlayer";

const WatchPage = () => {
  return (
    <div className="flex w-[100vw] h-[calc(100vh-5rem)] border mt-4 mx-1">
      <VideoPlayer />
    </div>
  );
};

export default WatchPage;
