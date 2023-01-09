import React, { useState } from "react";
import MainBanner from "../components/MainBanner/MainBanner";
import MovieList from "../components/MovieList/MovieList";
import Wrapper from "../UI/Wrapper/Wrapper";
import SearchBar from "../components/HeaderNavigation/SearchBar/SearchBar";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div>
      <Wrapper>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={"Search for movies, TV shows..."}
        />
        <MainBanner />
        {/*<MovieList />*/}
      </Wrapper>
    </div>
  );
};

export default Homepage;
