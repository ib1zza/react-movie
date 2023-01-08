import React, { useEffect } from "react";
import { useGetAllGenresQuery } from "../../store/services/filmAPI";
import s from "./FilmGenresPage.module.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../types/AppRoutes";

const FilmGenresPage = () => {
  const { currentData: genres } = useGetAllGenresQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(genres);
  const transformList1 = (list: Array<string>) => {
    return list.reduce(
      (
        accumulator: Array<{ letter: string; list: Array<string> }>,
        currentValue
      ) => {
        if (currentValue === null) return accumulator;
        if (!accumulator.length) {
          accumulator.push({ letter: currentValue[0], list: [currentValue] });
          return accumulator;
        }
        if (
          accumulator[accumulator.length - 1].letter !== currentValue[0] &&
          accumulator[accumulator.length - 1].list[0] !== currentValue
        ) {
          accumulator.push({ letter: currentValue[0], list: [currentValue] });
        } else {
          accumulator[accumulator.length - 1].list.push(currentValue);
        }
        return accumulator;
      },
      []
    );
  };

  console.log(transformList1(genres || []));

  return (
    <div className={s.genreList}>
      {genres &&
        transformList1(genres).map((el) => {
          return (
            <div key={el.letter + el.list}>
              <div className={s.genreChar}>{el.letter}</div>
              {el.list.map((el) => (
                <div className={s.genre} key={el}>
                  <Link to={AppRoutes.GENRES + "/" + el}>{el}</Link>
                </div>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default FilmGenresPage;
