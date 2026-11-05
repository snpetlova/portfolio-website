import React from "react";
import "./About.css";
import aboutPic from "../../assets/aboutPic.webp";
import Footer from "../../components/Footer/Footer";
import AboutIcon from "./AboutIcon";

const highlights = [
  { label: "Role", value: "Front-end Developer at Indeavr", icon: "code" },
  {
    label: "Focus",
    value: "UI design & front-end development",
    icon: "monitor",
  },
  {
    label: "Education",
    value: "Technical University of Sofia",
    icon: "graduationCap",
  },
  {
    label: "Certifications",
    value: "SoftUni: JavaScript, UI & UX Design",
    icon: "award",
  },
];

const sections = [
  {
    heading: "Experience",
    text: [
      "As a Front-end Developer at Indeavr, I’ve had the chance to work on a variety of projects with different technologies. These opportunities have sharpened my technical skills and strengthened my problem-solving mindset, allowing me to approach challenges with both creativity and precision.",
    ],
  },
  {
    heading: "Education",
    text: [
      "I hold a Master's degree in Computer and Software Engineering from the Technical University of Sofia, as well as a Bachelor's degree in Management and Business Information Systems. This blend of technical and business knowledge helps me look at problems from multiple angles.",
      "Additionally, I have earned multiple certifications from SoftUni in JavaScript, UI, and UX Design, further enhancing my skills and knowledge in the field.",
    ],
  },
  {
    heading: "Beyond work",
    text: [
      "Outside of work, I am an avid traveler, book lover, and fitness enthusiast. I am always eager to seek new experiences to learn and grow, whether through travel, reading, or personal development.",
    ],
  },
];

const tools = [
  {
    category: "Web Development",
    icon: "code",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SCSS",
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Stripe",
      "Docker",
      "PHP",
      "Git",
      "Gulp",
    ],
  },
  {
    category: "UX/UI Design",
    icon: "penTool",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD"],
  },
  {
    category: "AI-assisted workflow",
    icon: "sparkles",
    items: ["Claude Code", "GitHub Copilot"],
  },
];

export default function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="introSection">
            <div className="aboutImageFrame">
              <div className="imageContainer">
                <img
                  src={aboutPic}
                  alt="Snezhana Petlova"
                  className="aboutImage"
                />
              </div>
            </div>
            <div className="introTextContainer">
              <span className="aboutLabel aboutEyebrow">About me</span>
              <h1 className="introTitle">
                I’M <span className="markerHighlight">SNEZHANA</span> PETLOVA
              </h1>
              <p className="introLead">
                Hello! I'm Snezhi, a passionate Front-end Developer with a
                strong focus on UI Design and Programming. I love bringing
                together creativity and technical expertise to create
                user-friendly, impactful digital experiences.
              </p>
              <dl className="aboutHighlights">
                {highlights.map((item) => (
                  <div key={item.label} className="aboutHighlight">
                    <dt className="aboutLabel">
                      <AboutIcon name={item.icon} />
                      {item.label}
                    </dt>
                    <dd className="aboutHighlightValue">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {sections.map((section) => (
            <section key={section.heading} className="aboutSection">
              <h2 className="aboutSectionHeading">{section.heading}</h2>
              <div className="aboutSectionBody">
                {section.text.map((paragraph, i) => (
                  <p key={i} className="aboutText">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="aboutSection">
            <h2 className="aboutSectionHeading">My Tools</h2>
            <div className="aboutSectionBody">
              {tools.map((group) => (
                <div key={group.category} className="toolGroup">
                  <h3 className="aboutLabel toolGroupHeading">
                    <AboutIcon name={group.icon} soft />
                    {group.category}
                  </h3>
                  <ul className="toolTags">
                    {group.items.map((tool) => (
                      <li key={tool} className="toolTag">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
