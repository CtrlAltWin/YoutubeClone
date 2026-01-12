import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchUrl, videos_By_Id_Url } from "../utils/url";

const VideoSuggestions = ({ videoId }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${videos_By_Id_Url}&id=${videoId}`);
      const videoData = await resp.json();
      const searchQuery = videoData?.items[0]?.snippet?.channelTitle;
      const url = `${searchUrl}&q=${searchQuery}&type=video&maxResults=${14}`;
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data?.items || []);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, [videoId]);

  return (
    <div className="flex flex-col w-full">
      <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2 px-2">
        Videos
      </h3>
      {loading ? (
        <div className="text-center text-gray-500">
          {/*Here I will show shimmer UI*/}
        </div>
      ) : videos.length === 0 ? (
        <div>{/* some better UI */}</div>
      ) : (
        videos.map((video) => {
          const { title, channelTitle, thumbnails, publishedAt } =
            video.snippet;
    
          return (
            <Link
              to={`/watch?v=${video.id.videoId}`}
              key={videoId}
              className="flex w-full gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition"
            >
              <img
                src={thumbnails.medium?.url}
                alt={title}
                className="w-40 h-auto rounded-lg object-cover"
              />
              <div className="flex flex-col justify-start overflow-hidden">
                <h3 className="text-sm font-medium line-clamp-2 text-black dark:text-white">
                  {title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                  {channelTitle}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(publishedAt).toDateString()}
                </p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default VideoSuggestions;
