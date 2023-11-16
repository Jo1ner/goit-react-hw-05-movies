import { fetchTrendingMovies } from 'Api/GetMovies';
import React, { useEffect, useState } from 'react';
import { StyledMoviesList, StyledTitle } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMoviesDay = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMoviesDay();
  }, []);
  return (
    <div>
      <StyledTitle>Trending movies today</StyledTitle>
      <StyledMoviesList>
        {error !== null && <p>{error}</p>}
        {isLoading && <Loader />}
        {movies !== null && <MoviesList movies={movies} location={location} />}
      </StyledMoviesList>
    </div>
  );
};

export default Home;
