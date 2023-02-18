import React, { useEffect, useState } from "react";
import { useGetSearchedFilmsQuery } from "../../store/services/filmAPI";
import { useParams } from "react-router";
import s from "./MovieByCategoryPage.module.scss";
import MovieCover from "../../components/MovieList/MovieGroup/MovieCover/MovieCover";
import { RewriteGroupName } from "../../helpers/helpers";
import { useFilters } from "../../hooks/useFilters";
import Sort from "../../components/Sort/Sort";
import PageSwitcher from "../../components/PageSwitcher/PageSwitcher";
import MovieList from "../../components/MovieList/MovieList";

const MovieByCategoryPage: React.FC = () => {
  const { id: listName } = useParams();
  const { sortFilters, onSortChange } = useFilters();
  const [page, setPage] = useState<number>(1);
  const { data } = useGetSearchedFilmsQuery({
    sort: sortFilters,
    searchQuery: "",
    list: listName,
    limit: 18,
    page: page,
  });
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [listName, page]);
  return (
    <>
      <h1 className={s.heading}>{RewriteGroupName(listName || "")}</h1>
      <Sort onChange={onSortChange} {...sortFilters} withGenre />
      <div className={s.films}>{data && <MovieList films={data} />}</div>
      <PageSwitcher page={page} onChange={setPage} />
    </>
  );
};

export default MovieByCategoryPage;
