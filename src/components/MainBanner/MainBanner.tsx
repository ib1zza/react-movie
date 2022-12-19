import React from "react";
import s from "./MainBanner.module.scss";
import banner from "../../assets/Moonfall.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
const MainBanner = () => {
  return (
    <div className={s.container}>
      <img src={banner} alt="#" className={s.picture} />
      <div className={s.buttons}>
        <button>
          <FontAwesomeIcon icon={faPlay} className={s.icon} />
          Play
        </button>
        <button>
          <FontAwesomeIcon icon={faCircleInfo} className={s.icon} />
          More info
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
