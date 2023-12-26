import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import ImageLoader from '../ImageLoader/ImageLoader.jsx';
import './ContentImage.scss';

const ContentImage = ({ url, alt, className }) => {
  const [status, setStatus] = useState('loading');
  const imgRef = useRef();

  const imgElem = (
    <img className={className} src={url} alt={alt} ref={imgRef} />
  );

  useEffect(() => {
    imgRef.current?.addEventListener('load', loadHandler);
  }, []);

  const loadHandler = () => {
    setStatus('loaded');
  };

  return (
    <>
      {status === 'loading' && <ImageLoader />}
      <img
        className={
          status === 'loading' ? '.image__loading--processing' : className
        }
        src={url}
        alt={alt}
        ref={imgRef}
      />
    </>
  );
};

ContentImage.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

ContentImage.defaultProps = {
  url: 'https://placehold.co/277x400?text=N/A',
  alt: 'default alt text',
  className: '',
};

export default ContentImage;
