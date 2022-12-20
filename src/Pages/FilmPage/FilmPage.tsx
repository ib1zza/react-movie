import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useGetFilmByIdQuery } from "../../store/services/filmAPI";
import s from "./FilmPage.module.scss";
import { IFilm } from "../../types/IFilm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faStar } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../../UI/Wrapper/Wrapper";
const FilmPage = () => {
  const { id } = useParams();
  // @ts-ignore
  const { data, isLoading } = useGetFilmByIdQuery(id as number);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (!data) {
    return <h1>no film...</h1>;
  } else {
    data as IFilm;
  }

  return (
    <Wrapper>
      <div className={s.container}>
        <div className={s.description}>
          <div className={s.description__header}>
            <h2 className={s.mainInfo}>
              {[data.title, data.dateOfCreation, data.duration + "m"].join(
                " • "
              )}
            </h2>
            <div className={s.genres}>
              {data.genre.map((genreName) => (
                <span className={s.genre}>{genreName}</span>
              ))}
            </div>
          </div>
          <p className={s.description__text}>{data.description}</p>

          <div className={s.description__personalities}>
            <div className={s.section}>
              Director : <span>{data.director}</span>
            </div>
            <div className={s.section}>
              Writers : <span>{data.writers}</span>
            </div>
            <div className={s.section}>
              Stars : <span>{data.actors}</span>
            </div>
          </div>
        </div>

        <div className={s.aside}>
          <div className={s.aside__header}>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faHeart} />

              <FontAwesomeIcon icon={faShareNodes} />
            </div>
            <div className={s.reviews}>
              <FontAwesomeIcon icon={faStar} className={s.star} />

              <div>
                <span className={s.rate}>{data.rating.rate}</span>
                <span className={s.count}> | {data.rating.count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FilmPage;
