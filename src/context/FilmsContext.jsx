import axios from 'axios';
import { createContext, useCallback, useMemo, useState } from 'react';
import useMoviesApi, { BASE_URL } from '../hooks/useMoviesApi.jsx';

export const FilmsContext = createContext({});

const FilmsContextProvider = ({ children }) => {
  const [query, setQuery] = useState(''),
    [params, setParams] = useState(''),
    [contentInfo, setContentInfo] = useState(''),
    [movies, loading, error, setError] = useMoviesApi(query, params),
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
    loadMovieContent = useCallback(movieID => {
      axios
        .get(BASE_URL + `&i=${movieID}`)
        .then(({ data }) => {
          setContentInfo(data);
        })
        .catch(e => setError({ error: true, msg: e }));
    }, []),
    contextValue = useMemo(() => {
      return {
        onChangeHandler: changeHandler,
        onRadioBtnHandler: radioBtnHandler,
        params: params,
        movies: movies,
        query: query,
        isMoviesLoading: loading,
        error: error,
        loadMovieData: loadMovieContent,
        contentInfo: contentInfo,
      };
    }, [
      movies,
      query,
      loading,
      error,
      changeHandler,
      radioBtnHandler,
      params,
      loadMovieContent,
      contentInfo,
    ]);

  return (
    <FilmsContext.Provider value={contextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
