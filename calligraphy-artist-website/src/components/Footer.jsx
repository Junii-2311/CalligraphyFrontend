import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Left - Logo & Copyright */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold">Calligraphy Art</h5>
            <p className="mb-0">&copy; 2025 All rights reserved.</p>
          </Col>

          {/* Center - Navigation Links */}
          <Col md={4} className="text-center">
            <ul className="footer-links list-unstyled d-flex justify-content-center gap-4 mb-0">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/about" className="text-light">About</Link></li>
              <li><Link to="/portfolio" className="text-light">Portfolio</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </Col>

          {/* Right - Social Media Links */}
          <Col md={4} className="text-center text-md-end">
            <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
