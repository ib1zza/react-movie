import React from "react";
import s from "./MovieGroup.module.scss";
import MovieCover from "./MovieCover/MovieCover";
const MovieGroup = () => {
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h2> Trending</h2>
        <span>See all</span>
      </div>
      <div className={s.films}>
        <MovieCover rating={5} movieId={1} />
      </div>
    </div>
  );
};

export default MovieGroup;
