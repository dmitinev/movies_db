import PropTypes from 'prop-types';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderImage from '../SliderImage/SliderImage.jsx';
import './Slider.scss';
SwiperCore.use(Autoplay);

const Slider = ({ images }) => {
  return (
    <Swiper
      className="page_header__slider"
      slidesPerView={6}
      centeredSlides={true}
      loop={true}
      spaceBetween={50}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {images.map(image => {
        return (
          <SwiperSlide className="page_header__slider-slide" key={image}>
            {({ isActive }) => {
              return (
                <SliderImage
                  className={
                    isActive
                      ? 'page_header__slider-slide--active'
                      : 'page_header__slider-slide'
                  }
                  src={image}
                />
              );
            }}
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
