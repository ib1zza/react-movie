import React, { useState } from "react";
import { useGetFilmByIdQuery } from "../../store/services/filmAPI";
import s from "../MovieList/MovieGroup/MovieCover/MovieCover.module.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../types/AppRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
const notFoundPoster =
  "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

interface Props {
  id: string;
  seasonNumber: number;
  episodeNumber: number;
}
const TvEpisodeCover: React.FC<Props> = ({
  episodeNumber,
  seasonNumber,
  id,
}) => {
  const { data } = useGetFilmByIdQuery(id);
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      className={s.container}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <Link to={AppRoutes.FILM + "/" + id}>
        {data && data.ratingsSummary.aggregateRating && (
          <div className={s.rating}>
            <FontAwesomeIcon icon={faStar} className={s.starIcon} />
            <span>{data.ratingsSummary.aggregateRating}</span>
          </div>
        )}

        <img
          src={(data && data.primaryImage?.url) || notFoundPoster}
          alt=""
          className={s.image}
        />
        <motion.div className={s.overflow}>
          <h4>{data && data.titleText.text}</h4>
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
                <div>
                  <FontAwesomeIcon icon={faStar} className={s.starIcon} />
                  <span>{data && data.ratingsSummary.aggregateRating}</span>
                </div>
                <h5>{data && data?.releaseYear?.year}</h5>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default TvEpisodeCover;
