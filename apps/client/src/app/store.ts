import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(apiSlice.middleware),
  devTools:true
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
