import React, {useState} from "react";
import {useGetFilmsByGenreQuery} from "../../store/services/filmAPI";
import {useParams} from "react-router";
import s from "../MovieByCategoryPage/MovieByCategoryPage.module.scss";
import {RewriteGroupName} from "../../helpers/helpers";
import Sort, {ISortFilters} from "../../components/Sort/Sort";
import MovieList from "../../components/MovieList/MovieList";

const FilmsByGenrePage = () => {
    const {genre} = useParams();
    const [sortParams, setSortParams] = useState<ISortFilters>();
    const {currentData: data} = useGetFilmsByGenreQuery({
        list: genre || "",
        sort: sortParams,
    });
    return (
        <>
            <h1 className={s.heading}>{RewriteGroupName(genre || "")}</h1>
            <Sort
                {...sortParams}
                onChange={(newFilters) => {
                    setSortParams(newFilters);
                }}
            />
            <div className={s.films}>
                {data && <MovieList films={data}/>}
            </div>

        </>
    );
};

export default FilmsByGenrePage;
