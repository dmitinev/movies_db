import { useContext } from 'react';
import { FilmsContext } from '../../context/FilmsContext.jsx';
import './SearchBar.scss';

const SearchBar = () => {
  const { query, onChangeHandler } = useContext(FilmsContext);
  return (
    <input
      type="text"
      placeholder="Enter movie name to search"
      className="searchBar"
      data-testid="searchBar"
      value={localStorage.getItem('query') || query}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBar;
