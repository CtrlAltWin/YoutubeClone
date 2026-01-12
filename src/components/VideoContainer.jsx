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

  if (!videos || !videos.length) return <div></div>;

  return (
    <div
      ref={containerRef}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 h-full mt-3 pt-5 px-2 overflow-y-scroll"
      onScroll={handleInfiniteScroll}
    >
      {videos.map((video, index) => (
        <VideoCard key={`${video.id}-${index}`} video={video} />
      ))}

      <div className="col-span-full flex justify-center">
        <ClipLoader />
      </div>
    </div>
  );
};

export default VideoContainer;
