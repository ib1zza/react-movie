import React from "react";
import s from "./MainBanner.module.scss";
import banner from "../../assets/Moonfall.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useGetFilmByIdQuery } from "../../store/services/filmAPI";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../types/AppRoutes";
const MainBanner = () => {
  const { data } = useGetFilmByIdQuery("tt1630029");

  if (!data) {
    return <div></div>;
  }
  return (
    <div className={s.container}>
      {data ? (
        <>
          <Link to={AppRoutes.FILM + "/" + data.id}>
            <img src={data.primaryImage?.url} alt="#" className={s.picture} />
            <div className={s.description}>{data.titleText.text}</div>
          </Link>
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default MainBanner;
