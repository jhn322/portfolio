import React from "react";
import { RxExternalLink } from "react-icons/rx";
import "../styles/About.css";
import profilePic from "../assets/pfp.jpg";

// Calculate my age
const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
};

const handleEmailClick = () => {
  window.location.href = `mailto:johan.soderlund96@gmail.com`;
};

const About = () => {
  const age = calculateAge("1996-05-02");

  return (
    <section className="aboutContainer" id="about">
      <div className="me">
        <h2>About Me</h2>
        <p className="main">Main information about me</p>
      </div>
      <article className="information">
        <div className="profileContainer">
          <img src={profilePic} alt="Profile Picture" className="profilePic" />
        </div>
        <div className="contentContainer">
          <h3 className="infoHeadline">
            I'm Johan, <span>Web Developer</span>
          </h3>
          <p>
            Hello! I'm Johan Söderlund, a passionate new-found Web Developer. I
            am dedicated to my work and am committed to delivering high-quality,
            smart solutions. I see each project is an opportunity to improve and
            learn something new, ensuring that the final product not only meets
            but surpasses expectations. I look forward to growing professionally
            by focusing on efficiency, functionality, and aesthetics.
          </p>
          <div className="list">
            <ul className="infoList">
              <li className="infoItem">
                <span className="label">Age:</span>
                <span className="value">{age}</span>
              </li>
              <li className="infoItem">
                <span className="label">City:</span>
                <span className="value">Umeå</span>
              </li>
              <li className="infoItem">
                <span className="label">Hobbies:</span>
                <span className="value">Tech, TV, Gaming, Servers, Music</span>
              </li>
              <li className="infoItem">
                <span className="label">Email:</span>
                <span className="value email" onClick={handleEmailClick}>
                  johan.soderlund96@gmail.com
                  <RxExternalLink
                    style={{ marginLeft: "0.5rem", verticalAlign: "middle" }}
                  />
                </span>
              </li>
              <li className="infoItem">
                <span className="label">Phone:</span>
                <span className="value">073 - 029 33 92</span>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <a href="/resume.docx" download>
              <button>Download CV</button>
            </a>
            <a href="#contact">
              <button>Send Message</button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
