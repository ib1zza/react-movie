import React from "react";
import s from "./MovieGroup.module.scss";
import MovieCover from "./MovieCover/MovieCover";
import { useGetAllFilmsQuery } from "../../../store/services/filmAPI";
const MovieGroup = () => {
  const { data } = useGetAllFilmsQuery();
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h2> Trending</h2>
        <span>See all</span>
      </div>
      <div className={s.films}>
        {data &&
          data.map((el) => (
            <MovieCover
              rating={el.rating.rate}
              movieId={el.id}
              image={el.cover}
              key={el.id}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieGroup;
