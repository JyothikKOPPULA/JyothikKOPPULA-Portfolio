import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPython,
  FaAws,
  FaJs,
  FaJava,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.jpg";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"; // Use 'fa' for Fa icons
import { TbBrandLeetcode, TbBrandCpp } from "react-icons/tb"; // Correct import for TbBrandLeetcode
import { CgMail } from "react-icons/cg";
import { SiMysql, SiPowerbi, SiPandas } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  // { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  // { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Jyothika Koppula",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Full Stack developer who enjoys building attractive and effective user interfaces. For over a year, I've been turning ideas into engaging web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Rare'm",
    description:
      "This site leverages ThreeJS, React Three Fiber, TailwindCSS, and Framer Motion for dynamic 3D rendering, animations, customizable colors, and t-shirt model downloads.",
    image: projectImage1,
    githubLink:
      "https://github.com/JyothikKOPPULA/CustomizableShoppingWebsite.git",
  },
  {
    id: 2,
    name: "Personal Portfolio",
    description:
      "Created a responsive personal portfolio website with Tailwind CSS for effects and animations, enhanced with Framer Motion, featuring a contact form and a Project Gallery for viewing projects and accessing GitHub source code.",
    image: projectImage2,
    githubLink: "https://github.com/JyothikKOPPULA/JyothikKOPPULA-Portfolio",
  },
  {
    id: 3,
    name: "Path Visualizer",
    description:
      "Developed an interactive pathfinding visualizer using React JS and TailwindCSS, featuring Dijkstra's algorithm for shortest path calculation, dynamic node visualization, animated pathfinding, and custom maze creation with wall placement.",
    image: projectImage3,
    githubLink: "https://github.com/JyothikKOPPULA/Path_finding_visualizer.git",
  },
  {
    id: 4,
    name: "Snake Game",
    description:
      "Created a responsive and interactive Java Swing GUI with smooth animations using the Timer class, applying object-oriented principles for modular and maintainable continuous gameplay.",
    image: projectImage4,
    githubLink: "https://github.com/JyothikKOPPULA/snnakegame",
  },
  {
    id: 5,
    name: "Personal Manager",
    description:
      "Developed a **Budget Manager** app with a responsive interface using React JS and TailwindCSS, allowing users to create accounts, manage budgets, and track finances with smooth animations and engaging visuals.",
    image: projectImage5,
    githubLink: "https://github.com/JyothikKOPPULA/Personal-Finance-Manager",
  },
  {
    id: 6,
    name: "Speech Emotion Recognization",
    description:
      "Developed a Speech Emotion Recognition system using Python with Multi-Layer Perceptron (MLP) and Support Vector Machine (SVM) models. Implemented emotion classification to analyze speech data effectively.",
    image: projectImage6,
    githubLink: "",
  },
];

// export const BIO = [
//   "I’m Abhhirram Veedhi, a final-year student at Vellore Institute of Technology, Vellore, pursuing a Bachelor of Technology in Information Technology with a CGPA of 8.44. I’m passionate about technology and development, and I’ve had the opportunity to work on several exciting projects. I developed a Full Stack inventory management system using MERN, created a T20 cricket data analytics dashboard with Power BI, and built a Speech Emotion Recognition system using Python. My skills span Python, JavaScript, and various frameworks like React JS and Power BI. I’ve also earned certifications in AWS Cloud Practitioner and MERN Full Stack. Beyond tech, I enjoy hiking and karate, with notable achievements including summiting Kalsubai Mountain and earning an Orange Belt in karate.",
// ];

export const SKILLS = [
  {
    icon: <FaJava className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Java",
    experience: "2+year",
  },

  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "1.5+years",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "1.5+years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1.5+years",
  },
  {
    icon: <FaJs className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1.5+years",
  },
  {
    icon: <SiMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+year",
  },
  {
    icon: <TbBrandCpp className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "C++",
    experience: "1+year",
  },
  {
    icon: <FaPython className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "Python",
    experience: "1+years",
  },

  // {
  //   icon: <FaAws className="text-4xl text-orange-700 lg:text-5xl" />,
  //   name: "Amazon Web Services",
  //   experience: "1+year",
  // },
  // {
  //   icon: <SiPowerbi className="text-4xl text-yellow-500 lg:text-5xl" />,
  //   name: "PowerBI",
  //   experience: "<1year",
  // },
  // {
  //   icon: <SiPandas className="text-4xl text-white-700 lg:text-5xl" />,
  //   name: "Python Pandas",
  //   experience: "<1year",
  // },
];

// export const EXPERIENCES = [
//   {
//     title: "Lead Frontend Developer",
//     company: "Innovative Tech Solutions",
//     duration: "July 2020 - Present",
//     description:
//       "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "Digital Creations",
//     duration: "February 2016 - June 2020",
//     description:
//       "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "Bright Future Technologies",
//     duration: "August 2014 - January 2016",
//     description:
//       "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
//   },
// ];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "REVA UNIVERSITY",
    duration: "September 2021 - July 2025",
    description:
      "Pursuing a Bachelor of Technology in Computer Science and Engineering at Reva University, Bangalore (Nov 2021 - May 2025), with a CGPA of 9.25/10. Gaining a strong foundation in technology and engineering principles through academic and practical projects, enhancing problem-solving and technical skills.",
  },
  {
    degree: "Higher Secondary Classes 11th & 12th ",
    institution: "Tirumala Juniour College",
    duration: "June 2019 - April 2021",
    description:
      "Completed senior secondary education at Tirumala Junior College with a CGPA of 9.72/10. Focused on foundational courses in Mathematics, Physics, and Chemistry, building a strong base for further studies in technology and engineering.",
  },
];

export const CERTIFICATIONS = [
  {
    title: <span>Full Stack Developer-1</span>,
    institution: "Indian Tech Keys",
    duration: "November 2022",
    link: "https://drive.google.com/file/d/1j-AnEGflw1_jbhY-_Ad_5ptdI6OZoN_Y/view",
    description:
      "Earned the Full Stack Developer-1 certification from Indian Tech Keys, showcasing proficiency in frontend and backend development. The certification covers key technologies such as HTML, CSS, JavaScript, and frameworks like React for the frontend, as well as Node.js and Express for the backend, with a focus on building responsive web applications.",
  },
  {
    title: <span>Oracle Database-SQL</span>,
    institution: "Mevi Technologies",
    duration: "December 2023",
    link: "https://drive.google.com/file/d/1PRvQwDwJHZjrJgCa4--aMapwcLIuvcd-/view",
    description:
      "Achieved Oracle Database-SQL certification from Mevi Technologies, validating proficiency in SQL and database management. The certification covers key concepts such as data manipulation, querying, and optimizing database performance, equipping me to effectively manage relational databases.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://leetcode.com/u/jyothika__koppula/",
    icon: <TbBrandLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/jyothika__koppula/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "mailto:jyothikakoppula11@gmail.com",
    icon: <CgMail fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://github.com/JyothikKOPPULA",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/jyothika-koppula-0429862a7/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
