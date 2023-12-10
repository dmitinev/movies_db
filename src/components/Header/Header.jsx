import imgHeaderUrl from '../../assets/header_poster.jpg';
import HeaderDecoration from '../HeaderDecoration/HeaderDecoration.jsx';
import Slider from '../Slider/Slider.jsx';
import './Header.scss';

const Header = () => {
  return (
    <header
      className="page_header"
      style={{
        backgroundImage: `url(${imgHeaderUrl})`,
      }}
    >
      <div className="page_header__decor">
        <HeaderDecoration label="Today" />
        <HeaderDecoration label="Soon" />
      </div>
      <div className="page_header__container">
        <span className="page_header__logo">MoviesDB</span>
      </div>
      <div className="page_header__slider-block">
        <Slider />
      </div>
    </header>
  );
};

export default Header;
