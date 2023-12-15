import axios from 'axios';
import { useEffect, useState } from 'react';
const BASE_URL = `http://www.omdbapi.com/?apikey=${await import.meta.env
  .VITE_API_KEY}`;

const useMoviesApi = query => {
  const controller = new AbortController();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, msg: '' });

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    if (query.length === 0) return;
    setLoading(true);
    axios({
      method: 'GET',
      url: BASE_URL + `&s=${query}`,
      signal: controller.signal,
    })
      .then(({ data }) => {
        if (!data.Error) {
          console.log(data);
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
  }, [query]);

  return [movies, loading, error];
};

export default useMoviesApi;
