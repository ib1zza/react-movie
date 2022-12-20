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
const MovieCover: React.FC<Props> = ({ rating, image, movieId }) => {
  return (
    <div className={s.container}>
      <Link to={AppRoutes.FILM + "/" + movieId}>
        <div className={s.rating}>
          <FontAwesomeIcon icon={faStar} className={s.starIcon} />
          <span>{rating}</span>
        </div>

        <img src={imagedefault} alt="" className={s.image} />
      </Link>
    </div>
  );
};

export default MovieCover;
