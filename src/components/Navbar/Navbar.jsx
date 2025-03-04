import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import logoImg from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" id="navbar">
      <Link to="/" className="logoLink">
        <img src={logoImg} alt="Logo" className="logo" />
      </Link>
      <div className="hamburgerMenuIcon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={isOpen ? "navLinks open" : "navLinks"}>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
