import React from "react";
import s from "./Season.module.scss";
import { useGetSeriesIdBySeasonQuery } from "../../store/services/filmAPI";
import TvEpisodeCover from "../TvEpisodeCover/TvEpisodeCover";

interface Props {
  seriesId: string;
  seasonNumber: number;
}
const Season: React.FC<Props> = ({ seasonNumber, seriesId }) => {
  const { data: series } = useGetSeriesIdBySeasonQuery({
    season: seasonNumber,
    id: seriesId,
  });
  return (
    <div className={s.container}>
      <h2>Season {seasonNumber}</h2>
      <div className={s.series}>
        {series &&
          series.map((el) => (
            <TvEpisodeCover
              id={el.tconst}
              key={el.tconst}
              seasonNumber={el.seasonNumber}
              episodeNumber={el.episodeNumber}
            />
          ))}
      </div>
    </div>
  );
};

export default Season;
