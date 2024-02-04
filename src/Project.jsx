import React from "react";
import "./assets/CSS files/Project.css";
import bank from "./assets/Images/project1.png";
import plasma from "./assets/Images/project2.png";
import parkinson from "./assets/Images/project3.png";
import portfolio from "./assets/Images/project4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({
  title,
  imageSrc,
  githubLink,
  technologies,
  description,
}) {
  return (
    <div className="project">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className="images" src={imageSrc} alt={title} />
      </a>
      <div className="project-info">
        <div className="project-title">
          <h2 style={{ color: "#66FCF1" }}>{title}</h2>
          <div className="liness"></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3>
          <span style={{ color: "#66FCF1" }}>{technologies}</span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="Projects">
      <h1 className="title">
        My Projects <span style={{ color: "#45A29E" }}></span>{" "}
      </h1>
      <div className="section-divider"></div>
      <div className="projects-wrapper">
        <ProjectCard
          title="Secure Banking Application "
          imageSrc={bank}
          githubLink="https://github.com/Deepakg01/Secure-banking"
          technologies="Java, JavaScript, MySQL"
          description="Enrich lives, empower businesses and build communities sustainably through financial service excellence. All of this is reinforced in our renewed commitment to Better Banking so improve the security level of authentication using AES."
        />

        <ProjectCard
          title="Plasma Donor Application"
          imageSrc={plasma}
          githubLink="https://github.com/IBM-EPBL/IBM-Project-45369-1660729652"
          technologies="Python (Django),IBM Cloud,IBM db2"
          description="Saving the donor information and helping the needy by notifying the current donors list, would be a helping hand.An application is to be built which would take the donor details, store them and inform them upon a request."
        />

        <ProjectCard
          title="Parkinson Disease Prediction"
          imageSrc={parkinson}
          githubLink="https://github.com/Deepakg01/Parkison-Disease-Prediction"
          technologies="Python (Flask),Jupyter Notebook,Machine Learning"
          description="The author considers the speech features of the patient, and this data is used for predicting whether the patient has Parkinson's disease or not. "
        />

        <ProjectCard
          title="My Portfolio"
          imageSrc={portfolio}
          githubLink="https://github.com/Deepakg01/My-portfolio "
          technologies="React,CSS,fortawesome"
          description="A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences."
        />
      </div>
    </div>
  );
}

export default Projects;
