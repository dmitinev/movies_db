import './NotFoundMovie.scss';

const NotFoundMovie = () => {
  return (
    <div className="notFoundMovie" data-testid="notFoundMovie">
      <h2 className="notFoundMovie__text">No movies found to show...</h2>
    </div>
  );
};

export default NotFoundMovie;
