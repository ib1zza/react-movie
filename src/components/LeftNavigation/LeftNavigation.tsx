import s from "./LeftNavigation.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faFilm,
  faHouse,
  faStar,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { AppRoutes } from "../../types/AppRoutes";
const LeftNavigation = () => {
  const setStyles = (isActive: boolean) =>
    isActive ? s.item + " " + s.selected : s.item;
  return (
    <div className={s.navigation}>
      <div className={s.container}>
        <NavLink
          to={AppRoutes.HOME}
          className={({ isActive }) => setStyles(isActive)}
        >
          <FontAwesomeIcon icon={faHouse} className={s.icon} /> Home
        </NavLink>

        <div className={s.item}>
          <FontAwesomeIcon icon={faFilm} className={s.icon} />
          Movies
        </div>
        <div className={s.item}>
          <FontAwesomeIcon icon={faTv} className={s.icon} />
          TV Series
        </div>

        <div className={s.item}>
          <FontAwesomeIcon icon={faCalendarDays} className={s.icon} />
          Upcoming
        </div>

        <NavLink
          to={AppRoutes.FAVOURITES}
          className={({ isActive }) => setStyles(isActive)}
        >
          <FontAwesomeIcon icon={faHeart} className={s.icon} />
          Favourites
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNavigation;
