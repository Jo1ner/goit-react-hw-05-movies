import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'Api/GetMovies';
import { Loader } from 'components/Loader/Loader';
import {
  StyledAddInfo,
  StyledLink,
  StyledMovieDetails,
} from './MovieDetails.styled';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const defaultImg = 'https://dummyimage.com/360x500';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log('location: ', location);
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchMovieById(movieId);

        setMovieDetails(data);
      } catch (error) {
        setMovieDetails(null);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  return (
    <div>
      <StyledLink to={backLinkRef.current}>Go back</StyledLink>
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <div>
          <StyledMovieDetails>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                  : defaultImg
              }
              alt={movieDetails.title}
              width="360"
              height="500"
            />

            <div>
              <h2 className="movie-title">
                {movieDetails.title} ({movieDetails.release_date.split('-')[0]})
              </h2>
              <p className="desc">
                User Score: {movieDetails.vote_average.toFixed(2)}
              </p>
              <h3 className="title-desc">Overview</h3>
              <p className="desc">{movieDetails.overview}</p>
              <h3 className="title-desc">Genres</h3>
              <ul className="desc-list">
                {movieDetails.genres.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </StyledMovieDetails>
          <StyledAddInfo>
            <h3 className="title-info">Additional information</h3>
            <ul>
              <StyledLink to="reviews">Reviews</StyledLink>
              <StyledLink to="cast">Cast</StyledLink>
            </ul>
          </StyledAddInfo>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="reviews" element={<Reviews />} />
              <Route path="cast" element={<Cast />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
