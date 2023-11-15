import axios from 'axios';

const API_KEY = 'ca36f092d65c5702293abafc88e9f6b7';

export async function fetchTrendingMovies() {
  return await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
}

export async function fetchMovieSearchByKeyword(queryValue) {
  return await axios.get(`
    https://api.themoviedb.org/3/search/movie?query=${queryValue}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}
  `);
}

export async function fetchMovieById(movieId) {
  return await axios.get(`
    https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}
  `);
}

export async function fetchMovieCredits(movieId) {
  return await axios.get(`
    https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}
  `);
}

export async function fetchMovieReviews(movieId) {
  return await axios.get(`
    https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}
  `);
}
