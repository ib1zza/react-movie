import React, { useEffect } from "react";
import {
  useGetFilmsFromListQuery,
  useGetSearchedFilmsQuery,
} from "../../store/services/filmAPI";
import { useParams } from "react-router";
import s from "./MovieByCategoryPage.module.scss";
import MovieCover from "../../components/MovieList/MovieGroup/MovieCover/MovieCover";
import { RewriteGroupName } from "../../helpers/helpers";
import { useFilters } from "../../hooks/useFilters";
import Sort from "../../components/Sort/Sort";

const MovieByCategoryPage = () => {
  const { id: listName } = useParams();
  const { sortFilters, onSortChange } = useFilters();
  const { data } = useGetSearchedFilmsQuery({
    sort: sortFilters,
    searchQuery: "",
    list: listName,
  });
  // const { data } = useGetFilmsFromListQuery({ list: listName });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [listName]);
  return (
    <>
      <h1 className={s.heading}>{RewriteGroupName(listName || "")}</h1>
      <div className={s.films}>
        {data &&
          data.map((el) => (
            <MovieCover
              rating={el.ratingsSummary.aggregateRating}
              movieId={el.id}
              image={el.primaryImage?.url || undefined}
              key={el.id}
              title={el.titleText.text}
              date={el.releaseYear?.year}
            />
          ))}
      </div>
      <Sort onChange={onSortChange} {...sortFilters} withGenre />
    </>
  );
};

export default MovieByCategoryPage;
