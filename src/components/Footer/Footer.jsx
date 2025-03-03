import React from "react";
import "./Footer.css";
import githubWhite from "../../assets/github-icon.png";
import githubBlack from "../../assets/github-icon-black.png";
import behanceWhite from "../../assets/behance-icon-white.png";
import behanceBlack from "../../assets/behance-icon.png";
import linkedinWhite from "../../assets/linkedin-icon.png";
import linkedinBlack from "../../assets/linkedin-icon-black.png";

export default function Footer() {
  const handleScroll = () => {
    const previousSection = document.getElementById("heroSection");
    if (previousSection) {
      previousSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footerContainer">
      <div className="footerContent">
        <h1 className="footerTitle">Let's work together.</h1>
        <p className="footerDescription">I’m available for freelance work.</p>
        <a href="#" className="buttonLink buttonLink-footer">
          SAY HELLO
        </a>
      </div>
      <div className="footerLinks">
        <a
          href="https://github.com/snpetlova"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIconWrapper"
        >
          <img
            src={githubWhite}
            alt="GitHub"
            className="footerIcon defaultIcon"
          />
          <img
            src={githubBlack}
            alt="GitHub"
            className="footerIcon hoverIcon"
          />
        </a>
        <a
          href="https://www.behance.net/snejanapetlova"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIconWrapper"
        >
          <img
            src={behanceWhite}
            alt="Behance"
            className="footerIcon defaultIcon"
          />
          <img
            src={behanceBlack}
            alt="Behance"
            className="footerIcon hoverIcon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/spetlova"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIconWrapper"
        >
          <img
            src={linkedinWhite}
            alt="LinkedIn"
            className="footerIcon defaultIcon"
          />
          <img
            src={linkedinBlack}
            alt="LinkedIn"
            className="footerIcon hoverIcon"
          />
        </a>
      </div>
      <a className="scrollUpButton" onClick={handleScroll}>
        ← SCROLL UP
      </a>
    </div>
  );
}
