import PropTypes from 'prop-types';
import './HeaderDecoration.scss';

const HeaderDecoration = ({ label }) => (
  <span className="page_header__decoration">{label}</span>
);

HeaderDecoration.propTypes = {
  label: PropTypes.string.isRequired,
};

export default HeaderDecoration;
