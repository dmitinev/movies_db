import { useState } from 'react';
import './App.scss';
import useMoviesApi from './hooks/useMoviesApi.jsx';

function App() {
  const [query, setQuery] = useState('terminator');
  const [movies] = useMoviesApi(query);
  console.log(movies);

  const changeHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={query} onChange={changeHandler} />
    </div>
  );
}

export default App;
