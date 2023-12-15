import CardsPanel from '../CardsPanel/CardsPanel.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './FilmSearch.scss';

const FilmSearch = () => {
  return (
    <div className="filmSearch" data-testid="filmSearch">
      <SearchBar />
      <CardsPanel />
    </div>
  );
};

export default FilmSearch;
