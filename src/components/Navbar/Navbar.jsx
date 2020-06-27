import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { FaHome, FaGithub, FaBars } from "react-icons/fa";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const classUl = window.innerWidth > 768 ? "" : !open ? "hidden" : "";
  const offsetScroll = -50;

  return (
    <nav className="navbar">
      <button onClick={toggle} className="btn-toggle">
        <FaBars />
      </button>
      <ul className={classUl}>
        <li>
          <Link to="header" smooth="easeInQuad" duration={250} onClick={toggle}>
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="about" smooth="easeInQuad" duration={250} onClick={toggle} offset={offsetScroll}>

            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth="easeInQuad"
            duration={250}
            onClick={toggle}
            offset={offsetScroll}
          >
            Projects
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/Ricardo272727"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Github</span>
            <FaGithub className="ml-3" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
