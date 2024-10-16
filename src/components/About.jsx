import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { RxExternalLink } from "react-icons/rx";
import { FaExchangeAlt } from "react-icons/fa";
import profilePic from "../assets/pfp.png";
import secondaryProfilePic from "../assets/pfp2.jpg";
import "../styles/About.css";

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
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.5,
    once: true,
  });

  const [transform, setTransform] = useState("translate(0, 0)");
  const [isSecondaryPic, setIsSecondaryPic] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const moveX = (-deltaX / width) * 40;
    const moveY = (-deltaY / height) * 40;

    setTransform(`translate(${moveX}px, ${moveY}px)`);
  };

  const handleMouseLeave = () => {
    setTransform("translate(0, 0)");
  };

  const toggleProfilePic = () => {
    setIsSecondaryPic((prev) => !prev);
  };

  const age = calculateAge("1996-05-02");

  return (
    <section className="aboutContainer" id="about">
      <div ref={headerRef}>
        <header className={`headline ${isHeaderVisible ? "fadeIn" : ""}`}>
          <h2>About Me</h2>
          <p className="main">Main information about me</p>
        </header>
      </div>
      <article className="information">
        <div
          className="profileContainer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="profileWrapper">
            <img
              src={isSecondaryPic ? secondaryProfilePic : profilePic}
              alt="Profile Picture"
              className="profilePic"
              style={{ transform }}
            />
            <button
              onClick={toggleProfilePic}
              className="profilePicToggle"
              aria-label="Toggle profile picture"
              style={{
                transform,
              }}
            >
              <FaExchangeAlt />
            </button>
          </div>
        </div>
        <div className="contentContainer">
          <h3 className="infoHeadline">
            Johan Söderlund, <span>Web Developer</span>
          </h3>
          <p>
            As a new passionate Web Developer I am dedicated to my craft and am
            committed to delivering things I can be proud of. I see each project
            as an opportunity to improve and learn something new, ensuring that
            the final result surpasses the previous one. I look forward to
            growing professionally by focusing on efficiency, functionality, and
            aesthetics.
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
                <span className="label">Interests:</span>
                <span className="value">Tech, Media, Gaming, Editing</span>
              </li>
              <li className="infoItem">
                <span className="label">Email:</span>
                <span
                  className="value email"
                  onClick={handleEmailClick}
                  aria-label="Send email to Johan Söderlund"
                >
                  johan.soderlund96@gmail.com
                  <RxExternalLink
                    style={{ marginLeft: "0.5rem", verticalAlign: "middle" }}
                  />
                </span>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <a href="/resume.docx" download>
              <button>Resume</button>
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
