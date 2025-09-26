import React from "react";
import "./About.css";
import aboutPic from "../../assets/aboutPic.jpg";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="introSection">
          <div className="imageContainer">
            <img src={aboutPic} alt="aboutImage" className="aboutImage" />
          </div>
          <div className="introTextContainer">
            <h1 className="introTitle">I’m Snezhana Petlova</h1>
            <p className="introDescription">
              Hello! I'm Snezhi, a passionate Front-end Developer with a strong
              focus on UI Design and Programming. I love bringing together creativity 
              and technical expertise to create user-friendly, impactful digital experiences.
            </p>
            <h2 className="introSubtitle">Experience</h2>
            <p className="introDescription">
              As a Front-end Developer at Indeavr, I’ve had the chance to work on a variety 
              of projects with different technologies. These opportunities have sharpened 
              my technical skills and strengthened my problem-solving mindset, allowing me 
              to approach challenges with both creativity and precision.
            </p>
            <h2 className="introSubtitle">Education</h2>
            <p className="introDescription">
              I hold a degree in Computer and Software Engineering from the
              Technical University of Sofia, as well as a Bachelor's degree in
              Management and Business Information Systems. This blend of technical 
              and business knowledge helps me look at problems from multiple angles. 
              Additionally, I have earned multiple certifications from SoftUni in JavaScript, 
              UI, and UX Design, further enhancing my skills and knowledge in the field.
            </p>
            <h2 className="introSubtitle">Hobbies & Interests</h2>
            <p className="introDescription">
              Outside of work, I am an avid traveler, book lover, and fitness
              enthusiast. I am always eager to seek new experiences to learn and
              grow, whether through travel, reading, or personal development.
            </p>
          </div>
        </div>

        <div className="toolsSection">
          <h2 className="toolsTitle">My Tools</h2>
          <div className="toolsGrid">
            <div className="toolCategory">
              <h3 className="toolsSubtitle">Web Development</h3>
              <ul className="toolsList">
                <li className="toolsListItem">JavaScript</li>
                <li className="toolsListItem">HTML</li>
                <li className="toolsListItem">CSS</li>
                <li className="toolsListItem">TypeScript</li>
                <li className="toolsListItem">ReactJS</li>
                <li className="toolsListItem">NodeJS</li>
                <li className="toolsListItem">ExpressJS</li>
                <li className="toolsListItem">Angular</li>
                <li className="toolsListItem">MongoDB</li>
                <li className="toolsListItem">PHP</li>
                <li className="toolsListItem">SCSS</li>
                <li className="toolsListItem">Git</li>
                <li className="toolsListItem">Gulp</li>
              </ul>
            </div>
            <div className="toolCategory">
              <h3 className="toolsSubtitle">UX/UI Design</h3>
              <ul className="toolsList">
                <li className="toolsListItem">Figma</li>
                <li className="toolsListItem">Adobe Photoshop</li>
                <li className="toolsListItem">Adobe Illustrator</li>
                <li className="toolsListItem">Adobe XD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
