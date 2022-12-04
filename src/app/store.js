import { configureStore } from "@reduxjs/toolkit";
import valueSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    marketplace: valueSlice,
  },
});
