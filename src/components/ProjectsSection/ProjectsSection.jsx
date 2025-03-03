import React from "react";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Memory game",
      category: "UI / UX",
      link: "#",
      image:
        "https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg",
    },
    {
      title: "Recipe website",
      category: "UI / UX",
      link: "#",
      image:
        "https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg",
    },
    {
      title: "Recipe website",
      category: "UI / UX",
      link: "#",
      image:
        "https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg",
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
