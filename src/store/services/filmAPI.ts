import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBaseFilm, IFavouriteFilm, IFilm, IMiniFilm } from "../../types/IFilm";
import { ISortFilters } from "../../components/Sort/Sort";
// const baseQ = "http://localhost:3001/";
const baseQ = "https://moviesdatabase.p.rapidapi.com";
const tagTypes = ["Films", "Favourites"];
const headers = {
  "X-RapidAPI-Key": "c9449ef580msh2b3e2013e31bf8fp173ddejsn3aaab1c70de3",
  "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
};

interface IResponse<T> {
  results: T;
  [x: string]: any;
}

export const filmAPI = createApi({
  reducerPath: "filmAPI",
  tagTypes,
  baseQuery: fetchBaseQuery({ baseUrl: baseQ }),
  endpoints: (builder) => ({
    getFilmById: builder.query<IBaseFilm, string>({
      query: (id) => {
        return {
          url: `titles/${id}`,
          headers: headers,
          params: { info: "base_info" },
        };
      },
      transformResponse: (response: IResponse<IBaseFilm>) => {
        return response.results;
      },
    }),

    getAllGenres: builder.query<string[], void>({
      query: () => {
        return { url: `/titles/utils/genres`, headers: headers };
      },
      transformResponse: (response: IResponse<string[]>) => {
        return response.results;
      },
    }),
    getAllLists: builder.query<string[], void>({
      query: () => {
        return { url: `/titles/utils/lists`, headers: headers };
      },
      transformResponse: (response: IResponse<string[]>) => {
        return response.results;
      },
    }),
    getAllTitleTypes: builder.query<string[], void>({
      query: () => {
        return { url: `/titles/utils/titleTypes`, headers: headers };
      },
      transformResponse: (response: IResponse<string[]>) => {
        return response.results;
      },
    }),

    //arg - list name
    getFilmsFromList: builder.query<
      IBaseFilm[],
      { list?: string; filters?: ISortFilters }
    >({
      query: ({ list, filters }) => ({
        url: `/titles`,
        headers: headers,

        params: {
          list: list || "titles",
          info: "base_info",
          sort: "year.decr",
          limit: 30,
          genre: filters?.genre,
          ...filters,
        },
      }),
      transformResponse: (response: IResponse<IBaseFilm[]>) => {
        return response.results;
      },
    }),
    //param - genre string
    getFilmsByGenre: builder.query<
      IBaseFilm[],
      { list: string; sort: ISortFilters | void }
    >({
      query: (props) => ({
        url: `/titles${"?limit=" + 20}`,
        headers: headers,
        params: { genre: props.list, info: "base_info", ...props.sort },
      }),
      transformResponse: (response: IResponse<IBaseFilm[]>) => {
        return response.results;
      },
    }),
    getSeriesIdBySeason: builder.query<
      Array<{ tconst: string; episodeNumber: number; seasonNumber: number }>,
      { id: string; season: number }
    >({
      query: (props) => ({
        url: `/titles/series/${props.id}/${props.season}`,
        headers: headers,
      }),
      transformResponse: (
        response: IResponse<
          Array<{ tconst: string; episodeNumber: number; seasonNumber: number }>
        >
      ) => {
        return response.results;
      },
    }),
    getSearchedFilms: builder.query<
      IBaseFilm[],
      { searchQuery: string; sort: ISortFilters }
    >({
      query: (props) => ({
        url: props.searchQuery
          ? "/titles/search/title/" + props.searchQuery
          : "/titles",
        headers: headers,
        params: {
          info: "base_info",
          sort: "year.decr",
          limit: 30,
          genre: props.sort.genre,
          ...props.sort,
        },
      }),
      transformResponse: (response: IResponse<IBaseFilm[]>) => {
        return response.results;
      },
    }),
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
  useGetFilmByIdQuery,
  // useGetAllFilmsQuery,
  useAddToFavouritesMutation,
  useGetFavouritesFilmsQuery,
  useRemoveFromFavouritesMutation,
  useGetAllListsQuery,
  useGetFilmsFromListQuery,
  useGetAllGenresQuery,
  useGetFilmsByGenreQuery,
  useGetSearchedFilmsQuery,
  useGetSeriesIdBySeasonQuery,
  useGetAllTitleTypesQuery,
} = filmAPI;
