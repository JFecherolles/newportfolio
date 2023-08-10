import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    
    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach(link => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
      });
    });

    return () => {

      navbarLinks.forEach(link => {
        link.removeEventListener("click", () => {
          setMenuOpen(false);
        });
      });
    };
  }, []);


  return (
    <header>
    <div className="logo">
    <label>Porfolio</label>
    </div>
      <div className={`menu_toggle ${menuOpen ? "open" : ""}`} onClick={handleMenuToggle}></div>
      <ul className={`navbar ${menuOpen ? "responsive" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projets" smooth={true} duration={500}>
            Projets
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
