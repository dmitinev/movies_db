import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss';

SwiperCore.use(Autoplay);

const Slider = ({ props }) => {
  return (
    <Swiper
      className="page_header__slider"
      slidesPerView={3}
      spaceBetween={10}
      speed={100}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src="https://dummyimage.com/600x400/000/fff" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dummyimage.com/600x400/000/fff" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dummyimage.com/600x400/000/fff" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dummyimage.com/600x400/000/fff" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
