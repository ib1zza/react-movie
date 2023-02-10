import React, { FC, useEffect, useState } from "react";
import s from "./SearchBar.module.scss";
import {
  faMagnifyingGlass,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetSearchedFilmsQuery } from "../../../store/services/filmAPI";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../../../types/AppRoutes";

interface Props {
  value: string;
  onChange: (query: string) => void;
  placeholder?: string;
}
const SearchBar: FC<Props> = ({ placeholder, value, onChange }) => {
  const { pathname } = useLocation();
  const [isOverflowVisible, setIsOverflowVisible] = useState(false);

  const { data: currentData } = useGetSearchedFilmsQuery({
    searchQuery: value || "",
    sort: { sort: "year.decr" },
    limit: 10,
  });

  useEffect(() => setIsOverflowVisible(false), [pathname]);
  return (
    <>
      <div
        className={
          s.searchBarContainer +
          (currentData && isOverflowVisible && value
            ? " " + s.input__active
            : "")
        }
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className={s.icon} />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsOverflowVisible(true)}
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <FontAwesomeIcon
            icon={faXmark}
            className={s.close}
            onClick={() => onChange("")}
          />
        )}
        <div className={s.results}>
          {currentData && isOverflowVisible && value && (
            <>
              <Link to={AppRoutes.SEARCH + "/" + value}>
                <div className={s.result__item}>
                  <span>{"See all results ->"}</span>
                </div>
              </Link>
              {currentData.map((movie) => (
                <Link to={AppRoutes.FILM + "/" + movie.id}>
                  <div className={s.result__item}>
                    <img
                      className={s.item__cover}
                      src={movie?.primaryImage?.url}
                      alt=""
                    />
                    <div className={s.item__description}>
                      <h3>{movie.titleText.text}</h3>

                      {movie.ratingsSummary.aggregateRating && (
                        <h4>
                          {movie.ratingsSummary.aggregateRating}
                          <FontAwesomeIcon icon={faStar} className={s.star} />
                        </h4>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      {isOverflowVisible && (
        <div
          className={s.overflow}
          onClick={() => setIsOverflowVisible(false)}
        />
      )}
    </>
  );
};

export default SearchBar;
