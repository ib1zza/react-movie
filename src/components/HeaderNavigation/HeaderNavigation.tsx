import React from "react";
import s from "./HeaderNavigation.module.scss";
import UserProfileIcon from "./UserProfileIcon/UserProfileIcon";
const HeaderNavigation = () => {
  return (
    <div className={s.container}>
      <UserProfileIcon />
    </div>
  );
};

export default HeaderNavigation;
