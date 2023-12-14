import { Spin } from 'antd';
import './Loader.scss';

const Loader = ({ size }) => {
  return (
    <div className="loader" data-testid="loader">
      <Spin size={size} />
    </div>
  );
};

Loader.defaultProps = {
  size: 'large',
};

export default Loader;
