import React, { useState } from "react";
import s from "./SearchedFilmsPage.module.scss";
import { useParams } from "react-router";
import { useGetSearchedFilmsQuery } from "../../store/services/filmAPI";
import SearchBar from "../../components/HeaderNavigation/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Sort from "../../components/Sort/Sort";
import { useFilters } from "../../hooks/useFilters";

const SearchedFilmsPage = () => {
  const { query } = useParams();

  const [searchQuery, setSearchQuery] = useState<string>(query || "");
  const { sortFilters, onSortChange } = useFilters({ sort: "year.decr" });
  const { currentData } = useGetSearchedFilmsQuery({
    searchQuery: searchQuery,
    sort: sortFilters,
  });

  return (
    <div className={s.container}>
      <SearchBar
        placeholder={"Search for movies, TV shows..."}
        value={searchQuery}
        onChange={(query: string) => setSearchQuery(query)}
      />
      <Sort {...sortFilters} onChange={onSortChange} withGenre withTitleTypes />
      <div className={s.results}>
        <MovieList films={currentData} />
      </div>
    </div>
  );
};

export default SearchedFilmsPage;
