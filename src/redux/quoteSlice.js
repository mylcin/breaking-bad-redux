import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomQuote = createAsyncThunk(
  "quotes/fetchRandomQuote",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/quote/random`
    );
    return res.data[0];
  }
);

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    item: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchRandomQuote.pending]: (state) => {
      state.status = "loading";
    },

    [fetchRandomQuote.fulfilled]: (state, action) => {
      state.item = action.payload;
      state.status = "succeeded";
    },
    [fetchRandomQuote.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const randomQuoteSelector = (state) => state.quote.item;
export const statusSelector = (state) => state.quote.status;
export const errorSelector = (state) => state.quote.error;
export default quoteSlice.reducer;
