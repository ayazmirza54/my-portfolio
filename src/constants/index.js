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
} from "../assets";
import wipro from "../assets/company/wipro.png"
import cosmo from "../assets/company/cosmo.jpeg"
import bash from "../assets/tech/bash.jpg"
import abinitio from "../assets/tech/Ab-Initio-Logo.png"
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Ab Initio Developer",
    icon: backend,
  },
  {
    title: "Shell Scripting",
    icon: creator,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "bash",
    icon: bash
  },
  {
    name: "abintio",
    icon: abinitio
  }
];

const experiences = [
  {
    title: "Senior Project Engineer",
    company_name: "Wipro",
    icon: wipro,
    iconBg: "#383E56",
    date: "Nov 2019 - Present",
    points: [
      "I have worked on Ab Initio ETL tool as a tool to process client side information and provide valuable insights regarding the data",
      "My other responsibilities involved interacting with cleint and provide insights on data.",
    ],
  },
  {
    title: "Intern",
    company_name: "Cosmo Info solution",
    icon: cosmo,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - June 2019",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "My primary task was to develop centain parts of front end of some internal projects of Cosmo Info Solutions which included building the UI of landing page of Cosmo Info Solutions official website using Reactjs."  ],
  },
];


const projects = [
  {
    name: "Text/Code Utilities",
    description:
      "Implemented OpenAI text-davnici-003 api in my own react js app and added new type of feaure on the basis of predefined custom promts that will generate different type of output to meet the user's specific nixhe.",
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
    image: carrent,
    source_code_link: "https://www.ai-utilities.in",
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
];

export { services, technologies, experiences, projects };
