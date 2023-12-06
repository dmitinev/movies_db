import axios from 'axios';
import { useEffect, useState } from 'react';
const env = await import.meta.env;
const BASE_URL = `http://www.omdbapi.com/?apikey=${await import.meta.env
  .VITE_API_KEY}`;

const useMoviesApi = query => {
  const controller = new AbortController();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, msg: '' });

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: 'GET',
      url: BASE_URL + `&s=${query}`,
      signal: controller.signal,
    })
      .then(({ data }) => {
        setLoading(false);
        setMovies([...data.Search]);
        console.log(data);
      })
      .catch(e => {
        if (!axios.isCancel(e)) setError({ error: true, msg: e.msg });
      });
    return () => controller.abort();
  }, [query]);

  return [movies, loading, error];
};

export default useMoviesApi;
