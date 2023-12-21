import CardsPanel from '../CardsPanel/CardsPanel.jsx';
import RadioButton from '../RadioButton/RadioButton.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './FilmSearch.scss';

const FilmSearch = () => {
  return (
    <div className="filmSearch" data-testid="filmSearch">
      <div className="filmSearch__serchItems">
        <SearchBar />
        <div className="filmSearch__paramBtns">
          <RadioButton
            value="All types"
            name="film_radio"
            defaultChecked={true}
          />
          <RadioButton value="Series" name="film_radio" />
          <RadioButton value="Movie" name="film_radio" />
          <RadioButton value="Game" name="film_radio" />
          <RadioButton value="Game" name="film_radio" />
        </div>
      </div>
      <CardsPanel />
    </div>
  );
};

export default FilmSearch;
