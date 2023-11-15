import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Api/GetMovies';
import { Loader } from 'components/Loader/Loader';
import { StyledReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <StyledReviews>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {reviews !== null && reviews.results.length > 0 ? (
        reviews.results.map(({ author, content, id }) => (
          <li className="list-reviews-item" key={id}>
            <h3>Author: {author}</h3>
            <p className="reviews-desc">{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </StyledReviews>
  );
};

export default Reviews;
