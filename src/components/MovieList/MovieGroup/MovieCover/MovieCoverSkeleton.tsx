import React from "react";
import ContentLoader from "react-content-loader";
import s from "./MovieCover.module.scss";
const MovieCoverSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    backgroundColor="#e8e8e8"
    foregroundColor="#bababa"
    {...props}
    className={s.container}
  >
    {/*<circle cx="31" cy="31" r="15" />*/}
    {/*<rect x="58" y="18" rx="2" ry="2" width="140" height="10" />*/}
    {/*<rect x="58" y="34" rx="2" ry="2" width="140" height="10" />*/}
    <rect x="0" y="0" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default MovieCoverSkeleton;
