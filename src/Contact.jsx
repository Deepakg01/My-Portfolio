import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./assets/CSS files/Contact.css";

function Contact() {
  return (
    <section className="contact-wrap" id="Contact">
      <div className="content">
        <h1>Contact </h1>
        <br></br>
        <br></br>
        <br></br>

        <p>
          Hey, send me an email if you want to connect! Additionally, you can
          find me on{" "}
          <a
            className="linked-in"
            href="https://linkedin.com/in/deepak-g-222286248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn{" "}
          </a>
          ,shoot a message if you have to!
        </p>
        <a className="email" href="mailto:deepakganesan01@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#66FCF1", marginRight: "5px" }}
          />
          deepakganesan01@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
