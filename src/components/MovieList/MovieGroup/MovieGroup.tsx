import React, { useEffect, useRef, useState } from "react";
import s from "./MovieGroup.module.scss";
import { useGetFilmsFromListQuery } from "../../../store/services/filmAPI";
import MovieCover from "./MovieCover/MovieCover";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../types/AppRoutes";
import MovieCoverSkeleton from "./MovieCover/MovieCoverSkeleton";
import MovieCoverSeeMore from "./MovieCover/MovieCoverSeeMore";
import { RewriteGroupName } from "../../../helpers/helpers";

const MovieGroup = ({ listName }: { listName: string }) => {
  const { data, isFetching } = useGetFilmsFromListQuery({ list: listName });

  const containerRef = useRef<HTMLDivElement>(null);

  const [pageNumber, setPageNumber] = useState(0);

  const nextHandler = () => {
    setPageNumber((prev) => prev + 1);
  };
  const prevHandler = () => {
    setPageNumber((prev) => (prev <= 1 ? 0 : prev - 1));
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.childNodes.forEach(
        // @ts-ignore
        (el) => (el.style = `transform: translateX(${pageNumber * -300}px)`)
      );
    }
  }, [pageNumber]);
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h2>
          <Link to={AppRoutes.CATEGORY + "/" + listName}>
            {RewriteGroupName(listName)}
          </Link>
        </h2>
        <span>
          <Link to={AppRoutes.CATEGORY + "/" + listName}>See all</Link>
        </span>
      </div>
      <div className={s.films} ref={containerRef}>
        {isFetching &&
          [...new Array(6)].map((_, id) => <MovieCoverSkeleton key={id} />)}
        {data && (
          <>
            {data.map((el) => (
              <MovieCover
                rating={el.ratingsSummary.aggregateRating}
                movieId={el.id}
                image={el.primaryImage?.url || undefined}
                key={el.id}
                title={el.titleText.text}
                date={el.releaseYear?.year}
              />
            ))}
            <MovieCoverSeeMore groupName={listName} />
          </>
        )}
      </div>
      <button className={s.button__prev} onClick={prevHandler}>
        {"<"}
      </button>
      <button className={s.button__next} onClick={nextHandler}>
        {">"}
      </button>
    </div>
  );
};

export default MovieGroup;
