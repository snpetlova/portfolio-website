import React from "react";
import "./ProjectDetails.css";
import { useParams } from "react-router-dom";
import flavorFiestaImg from "../../assets/flavor-fiesta.png";
import movieRatingImg from "../../assets/movie-rating-app.png";
import memoryGameImg from "../../assets/memory-game.png";
import photographerImg from "../../assets/photographer.png";
import onlineMarketImg from "../../assets/online-marketplace.png";
import projectPlaceholderImg from "../../assets/project-placeholder.jpg";
import financeTrackerImg from "../../assets/finance-tracker.png";
import Footer from "../../components/Footer/Footer";

const projects = [
  {
    id: 1,
    title: "Flavor Fiesta",
    category: "WEB APP",
    image: flavorFiestaImg,
    details:
      "Welcome to Flavor Fiesta. This is a recipe website where users can explore, save, and edit their favorite recipes. The platform allows users to browse a wide collection of delicious recipes, saving the ones they love to their personal collection for easy access later. Users can also create and share their own recipes with the community, allowing others to enjoy their culinary creations. Additionally, it’s easy to edit and customize your existing recipes to suit your taste, making the platform truly personal and flexible. For those who want to manage their saved recipes and created content, Flavor Fiesta offers a user profile where you can create, edit, and delete recipes. You also have the option to save and unsave recipes, ensuring that your profile is always updated with the content you love. In addition to these features, each recipe provides detailed cooking instructions and ingredient lists, so you can follow the steps with ease. Whether you're a beginner or an experienced cook, Flavor Fiesta has everything you need to discover, save, and share your favorite recipes.",
    toolsAndTechnologies: [
      "React",
      "React Router",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Bcrypt",
      "JWT",
      "Mongoose",
      "npm",
      "nodemon",
    ],
    sourceCodeLink: "https://github.com/snpetlova/exam-recipes-website-project",
    deployedAppLink: "https://flavor-fiesta-fe.vercel.app/",
  },
  {
    id: 2,
    title: "Movie Rating App",
    category: "WEB APP",
    image: movieRatingImg,
    details:
      "This is a movie rating web application built using React and TypeScript with Vite. It allows users to rate and review movies. This application utilizes The Movie Database (TMDb) API to fetch movie data. TMDb is a community-built movie and TV database where users can discover and explore movies and TV shows. It provides extensive information about movies, including details like title, overview, release date, genres, ratings, and more.",
    toolsAndTechnologies: [
      "React",
      "TypeScript",
      "Semantic UI React",
      "React Router DOM",
      "react-query by TanStack",
      "react-toastify",
      "Vite",
    ],
    sourceCodeLink: "https://github.com/snpetlova/movie-rating-app",
    deployedAppLink: "https://rateyourfavourites.netlify.app/",
    behanceLink: null,
  },
  {
    id: 3,
    title: "Memory Game",
    category: "WEB APP",
    image: memoryGameImg,
    details:
      "A simple and interactive memory card game built with React. The game challenges players to find matching pairs of cards by flipping them over. It's a fun way to test and improve your memory! Some of its features include: interactive card flipping animation, randomized card layout on each game load, responsive design for desktop and mobile devices, tracks and displays the number of moves made by the player, highlights correct and incorrect matches with visual cues, option to reset the game and start over.",
    toolsAndTechnologies: ["React", "CSS", "HTML"],
    sourceCodeLink: "https://github.com/snpetlova/memory-game-app",
    deployedAppLink: "https://snpetlova.github.io/memory-game-app/",
    behanceLink: null,
  },
  {
    id: 4,
    title: "Photographer Website UI",
    category: "UX/UI",
    image: photographerImg,
    details:
      "User Interface Design for a photographer website. It shows pages as About, Portfolio, Prices and Contact.",
    toolsAndTechnologies: ["Figma", "Photoshop"],
    sourceCodeLink: null,
    deployedAppLink: null,
    behanceLink:
      "https://www.behance.net/gallery/149940481/Photographer-Website-Design-FIGMA",
  },
  {
    id: 5,
    title: "Online Marketplace UI",
    category: "UX/UI",
    image: onlineMarketImg,
    details:
      "User Interface Design for a online marketplace. Shows pages like Categories, Cart and Articles section.",
    toolsAndTechnologies: ["Figma"],
    sourceCodeLink: null,
    deployedAppLink: null,
    behanceLink:
      "https://www.behance.net/gallery/147900449/Online-Marketplace-UI-Design",
  },
  {
    id: 6,
    title: "Recipes Website",
    category: "WEB APP",
    image: projectPlaceholderImg,
    details:
      "This is a Java Spring project for a recipe website developed as a university project. Some of its features include user registration and authentication, ability for registered users to add new recipes, add existing ones to favourites, and remove from favourites.",
    toolsAndTechnologies: [
      "Java",
      "Spring Framework",
      "Thymeleaf",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    sourceCodeLink: "https://github.com/snpetlova/java-recipe-site",
    deployedAppLink: null,
    behanceLink: null,
  },
  {
    id: 7,
    title: "Finance Tracker App",
    category: "WEB APP",
    image: financeTrackerImg,
    details:
      "The Finance Tracker Application helps users keep track of their income, expenses, and overall financial status. The Finance Tracker Application is designed to simplify financial management for individuals and small businesses. It allows users to record their income and expenses, visualize their financial data through interactive charts, and gain insights into their spending habits. Users can create an account by providing email and password. Or sign up via Google, Facebook or Github. Users can sign up for a new account and log in securely using Clerk's authentication system. Users can log in with their credentials to access personalized features. Clerk's authentication system ensures secure user authentication and access control, protecting user data and privacy. Users can record their income and expenses with detailed descriptions and amounts. The analysis page provides an overview of the user's total income, total expenses, and overall balance.  Interactive charts allow users to visualize their financial data over time, making it easier to understand spending patterns and trends. Users can view their most recent transactions to keep track of their financial activity.",
    toolsAndTechnologies: [
      "React",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chart.js",
      "Clerk",
      "HTML",
      "CSS",
      "Axios",
      "Mongoose",
      "npm",
      "nodemon",
    ],
    sourceCodeLink: "https://github.com/snpetlova/mern-finance-tracker-app",
    deployedAppLink: null,
    behanceLink: null,
  },
  {
    id: 8,
    title: "Finance Tracker App",
    category: "WEB APP",
    image: projectPlaceholderImg,
    details:
      "This is a real time chat app with NodeJS, ReactJS and ChatEngine.io.",
    toolsAndTechnologies: ["React", "Node.js", "ChatEngine.io"],
    sourceCodeLink: "https://github.com/snpetlova/chat-app-project-node-react",
    deployedAppLink: null,
    behanceLink: null,
  },
];

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className="projectDetailsContainer">
        <div className="projectDetailsContent">
          <h1 className="projectDetailsTitle">{project.title}</h1>
          <p className="projectDetailsCategory">{project.category}</p>
          <div className="projectDetailsImageContainer">
            <img
              src={project.image}
              alt={project.title}
              className="projectDetailsImage"
            />
          </div>
          <p className="projectDetailsText">{project.details}</p>
          <div className="toolsAndTechnologies">
            <h3 className="toolsAndTechnologiesTitle">Tools & Technologies</h3>
            <p className="toolsAndTechnologiesDesc">
              {project.toolsAndTechnologies.join(" / ")}
            </p>
          </div>
          <div className="projectButtons">
            {project.sourceCodeLink && (
              <a
                href={project.sourceCodeLink}
                className="buttonLink buttonLink-sourceCode"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW SOURCE CODE
              </a>
            )}
            {project.deployedAppLink && (
              <a
                href={project.deployedAppLink}
                className="buttonLink buttonLink-launchApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                LAUNCH APP
              </a>
            )}
            {project.behanceLink && (
              <a
                href={project.behanceLink}
                className="buttonLink buttonLink-behance"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW IN BEHANCE
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
