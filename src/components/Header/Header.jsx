import useProgressiveImage from '../../hooks/useProgressiveImage.jsx';
import HeaderDecoration from '../HeaderDecoration/HeaderDecoration.jsx';
import './Header.scss';

const Header = () => {
  const backgroundImg = useProgressiveImage('./src/assets/header_poster.jpg');
  return (
    <header
      className="page_header"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="page_header__decor">
        <HeaderDecoration label="Today" />
        <HeaderDecoration label="Soon" />
      </div>
      <div className="page_header__container">
        <span className="page_header__logo">MoviesDB</span>
      </div>
    </header>
  );
};

export default Header;
