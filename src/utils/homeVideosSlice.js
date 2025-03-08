import { createSlice } from "@reduxjs/toolkit";

const homeVideosSlice = createSlice({
  name: "homeVideos",
  initialState: {
    videos: [],
    nextPageToken: "",
    catagories: [],
    activeCatagoryId: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    accumulateVideos: (state, action) => {
      state.videos = [...state.videos, ...action.payload];
    },
    setNextPageToken: (state, action) => {
      state.nextPageToken = action.payload;
    },
    addCatagories: (state, action) => {
      state.catagories = action.payload;
    },
    setActiveCatagoryId: (state, action) => {
      state.activeCatagoryId = action.payload;
    },
  },
});

export const {
  addVideos,
  accumulateVideos,
  addCatagories,
  setActiveCatagoryId,
  setNextPageToken
} = homeVideosSlice.actions;
export default homeVideosSlice.reducer;
