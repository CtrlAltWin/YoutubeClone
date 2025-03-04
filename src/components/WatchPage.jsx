import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import { Fetch_Videos_By_Id_Url } from "../utils/api"; // API URL
import ActionsCard from "./ActionsCard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState({});
  const videoId = searchParams.get("v");

  useEffect(() => {
    const getVideoDetails = async () => {
      const response = await fetch(`${Fetch_Videos_By_Id_Url}&id=${videoId}`);
      const data = await response.json();
      setVideo(data.items[0]);
    };
    getVideoDetails();
  }, [videoId]);

  return (
    <div className="lg:flex w-[100vw] h-[calc(100vh-5rem)] mt-2 sm:mt-4 mx-2 sm:mx-6">
      {/* video and video details */}
      <div className="w-full">
        <VideoPlayer videoId={videoId} />

        {/* video Title */}
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mt-2 px-2">
          My Competetive Programming Journey
        </h2>
        {/* Actions */}
        <ActionsCard />
      </div>
      {/* comments */}
      <Comments />
    </div>
  );
};

export default WatchPage;
