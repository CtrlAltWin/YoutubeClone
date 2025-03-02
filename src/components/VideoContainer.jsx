import React, { useEffect, useState } from "react";
import { Most_Popular_Videos_Url } from "../utils/api";
import VideoCard from "./videoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch(Most_Popular_Videos_Url);
      const json = await data.json();
      setVideos(json.items);
    })();
  }, []);

  console.log(videos);

  if (!videos.length) return <div></div>;

  return (
    <div className="flex flex-wrap justify-center gap-x-2 gap-y-14 h-full w-[97vw] mt-3 pt-5 overflow-y-scroll hide-scrollbar">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
