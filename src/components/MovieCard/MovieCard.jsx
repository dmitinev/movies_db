import { Link } from 'react-router-dom';
import ContentImage from '../ContentImage/ContentImage.jsx';
import './MovieCard.scss';

const MovieCard = ({ Poster, Title, Year, imdbID }) => {
  return (
    <Link to={`/card/${imdbID}`}>
      <div className="movieCard" data-testid="movieCard">
        <ContentImage
          url={
            Poster === 'N/A' ? 'https://placehold.co/277x400?text=N/A' : Poster
          }
          alt="movie card poster"
          className="movieCard__image"
        />
        <h2 className="movieCard__title">{Title}</h2>
        <span className="movieCard__year">{Year}</span>
      </div>
    </Link>
  );
};

MovieCard.defaultProps = {
  Poster: 'https://placehold.co/277x400?text=N/A',
  Title: 'Movie element',
  Year: '2023',
  imdbID: 'tt0162677',
};

export default MovieCard;
