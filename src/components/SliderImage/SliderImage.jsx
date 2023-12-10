import './SliderImage.scss';

const SliderImage = ({ src, altText, className }) => {
  return <img className={className} src={src} alt={altText} />;
};

SliderImage.defaultProps = {
  src: 'https://dummyimage.com/200x200/000/fff',
  altText: 'default alt',
  className: '',
};

export default SliderImage;
