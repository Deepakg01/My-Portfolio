import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileWink,
  faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";
import "./assets/CSS files/About.css";

function About() {
  const languages = [
    "Java",
    "SQL",
    "RDBMS",
    "JavaScript",
    "HTML5/CSS3",
    "React JS",
    "Github/Git",
    "IBM Cloud",
    "IBM db2",
    "Bootstrap",
    "Python",
    "flask",
  ];

  const learning = [
    "NodeJS",
    "Svelte",
    "Tailwind",
    "MongoDB",
    "TypeScript",
    "Machine Learning",
  ];

  return (
    <section className="about-section" id="About">
      <h1 className="about-title">
        About<span style={{ color: "#FF004F" }}></span>
      </h1>
      <div className="section-divider"></div>
      <div className="content-wrapper">
        <div className="about-text">
          <p>
            Hey there! I'm a passionate web developer with a versatile skill
            set, specializing primarily in full-stack development. I possess a
            deep understanding of both front-end and back-end development and am
            constantly refining my abilities while seeking opportunities for
            growth in both domains.
          </p>
          <br />
          <p>
            Currently, I am actively seeking full-stack opportunities that
            encompass both front-end and back-end development. If you're
            interested, I'd be thrilled to connect and discuss potential
            collaborations.{" "}
          </p>
          <br />
          <p>
            Feel free to reach out if you would like to explore the potential of
            working together!
          </p>
        </div>
        <div className="right-section">
          <div className="tools">
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                style={{ color: "#66FCF1" }}
              />{" "}
              Languages/Frameworks
            </h1><br/>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                style={{ color: "#66FCF1" }}
              />{" "}
              Learning
            </h1><br/>
            {learning.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
