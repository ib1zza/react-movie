import React from "react";
import MainBanner from "../components/MainBanner/MainBanner";
import MovieList from "../components/MovieList/MovieList";
import Wrapper from "../UI/Wrapper/Wrapper";
import { useGetAllFilmsQuery } from "../store/services/filmAPI";

const Homepage = () => {
  return (
    <div>
      <Wrapper>
        <MainBanner />
        <MovieList />
      </Wrapper>
    </div>
  );
};

export default Homepage;
