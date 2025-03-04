import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import { Fetch_Videos_By_Id_Url } from "../utils/api"; // API URL
import ActionsCard from "./ActionsCard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
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
    <div className="lg:flex w-[100vw] lg:h-[calc(100vh-5rem)] sm:mt-4 px-1 sm:px-6">
      {/* video and video details */}
      <div className="w-full my-2">
        <VideoPlayer videoId={videoId} />
        {/* Actions */}
        <ActionsCard videoId={videoId} />
      </div>
      {/* comments */}
      <Comments videoId={videoId} />
    </div>
  );
};

export default WatchPage;
