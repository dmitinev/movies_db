import { Link } from 'react-router-dom';
import imgHeaderUrl from '../../assets/header_poster.jpg';
import HeaderDecoration from '../HeaderDecoration/HeaderDecoration.jsx';
import Slider from '../Slider/Slider.jsx';
import './Header.scss';
const SliderImages = import.meta.glob('../../assets/slider_images/*');
const imageUrls = Object.keys(SliderImages).map(
  image => new URL(image, import.meta.url).href,
);

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
        <Link to="/">
          <span className="page_header__logo">MoviesDB</span>
        </Link>
      </div>
      <div className="page_header__slider-block">
        <Slider images={imageUrls} />
      </div>
    </header>
  );
};

export default Header;
