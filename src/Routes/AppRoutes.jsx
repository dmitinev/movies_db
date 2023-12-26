import { Route, Routes } from 'react-router-dom';
import { Page404 } from '../pages/404/404.jsx';
import ContentPage from '../pages/ContentPage/ContentPage.jsx';
import MainPage from '../pages/MainPage/MainPage.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/movies_db/" element={<MainPage />} />
    <Route path="/card/:contentId" element={<ContentPage />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
);

export default AppRoutes;
