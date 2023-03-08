import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmAPI } from "./services/filmAPI";

import likesSlice from "./slices/likesSlice";
const RootReducer = combineReducers({
  [filmAPI.reducerPath]: filmAPI.reducer,
  likesSlice,
});
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmAPI.middleware ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
