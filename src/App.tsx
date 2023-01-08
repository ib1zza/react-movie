import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import { AppRoutes } from "./types/AppRoutes";
import Homepage from "./Pages/Homepage";
import Layout from "./components/Layout/Layout";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import FilmPage from "./Pages/FilmPage/FilmPage";
import FavouritesPage from "./Pages/FavouritesPage/FavouritesPage";
import MovieByCategoryPage from "./Pages/MovieByCategoryPage/MovieByCategoryPage";
import FilmGenresPage from "./Pages/FilmGenresPage/FilmGenresPage";
import FilmsByGenrePage from "./Pages/FilmsByGenrePage/FilmsByGenrePage";
import ListPage from "./Pages/ListPage/ListPage";
import TvSeriesPage from "./Pages/TvSeriesPage/TvSeriesPage";
import SearchedFilmsPage from "./Pages/SearchedFilmsPage/SearchedFilmsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
          <Route path={AppRoutes.FILM + "/:id"} element={<FilmPage />} />
          <Route path={AppRoutes.FAVOURITES} element={<FavouritesPage />} />
          <Route
            path={AppRoutes.CATEGORY + "/:id"}
            element={<MovieByCategoryPage />}
          />
          <Route path={AppRoutes.CATEGORY} element={<ListPage />} />
          <Route path={AppRoutes.GENRES} element={<FilmGenresPage />} />
          <Route
            path={AppRoutes.GENRES + "/:genre"}
            element={<FilmsByGenrePage />}
          />
          <Route path={AppRoutes.TVSERIES} element={<TvSeriesPage />} />
          <Route
            path={AppRoutes.SEARCH + "/:query"}
            element={<SearchedFilmsPage />}
          />
          <Route path={AppRoutes.SEARCH} element={<SearchedFilmsPage />} />
          {/*<Route*/}
          {/*  path={AppRoutes.SEARCH + "?query"}*/}
          {/*  element={<SearchedFilmsPage />}*/}
          {/*/>*/}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
