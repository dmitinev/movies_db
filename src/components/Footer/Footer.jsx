import Icon from '../IconSvg/Icon.jsx';
import './Footer.scss';

const Footer = ({ props }) => {
  return (
    <div className="footer_container">
      <footer className="page_footer" data-testid="footer">
        <div className="footer_contacts">
          <h4 className="footer_contacts__heading">Contact</h4>
          <div className="footer_contacts__icons">
            <Icon type="Instagram" />
            <Icon type="Twitter" />
            <Icon type="Facebook" />
          </div>
        </div>
        <div className="footer_copyright">
          &copy; 2014 Nizami cinema. All Right Reserved
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
