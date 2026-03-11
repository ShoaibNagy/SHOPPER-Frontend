import footer_logo from '../../assets/Frontend_Assets/logo_big.png';
import instagram_icon from '../../assets/Frontend_Assets/instagram_icon.png';
import pinterest_icon from '../../assets/Frontend_Assets/pinterest_icon.png';
import whatsapp_icon from '../../assets/Frontend_Assets/whatsapp_icon.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
           <img src={instagram_icon} alt="Instagram Icon" />
        </div>

        <div className="footer-icons-container">
           <img src={pinterest_icon} alt="Pinterest Icon" />
        </div>

        <div className="footer-icons-container">
           <img src={whatsapp_icon} alt="WhatsApp Icon" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>&copy; 2023 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
