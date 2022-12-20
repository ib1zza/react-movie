import React from "react";
import s from "./MovieCover.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagedefault from "../../../../assets/topgun.jpg";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../types/AppRoutes";
interface Props {
  image?: string;
  rating: number;
  movieId: number;
}

const notFoundPoster =
  "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
const MovieCover: React.FC<Props> = ({ rating, image, movieId }) => {
  return (
    <div className={s.container}>
      <Link to={AppRoutes.FILM + "/" + movieId}>
        <div className={s.rating}>
          <FontAwesomeIcon icon={faStar} className={s.starIcon} />
          <span>{rating}</span>
        </div>

        <img src={image || notFoundPoster} alt="" className={s.image} />
      </Link>
    </div>
  );
};

export default MovieCover;
