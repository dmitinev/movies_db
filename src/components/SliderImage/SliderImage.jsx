import { useSwiperSlide } from 'swiper/react';
import SliderImageButton from '../SliderImageButton/SliderImageButton.jsx';
import './SliderImage.scss';

const SliderImage = ({ src, altText }) => {
  const { isActive } = useSwiperSlide();
  return (
    <div
      className={
        isActive
          ? 'page_header__slider-slide--active'
          : 'page_header__slider-slide'
      }
    >
      <img src={src} alt={altText} />;
      <SliderImageButton />
    </div>
  );
};

SliderImage.defaultProps = {
  src: 'https://dummyimage.com/200x200/000/fff',
  altText: 'default alt',
  className: '',
};

export default SliderImage;
