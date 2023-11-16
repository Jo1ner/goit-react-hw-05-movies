const { StyledListItem, StyledMoviesList } = require('pages/Home/Home.styled');
const { Link } = require('react-router-dom');

const defaultImg = 'https://dummyimage.com/300x450';

const MoviesList = ({ movies, location }) => {
  return (
    <StyledMoviesList>
      {movies.map(movie => (
        <StyledListItem key={movie.id}>
          <Link
            state={{ from: location }}
            to={`/movies/${movie.id}`}
            className="link"
          >
            <img
              className="img"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
              width="300"
              height="450"
            />
            <h2 className="movies-title">{movie.title}</h2>
          </Link>
        </StyledListItem>
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;
