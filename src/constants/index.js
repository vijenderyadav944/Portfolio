
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  Shadcn,
  
  Fresherlogo,
  ProConnect,
  Streamify,
  Amazon,
  threejs,
} from "../assets";

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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Freelancer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Shadcn",
    icon: Shadcn,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer Fresher",
    company_name: "Student",
    icon: Fresherlogo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "I am a motivated fresher skilled in HTML, CSS, JavaScript, React, and Node.js. ",
      "Have a strong foundation in Web development, I create dynamic and responsive user interfaces.",
      "My projects demonstrate proficiency in front-end and back-end technologies.",
      " I am eager to apply my skills to innovative projects and contribute to a team.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "",
//     name: "",
//     designation: "",
//     company: "",
//     image: "",
//   },
//   {
//     testimonial:
//       "",
//     name: "",
//     designation: "",
//     company: "",
//     image: "",
//   },
//   {
//     testimonial:
//       "",
//     name: "",
//     designation: "",
//     company: "",
//     image: "",
//   },
// ];

const projects = [
  {
    name: "ProConnect",
    description:
      "ProConnect is a social media platform that enables effortless user registration and content sharing. It enhances engagement by making posts visible to all connected users, fostering an interactive and vibrant community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      }
    ],
    image: ProConnect,
    source_code_link: "https://github.com/vijenderyadav944/ProConnect",
  },
  {
    name: "Streamify",
    description:
      "ProConnect is an online meeting platform for organizing real-time meetings. It offers features like meeting recording, screen sharing, and customizable user settings, providing a personalized and efficient virtual meeting experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Stream API",
        color: "pink-text-gradient",
      },
    ],
    image: Streamify,
    source_code_link: "https://github.com/vijenderyadav944/Streamify.git",
  },
  {
    name: "Amazon Clone",
    description:
      "The Amazon Clone is a web application replicating key Amazon functionalities, including adding items to the cart and essential front-end features. It showcases skills in web development and e-commerce simulation.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS 3",
        color: "pink-text-gradient",
      },
    ],
    image: Amazon,
    source_code_link: "https://github.com/vijenderyadav944/amazon-clone.git",
  },
];

export { services, technologies, experiences,  projects };

//Also Export testimonials later when you have them Vijender