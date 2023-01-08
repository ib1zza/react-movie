import React from "react";

import { useGetAllListsQuery } from "../../store/services/filmAPI";
import MovieGroup from "../../components/MovieList/MovieGroup/MovieGroup";
import s from "./ListPage.module.scss";
const ListPage = () => {
  const { data: listsNames } = useGetAllListsQuery();

  return (
    <div className={s.container}>
      {listsNames &&
        listsNames.map((el) => <MovieGroup listName={el} key={el} />)}
    </div>
  );
};

export default ListPage;
