import React from "react";
import { motion } from "framer-motion";
import s from "./MovieCover.module.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../types/AppRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { RewriteGroupName } from "../../../../helpers/helpers";

interface Props {
  groupName: string;
}
const MovieCoverSeeMore: React.FC<Props> = ({ groupName }) => {
  return (
    <motion.div className={s.container + " " + s.containerSeeMore}>
      <Link to={AppRoutes.CATEGORY + "/" + groupName}>
        <h4>To see more like this go to {RewriteGroupName(groupName)} page!</h4>
        <FontAwesomeIcon icon={faCircleArrowRight} className={s.link} />
      </Link>
    </motion.div>
  );
};

export default MovieCoverSeeMore;
