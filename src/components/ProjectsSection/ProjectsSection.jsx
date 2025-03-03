import React from "react";
import "./ProjectsSection.css";
import flavorFiestaImg from "../../assets/flavor-fiesta.png";
import movieRatingImg from "../../assets/movie-rating-app.png";
import memoryGameImg from "../../assets/memory-game.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Flavor Fiesta",
      category: "WEB APP",
      link: "/projects/1",
      image: flavorFiestaImg,
    },
    {
      title: "Movie Rating App",
      category: "WEB APP",
      link: "/projects/2",
      image: movieRatingImg,
    },
    {
      title: "Memory Game",
      category: "WEB APP",
      link: "/projects/3",
      image: memoryGameImg,
    },
  ];

  return (
    <div className="projectsSectionContainer" id="projectsSection">
      <div className="projectsSectionContent">
        <h1 className="projectsSectionTitle">My recent projects</h1>
        <p className="projectsSectionDescription">
          These are a selection of my recent works.
        </p>
        <div className="projectsList">
          {projects.map((project, index) => (
            <div key={index} className="projectItem">
              <span className="projectIndex">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="projectDetails">
                <h2 className="projectTitle">{project.title}</h2>
                <p className="projectCategory">{project.category}</p>
              </div>
              <a href={project.link} className="buttonLink">
                VIEW PROJECT
              </a>
              <div className="projectImageContainer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projectImage"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="projectsSectionFooter">THERE'S MORE</p>
        <a href="/projects" className="viewAllProjects">
          view all projects
        </a>
      </div>
    </div>
  );
}
