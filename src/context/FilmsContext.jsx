import axios from 'axios';
import { createContext, useCallback, useMemo, useState } from 'react';
import useMoviesApi, { BASE_URL } from '../hooks/useMoviesApi.jsx';

export const FilmsContext = createContext({});

const FilmsContextProvider = ({ children }) => {
  const [query, setQuery] = useState(''),
    [params, setParams] = useState(''),
    [contentInfoIsLoading, setContentInfoIsLoading] = useState(false),
    [contentInfoIsLoadingError, setContentInfoIsLoadingError] = useState(false),
    [contentInfo, setContentInfo] = useState(''),
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
    loadMovieContent = useCallback(movieID => {
      setContentInfoIsLoading(true);
      axios
        .get(BASE_URL + `&i=${movieID}`)
        .then(({ data }) => {
          if (!data.Error) {
            setContentInfo(data);
            setContentInfoIsLoading(false);
          } else {
            setContentInfoIsLoading(false);
            setContentInfoIsLoadingError(true);
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch(_ => setContentInfoIsLoadingError(true));
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
        contentInfoIsLoading: contentInfoIsLoading,
        contentInfoIsLoadingError: contentInfoIsLoadingError,
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
      contentInfoIsLoading,
      contentInfoIsLoadingError,
    ]);

  return (
    <FilmsContext.Provider value={contextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
