import React, { useRef } from "react";
import "./ProjectDetails.css";
import { useParams } from "react-router-dom";
import flavorFiestaImg from "../../assets/flavor-fiesta.webp";
import movieRatingImg from "../../assets/movie-rating-app.webp";
import memoryGameImg from "../../assets/memory-game.webp";
import photographerImg from "../../assets/photographer.webp";
import onlineMarketImg from "../../assets/online-marketplace.webp";
import projectPlaceholderImg from "../../assets/project-placeholder.jpg";
import financeTrackerImg from "../../assets/finance-tracker.webp";
import Footer from "../../components/Footer/Footer";
import vistarailImg from "../../assets/vistarailImg.webp";
import invioraImg from "../../assets/invioraImg.webp";
import invioraImg2 from "../../assets/invioraImg2.webp";
import invioraMacMockup from "../../assets/invioraMacMockup.webp";
import invioraPhoneMockup from "../../assets/invioraPhoneMockup.webp";
import invioraVisualIdentity from "../../assets/invioraVisualIdentity.webp";

const projects = [
  {
    id: 1,
    title: "Inviora",
    category: "WEB APP",
    image: invioraImg2,
    details:
      "Inviora is my own digital invitation business, which I designed and built from scratch. You pick a design you love, pay, fill in a short form, and get your own invitation website, with RSVPs already set up. It started with weddings and proms, and I plan to add more occasions over time. I designed every invitation, the brand and the website myself, then built the whole product with Claude Code as my engineering partner.",
    toolsAndTechnologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Stripe Checkout",
      "Resend",
      "Docker",
      "k3s (Kubernetes) on a NAS",
      "Figma",
    ],  
    deployedAppLink: "https://inviora-bg.com",
    confirmLeave: true,
    overview: [
      { label: "Role", value: "Brand, UX/UI design & development" },
      { label: "Status", value: "Live" },
      { label: "Website", value: "inviora-bg.com", href: "https://inviora-bg.com" },
      { label: "Occasions", value: "Weddings & proms (more to come)" },
      { label: "Languages", value: "Bulgarian & English" },
    ],
    caseStudy: [
      {
        heading: "Why I built it",
        text: [
           "For a long time I wanted to make something that was completely mine: my designs, my brand, my product. Digital invitations turned out to be the right fit.",
          "When I looked around, I kept seeing the same two options. One was template builders where every invitation ends up looking alike. The other was custom design work that costs far more than most people want to spend on an invitation. Hardly any of them handled RSVPs well, and almost none worked in two languages, which matters a lot when half the family lives abroad.",
          "So I decided to build the thing I couldn't find: a small collection of invitations I design myself, personalised for each customer, with RSVPs built in and an optional second language.",
        ],
      },
      {
        heading: "Who it's for",
        points: [
          {
            title: "Hosts",
            text: "Couples, students going to prom, and often their parents. They want something beautiful without having to learn a website builder, and an easy way to see who's coming.",
          },
          {
            title: "Guests",
            text: "They open a link on their phone, read the details and reply in a few taps.",
          },
          {
            title: "Me, as the operator",
            text: "I run this on my own, so it had to stay manageable and not turn into a full-time support job.",
          },
        ],
      },
      {
        heading: "Design Process",
        text: [
          "I designed everything myself, from the first rough sketches to the finished screens: the customer journey, the brand, the website and every single invitation. I worked in Figma, then built each design as its own component, so what you see live is exactly what I drew.",
        ],
        images: [
          { src: invioraVisualIdentity, alt: "Inviora Visual Identity"},
        ],
        textAfter: [
          "People come to Inviora while planning one of the biggest days of their lives, so the brand had to feel warm, elegant and trustworthy from the first click.",
        ],
      },
      {
        heading: "Design decisions",
        points: [
          {
            title: "Hosts choose their sections",
            text: "Not everyone has a love story to tell or a schedule to share. The form lets hosts switch off the sections they don't need, so an invitation never goes out with empty blocks.",
          },
          {
            title: "Mobile first",
            text: "Almost every guest opens their invitation on a phone, so I designed and tested everything at the smallest screen sizes first.",
          },
          {
            title: "Bilingual previews",
            text: "Each design can be switched between Bulgarian and English before buying, so people see the language add-on in action.",
          },
          {
            title: "A QR code on go-live",
            text: "Lots of people still like sending paper cards, so when an invitation goes live hosts get a QR code they can print on them.",
          },
        ],
        images: [{ src: invioraMacMockup, alt: "Inviora invite mockup" }],
      },
      {
        heading: "The website",
        text: "The website is where people first meet Inviora. It has a home page, a catalogue of designs you can filter by occasion, a page for each design with a live preview, plus about and contact pages.",
      },
      {
        heading: "Under the hood",
        text: "Everything runs in one Next.js app: the shop, the details form, my admin panel and every customer's invitation. When someone visits names.inviora-bg.com, the app works out whose invitation that is and shows it. That means adding a new customer is just a new row in the database, with no deploy needed. Photos and data live on my own server at home. For payments and email I use hosted services, because those are things I'd rather not run myself.",
      },
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Social Media Design",
    category: "Graphic Design",
    image: vistarailImg,
    details:
      "VistaRail is a company specializing in glass facades and railing. As their dedicated graphic designer for social media, my role is to create a cohesive visual identity across Instagram and other digital platforms.",
    toolsAndTechnologies: ["Figma", "Photoshop"],
    sourceCodeLink: null,
    deployedAppLink: null,
    behanceLink: null,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    title: "Chat App",
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

const toParagraphs = (text) => [].concat(text || []);

function CaseStudy({ project, onExternalLink }) {
  return (
    <div className="caseStudy">
      <p className="caseStudyIntro">{project.details}</p>

      {project.overview && (
        <dl className="caseStudyOverview">
          {project.overview.map((item) => (
            <div key={item.label} className="caseStudyOverviewItem">
              <dt className="caseStudyLabel">{item.label}</dt>
              <dd className="caseStudyOverviewValue">
                {item.href ? (
                  <a
                    href={item.href}
                    className="caseStudyOverviewLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onExternalLink}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {project.caseStudy.map((section, index) => (
        <section key={section.heading} className="caseStudySection">
          <header className="caseStudySectionHeader">
            <span className="caseStudyLabel">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="caseStudyHeading">{section.heading}</h2>
          </header>

          <div className="caseStudyBody">
            {toParagraphs(section.text).map((paragraph, i) => (
              <p key={i} className="caseStudyText">
                {paragraph}
              </p>
            ))}

            {section.points?.length > 0 && (
              <ul className="caseStudyPoints">
                {section.points.map((point) => (
                  <li key={point.title} className="caseStudyPoint">
                    <h3 className="caseStudyPointTitle">{point.title}</h3>
                    <p className="caseStudyPointText">{point.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {section.images?.length > 0 && (
            <div
              className={`caseStudyImages ${
                section.images.length > 1 ? "caseStudyImages-grid" : ""
              }`}
            >
              {section.images.map((image, i) => (
                <figure key={i} className="caseStudyFigure">
                  <img
                    src={image.src}
                    alt={image.alt || section.heading}
                    className="caseStudyImage"
                    loading="lazy"
                  />
                  {image.caption && (
                    <figcaption className="caseStudyCaption">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {section.textAfter && (
            <div className="caseStudyBody">
              {toParagraphs(section.textAfter).map((paragraph, i) => (
                <p key={i} className="caseStudyText">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="caseStudySection">
        <header className="caseStudySectionHeader">
          <span className="caseStudyLabel">Stack</span>
          <h2 className="caseStudyHeading">Tools & Technologies</h2>
        </header>
        <ul className="caseStudyBody caseStudyTags">
          {project.toolsAndTechnologies.map((tool) => (
            <li key={tool} className="caseStudyTag">
              {tool}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));
  const leaveSiteDialog = useRef(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const confirmLeave = (e) => {
    if (!project.confirmLeave) return;
    e.preventDefault();
    leaveSiteDialog.current.showModal();
  };

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
          {project.caseStudy ? (
            <CaseStudy project={project} onExternalLink={confirmLeave} />
          ) : (
            <>
              <p className="projectDetailsText">{project.details}</p>
              <div className="toolsAndTechnologies">
                <h3 className="toolsAndTechnologiesTitle">
                  Tools & Technologies
                </h3>
                <p className="toolsAndTechnologiesDesc">
                  {project.toolsAndTechnologies.join(" / ")}
                </p>
              </div>
            </>
          )}
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
                onClick={confirmLeave}
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
      {project.confirmLeave && (
        <dialog
          ref={leaveSiteDialog}
          className="leaveSiteDialog"
          aria-labelledby="leaveSiteTitle"
          onClick={(e) => {
            if (e.target === e.currentTarget) e.currentTarget.close();
          }}
        >
          <div className="leaveSiteContent">
            <span className="caseStudyLabel">External link</span>
            <h2 id="leaveSiteTitle" className="leaveSiteTitle">
              You are leaving this website
            </h2>
            <p className="leaveSiteText">
              You're about to visit{" "}
              {new URL(project.deployedAppLink).hostname}, which will open in a
              new tab.
            </p>
            <div className="leaveSiteActions">
              <button
                type="button"
                className="leaveSiteButton leaveSiteButton-secondary"
                onClick={() => leaveSiteDialog.current.close()}
              >
                Stay here
              </button>
              <a
                href={project.deployedAppLink}
                className="leaveSiteButton"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => leaveSiteDialog.current.close()}
              >
                Continue
              </a>
            </div>
          </div>
        </dialog>
      )}
      <Footer />
    </div>
  );
}
