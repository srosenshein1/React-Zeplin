import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            myregistry.com
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {button && (
            <div className="navbar-btn">
              <Button buttonStyle="btn--outline">SIGN UP</Button>
              <Button buttonStyle="btn--primary">LOG IN</Button>
            </div>
          )}
        </div>
      </header>
      <nav className="navbar-menu">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/wedding-registry"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Wedding registry
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/baby-registry"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Baby registry
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/wish-list"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Wish List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/why-my-registry?"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Why my registry?
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gift-registry-solution"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Gift registry solution
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
