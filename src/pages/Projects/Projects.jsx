import React from "react";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import flavorFiestaImg from "../../assets/flavor-fiesta.png";
import movieRatingImg from "../../assets/movie-rating-app.png";
import memoryGameImg from "../../assets/memory-game.png";
import photographerImg from "../../assets/photographer.png";
import onlineMarketImg from "../../assets/online-marketplace.png";
import projectPlaceholderImg from "../../assets/project-placeholder.jpg";
import financeTrackerImg from "../../assets/finance-tracker.png";

export default function Projects() {
  const projects = [
    {
      title: "Flavor Fiesta",
      category: "WEB APP",
      link: "#",
      image: flavorFiestaImg,
      description:
        "A recipe website where users can explore, save, and edit their favorite recipes.",
    },
    {
      title: "Movie Rating App",
      category: "WEB APP",
      link: "#",
      image: movieRatingImg,
      description:
        "A movie rating web application built using React and TypeScript with Vite. It allows users to rate and review movies.",
    },
    {
      title: "Memory Game",
      category: "WEB APP",
      link: "#",
      image: memoryGameImg,
      description:
        "A simple and interactive memory card game built with React. The game challenges players to find matching pairs of cards by flipping them over.",
    },
    {
      title: "Photographer Website UI",
      category: "UX/UI",
      link: "#",
      image: photographerImg,
      description:
        "User Interface Design for a photographer website. It shows pages as About, Portfolio, Prices and Contact.",
    },
    {
      title: "Online Marketplace",
      category: "UX/UI",
      link: "#",
      image: onlineMarketImg,
      description:
        "User Interface Design for a online marketplace. Shows pages like Categories, Cart and Articles section.",
    },
    {
      title: "Recipes Website",
      category: "WEB APP",
      link: "#",
      image: projectPlaceholderImg,
      description:
        "This is a Java Spring project for a recipe website developed as a university project.",
    },
    {
      title: "Finance Tracker App",
      category: "WEB APP",
      link: "#",
      image: financeTrackerImg,
      description:
        "A Finance Tracker Application that helps users keep track of their income, expenses, and overall financial status.",
    },
    {
      title: "Chat App",
      category: "WEB APP",
      link: "#",
      image: projectPlaceholderImg,
      description:
        "This is a real time chat app with NodeJS, ReactJS and ChatEngine.io.",
    },
  ];

  return (
    <div>
      <div className="projectsPageContainer">
        <div className="projectsPageContent">
          <h1 className="projectsPageTitle">My Work</h1>
          <p className="projectsPageDescription">
            Here is a list of my projects.
          </p>
          <div className="projectsGrid">
            {projects.map((project, index) => (
              <div key={index} className="projectCard">
                <div className="projectsPageImageContainer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projectsPageImage"
                  />
                </div>
                <div className="projectDetails">
                  <h2 className="projectTitle">{project.title}</h2>
                  <p className="projectCategory">{project.category}</p>
                  <p className="projectDescription">{project.description}</p>
                  <a
                    href={project.link}
                    className="buttonLink buttonLink-projects"
                  >
                    VIEW PROJECT
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
