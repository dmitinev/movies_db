import { useContext } from 'react';
import { FilmsContext } from '../../context/FilmsContext.jsx';
import ErrorLoadingMovies from '../ErrorLoadingMovies/ErrorLoadingMovies.jsx';
import Loader from '../Loader/Loader.jsx';
import MovieCard from '../MovieCard/MovieCard.jsx';
import NotFoundMovie from '../NotFoundMovie/NotFoundMovie.jsx';
import './CardsPanel.scss';

const CardsPanel = () => {
  const { movies, isMoviesLoading, error } = useContext(FilmsContext);

  if (isMoviesLoading) return <Loader />;
  if (error.error) return <ErrorLoadingMovies />;
  if (movies.length === 0) return <NotFoundMovie />;

  return (
    <div className="cardsPanel" data-testid="cardsPanel">
      {movies.map(({ Poster, Title, Year, imdbID }) => (
        <MovieCard
          key={imdbID}
          Poster={Poster}
          Title={Title}
          Year={Year}
          imdbID={imdbID}
        />
      ))}
    </div>
  );
};
export default CardsPanel;
