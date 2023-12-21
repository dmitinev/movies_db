import { createContext, useCallback, useMemo, useState } from 'react';
import useMoviesApi from '../hooks/useMoviesApi.jsx';

export const FilmsContext = createContext({});

const FilmsContextProvider = ({ children }) => {
  const [query, setQuery] = useState(''),
    [params, setParams] = useState(''),
    [movies, loading, error] = useMoviesApi(query, params),
    changeHandler = useCallback(
      e => {
        setQuery(e.target.value);
      },
      [query],
    ),
    radioBtnHandler = useCallback(
      e => {
        if (e.target.value.toLowerCase().includes('all')) {
          setParams(null);
        } else {
          setParams(e.target.value.toLowerCase());
        }
      },
      [params],
    ),
    contextValue = useMemo(() => {
      return {
        onChangeHandler: changeHandler,
        onRadioBtnHandler: radioBtnHandler,
        params: params,
        movies: movies,
        query: query,
        isMoviesLoading: loading,
        error: error,
      };
    }, [movies, query, loading, error, changeHandler, radioBtnHandler, params]);

  return (
    <FilmsContext.Provider value={contextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
