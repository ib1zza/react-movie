import React, { useState } from "react";
import {
  useGetFilmsFromListQuery,
  useGetSearchedFilmsQuery,
} from "../../store/services/filmAPI";
import s from "./TvSeriesPage.module.scss";
import MovieList from "../../components/MovieList/MovieList";
import { useFilters } from "../../hooks/useFilters";
import Sort from "../../components/Sort/Sort";
const TvSeriesPage = () => {
  const { sortFilters, onSortChange } = useFilters();
  // const [searchQuery, setSearchQuery] = useState<string>("");
  const { currentData: data } = useGetFilmsFromListQuery({
    list: "most_pop_series",
    filters: sortFilters,
  });
  //
  // const { currentData } = useGetSearchedFilmsQuery({
  //   searchQuery: searchQuery ? searchQuery : query || "",
  //   sort: sortFilters,
  // });

  return (
    <div>
      <h1 className={s.heading}>Tv Series</h1>
      <Sort onChange={onSortChange} {...sortFilters} withGenre />
      <MovieList films={data} />
      {/*{data &&*/}
      {/*  data.map((el) => (*/}
      {/*    <MovieCover*/}
      {/*      rating={el.ratingsSummary.aggregateRating}*/}
      {/*      movieId={el.id}*/}
      {/*      title={el.titleText.text}*/}
      {/*      key={el.id}*/}
      {/*      image={el?.primaryImage?.url}*/}
      {/*      date={el.releaseYear.year}*/}
      {/*    />*/}
      {/*  ))}*/}
    </div>
  );
};

export default TvSeriesPage;
