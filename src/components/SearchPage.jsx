import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoSuggestions from "./VideoSuggestions";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  return <div className="max-w-[1350px] h-[calc(100vh-4rem)] overflow-y-scroll hide-scrollbar w-full px-2 mx-auto pt-6">
    <VideoSuggestions searchQuery={searchQuery} />
  </div>
};

export default SearchPage;
