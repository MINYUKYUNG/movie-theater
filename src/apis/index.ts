import axios from 'axios';

export const apiRoot = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: '8623a46232b8a504ef925ec8ef0d57a9', language: 'ko-kr' },
});

export const getPopular = async (pageNumber: number) => {
  try {
    const response = await apiRoot(`/movie/popular`, {
      params: { page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getPlaying = async (pageNumber: number) => {
  try {
    const response = await apiRoot(`/movie/now_playing`, {
      params: { page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getUpcoming = async (pageNumber: number) => {
  try {
    const response = await apiRoot(`/movie/upcoming`, {
      params: { page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getTopRated = async (pageNumber: number) => {
  try {
    const response = await apiRoot(`/movie/top_rated`, {
      params: { page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getMovieDetail = async (movieId: number) => {
  try {
    const response = await apiRoot(`/movie/${movieId}`);
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getMovieDetailVideos = async (movieId: number) => {
  try {
    const response = await apiRoot(`/movie/${movieId}/videos`);
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getSearch = async (pageNumber: number, searchInput?: string) => {
  try {
    if (searchInput !== '') {
      const response = await apiRoot(`/search/movie`, {
        params: { query: searchInput, page: pageNumber },
      });
      return response.data;
    }
  } catch (err) {
    throw new Error('not found page');
  }
};
