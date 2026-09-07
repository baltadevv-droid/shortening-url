import { configureStore } from "@reduxjs/toolkit";
import shortenerSlice from "../features/cardshortener/slice";

export const store = configureStore({
  reducer: {
    shortener: shortenerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
