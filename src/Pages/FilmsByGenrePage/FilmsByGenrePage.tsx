import React, { useState } from "react";
import { useGetFilmsByGenreQuery } from "../../store/services/filmAPI";
import { useParams } from "react-router";
import s from "../MovieByCategoryPage/MovieByCategoryPage.module.scss";
import MovieCover from "../../components/MovieList/MovieGroup/MovieCover/MovieCover";
import { RewriteGroupName } from "../../helpers/helpers";
import Sort, { ISortFilters } from "../../components/Sort/Sort";

const FilmsByGenrePage = () => {
  const { genre } = useParams();
  const [sortParams, setSortParams] = useState<ISortFilters>();
  const { currentData: data } = useGetFilmsByGenreQuery({
    list: genre || "",
    sort: sortParams,
  });
  return (
    <>
      <h1 className={s.heading}>{RewriteGroupName(genre || "")}</h1>
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
      <Sort
        {...sortParams}
        onChange={(newFilters) => {
          setSortParams(newFilters);
        }}
      />
    </>
  );
};

export default FilmsByGenrePage;
