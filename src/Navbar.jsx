import { useEffect, useRef } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./assets/CSS files/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";
import { Link, animateScroll as scroll } from "react-scroll";
import pdf from "./assets/Images/Deepak_G_Resume1.pdf";

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: ["I'm a Computer Science Engineering", "I like coding","Keep Scrolling...!"],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  const onResumeClick = () => {
    window.open(pdf);
  };
  return (
    <nav id="navbar">
      <ul className="nav-links">
        <div className="name-box">
          <a
            href="https://linkedin.com/in/deepak-g-222286248/"
            target="_blank"
            className="icons"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a
            href="https://github.com/Deepakg01"
            target="_blank"
            className="icons"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>

        <a href="#">
          <li>Home</li>
        </a>

        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {" "}

          <li>Projects</li>
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          {" "}
          <li>About</li>
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          {" "}
          <li>Contact</li>
        </Link>
        <div className="container">
        <button className="Resume" onClick={onResumeClick}>Resume</button>
        </div>
      </ul>

      <div className="Introduction">
      <br></br><br></br>
        <h1>Hey, I'm Deepak</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          I'm currently a Full Stack Developer seeking many ways to improve my
          skills through problem-solving and creating various projects! Scroll
          down to learn more about me.
        </p>
        <Link to="Contact" smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
       
          {/* <a className="Resume" onClick={onResumeClick}> */}
            {/* <button className="Resume" onClick={onResumeClick}>My Resume</button> */}
          
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> 
        <br />
        <br />
        <br />
        <br />
      </div>
    </nav>
  );
}

export default Navbar;
