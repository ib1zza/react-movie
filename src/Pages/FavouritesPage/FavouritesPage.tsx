import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { useGetFavouritesFilmsQuery } from "../../store/services/favouritesAPI";
import MovieCover from "../../components/MovieList/MovieGroup/MovieCover/MovieCover";
import s from "./FavouritesPage.module.scss";
import { useGetFilmsByIdsQuery } from "../../store/services/filmAPI";
import MovieList from "../../components/MovieList/MovieList";
const FavouritesPage = () => {
  const { data: liked } = useGetFavouritesFilmsQuery();
  const { data: films } = useGetFilmsByIdsQuery(
    liked ? liked.map((el) => el.id) : []
  );
  return (
    <div>
      <Wrapper>
        <h1 className={s.heading}>
          {liked && liked.length
            ? "Movies that you liked most"
            : "You don't added anything to favourites yet"}
        </h1>
        <div className={s.favContainer}>
          <MovieList films={films} />
        </div>
      </Wrapper>
    </div>
  );
};

export default FavouritesPage;
