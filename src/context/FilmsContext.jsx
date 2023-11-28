import { createContext } from 'react';

const filmsContext = createContext(null);

const FilmsContextProvider = ({ children }) => {
  return <filmsContext.Provider>{children}</filmsContext.Provider>;
};

export default FilmsContextProvider;
