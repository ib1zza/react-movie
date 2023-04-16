import React, { useEffect, useRef, useState } from "react";
import {
  useGetFilmsByGenreQuery,
  useGetSearchedFilmsQuery,
} from "../../store/services/filmAPI";
import { useParams } from "react-router";
import s from "../MovieByCategoryPage/MovieByCategoryPage.module.scss";
import { RewriteGroupName } from "../../helpers/helpers";
import Sort, { ISortFilters } from "../../components/Sort/Sort";
import MovieList from "../../components/MovieList/MovieList";
import { IBaseFilm } from "../../types/IFilm";

import { useLazyLoading } from "../../hooks/useLazyLoading";

const FilmsByGenrePage = () => {
  const { genre } = useParams();
  const [sortParams, setSortParams] = useState<ISortFilters>({ genre });
  const { pageCount, ref } = useLazyLoading();
  const [displayData, setDisplayData] = useState<IBaseFilm[]>([]);
  const { currentData } = useGetFilmsByGenreQuery({
    list: sortParams.genre || "",
    sort: sortParams,
    limit: 20,
    page: pageCount,
  });

  useEffect(() => {
    if (!Array.isArray(currentData)) return;
    setDisplayData((prevState) => [
      ...prevState,
      ...(currentData as IBaseFilm[]),
    ]);
  }, [currentData]);

  useEffect(() => {
    setDisplayData([]);
  }, [genre, sortParams]);

  return (
    <>
      <h1 className={s.heading}>{RewriteGroupName(genre || "")}</h1>
      <Sort
        {...sortParams}
        onChange={(newFilters) => {
          setSortParams(newFilters);
        }}
      />
      <div className={s.films}>{<MovieList films={displayData} />}</div>
      <div ref={ref} />
    </>
  );
};

export default FilmsByGenrePage;
