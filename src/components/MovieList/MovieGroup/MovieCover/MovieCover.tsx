import React, { useState } from "react";
import s from "./MovieCover.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../types/AppRoutes";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  image?: string;
  rating: number;
  movieId: string;
  title: string;
  date?: number;
}

const notFoundPoster =
  "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
const MovieCover: React.FC<Props> = ({
  rating,
  image,
  movieId,
  date,
  title,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      className={s.container}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}

    >
      <Link to={AppRoutes.FILM + "/" + movieId} target={"_blank"}>
        {rating && (
          <div className={s.rating}>
            <FontAwesomeIcon icon={faStar} className={s.starIcon} />
            <span>{rating}</span>
          </div>
        )}

        <img src={image || notFoundPoster} alt="" className={s.image} />
        <motion.div className={s.overflow}>
          <h4>{title}</h4>
          <AnimatePresence>
            {isHover && (
              <motion.div
                className={s.overflow_visible}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  margin: 0,
                  transition: { duration: 0.3 },
                }}
              >
                {rating && (
                  <div>
                    <FontAwesomeIcon icon={faStar} className={s.starIcon} />
                    <span>{rating}</span>
                  </div>
                )}
                <h5>{date}</h5>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MovieCover;
