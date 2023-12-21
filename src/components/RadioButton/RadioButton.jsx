import PropTypes from 'prop-types';
import './RadioButton.scss';

const RadioButton = ({ value, name, ...rest }) => {
  return (
    <>
      <label className="radio_btn__label" form={name}>
        {value}
      </label>
      <input
        type="radio"
        id={name}
        className="radio_btn"
        value={value}
        name={name}
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
