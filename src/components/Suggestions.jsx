import React, { useEffect, useState } from "react";
import { RiSearchLine } from "@remixicon/react";
const Suggestions = ({ searchText, showSuggestions }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.addsearch.com/v1/suggest/1bed1ffde465fddba2a53ad3ce69e6c2?term=${searchText}`
        );
        const data = await response.json();
        setSuggestions(data.suggestions);
      };
      searchText != "" ? fetchData() : setSuggestions([]);
    }, 150);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);
  if (suggestions.length === 0 || !showSuggestions) return <div></div>;
  return (
    <div className="w-[38vw] min-w-[270px] bg-neutral-50 absolute top-15 rounded-xl py-4 font-semibold shadow-md">
      {suggestions.map((suggestion, index) => {
        return (
          <div
            className="flex gap-2 px-4 py-1 hover:bg-neutral-100"
            key={index}
          >
            <RiSearchLine width={19} />
            {suggestion.value}
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
