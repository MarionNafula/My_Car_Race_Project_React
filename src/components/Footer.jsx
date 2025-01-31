import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/drivers">Drivers</a>
          <a href="/circuits">Circuits</a>
          <a href="/stats">Stats</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Car Race App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
