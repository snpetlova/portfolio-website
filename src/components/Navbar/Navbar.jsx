import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import logoImg from "../../assets/logo.png"

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/snpetlova", label: "GitHub" },
  { href: "https://www.behance.net/snejanapetlova", label: "Behance" },
  { href: "https://www.linkedin.com/in/spetlova", label: "LinkedIn" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const desktop = window.matchMedia("(min-width: 769px)");

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", closeMenu);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", closeMenu);
    };
  }, [isOpen]);

  return (
    <nav className={isOpen ? "navbar menuOpen" : "navbar"} id="navbar">
      <Link to="/" className="logoLink" onClick={closeMenu}>
        <img src={logoImg} alt="Logo" className="logo" />
      </Link>
      <button
        type="button"
        className="hamburgerMenuIcon"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="navPanel"
      ></button>
      <div className="navPanel" id="navPanel">
        <ul className="navLinks">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "markerHighlight" : undefined
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="navSocials">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
