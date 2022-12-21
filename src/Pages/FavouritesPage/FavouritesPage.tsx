import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import MovieList from "../../components/MovieList/MovieList";
import { useGetFavouritesFilmsQuery } from "../../store/services/filmAPI";
import MovieCover from "../../components/MovieList/MovieGroup/MovieCover/MovieCover";
import s from "./FavouritesPage.module.scss";
const FavouritesPage = () => {
  const { data } = useGetFavouritesFilmsQuery();
  return (
    <div>
      <Wrapper>
        <h1 className={s.heading}>
          {data
            ? "Movies that you liked most"
            : "You don't added anything to favourites yet"}
        </h1>
        <div className={s.favContainer}>
          {data &&
            data.map((fav) => (
              <MovieCover
                movieId={fav.id}
                rating={fav.rating.rate}
                image={fav.cover}
                key={fav.id}
              />
            ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default FavouritesPage;
