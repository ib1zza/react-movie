// api.ts

import axios from 'axios';
import {
    Film,
    SeasonResponse,
    FactResponse,
    DistributionResponse,
    BoxOfficeResponse,
    AwardResponse,
    VideoResponse,
    RelatedFilmResponse,
    ReviewResponse,
    ExternalSourceResponse,
    FilmCollectionResponse,
    StaffResponse,
    PersonResponse,
    PersonByNameResponse,
    ImageResponse,
    PremiereResponse,
    DigitalReleaseResponse,
    KinopoiskUserVoteResponse,
    ApiKeyResponse,
    MediaPostsResponse,
    FiltersResponse,
    FilmSearchResponse,
    FilmSearchByFiltersResponse,
    FilmSequelsAndPrequelsResponse,
    ApiError, COLLECTION_TYPE
} from './types';

const API_BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = process.env.REACT_APP_API_KEY; // Замените на ваш API ключ

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
    },
});

// Получить данные о фильме по kinopoisk id
export const getFilmById = async (id: number): Promise<Film> => {
    const response = await axiosInstance.get<Film>(`/api/v2.2/films/${id}`);
    return response.data;
};

// Получить данные о сезонах для сериала по kinopoisk film id
export const getFilmSeasons = async (id: number): Promise<SeasonResponse> => {
    const response = await axiosInstance.get<SeasonResponse>(`/api/v2.2/films/${id}/seasons`);
    return response.data;
};

// Получить данные о фактах и ошибках в фильме по kinopoisk film id
export const getFilmFacts = async (id: number): Promise<FactResponse> => {
    const response = await axiosInstance.get<FactResponse>(`/api/v2.2/films/${id}/facts`);
    return response.data;
};

// Получить данные о прокате фильма по kinopoisk film id
export const getFilmDistributions = async (id: number): Promise<DistributionResponse> => {
    const response = await axiosInstance.get<DistributionResponse>(`/api/v2.2/films/${id}/distributions`);
    return response.data;
};

// Получить данные о бюджете и сборах фильма по kinopoisk film id
export const getFilmBoxOffice = async (id: number): Promise<BoxOfficeResponse> => {
    const response = await axiosInstance.get<BoxOfficeResponse>(`/api/v2.2/films/${id}/box_office`);
    return response.data;
};

// Получить данные о наградах фильма по kinopoisk film id
export const getFilmAwards = async (id: number): Promise<AwardResponse> => {
    const response = await axiosInstance.get<AwardResponse>(`/api/v2.2/films/${id}/awards`);
    return response.data;
};

// Получить трейлеры, тизеры, видео для фильма по kinopoisk film id
export const getFilmVideos = async (id: number): Promise<VideoResponse> => {
    const response = await axiosInstance.get<VideoResponse>(`/api/v2.2/films/${id}/videos`);
    return response.data;
};

// Получить список похожих фильмов по kinopoisk film id
export const getFilmSimilars = async (id: number): Promise<RelatedFilmResponse> => {
    const response = await axiosInstance.get<RelatedFilmResponse>(`/api/v2.2/films/${id}/similars`);
    return response.data;
};

// Получить изображения, связанные с фильмом по kinopoisk film id
export const getFilmImages = async (id: number, type: string = 'STILL', page: number = 1): Promise<ImageResponse> => {
    const response = await axiosInstance.get<ImageResponse>(`/api/v2.2/films/${id}/images`, {
        params: { type, page },
    });
    return response.data;
};

// Получить список рецензий зрителей по kinopoisk film id
export const getFilmReviews = async (id: number, page: number = 1, order: string = 'DATE_DESC'): Promise<ReviewResponse> => {
    const response = await axiosInstance.get<ReviewResponse>(`/api/v2.2/films/${id}/reviews`, {
        params: { page, order },
    });
    return response.data;
};

// Получить список сайтов, где можно посмотреть фильм по kinopoisk film id
export const getFilmExternalSources = async (id: number, page: number = 1): Promise<ExternalSourceResponse> => {
    const response = await axiosInstance.get<ExternalSourceResponse>(`/api/v2.2/films/${id}/external_sources`, {
        params: { page },
    });
    return response.data;
};

// Получить список фильмов из различных топов или коллекций
export const getFilmCollections = async (type: COLLECTION_TYPE = COLLECTION_TYPE.TOP_POPULAR_ALL, page: number = 1): Promise<FilmCollectionResponse> => {
    const response = await axiosInstance.get<FilmCollectionResponse>(`/api/v2.2/films/collections`, {
        params: { type, page },
    });
    return response.data;
};

// Получить список кинопремьер
export const getFilmPremieres = async (year: number, month: string): Promise<PremiereResponse> => {
    const response = await axiosInstance.get<PremiereResponse>(`/api/v2.2/films/premieres`, {
        params: { year, month },
    });
    return response.data;
};

// Получить id стран и жанров для использования в /api/v2.2/films
export const getFilters = async (): Promise<FiltersResponse> => {
    const response = await axiosInstance.get<FiltersResponse>(`/api/v2.2/films/filters`);
    return response.data;
};

// Получить список фильмов по различным фильтрам
export const getFilmsByFilters = async (
    countries?: number[],
    genres?: number[],
    order: string = 'RATING',
    type: string = 'ALL',
    ratingFrom: number = 0,
    ratingTo: number = 10,
    yearFrom: number = 1000,
    yearTo: number = 3000,
    imdbId?: string,
    keyword?: string,
    page: number = 1
): Promise<FilmSearchByFiltersResponse> => {
    const response = await axiosInstance.get<FilmSearchByFiltersResponse>(`/api/v2.2/films`, {
        params: {
            countries: countries?.join(','),
            genres: genres?.join(','),
            order,
            type,
            ratingFrom,
            ratingTo,
            yearFrom,
            yearTo,
            imdbId,
            keyword,
            page,
        },
    });
    return response.data;
};

// Получить сиквелы и приквелы для фильма по kinopoisk film id
export const getFilmSequelsAndPrequels = async (id: number): Promise<FilmSequelsAndPrequelsResponse[]> => {
    const response = await axiosInstance.get<FilmSequelsAndPrequelsResponse[]>(`/api/v2.1/films/${id}/sequels_and_prequels`);
    return response.data;
};

// Получить список фильмов по ключевым словам
export const searchFilmsByKeyword = async (keyword: string, page: number = 1): Promise<FilmSearchResponse> => {
    const response = await axiosInstance.get<FilmSearchResponse>(`/api/v2.1/films/search-by-keyword`, {
        params: { keyword, page },
    });
    return response.data;
};

// Получить данные об актерах, режиссерах и т.д. по kinopoisk film id
export const getStaffByFilmId = async (filmId: number): Promise<StaffResponse[]> => {
    const response = await axiosInstance.get<StaffResponse[]>(`/api/v1/staff`, {
        params: { filmId },
    });
    return response.data;
};

// Получить данные о конкретном человеке по kinopoisk person id
export const getPersonById = async (id: number): Promise<PersonResponse> => {
    const response = await axiosInstance.get<PersonResponse>(`/api/v1/staff/${id}`);
    return response.data;
};

// Поиск актеров, режиссеров и т.д. по имени
export const searchPersonsByName = async (name: string, page: number = 1): Promise<PersonByNameResponse> => {
    const response = await axiosInstance.get<PersonByNameResponse>(`/api/v1/persons`, {
        params: { name, page },
    });
    return response.data;
};

// Получить данные об оценках пользователя
export const getUserVotes = async (id: number, page: number = 1): Promise<KinopoiskUserVoteResponse> => {
    const response = await axiosInstance.get<KinopoiskUserVoteResponse>(`/api/v1/kp_users/${id}/votes`, {
        params: { page },
    });
    return response.data;
};

// Получить данные об api key
export const getApiKeyInfo = async (apiKey: string): Promise<ApiKeyResponse> => {
    const response = await axiosInstance.get<ApiKeyResponse>(`/api/v1/api_keys/${apiKey}`);
    return response.data;
};

// Получить медиа новости с сайта кинопоиск
export const getMediaPosts = async (page: number = 1): Promise<MediaPostsResponse> => {
    const response = await axiosInstance.get<MediaPostsResponse>(`/api/v1/media_posts`, {
        params: { page },
    });
    return response.data;
};
