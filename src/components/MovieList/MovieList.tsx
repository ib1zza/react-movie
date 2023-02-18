import React from "react";
import s from "./MovieList.module.scss";
import { IBaseFilm } from "../../types/IFilm";
import MovieCover from "./MovieGroup/MovieCover/MovieCover";

interface Props {
  films: IBaseFilm[] | undefined;
}
const MovieList: React.FC<Props> = ({ films }) => {
  return (
    <div className={s.container}>
      {films &&
        films.map((film) => (
          <MovieCover
            rating={film.ratingsSummary.aggregateRating}
            movieId={film.id}
            title={film.titleText.text}
            image={film.primaryImage?.url}
            date={film.releaseYear?.year}
            key={film.id}
          />
        ))}
    </div>
  );
};

export default MovieList;
