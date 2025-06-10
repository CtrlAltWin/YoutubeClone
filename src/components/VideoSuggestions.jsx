import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Most_Popular_Videos_Url, searchUrl } from "../utils/url"; // adjust to your API utility path

const VideoSuggestions = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const url = searchQuery.length
        ? `${searchUrl}&q=${searchQuery}&type=video`
        : `${Most_Popular_Videos_Url}&type=video`;
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : videos.length === 0 ? (
        <div className="text-center text-gray-500">No videos found.</div>
      ) : (
        videos.map((video) => {
          const videoId = video.id;
          const { title, channelTitle, thumbnails, publishedAt } =
            video.snippet;

          return (
            <Link
              to={`/watch?v=${videoId}`}
              key={videoId}
              className="flex w-full gap-3 sm:gap-4 md:gap-5 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition"
            >
              <img
                src={thumbnails.medium.url}
                alt={title}
                className="w-40 sm:w-48 md:w-56 h-auto rounded-lg object-cover"
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
