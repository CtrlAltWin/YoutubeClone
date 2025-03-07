import { configureStore } from "@reduxjs/toolkit";
import slidebarReducer from "./sidebarSlice";
import homeVideosReducer from "./homeVideosSlice";
const store = configureStore({
  reducer: {
    slidebar: slidebarReducer,
    homeVideos: homeVideosReducer,
  },
});

export default store;
