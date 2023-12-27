import axios from 'axios';
import { useEffect, useState } from 'react';
export const BASE_URL = `https://www.omdbapi.com/?apikey=${await import.meta.env
  .VITE_API_KEY}`;

const useMoviesApi = (query, param) => {
  const controller = new AbortController();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, msg: '' });

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    if (query.length === 0) return;
    localStorage.setItem('query', query);
    setLoading(true);
    axios({
      method: 'GET',
      url: BASE_URL + `&s=${query}&type=${param}`,
      signal: controller.signal,
    })
      .then(({ data }) => {
        if (!data.Error) {
          setLoading(false);
          setMovies([...data.Search]);
        } else {
          setLoading(false);
        }
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError({ error: true, msg: e });
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [query, param]);

  return [movies, loading, error];
};

export default useMoviesApi;
