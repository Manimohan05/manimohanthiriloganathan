import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import './header.css';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav_link");
        const navIcons = document.querySelectorAll(".nav_icon");
  
        let currentSection = "";
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 50;
          if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
          }
        });
  
        navLinks.forEach((link) => {
          link.classList.remove("active-link");
          if (link.getAttribute("data-section") === currentSection) {
            link.classList.add("active-link");
          }
        });
  
        navIcons.forEach((icon) => {
          icon.classList.remove("active");
          const parentLink = icon.closest(".nav_link");
          if (parentLink && parentLink.getAttribute("data-section") === currentSection) {
            icon.classList.add("active");
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <header className="header">
  <nav className="nav container">
    <a href="index.html" className="nav_logo">M.</a>

    <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
      <ul className="nav_list grid">
        <li className="nav_item">
          <a href="#home" className="nav_link active-link" data-section="home">
            <FaHome className="nav_icon" /> Home
          </a>
        </li>

        <li className="nav_item">
          <a href="#about" className="nav_link" data-section="about">
            <FaUser className="nav_icon" /> About
          </a>
        </li>
        <li className="nav_item">
          <a href="#education" className="nav_link" data-section="education">
            <FaGraduationCap className="nav_icon" /> Education
          </a>
        </li>
        <li className="nav_item">
          <a href="#skills" className="nav_link" data-section="skills">
            <GiSkills className="nav_icon" /> Skills
          </a>
        </li>

       

        <li className="nav_item">
          <a href="#projects" className="nav_link" data-section="projects">
            <GrProjects className="nav_icon" /> Projects
          </a>
        </li>

        <li className="nav_item">
          <a href="#contact" className="nav_link" data-section="contact">
            <IoIosContact className="nav_icon" /> Contact
          </a>
        </li>
      </ul>

      <FaTimes className="nav_close" onClick={() => showMenu(!Toggle)} />
    </div>

    <FaBars className="nav_toggle" onClick={() => showMenu(!Toggle)} />
  </nav>
</header>
  );
};

export default Header;
