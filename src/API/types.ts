// types.ts

export enum COLLECTION_TYPE {
    TOP_POPULAR_ALL="TOP_POPULAR_ALL",
    TOP_POPULAR_MOVIES="TOP_POPULAR_MOVIES",
    TOP_250_TV_SHOWS="TOP_250_TV_SHOWS",
    TOP_250_MOVIES="TOP_250_MOVIES",
    VAMPIRE_THEME="VAMPIRE_THEME",
    COMICS_THEME="COMICS_THEME",
    CLOSES_RELEASES="CLOSES_RELEASES",
    FAMILY="FAMILY",
    OSKAR_WINNERS_2021="OSKAR_WINNERS_2021",
    LOVE_THEME="LOVE_THEME",
    ZOMBIE_THEME="ZOMBIE_THEME",
    CATASTROPHE_THEME="CATASTROPHE_THEME",
    KIDS_ANIMATION_THEME="KIDS_ANIMATION_THEME",
    POPULAR_SERIES="POPULAR_SERIES"
}

export interface Film {
    kinopoiskId: number;
    kinopoiskHDId: string | null;
    imdbId: string | null;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string | null;
    logoUrl: string | null;
    reviewsCount: number;
    ratingGoodReview: number | null;
    ratingGoodReviewVoteCount: number | null;
    ratingKinopoisk: number | null;
    ratingKinopoiskVoteCount: number | null;
    ratingImdb: number | null;
    ratingImdbVoteCount: number | null;
    ratingFilmCritics: number | null;
    ratingFilmCriticsVoteCount: number | null;
    ratingAwait: number | null;
    ratingAwaitCount: number | null;
    ratingRfCritics: number | null;
    ratingRfCriticsVoteCount: number | null;
    webUrl: string;
    year: number | null;
    filmLength: number | null;
    slogan: string | null;
    description: string | null;
    shortDescription: string | null;
    editorAnnotation: string | null;
    isTicketsAvailable: boolean;
    productionStatus: string | null;
    type: string;
    ratingMpaa: string | null;
    ratingAgeLimits: string | null;
    hasImax: boolean | null;
    has3D: boolean | null;
    lastSync: string;
    countries: Country[];
    genres: Genre[];
    startYear: number | null;
    endYear: number | null;
    serial: boolean | null;
    shortFilm: boolean | null;
    completed: boolean | null;
}

export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}

export interface SeasonResponse {
    total: number;
    items: Season[];
}

export interface Season {
    number: number;
    episodes: Episode[];
}

export interface Episode {
    seasonNumber: number;
    episodeNumber: number;
    nameRu: string | null;
    nameEn: string | null;
    synopsis: string | null;
    releaseDate: string | null;
}

export interface FactResponse {
    total: number;
    items: Fact[];
}

export interface Fact {
    text: string;
    type: 'FACT' | 'BLOOPER';
    spoiler: boolean;
}

export interface DistributionResponse {
    total: number;
    items: Distribution[];
}

export interface Distribution {
    type: 'LOCAL' | 'COUNTRY_SPECIFIC' | 'PREMIERE' | 'ALL' | 'WORLD_PREMIER';
    subType: 'CINEMA' | 'DVD' | 'DIGITAL' | 'BLURAY' | null;
    date: string | null;
    reRelease: boolean | null;
    country: Country | null;
    companies: Company[];
}

export interface Company {
    name: string;
}

export interface BoxOfficeResponse {
    total: number;
    items: BoxOffice[];
}

export interface BoxOffice {
    type: string;
    amount: number;
    currencyCode: string;
    name: string;
    symbol: string;
}

export interface AwardResponse {
    total: number;
    items: Award[];
}

export interface Award {
    name: string;
    win: boolean;
    imageUrl: string | null;
    nominationName: string;
    year: number;
    persons: AwardPerson[];
}

export interface AwardPerson {
    kinopoiskId: number;
    webUrl: string;
    nameRu: string | null;
    nameEn: string | null;
    sex: string;
    posterUrl: string;
    growth: number | null;
    birthday: string | null;
    death: string | null;
    age: number | null;
    birthplace: string | null;
    deathplace: string | null;
    profession: string | null;
}

export interface VideoResponse {
    total: number;
    items: Video[];
}

export interface Video {
    url: string;
    name: string;
    site: 'YOUTUBE' | 'KINOPOISK_WIDGET' | 'YANDEX_DISK' | 'UNKNOWN';
}

export interface RelatedFilmResponse {
    total: number;
    items: RelatedFilm[];
}

export interface RelatedFilm {
    filmId: number;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    posterUrl: string;
    posterUrlPreview: string;
    relationType: 'SIMILAR';
}

export interface ReviewResponse {
    total: number;
    totalPages: number;
    totalPositiveReviews: number;
    totalNegativeReviews: number;
    totalNeutralReviews: number;
    items: Review[];
}

export interface Review {
    kinopoiskId: number;
    type: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'UNKNOWN';
    date: string;
    positiveRating: number;
    negativeRating: number;
    author: string;
    title: string | null;
    description: string;
}

export interface ExternalSourceResponse {
    total: number;
    items: ExternalSource[];
}

export interface ExternalSource {
    url: string;
    platform: string;
    logoUrl: string;
    positiveRating: number;
    negativeRating: number;
    author: string;
    title: string | null;
    description: string;
}

export interface FilmCollectionResponse {
    total: number;
    totalPages: number;
    items: FilmCollectionItem[];
}

export interface FilmCollectionItem {
    kinopoiskId: number;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk: number | null;
    ratingImbd: number | null;
    year: string | null;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
}

export interface StaffResponse {
    staffId: number;
    nameRu: string | null;
    nameEn: string | null;
    description: string | null;
    posterUrl: string;
    professionText: string;
    professionKey: string;
}

export interface PersonResponse {
    personId: number;
    webUrl: string | null;
    nameRu: string | null;
    nameEn: string | null;
    sex: string | null;
    posterUrl: string;
    growth: string | null;
    birthday: string | null;
    death: string | null;
    age: number | null;
    birthplace: string | null;
    deathplace: string | null;
    hasAwards: number | null;
    profession: string | null;
    facts: string[];
    spouses: PersonSpouse[];
    films: PersonFilm[];
}

export interface PersonSpouse {
    personId: number;
    name: string | null;
    divorced: boolean;
    divorcedReason: string | null;
    sex: string;
    children: number;
    webUrl: string;
    relation: string;
}

export interface PersonFilm {
    filmId: number;
    nameRu: string | null;
    nameEn: string | null;
    rating: string | null;
    general: boolean;
    description: string | null;
    professionKey: string;
}

export interface PersonByNameResponse {
    total: number;
    items: PersonByNameItem[];
}

export interface PersonByNameItem {
    kinopoiskId: number;
    webUrl: string;
    nameRu: string | null;
    nameEn: string | null;
    sex: string | null;
    posterUrl: string;
}

export interface ImageResponse {
    total: number;
    totalPages: number;
    items: Image[];
}

export interface Image {
    imageUrl: string;
    previewUrl: string;
}

export interface PremiereResponse {
    total: number;
    items: PremiereItem[];
}

export interface PremiereItem {
    kinopoiskId: number;
    nameRu: string | null;
    nameEn: string | null;
    year: number;
    posterUrl: string;
    posterUrlPreview: string;
    countries: Country[];
    genres: Genre[];
    duration: number | null;
    premiereRu: string;
}

export interface DigitalReleaseResponse {
    page: number;
    total: number;
    releases: DigitalReleaseItem[];
}

export interface DigitalReleaseItem {
    filmId: number;
    nameRu: string;
    nameEn: string;
    year: number;
    posterUrl: string;
    posterUrlPreview: string;
    countries: Country[];
    genres: Genre[];
    rating: number;
    ratingVoteCount: number;
    expectationsRating: number;
    expectationsRatingVoteCount: number;
    duration: number;
    releaseDate: string;
}

export interface KinopoiskUserVoteResponse {
    total: number;
    totalPages: number;
    items: KinopoiskUserVoteItem[];
}

export interface KinopoiskUserVoteItem {
    kinopoiskId: number;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk: number | null;
    ratingImbd: number | null;
    year: string | null;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
    userRating: number;
}

export interface ApiKeyResponse {
    totalQuota: {
        value: number;
        used: number;
    };
    dailyQuota: {
        value: number;
        used: number;
    };
    accountType: 'FREE' | 'EXTENDED' | 'UNLIMITED';
}

export interface MediaPostsResponse {
    total: number;
    totalPages: number;
    items: MediaPost[];
}

export interface MediaPost {
    kinopoiskId: number;
    imageUrl: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
}

export interface FiltersResponse {
    genres: FiltersResponseGenre[];
    countries: FiltersResponseCountry[];
}

export interface FiltersResponseGenre {
    id: number;
    genre: string;
}

export interface FiltersResponseCountry {
    id: number;
    country: string;
}

export interface FilmSearchResponse {
    keyword: string;
    pagesCount: number;
    searchFilmsCountResult: number;
    films: FilmSearchResponseFilm[];
}

export interface FilmSearchResponseFilm {
    filmId: number;
    nameRu: string;
    nameEn: string;
    type: string;
    year: string;
    description: string;
    filmLength: string;
    countries: Country[];
    genres: Genre[];
    rating: string;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
}

export interface FilmSearchByFiltersResponse {
    total: number;
    totalPages: number;
    items: FilmSearchByFiltersItem[];
}

export interface FilmSearchByFiltersItem {
    kinopoiskId: number;
    imdbId: string | null;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk: number | null;
    ratingImdb: number | null;
    year: number | null;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
}

export interface FilmSequelsAndPrequelsResponse {
    filmId: number;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    relationType: 'SEQUEL' | 'PREQUEL' | 'REMAKE' | 'UNKNOWN';
}

export interface ApiError {
    message: string;
}
