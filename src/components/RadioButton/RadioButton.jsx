import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FilmsContext } from '../../context/FilmsContext.jsx';
import './RadioButton.scss';

const RadioButton = ({ value, name, ...rest }) => {
  const { onRadioBtnHandler } = useContext(FilmsContext);
  return (
    <>
      <label className="radio_btn__label" form={name}>
        {value}
      </label>
      <input
        type="radio"
        className="radio_btn"
        value={value}
        name={name}
        onChange={onRadioBtnHandler}
        {...rest}
      />
    </>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
};

RadioButton.defaultProps = {
  value: 'radio button',
  name: 'radio_button',
};

export default RadioButton;
