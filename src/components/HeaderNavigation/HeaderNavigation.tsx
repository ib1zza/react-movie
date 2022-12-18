import React from "react";
import s from "./HeaderNavigation.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import UserProfileIcon from "./UserProfileIcon/UserProfileIcon";
const HeaderNavigation = () => {
  return (
    <div className={s.container}>
      <SearchBar placeholder={"Search for movies, TV shows..."} />
      <UserProfileIcon />
    </div>
  );
};

export default HeaderNavigation;
