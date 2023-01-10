import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  // useAddToFavouritesMutation,
  // useGetFavouritesFilmsQuery,
  useGetFilmByIdQuery,
  // useRemoveFromFavouritesMutation,
} from "../../store/services/filmAPI";
import s from "./FilmPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faStar } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { IBaseFilm, IMiniFilm, ISeries } from "../../types/IFilm";
import Season from "../../components/Season/Season";
import {
  useAddToFavouritesMutation,
  useGetFavouritesFilmsQuery,
  useRemoveFromFavouritesMutation,
} from "../../store/services/favouritesAPI";
const notFoundPoster =
  "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

const FilmPage = () => {
  const { id } = useParams();
  const { data: liked } = useGetFavouritesFilmsQuery();
  const [isLiked, setIsLiked] = useState(false);
  const [data, setData] = useState<IBaseFilm | ISeries>();
  const [isSeries, setIsSeries] = useState(false);
  const [addToFav] = useAddToFavouritesMutation();
  const [removeFromFav] = useRemoveFromFavouritesMutation();
  // @ts-ignore
  const { currentData, isLoading } = useGetFilmByIdQuery(id as number);

  useEffect(() => {
    const ids = (liked && liked.map((el) => el.id)) || 0;
    console.log(ids);
    setIsLiked(!!(ids && ids.includes(id || "")));
  }, [id, liked]);

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
    isLiked && id ? removeFromFav(id) : addToFav(id || "");
  };

  return (
    <Wrapper>
      <div className={s.container}>
        <div className={s.description}>
          <div className={s.description__header}>
            <h2 className={s.mainInfo}>
              {[
                data.titleText.text,
                data?.releaseYear?.year,
                data.runtime && data.runtime.seconds / 60 + "m",
              ].join(" • ")}
            </h2>
            <div className={s.genres}>
              {data?.genres?.genres?.map((genreName) => (
                <span className={s.genre} key={genreName.id}>
                  {genreName.text}
                </span>
              ))}
            </div>
          </div>
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
                ></Season>
              ))}
            </div>
          )}
          {/*<div className={s.description__personalities}>*/}
          {/*  <div className={s.section}>*/}
          {/*    /!*Director : <span>{data.}</span>*!/*/}
          {/*  </div>*/}
          {/*  <div className={s.section}>*/}
          {/*    /!*Writers : <span>{data.writers}</span>*!/*/}
          {/*  </div>*/}
          {/*  <div className={s.section}>*/}
          {/*    /!*Stars : <span>{data.actors}</span>*!/*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        <div className={s.aside}>
          <div className={s.aside__header}>
            <div className={s.icons}>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={handlerLike}
                className={(isLiked && s.liked) || ""}
              />
              <FontAwesomeIcon icon={faShareNodes} />
            </div>
            <div className={s.reviews}>
              <FontAwesomeIcon icon={faStar} className={s.star} />
              <div>
                <span className={s.rate}>
                  {data.ratingsSummary.aggregateRating}
                </span>
                <span className={s.count}>{data.ratingsSummary.voteCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FilmPage;
