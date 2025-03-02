import React from "react";

const formatViews = (viewCount) => {
  if (viewCount >= 1e9) return (viewCount / 1e9).toFixed(1) + "B views";
  if (viewCount >= 1e6) return (viewCount / 1e6).toFixed(1) + "M views";
  if (viewCount >= 1e3) return (viewCount / 1e3).toFixed(1) + "K views";
  return viewCount + " views";
};

const VideoCard = ({ video }) => {
  return (
    <div className="w-[23rem] md:w-80 bg-white overflow-hidden cursor-pointer">
      <img
        src={video.snippet.thumbnails.standard.url}
        alt={video.snippet.title}
        className="w-full h-44 object-cover rounded-lg scale-x-95"
      />
      <div className="p-3">
        <h3 className="text-md font-semibold truncate">
          {video.snippet.title}
        </h3>
        <p className="text-sm text-gray-600 font-semibold">
          {video.snippet.channelTitle}
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          {formatViews(video.statistics.viewCount)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
