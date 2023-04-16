import s from "./LeftNavigation.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faHouse,
  faMagnifyingGlass,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../types/AppRoutes";
import logo from "../../assets/logo.png";
const LeftNavigation = () => {
  const setStyles = (isActive: boolean) =>
    isActive ? s.item + " " + s.selected : s.item;
  return (
    <div className={s.navigation}>
      <div className={s.container}>
        <NavLink to={AppRoutes.HOME} className={s.logo}>
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink
          to={AppRoutes.HOME}
          className={({ isActive }) => setStyles(isActive)}
        >
          <FontAwesomeIcon icon={faHouse} className={s.icon} /> Home
        </NavLink>
        <NavLink
          to={AppRoutes.SEARCH}
          className={({ isActive }) => setStyles(isActive)}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className={s.icon} />
          Search
        </NavLink>

        <NavLink
          to={AppRoutes.CATEGORY}
          className={({ isActive }) => setStyles(isActive)}
        >
          <FontAwesomeIcon icon={faFilm} className={s.icon} />
          Categories
        </NavLink>
        <NavLink
          to={AppRoutes.GENRES}
          className={({ isActive }) => setStyles(isActive)}
        >
          <FontAwesomeIcon icon={faFilm} className={s.icon} />
          Genres
        </NavLink>
        <NavLink
          to={AppRoutes.TVSERIES}
          className={({ isActive }) => setStyles(isActive)}
        >
          <FontAwesomeIcon icon={faTv} className={s.icon} />
          TV Series
        </NavLink>

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
