import { createContext, useState } from 'react';
import useMoviesApi from '../hooks/useMoviesApi.jsx';

export const FilmsContext = createContext({});

const FilmsContextProvider = ({ children }) => {
  const [query, setQuery] = useState('terminator');
  const [movies] = useMoviesApi(query);

  const changeHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <FilmsContext.Provider
      value={{ onChangeHandler: changeHandler, movies: movies, query: query }}
    >
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
