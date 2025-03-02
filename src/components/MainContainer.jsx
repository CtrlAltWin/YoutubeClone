import React, { useContext } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
useContext;
const MainContainer = () => {
  
  return (
    <div
      className="flex w-[100vw] flex-col h-[calc(100vh-4rem)] items-center"
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
