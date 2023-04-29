import React, { HTMLProps, useEffect, useRef, useState } from "react";
import s from "./MovieGroup.module.scss";
import { useGetFilmsFromListQuery } from "../../../store/services/filmAPI";
import MovieCover from "./MovieCover/MovieCover";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../types/AppRoutes";
import MovieCoverSkeleton from "./MovieCover/MovieCoverSkeleton";
import MovieCoverSeeMore from "./MovieCover/MovieCoverSeeMore";
import { RewriteGroupName } from "../../../helpers/helpers";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

  pauseOnHover: true,
  dots: false,
  arrows: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MovieGroup = ({ listName }: { listName: string }) => {
  const { data, isFetching } = useGetFilmsFromListQuery({ list: listName });
  const containerRef = useRef<HTMLDivElement>(null);

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
          <Slider {...settings} className={s.containerMovies}>
            {data.map((el) => (
              <div key={el.id} className={s.movie}>
                <MovieCover
                  rating={el.ratingsSummary.aggregateRating}
                  movieId={el.id}
                  image={el.primaryImage?.url}
                  title={el.titleText.text}
                  date={el.releaseYear?.year}
                />
              </div>
            ))}
            <MovieCoverSeeMore groupName={listName} />
          </Slider>
        )}
      </div>
    </div>
  );
};

export default MovieGroup;
