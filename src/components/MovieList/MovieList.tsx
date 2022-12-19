import React from "react";
import s from "./MovieList.module.scss";
import MovieGroup from "./MovieGroup/MovieGroup";
const MovieList = () => {
  return (
    <div className={s.container}>
      <MovieGroup />
    </div>
  );
};

export default MovieList;
