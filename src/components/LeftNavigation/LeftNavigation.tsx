import s from "./LeftNavigation.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faFilm,
  faHouse,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
const LeftNavigation = () => {
  return (
    <div className={s.navigation}>
      <div className={s.container}>
        <div className={s.item + " " + s.selected}>
          {" "}
          <FontAwesomeIcon icon={faHouse} className={s.icon} /> Home
        </div>
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
      </div>
    </div>
  );
};

export default LeftNavigation;
