import { fetchTrendingMovies } from 'Api/GetMovies';
import React, { useEffect, useState } from 'react';
import { StyledListItem, StyledMoviesList, StyledTitle } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMoviesDay = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchTrendingMovies();
        setTrendingMovies(data.results);
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
        {trendingMovies !== null &&
          trendingMovies.map(movie => (
            <StyledListItem key={movie.id}>
              <Link
                state={{ from: location }}
                to={`/movies/${movie.id}`}
                className="link"
              >
                <img
                  className="img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="300"
                  height="450"
                />
                <h2 className="movies-title">{movie.title}</h2>
              </Link>
            </StyledListItem>
          ))}
      </StyledMoviesList>
    </div>
  );
};

export default Home;
