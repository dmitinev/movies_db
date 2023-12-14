import './SliderImageButton.scss';

const SliderImageButton = ({ link }) => {
  return (
    <a
      href={link}
      className="page_header__slider_btn"
      data-testid="sliderImageButton"
    >
      Book now
    </a>
  );
};

SliderImageButton.defaultProps = {
  href: '#',
};

export default SliderImageButton;
