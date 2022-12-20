import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilm } from "../../types/IFilm";
const baseQ = "http://localhost:3001/";
export const filmAPI = createApi({
  reducerPath: "filmAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseQ }),
  endpoints: (builder) => ({
    getFilmById: builder.query<IFilm, number>({
      query: (id) => `filmdata/${id}`,
    }),
    getAllFilms: builder.query<IFilm[], number | void>({
      query: (limit) => `filmdata${"?limit=" + (limit || 10)}`,
    }),
  }),
});

export const { useGetFilmByIdQuery, useGetAllFilmsQuery } = filmAPI;
