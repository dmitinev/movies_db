import FilmsContextProvider from '../../context/FilmsContext.jsx';
import FilmSearch from '../FilmSearch/FilmSearch.jsx';
import './Main.scss';
const Main = () => {
  return (
    <main className="page_main">
      <FilmsContextProvider>
        <FilmSearch />
      </FilmsContextProvider>
    </main>
  );
};

export default Main;
