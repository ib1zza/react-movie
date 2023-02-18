import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetFilmByIdQuery } from "../../store/services/filmAPI";
import s from "./FilmPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faStar } from "@fortawesome/free-solid-svg-icons";
import { IBaseFilm, ISeries } from "../../types/IFilm";
import Season from "../../components/Season/Season";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleLike } from "../../store/slices/likesSlice";
const notFoundPoster =
  "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

const FilmPage = () => {
  const likes = useAppSelector((state) => state.likesSlice.likesList);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [data, setData] = useState<IBaseFilm | ISeries>();
  const [isSeries, setIsSeries] = useState(false);
  const { currentData, isLoading } = useGetFilmByIdQuery(id as string);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (likes.includes(id as string)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [id, likes]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    console.log(id);
    console.log(currentData);
    if (currentData && currentData.titleType.isSeries) {
      setData(currentData as ISeries);
      setIsSeries(true);
    } else {
      setData(currentData as IBaseFilm);
      setIsSeries(false);
    }
  }, [currentData, id]);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (!data) {
    return <h1>no film...</h1>;
  }

  const handlerLike = () => {
    dispatch(toggleLike(id as string));
    console.log("like on page");
  };

  return (
    <div className={s.container}>
      <div className={s.description}>
        <div className={s.description__header}>
          <h2 className={s.mainInfo}>
            {[
              data.titleText.text,
              data?.releaseYear?.year,
              data?.runtime?.seconds && data.runtime.seconds / 60 + "m",
            ]
              .filter((el) => el !== undefined)
              .join(" • ")}
          </h2>
        </div>

        {width < 900 && (
          <div className={s.description__moreInfo}>
            <div className={s.moreInfo__header}>
              {data.ratingsSummary.aggregateRating && (
                <div className={s.reviews}>
                  <FontAwesomeIcon icon={faStar} className={s.star} />
                  <div>
                    <span className={s.rate}>
                      {data.ratingsSummary.aggregateRating}
                    </span>
                    <span className={s.count}>
                      {data.ratingsSummary.voteCount}
                    </span>
                  </div>
                </div>
              )}
              <div className={s.icons}>
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={handlerLike}
                  className={(isLiked && s.liked) || ""}
                />
                <FontAwesomeIcon icon={faShareNodes} />
              </div>
            </div>

            <div className={s.genres}>
              {data?.genres?.genres?.map((genreName) => (
                <div className={s.genre} key={genreName.id}>
                  {genreName.text}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={s.description__main}>
          <img
            src={data?.primaryImage?.url || notFoundPoster}
            alt=""
            className={s.caption}
          />

          <p className={s.description__text}>
            {data.plot?.plotText?.plainText}
          </p>
        </div>
        {isSeries && data && (
          <div className={s.series}>
            {data?.episodes?.seasons?.map((el) => (
              <Season
                key={el.number}
                seriesId={data.id}
                seasonNumber={el.number}
              />
            ))}
          </div>
        )}
      </div>

      {width > 900 && (
        <div className={s.aside}>
          <div className={s.aside__header}>
            {data.ratingsSummary.aggregateRating && (
              <div className={s.reviews}>
                <FontAwesomeIcon icon={faStar} className={s.star} />
                <div>
                  <span className={s.rate}>
                    {data.ratingsSummary.aggregateRating}
                  </span>
                  <span className={s.count}>
                    {data.ratingsSummary.voteCount}
                  </span>
                </div>
              </div>
            )}
            <div className={s.icons}>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={handlerLike}
                className={(isLiked && s.liked) || ""}
              />
              <FontAwesomeIcon icon={faShareNodes} />
            </div>
          </div>

          <div className={s.genres}>
            {data?.genres?.genres?.map((genreName) => (
              <div className={s.genre} key={genreName.id}>
                {genreName.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmPage;
