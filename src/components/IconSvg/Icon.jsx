import './Icon.scss';
import * as Icons from './svg/index';

const Icon = ({ type }) => {
  const elem = Icons[type];
  return <div className="footer_contacts__svg">{elem()}</div>;
};

export default Icon;
