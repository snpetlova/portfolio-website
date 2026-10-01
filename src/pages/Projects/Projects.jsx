import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import flavorFiestaImg from "../../assets/flavor-fiesta.webp";
import movieRatingImg from "../../assets/movie-rating-app.webp";
import memoryGameImg from "../../assets/memory-game.webp";
import photographerImg from "../../assets/photographer.webp";
import onlineMarketImg from "../../assets/online-marketplace.webp";
import projectPlaceholderImg from "../../assets/project-placeholder.jpg";
import financeTrackerImg from "../../assets/finance-tracker.webp";
import vistarailImg from "../../assets/vistarailImg.webp";
import invioraImg from "../../assets/invioraImg.webp";

export default function Projects() {
  const projects = [
     {
      id: 1,
      title: "Inviora",
      category: "WEB APP",
      link: "#",
      image: invioraImg,
      description:
        "A website for digital invites for every occasion. People pick a design, pay, fill in a short form, and get a live, personalised invitation website with RSVPs built in.",
    },
    {
      id: 2,
      title: "Flavor Fiesta",
      category: "WEB APP",
      link: "#",
      image: flavorFiestaImg,
      description:
        "A recipe website where users can explore, save, and edit their favorite recipes.",
    },
    {
      id: 3,
      title: "Movie Rating App",
      category: "WEB APP",
      link: "#",
      image: movieRatingImg,
      description:
        "A movie rating web application built using React and TypeScript with Vite. It allows users to rate and review movies.",
    },
    {
      id: 4,
      title: "Social Media Design",
      category: "Graphic Design",
      link: "https://www.instagram.com/vistarail/",
      image: vistarailImg,
      description:
        "Graphic design for social media, showcasing visual identity across Instagram and other digital platforms.",
    },
    {
      id: 5,
      title: "Online Marketplace",
      category: "UX/UI",
      link: "#",
      image: onlineMarketImg,
      description:
        "User Interface Design for an online marketplace. Shows pages like Categories, Cart and Articles section.",
    },
    {
      id: 6,
      title: "Memory Game",
      category: "WEB APP",
      link: "#",
      image: memoryGameImg,
      description:
        "A simple and interactive memory card game built with React. The game challenges players to find matching pairs of cards by flipping them over.",
    },
    {
      id: 7,
      title: "Photographer Website UI",
      category: "UX/UI",
      link: "#",
      image: photographerImg,
      description:
        "User Interface Design for a photographer website. It shows pages as About, Portfolio, Prices and Contact.",
    },

    {
      id: 8,
      title: "Recipes Website",
      category: "WEB APP",
      link: "#",
      image: projectPlaceholderImg,
      description:
        "This is a Java Spring project for a recipe website developed as a university project.",
    },
    {
      id: 9,
      title: "Finance Tracker App",
      category: "WEB APP",
      link: "#",
      image: financeTrackerImg,
      description:
        "A Finance Tracker Application that helps users keep track of their income, expenses, and overall financial status.",
    },
    {
      id: 10,
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
            {projects.map((project) => (
              <div key={project.id} className="projectCard">
                <div className="projectsPageImageContainer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projectsPageImage"
                    loading="lazy"
                  />
                </div>
                <div className="projectDetails">
                  <h2 className="projectTitle">{project.title}</h2>
                  <p className="projectCategory">{project.category}</p>
                  <p className="projectDescription">{project.description}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="buttonLink buttonLink-projects"
                  >
                    VIEW PROJECT
                  </Link>
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
