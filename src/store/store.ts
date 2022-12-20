import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmAPI } from "./services/filmAPI";
// ...
const RootReducer = combineReducers({
  [filmAPI.reducerPath]: filmAPI.reducer,
});
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
