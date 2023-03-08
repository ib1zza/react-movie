import React, {useEffect, useRef, useState} from "react";
import s from "./SearchedFilmsPage.module.scss";
import { useParams } from "react-router";
import { useGetSearchedFilmsQuery } from "../../store/services/filmAPI";
import SearchBar from "../../components/HeaderNavigation/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Sort from "../../components/Sort/Sort";
import { useFilters } from "../../hooks/useFilters";
import {useInView} from "framer-motion";
import {IBaseFilm} from "../../types/IFilm";
import {useLazyLoading} from "../../hooks/useLazyLoading";

const SearchedFilmsPage = () => {
  const { query } = useParams();

  const [searchQuery, setSearchQuery] = useState<string>(query || "");
  const { sortFilters, onSortChange } = useFilters({ sort: "year.decr" });

    const {pageCount, ref} = useLazyLoading()

  const [displayData, setDisplayData] = useState<IBaseFilm[]>([]);
  const { currentData } = useGetSearchedFilmsQuery({
    searchQuery: searchQuery,
    sort: sortFilters,
      limit: 15 ,
      page: pageCount
  });



    useEffect( () => {
        if(!Array.isArray(currentData)) return;
        setDisplayData(prevState => [...prevState, ...currentData as IBaseFilm[]])
    }, [currentData])



  return (
    <div className={s.container}>
      <SearchBar
        placeholder={"Search for movies, TV shows..."}
        value={searchQuery}
        onChange={(query: string) => setSearchQuery(query)}
      />
      <Sort {...sortFilters} onChange={onSortChange} withGenre withTitleTypes />
      <div className={s.results}>
        <MovieList films={displayData} />
      </div>
        <div ref={ref}/>
    </div>
  );
};

export default SearchedFilmsPage;
