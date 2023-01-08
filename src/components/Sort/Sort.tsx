import React, { useEffect, useState } from "react";
import s from "./Sort.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";
import {
  useGetAllGenresQuery,
  useGetAllTitleTypesQuery,
} from "../../store/services/filmAPI";
import { useNavigate, useSearchParams } from "react-router-dom";

export type ISortTypes = "year.incr" | "year.decr";

export interface ISortFilters {
  startYear?: number;
  endYear?: number;
  sort?: ISortTypes;
  withTitleTypes?: boolean;
  withGenre?: boolean;
  genre?: string;
  titleType?: string;
}

interface Props extends ISortFilters {
  onChange: (newObj: ISortFilters) => void;
}

const Sort: React.FC<Props> = ({
  sort,
  endYear,
  startYear,
  onChange,
  genre,
  titleType,
  withGenre,
  withTitleTypes,
}) => {
  const [sortFilters, setSortFilters] = useState<ISortFilters>({
    startYear: startYear || 1800,
    endYear: endYear || 2025,
    sort: sort || "year.incr",
    genre: genre || undefined,
    titleType: titleType || undefined,
  });
  // const navigate = useNavigate();
  // let [searchParams, setSearchParams] = useSearchParams();

  const { data: genres } = useGetAllGenresQuery();
  const { data: titleTypes } = useGetAllTitleTypesQuery();

  useEffect(() => {
    if (!sortFilters || !sortFilters.endYear || !sortFilters.startYear) return;
    if (
      sortFilters.endYear < 1800 ||
      sortFilters.endYear > 2025 ||
      sortFilters.startYear < 1800 ||
      sortFilters.startYear > 2025 ||
      sortFilters.endYear < sortFilters.startYear
    ) {
      return;
    }

    /*navigate(
      `?sort=${sortFilters.sort}?startYear=${sortFilters.startYear}?endYear=${
        sortFilters.endYear
      }${
        sortFilters.genre === "unselected" ? "" : "?genre=" + sortFilters.genre
      }${
        sortFilters.titleType === "unselected"
          ? ""
          : "?titleType=" + sortFilters.titleType
      }`,
      { replace: false, relative: "path" }
    );*/

    if (
      sortFilters.genre === "unselected" &&
      sortFilters.titleType === "unselected"
    ) {
      onChange({ ...sortFilters, genre: undefined, titleType: undefined });
      return;
    }
    if (sortFilters.titleType === "unselected") {
      onChange({ ...sortFilters, titleType: undefined });
      return;
    }
    if (sortFilters.genre === "unselected") {
      onChange({ ...sortFilters, genre: undefined });
      return;
    }
    onChange(sortFilters);
  }, [sortFilters]);

  const toggleSort = () =>
    setSortFilters((prevState) => ({
      ...prevState,
      sort: prevState.sort === "year.incr" ? "year.decr" : "year.incr",
    }));

  return (
    <div className={s.container}>
      <div className={s.yearSlider}>
        <input
          type="number"
          min={1800}
          max={2025}
          placeholder={"1800"}
          className={s.inputPrice}
          value={sortFilters.startYear}
          onChange={(e) =>
            setSortFilters({
              ...sortFilters,
              startYear: e.target.valueAsNumber,
            })
          }
        />
        <input
          type="number"
          min={1800}
          max={2025}
          placeholder={"2025"}
          className={s.inputPrice}
          value={sortFilters.endYear}
          onChange={(e) =>
            setSortFilters({
              ...sortFilters,
              endYear: e.target.valueAsNumber,
            })
          }
        />

        <button className={s.toggleDirection} onClick={toggleSort}>
          {sortFilters.sort === "year.incr" ? (
            <FontAwesomeIcon icon={faArrowUpWideShort} />
          ) : (
            <FontAwesomeIcon icon={faArrowDownWideShort} />
          )}
        </button>
      </div>
      {withGenre && (
        <div className={s.genreSelect}>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSortFilters((prevState) => ({
                ...prevState,
                genre: e.target.value,
              }));
            }}
            defaultValue={"unselected"}
          >
            <option value={"unselected"}>All genres</option>
            {genres &&
              genres.slice(1).map((g) => (
                <option value={g} key={g}>
                  {g[0].toUpperCase() + g.slice(1)}
                </option>
              ))}
          </select>
        </div>
      )}
      {withTitleTypes && (
        <div className={s.genreSelect}>
          <select
            defaultValue={"unselected"}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSortFilters((prevState) => ({
                ...prevState,
                titleType: e.target.value,
              }));
            }}
          >
            <option value={"unselected"}>All titleTypes</option>
            {titleTypes &&
              titleTypes.slice(1).map((g) => (
                <option value={g} key={g}>
                  {g[0].toUpperCase() + g.slice(1)}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Sort;
