import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchEpisodes",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/episodes?series=Breaking+Bad`
    );
    return res.data;
  }
);

export const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchEpisodes.pending]: (state) => {
      state.status = "loading";
    },
    [fetchEpisodes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchEpisodes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const episodesSelector = (state) => state.episodes.items;
export const statusSelector = (state) => state.episodes.status;
export const errorSelector = (state) => state.episodes.error;
export default episodesSlice.reducer;
