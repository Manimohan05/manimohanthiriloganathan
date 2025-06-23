import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  // Close dropdown when clicked outside
 useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed-top site__header shadow-md p-1">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop__nav d-none d-md-flex gap-4 align-items-center">
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/portfolio" className="nav_link">Portfolio</Link>
            <Link to="/about" className="nav_link">About me</Link>
            <Link to="/contact" className="nav_link">Contact me</Link>

            <div className="cv-dropdown" ref={dropdownRef}>
      <button
        className="cv-main-button"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        📄 Download CV
      </button>

      {showOptions && (
        <div className="cv-options">
          <a
            href="https://drive.google.com/uc?id=1Ye1u7m7qKWvf0lbZFPlCe4ambARdTCdQ"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-option"
          >
            ⚡ Electronic Engineer
          </a>
          <a
            href="https://drive.google.com/uc?id=1KJfqETL1fZE-S7Ow5IejVBZHzPKHZfhi"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-option"
          >
            🤖 AI & ML Engineer
          </a>
        </div>
      )}
    </div>

            <Themetoggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="d-md-none d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button nav_ac ms-2" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3">Portfolio</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">About me</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">Contact me</Link>
                  </li>
                  <li className="menu_item">
                    <a
                      onClick={handleToggle}
                      href="/asset/Electronic_Engineer_Manimohan_T_.pdf"
                      download="Electronic_Engineer_CV.pdf"
                      className="my-3"
                    >
                      Download CV (Electronic)
                    </a>
                  </li>
                  <li className="menu_item">
                    <a
                      onClick={handleToggle}
                      href="/asset/AI_ML_Engineer_Manimohan_T_.pdf" 
                      download="AI_ML_Engineer_CV.pdf"
                      className="my-3"
                    >
                      Download CV (AI/ML)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex gap-3">
              <a href={socialprofils.linkedin}>linkedin</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.medium}>Medium</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
