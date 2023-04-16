import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import s from "./FavouritesPage.module.scss";
import {useGetFilmsByIdsQuery} from "../../store/services/filmAPI";
import MovieList from "../../components/MovieList/MovieList";
import {useAppSelector} from "../../store/hooks";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../types/AppRoutes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const FavouritesPage = () => {
    const fav = useAppSelector((state) => state.likesSlice.likesList);
    const {currentData: films, isFetching} = useGetFilmsByIdsQuery(fav);

    return (
        <div>
            <Wrapper>
                <h1 className={s.heading}>Movies that you liked most</h1>

                {!fav.length && <div className={s.dont_add}><h2>You don't added anything to favourites yet...</h2><Link
                    to={AppRoutes.HOME}>Go to homepage <FontAwesomeIcon icon={faArrowRight}/></Link></div>}

                {isFetching && <h2>Loading...</h2>}
                {!!fav.length && <div className={s.favContainer}>
                    <MovieList films={films}/>
                </div>}
            </Wrapper>
        </div>
    );
};

export default FavouritesPage;
