import { configureStore } from "@reduxjs/toolkit";
import Coinslice from "./features/swapCoins"
export const store = configureStore({
  reducer: {
    Coinslice
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
