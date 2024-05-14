import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  aibuddy,
  rockpaper
} from "../assets";
import wipro from "../assets/company/wipro.png"
import cosmo from "../assets/company/cosmo.jpeg"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ab Initio Developer",
    icon: backend,
    
  },
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "Shell Scripting",
    icon: creator,
  },
  
];



const experiences = [
  {
    title: "Project Engineer",
    company_name: "Wipro",
    icon: wipro,
    iconBg: "#383E56",
    date: "Nov 2019 - Present",
    points: [
      "I have worked on Ab Initio ETL tool as a tool to process client side information and provide valuable insights regarding the data",
      "My other responsibilities involved interacting with cleint and provide insights on data.",
      "Extensive experience in designing and parameterizing graphs, scheduling jobs through Control Centre, and proficiently scripting Unix shell commands for ETL optimization."
      ,"Designing Ab Initio graphs to transform, cleanse, and enrich data based on business requirements.",
      "Monitoring ETL job execution and addressing any issues promptly to minimize data processing delays.",
      "Created shell scripts to automate monitoring of critical server metrics.",
      "Automated monitoring of continuous jobs through shell scripts.",
      "Leveraged tools like Grafana, Control Center, Query>it, and SQLExplorer for operational efficiency and streamlined processes.",
      "Appointed as L2, providing guidance and technical assistance to L1 teammates within the operations team"
    ],
  },
  {
    title: "Frontend web developer",
    company_name: "Cosmo Info solution",
    icon: cosmo,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Nov 2019",
    points: [
      "Skilled frontend developer proficient in HTML, CSS, JavaScript, and ReactJS",
      "Experienced in designing eye-catching landing pages to boost user interaction."  ],
  },
];


const projects = [
  {
    name: "AI Buddy Web App",
    description:
      "Generative AI web app developed using reactjs and google gemini api, users can interact with the gemini api in a chat style appication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aibuddy,
    source_code_link: "https://gemini-ai-buddy.vercel.app/",
  },
  {
    name: "Movie Finder",
    description:
      "React JS application for searching movies",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://movie-finder-prod.netlify.app",
  },
  {
    name: "Quote Generator",
    description:
      "Random quote generator",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://quote-generator-live.netlify.app",
  },
  {
    name: "Rock Paper Scissor Game web app",
    description:
      "A simple web app in which users can play rock paper scissor game",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: rockpaper,
    source_code_link: "https://rock-paper-scrissors.netlify.app/",
  },
  
];

export { services, experiences, projects };
