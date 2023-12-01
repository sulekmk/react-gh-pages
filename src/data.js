/** @format */

import project1Image from "./project-1.png";
import project2Image from "./project-2.gif";
import project3Image from "./project-3.gif";
import project4Image from "./project-4.gif";
import project5Image from "./project-5.png";
import project6Image from "./project-6.png";
import project7Image from "./project-6.png";
import project8Image from "./project-6.png";
import React_mindmajix from "./React_mindmajix.png";


const projectImage = [];

projectImage.push(project1Image);
projectImage.push(project2Image);
projectImage.push(project3Image);
projectImage.push(project4Image);
projectImage.push(project5Image);
projectImage.push(project6Image);
projectImage.push(project7Image);
projectImage.push(project8Image);

export const projects = [
  {
    title: "DAVID CHU'S CHINA BISTRO Restaurant",
    subtitle: "Restaurant Web Application",
    description:
      "In this assignment, The front page of our web app contains 3 clickable tiles: Menu, Specials, and Map. If you click on the Specials tile, you will be taken to a single category page where all the menu items that belong to the Specials menu category will be shown. Your task in this assignment is to alter this behavior such that when the user clicks on the Specials tile, the web app takes the user to a random single category menu page, listing menu items in the category, be it 'Lunch', 'Dinner', 'Sushi', etc. That way, any random category can become the Specials!",
    image: projectImage[0],
    link: "https://sulekmk.github.io/github.io-module5-solution/",
  },
  {
    title: "CICD System",
    subtitle: "ARRCUS - CICD System",
    description:
      "The CICD UI can be used for managing assets in an organization along with the users and groups of that organization." +
      " A user of this application can add multiple different types of assets and give or take away access" +
      " to those assets at the group level. Examples of this as well as other use cases will be provided in this document." +
      " I have worked on topology management module where i have worked on multiple input sorting and camparison.Also many issues" +
      " related to React state component management when browsers re-render or reload.",
    image: projectImage[4],
    link: "https://cicd.sjc.arrcus.com",
  },
  {
    title: "Discover-Ecommerce",
    subtitle: "Discover-Ecommerce: Login and Payments Domain",
    description:
      "The Discover-Ecommerce application is a mobile custom application developed for ANDROID/iPhone/iPad devices. "+
      "JQM: Discover business would like mobile applications to have rich UI experience similar to native clients."+
      " The main purpose of JQM Application Development is to build a hybrid cross platform mobile application and " +
      "rewrite the current mobile website of Discover with enhanced features." +
      " Research and development using jQuery mobile API, CSS3, HTML5, jQuery technologies.",
    image: projectImage[1],
    link: "https://www.discover.com/online-banking/savings-account/",
  },
  {
    title: "European Weather Forecast - API Project",
    subtitle: "Coursera- WeatherAPIProject",
    description:
      "The challenge will be to write a webpage that uses API to retrieve weather information from an external source." +
      " To do this, you will create the user interface, send the request to the external source using JavaScript, " +
      "process data received and present the information on your webpage using HTML.In this project.Approach : HTML5 webpage created, Bootstrap CSS and external " +
      "stylesheet used, 7Timer API used to retrieve weather information on selected city and country. Code: Formatting, " +
      "Commenting used to maintain quality of code.",
    image: projectImage[5],
    link: "https://sulekmk.github.io/WeatherAPIProject/",
  },
];

export const testimonials = [
  {
    quote: "Good learning ability and contributing to the CICD Application",
    name: "Amaresan Balakrishnan",
    company: "Arrcus Inc. San Jose, California, USA",
  },
  {
    quote:
      "Sulek has been responsive and quick to learn the complex situation and with a quick turnaround provide the required solution in place. Works within the constraints in the account team with great flexibility with the end result in mind. 1.Possesses outstanding technical skills and is extremely flexible in meeting project requirements.2.Spearheaded Architectural design for a new complex development project which was appreciated by Client Technology team also. 3.Maintained thorough supervision of the project design and development to ensure high-class deliverable, Project went through UAT without any major defect much to the surprise of business team. 4.Apart from ensuring high quality deliverable, made contributions to proposals by designing the high-level technical Solution/Architecture and also extended support for technical estimation. 5.Helped account team through mentoring of junior team members on the technology advancements. 6.Communicates effectively and is confident. Her dedication and sense of ownership is excellent!",
    name: "Rahul Borade",
    company: "Cognizant Technology Solutions Pune, India",
  },
];
export const nodes = [
  {
    title: "Mindmajix Technologies - React JS",
    link: { React_mindmajix },
  },

  {
    title: "Coursera [Meta] - React Basics",
    link: "https://www.coursera.org/account/accomplishments/verify/N66J7MM4NW7L",
  },

  {
    title: "Coursera [Meta] - Web Development in React.js: Build a Web App",
    link: "https://www.coursera.org/account/accomplishments/certificate/73PFNZV6NVLU",
  },
  {
    title: "Coursera [Meta]- Programming of JavaScript",
    link: "https://www.coursera.org/account/accomplishments/verify/2NJKBL9WE9TS",
  },
  {
    title:
      "Coursera [Johns Hopkins University] - HTML, CSS, and Javascript for Web Developers",
    link: "https://www.coursera.org/account/accomplishments/verify/TXB5JLYHXX32",
  },
  {
    title:
      "Alison CPD Certified Course - Diploma in HTML5, CSS3 and JavaScript",
    link: "#",
  },
  {
    title: "Coursera [Meta] - Introduction to Front-End Development",
    link: "https://www.coursera.org/account/accomplishments/verify/TFP848D5AZ64",
  },
  {
    title: "Coursera [Meta] - Introduction to Mobile Development",
    link: "https://www.coursera.org/account/accomplishments/verify/QU93F488MYRC",
  },
];

export const skills = [
  "React JS",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Material UI",
  "SQL Queries",
  "MongoDB UI Data Retrieval",
  "GitHub",
  "Jira",
  "Visual Studio Code",
  "Manual Testing - UI Modules",
  "React Table",
  "Single Column - Sorting and Filtering",
  "Multiple Column - Sorting and Filtering",
];
