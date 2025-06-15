import React, { useEffect, useRef, useState } from "react";
import { Most_Popular_Videos_Url } from "../utils/url";
import VideoCard from "./videoCard";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  accumulateVideos,
  addVideos,
  setNextPageToken,
} from "../utils/homeVideosSlice";
const VideoContainer = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { videos, activeCatagoryId } = useSelector((store) => store.homeVideos);
  const nextPageToken = useSelector((store) => store.homeVideos.nextPageToken);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `${Most_Popular_Videos_Url}&type=video` +
          (nextPageToken != null ? `&pageToken=${nextPageToken}` : "") +
          (activeCatagoryId != null
            ? `&videoCategoryId=${activeCatagoryId}`
            : "")
      );
      const json = await data.json();
      dispatch(accumulateVideos(json?.items));
      dispatch(
        setNextPageToken(json?.nextPageToken ? json?.nextPageToken : null)
      );
    } catch (err) {
      console.log("error fetcheing data" + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInfiniteScroll = async () => {
    if (isLoading) return;
    const { scrollHeight, scrollTop, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 5 && nextPageToken != null) {
      fetchData();
    }
  };

  useEffect(() => {
    /* State reset operations are done in catagory buttons */
    fetchData();
  }, [activeCatagoryId]);

  if (!videos.length) return <div></div>;

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap justify-center gap-4 md:gap-y-14 h-full w-[97vw] mt-3 pt-5 overflow-y-scroll hide-scrollbar"
      onScroll={handleInfiniteScroll}
    >
      {videos.map((video, index) => (
        <VideoCard key={`${video.id}-${index}`} video={video} />
      ))}
      {
        <div className="flex justify-center w-full pb-2">
          <ClipLoader size={25} color="#F53131" />
        </div>
      }
    </div>
  );
};

export default VideoContainer;
