import axios from 'axios';

const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '87be16ff9a73274929b637f35ca2971c',
    language: 'en-US',
    page: 1,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await moviesAPI.get('/trending/movie/day');
  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await moviesAPI.get('/search/movie', { params: { query } });
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}/reviews`);
  return data.results;
};
