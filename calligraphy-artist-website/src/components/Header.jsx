import { useEffect, useState, useCallback, useRef } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // Ensure this file exists
import logo from "../assets/sample1.jpg"; // Corrected path for logo

const Header = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation(); // Get current path

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY.current) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className={`py-3 shadow-sm header ${visible ? "visible" : "hidden"}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Calligraphy Artist" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/services", label: "Services" },
              { path: "/shop", label: "Shop" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Nav.Link
                as={Link}
                to={path}
                className={`mx-2 ${location.pathname === path ? "active-link" : ""}`}
                key={path}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
