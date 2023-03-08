import React from "react";
import s from "./MovieList.module.scss";
import { IBaseFilm } from "../../types/IFilm";
import MovieCover from "./MovieGroup/MovieCover/MovieCover";
import MovieCoverSkeleton from "./MovieGroup/MovieCover/MovieCoverSkeleton";

interface Props {
  films: IBaseFilm[] | undefined;
}
const MovieList: React.FC<Props> = ({ films }) => {
  console.log(films)
  return (
    <div className={s.container}>

      {(!films || !films?.length )&&   [...new Array(10)].map(() => (<MovieCoverSkeleton/>))}
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
