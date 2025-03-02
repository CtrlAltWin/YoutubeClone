import React from "react";
import Button from "./Button";

const filterWords = [
  "Music",
  "Gaming",
  "App Development",
  "Game Development",
  "Songs",
  "Technology",
  "Vlogs",
  "Education",
  "Tutorials",
  "Movies",
  "Comedy",
  "Reviews",
  "Podcasts",
  "Sports",
  "Motivation",
  "News",
  "Science",
  "Finance",
  "Travel",
  "Cooking"
];

const ButtonList = () => {
  return (
    <div className="overflow-x-scroll w-[90vw] h-10 mt-3 hide-scrollbar scroll-smooth flex gap-3">
      {filterWords
        .map((title, index) => (
          <Button key={index} title={title} />
        ))}
    </div>
  );
};

export default ButtonList;
