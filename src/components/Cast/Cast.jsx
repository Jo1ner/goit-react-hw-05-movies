import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'Api/GetMovies';
import { Loader } from 'components/Loader/Loader';
import { StyledCast } from './Cast.styled';

const defaultImg = 'https://dummyimage.com/150x225';

const Cast = () => {
  const { movieId } = useParams();

  const [credits, setCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchMovieCredits(movieId);
        setCredits(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <StyledCast>
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      {credits !== null &&
        credits.cast.map(({ profile_path, character, name }) => (
          <li className="list-cast-item" key={name}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImg
              }
              alt={name}
              width="150"
              height="225"
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </StyledCast>
  );
};

export default Cast;
