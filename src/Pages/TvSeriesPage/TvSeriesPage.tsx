import React, {useEffect, useState} from "react";
import {
  useGetFilmsFromListQuery,
} from "../../store/services/filmAPI";
import s from "./TvSeriesPage.module.scss";
import MovieList from "../../components/MovieList/MovieList";
import { useFilters } from "../../hooks/useFilters";
import Sort from "../../components/Sort/Sort";
import {IBaseFilm} from "../../types/IFilm";
import {useLazyLoading} from "../../hooks/useLazyLoading";
const TvSeriesPage = () => {
  const { sortFilters, onSortChange } = useFilters();
    const {pageCount, ref} = useLazyLoading()
    const [displayData, setDisplayData] = useState<IBaseFilm[]>([]);
  const { currentData } = useGetFilmsFromListQuery({
    list: "most_pop_series",
    filters: sortFilters,
      page: pageCount,
      limit: 15
  });


    useEffect( () => {
        if(!Array.isArray(currentData)) return;
        setDisplayData(prevState => [...prevState, ...currentData as IBaseFilm[]])
    }, [currentData])


  return (
    <div>
      <h1 className={s.heading}>Tv Series</h1>
      <Sort onChange={onSortChange} {...sortFilters} withGenre />

        <div className={s.results}>
            <MovieList films={displayData} />
        </div>
        <div  ref={ref}/>

    </div>
  );
};

export default TvSeriesPage;
