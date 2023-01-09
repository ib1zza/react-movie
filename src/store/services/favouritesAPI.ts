import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBaseFilm, IFavouriteFilm, IFilm, IMiniFilm } from "../../types/IFilm";

const baseQ = "http://localhost:3001/";
// const baseQ = "https://moviesdatabase.p.rapidapi.com";
const tagTypes = ["Films", "Favourites"];

export const favouritesApi = createApi({
  reducerPath: "favouritesApi",
  tagTypes,
  baseQuery: fetchBaseQuery({ baseUrl: baseQ }),
  endpoints: (builder) => ({
    getFavouritesFilms: builder.query<IFilm[], number | void>({
      query: (limit) => `favourites${"?limit=" + (limit || 10)}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Favourites",
                id,
              })),
              { type: "Favourites" as const, id: "LIST" },
            ]
          : [{ type: "Favourites" as const, id: "LIST" }],
    }),
    //args - { id: number;title: string;rating: Rating; cover: string;}
    addToFavourites: builder.mutation<IFavouriteFilm, IFavouriteFilm>({
      query: (film) => ({
        url: "favourites",
        method: "POST",
        body: film,
      }),
      invalidatesTags: [{ type: "Favourites" as const, id: "LIST" }],
    }),
    removeFromFavourites: builder.mutation<IFavouriteFilm, number>({
      query: (id) => ({
        url: "favourites/" + id,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: [{ type: "Favourites" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddToFavouritesMutation,
  useGetFavouritesFilmsQuery,
  useRemoveFromFavouritesMutation,
} = favouritesApi;
