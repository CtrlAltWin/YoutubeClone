import React, { useEffect, useRef, useState } from "react";
import { Most_Popular_Videos_Url } from "../utils/url";
import VideoCard from "./videoCard";
import { ClipLoader } from "react-spinners";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const containerRef = useRef(null);

  const fetchData = async () => {
    const data = await fetch(
      `${Most_Popular_Videos_Url}&pageToken=${nextPageToken}`
    );
    const json = await data.json();
    setVideos((prev) => [...prev, ...json.items]);
    setNextPageToken(json.nextPageToken ? json.nextPageToken : null);
  };

  const handleInfiniteScroll = async () => {
    const { scrollHeight, scrollTop, clientHeight } = containerRef.current;
    if (
      scrollTop + clientHeight >= scrollHeight - 100 &&
      nextPageToken &&
      !isLoading
    ) {
      try {
        setIsLoading(true);
        await fetchData();
      } catch (e) {
        console.error("Failed to fetch data", e.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.error("Failed to fetch data", e.message);
    }
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      //not needed this condition, already taken care
      const container = containerRef.current;
      container.addEventListener("scroll", handleInfiniteScroll);
      return () =>
        container.removeEventListener("scroll", handleInfiniteScroll);
    }
  }, [videos.length]);

  if (!videos.length) return <div></div>;

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap justify-center gap-4 md:gap-y-14 h-full w-[97vw] mt-3 pt-5 overflow-y-scroll hide-scrollbar"
    >
      {videos.map((video, index) => (
        <VideoCard key={`${video.id}-${index}`} video={video} />
      ))}
      {isLoading && (
        <div className="flex justify-center w-full pb-2">
          <ClipLoader size={25} color="#F53131" />
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
