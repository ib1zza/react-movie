import React, { FC, useEffect, useState } from "react";
import s from "./SearchBar.module.scss";
import {
  faMagnifyingGlass,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetSearchedFilmsQuery } from "../../../store/services/filmAPI";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { AppRoutes } from "../../../types/AppRoutes";
import { useParams } from "react-router";

interface Props {
  value: string;
  onChange: (query: string) => void;
  placeholder?: string;
}
const SearchBar: FC<Props> = ({ placeholder, value, onChange }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  // const { data: currentData } = useGetSearchedFilmsQuery({ searchQuery });
  console.log(searchParams.toString());
  const onChangeHandler = (value: string) => {
    setSearchParams((prev) => ({
      ...prev,
      search: value,
    }));
    // navigate("?search=" + value, { replace: false });
    onChange(value);
  };

  useEffect(() => setIsVisible(false), [pathname]);
  return (
    <>
      <div
        className={s.searchBarContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className={s.icon} />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsVisible(true)}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
        {value && (
          <FontAwesomeIcon
            icon={faXmark}
            className={s.close}
            onClick={() => onChange("")}
          />
        )}
        {/*<div className={s.results}>*/}
        {/*  {currentData && isVisible && searchQuery && (*/}
        {/*    <>*/}
        {/*      <Link to={AppRoutes.SEARCH + "/" + searchQuery}>*/}
        {/*        <div className={s.result__item}>*/}
        {/*          <span>{"See all results ->"}</span>*/}
        {/*        </div>*/}
        {/*      </Link>*/}
        {/*      {currentData.map((movie) => (*/}
        {/*        <Link to={AppRoutes.FILM + "/" + movie.id}>*/}
        {/*          <div className={s.result__item}>*/}
        {/*            <img*/}
        {/*              className={s.item__cover}*/}
        {/*              src={movie?.primaryImage?.url}*/}
        {/*              alt=""*/}
        {/*            />*/}
        {/*            <div className={s.item__description}>*/}
        {/*              <h3>{movie.titleText.text}</h3>*/}

        {/*              {movie.ratingsSummary.aggregateRating && (*/}
        {/*                <h4>*/}
        {/*                  {movie.ratingsSummary.aggregateRating}*/}
        {/*                  <FontAwesomeIcon icon={faStar} className={s.star} />*/}
        {/*                </h4>*/}
        {/*              )}*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </Link>*/}
        {/*      ))}*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*</div>*/}
      </div>
      {isVisible && (
        <div className={s.overflow} onClick={() => setIsVisible(false)} />
      )}
    </>
  );
};

export default SearchBar;
