import { Route, Routes } from 'react-router-dom';
import { Page404 } from '../pages/404/404.jsx';
import MainPage from '../pages/MainPage/MainPage.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
);

export default AppRoutes;
