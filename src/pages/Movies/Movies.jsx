import React, { useEffect, useState } from 'react';
import { StyledList, StyledSearch } from './Movie.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieSearchByKeyword } from 'Api/GetMovies';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const MovieDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const queryValue = searchParams.get('query');
  console.log('queryValue', queryValue);

  const onFormSubmit = evt => {
    evt.preventDefault();
    const searchText = evt.currentTarget.elements.searchKey.value;
    setSearchParams({ query: searchText });
    evt.currentTarget.reset();
  };

  useEffect(() => {
    if (!queryValue) return;

    const fetchSearchedMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await fetchMovieSearchByKeyword(queryValue);
        if (data.results.length === 0) {
          alert('Nothing was found for your request');
        }
        setMovies(data.results);
      } catch (error) {
        setMovies(null);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchedMovies();
  }, [queryValue]);

  return (
    <div>
      <StyledSearch>
        <form onSubmit={onFormSubmit} className="form">
          <input
            name="searchKey"
            required
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </StyledSearch>
      <StyledList>
        {error !== null && <p>{error}</p>}
        {isLoading && <Loader />}
        {movies !== null && <MoviesList movies={movies} location={location} />}
      </StyledList>
    </div>
  );
};

export default MovieDetails;
