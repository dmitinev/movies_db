import './ErrorLoadingMovies.scss';

const ErrorLoadingMovies = () => {
  return (
    <div className="errorLoadingMovies" data-testid="errorLoadingMovies">
      <h3 className="errorLoadingMovies__text">
        Whoops, error loading data...
      </h3>
    </div>
  );
};

export default ErrorLoadingMovies;
