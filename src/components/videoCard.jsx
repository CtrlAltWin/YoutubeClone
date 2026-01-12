import React from "react";
import { Link } from "react-router-dom";

const formatViews = (viewCount) => {
  if (viewCount >= 1e9) return (viewCount / 1e9).toFixed(1) + "B views";
  if (viewCount >= 1e6) return (viewCount / 1e6).toFixed(1) + "M views";
  if (viewCount >= 1e3) return (viewCount / 1e3).toFixed(1) + "K views";
  return viewCount + " views";
};

const VideoCard = ({ video }) => {
  return (
    <div className="w-auto h-auto rounded-lg p-3 hover:bg-slate-100 transition-all duration-300">
      <div class="aspect-video w-full overflow-hidden rounded-lg">
        <Link to={"/watch?v=" + video?.id}>
          <img
            src={video?.snippet?.thumbnails.standard?.url}
            alt={video?.snippet?.title}
            class="w-full h-full object-cover object-center"
          />
        </Link>
      </div>
      <div className="px-4 pt-2 text-sm">
        <h3 className="font-bold">{video?.snippet?.title}</h3>
        <p className="">{video?.snippet?.channelTitle}</p>
        <p className="">{formatViews(video?.statistics?.viewCount)}</p>
      </div>
    </div>
  );
};

export default VideoCard;
