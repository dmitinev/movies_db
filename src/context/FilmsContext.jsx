import { createContext, useCallback, useState } from 'react';
import useMoviesApi from '../hooks/useMoviesApi.jsx';

export const FilmsContext = createContext({});

const FilmsContextProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [movies, loading, error] = useMoviesApi(query);

  const changeHandler = useCallback(
    e => {
      setQuery(e.target.value);
    },
    [query],
  );

  return (
    <FilmsContext.Provider
      value={{
        onChangeHandler: changeHandler,
        movies: movies,
        query: query,
        isMoviesLoading: loading,
        error: error,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
