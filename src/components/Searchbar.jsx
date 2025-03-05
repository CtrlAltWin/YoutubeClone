import React, { useState } from "react";
import { RiSearchLine } from "@remixicon/react";
import Suggestions from "./Suggestions";

const Searchbar = () => {
  const [Search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <div className="flex items-center border-1 border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-full">
      <input
        type="text"
        placeholder="Search"
        value={Search}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[38vw] h-10 bg-white rounded-l-full border-r-1 border-gray-300 px-4 focus:outline-1 outline-blue-500"
      />
      <button className="h-full px-4">
        <RiSearchLine className="text-gray-500" />
      </button>
      <Suggestions searchText={Search} showSuggestions={showSuggestions} />
    </div>
  );
};

export default Searchbar;
