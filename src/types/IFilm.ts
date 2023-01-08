interface Rating {
  rate: number;
  count: number;
}

export interface IFilm {
  id: number;
  title: string;
  dateOfCreation: string;
  duration: number;
  description: string;
  director: string;
  writers: string;
  actors: string;
  rating: Rating;
  genre: string[];
  cover: string;
}

export interface IFavouriteFilm {
  id: number;
  title: string;
  rating: Rating;
  cover: string;
}

interface Caption {
  plainText: string;
  __typename: string;
}

interface PrimaryImage {
  id: string;
  width: number;
  height: number;
  url?: string;
  caption: Caption;
  __typename: string;
}

interface TitleType<T> {
  text: string;
  id: string;
  isSeries: T;
  isEpisode: boolean;
  __typename: string;
}

interface TitleText {
  text: string;
  __typename: string;
}

interface ReleaseYear {
  year: number;
  endYear?: any;
  __typename: string;
}

interface ReleaseDate {
  day?: number;
  month?: number;
  year: number;
  __typename: string;
}

interface RatingsSummary {
  aggregateRating?: any;
  voteCount: number;
  __typename: string;
}

interface Genre {
  text: string;
  id: string;
  __typename: string;
}

interface Genres {
  genres: Genre[];
  __typename: string;
}

interface PlotText {
  plainText: string;
  __typename: string;
}

interface Language {
  id: string;
  __typename: string;
}

interface Plot {
  plotText: PlotText;
  language: Language;
  __typename: string;
}

export interface IMiniFilm {
  id: string;
  primaryImage: PrimaryImage;
  titleType: TitleType<any>;
  titleText: TitleText;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
}

export interface IBaseFilm {
  id: string;
  ratingsSummary: RatingsSummary;
  episodes?: Episodes;
  primaryImage: PrimaryImage | null;
  titleType: TitleType<any>;
  genres: Genres;
  titleText: TitleText;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime?: {
    seconds: number;
  };
  series?: any;
  meterRanking?: any;
  plot: Plot;
}

export interface Episodes2 {
  total: number;
  __typename: string;
}

export interface Season {
  number: number;
  __typename: string;
}

export interface Year {
  year: number;
  __typename: string;
}

export interface TotalEpisodes {
  total: number;
  __typename: string;
}

export interface RatingsSummary2 {
  aggregateRating: number;
  __typename: string;
}

export interface Node {
  ratingsSummary: RatingsSummary2;
  __typename: string;
}

export interface Edge {
  node: Node;
  __typename: string;
}

export interface TopRated {
  edges: Edge[];
  __typename: string;
}

export interface Episodes {
  episodes: Episodes2;
  seasons: Season[];
  years: Year[];
  totalEpisodes: TotalEpisodes;
  topRated: TopRated;
  __typename: string;
}

export interface Runtime {
  seconds: number;
  __typename: string;
}

export interface RankChange {
  changeDirection: string;
  difference: number;
  __typename: string;
}

export interface MeterRanking {
  currentRank: number;
  rankChange: RankChange;
  __typename: string;
}

export interface ISeries {
  id: string;
  ratingsSummary: RatingsSummary;
  episodes: Episodes;
  primaryImage: PrimaryImage;
  titleType: TitleType<true>;
  genres: Genres;
  titleText: TitleText;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime: Runtime;
  series?: any;
  meterRanking?: MeterRanking;
  plot: Plot;
}
