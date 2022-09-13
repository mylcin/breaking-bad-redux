import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import episodesSlice from "./episodesSlice";
import quoteSlice from "./quoteSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    episodes: episodesSlice,
    quote: quoteSlice,
  },
});
