import './MovieCard.scss';

const MovieCard = ({ Poster, Title, Year, imdbID }) => {
  return (
    <div className="movieCard" data-testid="movieCard">
      <img src={Poster} alt="movie card poster" className="movieCard__image" />
      <h2 className="movieCard__title">{Title}</h2>
      <span className="movieCard__year">{Year}</span>
    </div>
  );
};

MovieCard.defaultProps = {
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNjdjMDQ4ZjctYmQzNS00NjYwLWFhNTQtMGM0YmJjMmE5YmE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Title: 'Movie element',
  Year: '2023',
  imdbID: 'tt0162677',
};

export default MovieCard;
