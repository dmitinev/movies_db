import SearchBar from '../SearchBar/SearchBar.jsx';
import './FilmSearch.scss';

const FilmSearch = () => {
  return (
    <div className="filmSearch" data-testid="filmSearch">
      <SearchBar />
    </div>
  );
};

export default FilmSearch;
