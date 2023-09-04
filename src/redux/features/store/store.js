import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../root-reducer/rootReducer";


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  enhancers: [],
})


