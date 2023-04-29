import React, { useState } from "react";
import MainBanner from "../../components/MainBanner/MainBanner";
import Wrapper from "../../UI/Wrapper/Wrapper";
import SearchBar from "../../components/HeaderNavigation/SearchBar/SearchBar";
import s from "./Homepage.module.scss";
import MovieGroup from "../../components/MovieList/MovieGroup/MovieGroup";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const categories = ["most_pop_movies", "most_pop_series"];
  return (
    <Wrapper>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder={"Search for movies, TV shows..."}
      />
      <main className={s.main}>
        <MainBanner />
        <div className={s.categories}>
          {categories.map((category) => (
            <MovieGroup listName={category} key={category} />
          ))}
        </div>
      </main>
    </Wrapper>
  );
};

export default Homepage;
