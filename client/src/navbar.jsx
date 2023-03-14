import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import MenuImg from "./images/menu.png";
import { useState, useContext } from "react";
import { UserContext } from "./UserContext";


const NavBar =() => {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >=100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll",changeBg );
  
  const { user } = useContext(UserContext);

  return (
    <>
      <nav className={navbar ? "navbar navbar-expand-lg navbar-expand-md fixed-top active" : "navbar navbar-expand-lg navbar-expand-md fixed-top"}>
        <a href="/" className="navbar-brand">
          <span>LS</span>Auto
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={MenuImg} alt="menu" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav">
          <div className="nav-item">
                  <a href="/" className="nav-link">
                    Acasa
                  </a>
                </div>
                <div className="nav-item">
                  <a href="/IndexPage" className="nav-link">
                    Vezi Anunturile
                  </a>
                </div>
               
            {user ? (
              <div className="nav-item">
                <a href="/userpage" className="nav-link">
                  {user.name}
                </a>
              </div>
            ) : (
              <>
                <div className="nav-item">
                  <a href="/signup" className="nav-link">
                    Sign Up
                  </a>
                </div>
                <div className="nav-item">
                  <a href="/login" className="nav-link">
                    Log In
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
