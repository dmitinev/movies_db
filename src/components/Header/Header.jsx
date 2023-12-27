import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import imgHeaderUrl from '../../assets/header_poster.jpg';
import HeaderDecoration from '../HeaderDecoration/HeaderDecoration.jsx';
import Slider from '../Slider/Slider.jsx';
import './Header.scss';
import image1 from '/src/assets/slider_img1.png';
import image2 from '/src/assets/slider_img2.jpg';
import image3 from '/src/assets/slider_img3.jpg';
import image4 from '/src/assets/slider_img4.jpg';
import image5 from '/src/assets/slider_img5.jpg';
import image6 from '/src/assets/slider_img6.jpg';
import image7 from '/src/assets/slider_img7.jpg';
import image8 from '/src/assets/slider_img8.jpg';
import image9 from '/src/assets/slider_img9.jpg';

// const SliderImages = import.meta.glob('../../assets/slider_*.*');
// const imageUrls = Object.keys(SliderImages).map(
//   image => new URL(image, import.meta.url).href,
// );

const Header = () => {
  const SliderImages = useMemo(
    () => [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
    ],
    [],
  );

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
        <Slider images={SliderImages} />
      </div>
    </header>
  );
};

export default Header;
