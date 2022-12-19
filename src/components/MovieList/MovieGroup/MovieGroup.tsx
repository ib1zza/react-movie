import React from "react";
import s from "./MovieGroup.module.scss";
const MovieGroup = () => {
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h2> Trending</h2>
        <span>See all</span>
      </div>
    </div>
  );
};

export default MovieGroup;
