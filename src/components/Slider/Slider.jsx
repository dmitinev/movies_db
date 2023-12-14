import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderImage from '../SliderImage/SliderImage.jsx';
import './Slider.scss';

const Slider = ({ images }) => {
  return (
    <Swiper
      className="page_header__slider"
      modules={[Scrollbar, Autoplay]}
      direction="horizontal"
      draggable={false}
      scrollbar={false}
      slidesPerView={6}
      watchOverflow={true}
      centerInsufficientSlides={true}
      centeredSlides={true}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {images.map(image => {
        return (
          <SwiperSlide className="page_header__slider-slide" key={image}>
            <SliderImage src={image} />;
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

Slider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Slider;
