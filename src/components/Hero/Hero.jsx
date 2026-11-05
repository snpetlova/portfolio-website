import React from "react";
import "./Hero.css";
import profilePic from "../../assets/profilePic.webp";

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
        <p className="heroEyebrow">UI ENGINEER</p>
        <h1 className="heroTitle">
          Hi, I'm <span className="markerHighlight">Snezhi</span>.
        </h1>
        <p className="heroDescription">
          I'm a UI Engineer who bridges the gap between design and development.
          From crafting intuitive interfaces to bringing them to life with
          clean, functional code, I love creating digital experiences that look
          as good as they work.
        </p>
        <a href="/projects" className="buttonLink">
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
        <svg className="heroOrbit" viewBox="0 0 124 124" aria-hidden="true">
          <path
            d="M122.5 60.5C123.6 87.5 96 108 60 109C30 109.8 3 88 3.5 64C4 36 31 17 65 16C96 15.1 121.5 36.5 122.5 60.5Z"
            transform="rotate(-25 62 62)"
          />
        </svg>
        <div className="heroBadge" aria-hidden="true">
          &lt;/&gt;
        </div>
      </div>
      <a className="scrollDownButton" onClick={handleScroll}>
        SCROLL DOWN →
      </a>
    </div>
  );
}
