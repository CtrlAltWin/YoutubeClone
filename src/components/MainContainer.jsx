import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[calc(100vh-4rem)] items-center">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
