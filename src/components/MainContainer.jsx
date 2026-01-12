import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] items-center mx-auto">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
