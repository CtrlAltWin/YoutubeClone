import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchUrl, Most_Popular_Videos_Url } from "../utils/url";

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const url = searchQuery?.length
        ? `${searchUrl}&q=${searchQuery}&type=video`
        : `${Most_Popular_Videos_Url}&type=video`;

      const res = await fetch(url);
      const data = await res.json();
      setVideos(data?.items || []);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-6 w-full p-3 sm:p-4 md:p-6">
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : videos.length === 0 ? (
        <div className="text-center text-gray-600">No results</div>
      ) : (
        videos.map((video) => {
          const videoId = searchQuery ? video.id?.videoId : video.id;
          const { title, channelTitle, thumbnails, publishedAt } =
            video.snippet;
          return (
            <Link
              to={`/watch?v=${videoId}`}
              key={videoId}
              className="flex w-full gap-4 md:gap-5 hover:bg-gray-100 dark:hover:bg-gray-800 px-2 sm:px-8 py-1 rounded-xl transition"
            >
              <div className="w-40 sm:w-80 md:w-96 aspect-video flex-shrink-0">
                <img
                  src={thumbnails?.high?.url}
                  alt={title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Video Info */}
              <div className="flex flex-col justify-start overflow-hidden">
                <h3 className="text-base line-clamp-2 text-black dark:text-white">
                  {title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-1">
                  {channelTitle}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
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

export default SearchPage;
