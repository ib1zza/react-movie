import React, { useState } from "react";
import MainBanner from "../../components/MainBanner/MainBanner";
import Wrapper from "../../UI/Wrapper/Wrapper";
import SearchBar from "../../components/HeaderNavigation/SearchBar/SearchBar";
import s from "./Homepage.module.scss";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <Wrapper>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder={"Search for movies, TV shows..."}
      />
      <main className={s.main}>
        <MainBanner />
      </main>
    </Wrapper>
  );
};

export default Homepage;
