import { createSlice } from "@reduxjs/toolkit";

const homeVideosSlice = createSlice({
  name: "homeVideos",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    accumulateVideos: (state, action) => {
      state.videos = [...state.videos, ...action.payload];
    },
  },
});

export const { addVideos, accumulateVideos } = homeVideosSlice.actions;
export default homeVideosSlice.reducer;
