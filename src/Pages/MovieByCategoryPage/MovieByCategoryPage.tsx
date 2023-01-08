import React, { useEffect } from "react";
import { useGetFilmsFromListQuery } from "../../store/services/filmAPI";
import { useParams } from "react-router";
import s from "./MovieByCategoryPage.module.scss";
import MovieCover from "../../components/MovieList/MovieGroup/MovieCover/MovieCover";
import { RewriteGroupName } from "../../helpers/helpers";

const MovieByCategoryPage = () => {
  const { id: listName } = useParams();
  const { data } = useGetFilmsFromListQuery({ list: listName });

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
    </>
  );
};

export default MovieByCategoryPage;
