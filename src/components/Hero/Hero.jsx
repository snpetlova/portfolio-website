import React from "react";
import "./Hero.css";
import profilePic from "../../assets/profilePic.jpg";

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("projectsSection");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="heroContainer" id="heroSection">
      <div className="heroContent">
        <h1 className="heroTitle">Hello there!</h1>
        <p className="heroDescription">
          I’m Snezhi – a frontend developer by day, a UI and graphic design
          enthusiast by night. I bring designs to life with code and craft
          visuals that tell a story.
        </p>
        <a href="#" className="buttonLink">
          SEE MY WORK
        </a>
        <div className="socialLinks">
          <a
            href="https://github.com/snpetlova"
            target="_blank"
            className="socialLink"
          >
            GitHub
          </a>
          <p>/</p>
          <a
            href="https://www.behance.net/snejanapetlova"
            target="_blank"
            className="socialLink"
          >
            Behance
          </a>
          <p>/</p>
          <a
            href="https://www.linkedin.com/in/spetlova"
            target="_blank"
            className="socialLink"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="imageSection">
        <div className="imageCircle">
          <img src={profilePic} alt="Snezhi" className="profileImage" />
        </div>
        <div className="circle"></div>
      </div>
      <a className="scrollDownButton" onClick={handleScroll}>
        SCROLL DOWN →
      </a>
    </div>
  );
}
