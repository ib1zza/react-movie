import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmAPI } from "./services/filmAPI";
import { favouritesApi } from "./services/favouritesAPI";
// ...
const RootReducer = combineReducers({
  [filmAPI.reducerPath]: filmAPI.reducer,
  [favouritesApi.reducerPath]: favouritesApi.reducer,
});
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmAPI.middleware, favouritesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
