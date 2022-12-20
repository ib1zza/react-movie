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
  }),
});

export const { useGetFilmByIdQuery } = filmAPI;
