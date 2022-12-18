import React from "react";
import s from "./UserProfileIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const UserProfileIcon = () => {
  return (
    <div className={s.icon}>
      <FontAwesomeIcon icon={faUser} className={s.image} />
    </div>
  );
};

export default UserProfileIcon;
