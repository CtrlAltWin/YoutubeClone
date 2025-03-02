import { configureStore } from "@reduxjs/toolkit";
import slidebarReducer from "./sidebarSlice"

const store = configureStore({
  reducer: {
    slidebar: slidebarReducer,
  },
});

export default store;