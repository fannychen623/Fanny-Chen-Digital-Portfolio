// project lists to map and render
const projects = [
  {
    name: 'PWA Text Editor',
    description: 'Edit and save text on a web application that can be downloaded and used offline.',
    tools: 'Webpack - Client Server, Service Workers, Caching, Manifest, IndexedDB',
    link: 'https://github.com/fannychen623/Challenge-19-PWA-Text-Editor.git',
    image: 'pwatexteditor.png',
  },
  {
    name: 'Social Network API',
    description: 'https://github.com/fannychen623/Challenge-18-Social-Network-API.git',
    tools: 'MongoDB & Mongoose',
    link: 'Get, add, pull, update, and delete information from a social network backend database.',
    image: 'socialnetworkapi.png',
  },
  {
    name: 'Tech Blog',
    description: 'Create an account to view, post, and comment on a tech blog. View your own dashboard and edit or remove existing posts.',
    tools: 'Model View Controller (MVC) - Handlebars, Helpers, Partials, Sessions, Cookies, Session Storage.',
    link: 'https://github.com/fannychen623/Challenge-14-Tech-Blog.git',
    image: 'techblog.png',
  },
  {
    name: 'E-Commerce Back End',
    description: 'Get, add, pull, update, and delete information from an E-Commerce backend database.',
    tools: 'ORM & sequelize - Get, Post, Put, Delete API Requests, Models, dotenv connection',
    link: 'https://github.com/fannychen623/Challenge-13-ORM-E-Commerce-Back-End.git',
    image: 'ecommercebackend.png',
  },
  {
    name: 'Employee Tracker',
    description: 'Track and modify the employees of a company by using a content management systems (CMS). Record employee\'s name, role, manager, salary, and department. Filter employees by manager and/or department and view total utilized budget by department.',
    tools: 'SQL - MYSQL2, db.query, Schema, Seeds, mysql, console-table',
    link: 'https://github.com/fannychen623/Challenge-12-Employee-Tracker.git',
    image: 'employeetracker.png',
  },
  {
    name: 'Note Taker',
    description: 'Load, create, and delete notes. Site deployed on the cloud platform (Heroku) and information stored on the local database.',
    tools: 'Express.js - Get, Post, Delete Requests, Modular Routing, server port, local database',
    link: 'https://github.com/fannychen623/Challenge-11-Note-Taker.git',
    image: 'notetaker.png',
  },
  {
    name: 'Team Profile Generator',
    description: 'Enter employee details on the command-line to generate a team profile webpage.',
    tools: 'Node.js - Object-Oriented Programming (OOP), Test-Driven Coding (jest)',
    link: 'https://github.com/fannychen623/Challenge-10-Team-Profile-Generator.git',
    image: 'teamprofilegenerator.png',
  },
  {
    name: 'Professional README File Generator',
    description: 'Answer a series of questions on the command-line to generate a professional README file for different projects.',
    tools: 'Node.js - package.json, npm packages (inquirer, fs), template literals, module.exports',
    link: 'https://github.com/fannychen623/Challenge-09-Node.js-Professional-README-Generator.git',
    image: 'readmefilegenerator.png',
  },
  {
    name: 'Weather Dashboard',
    description: 'Search weather forcast in different U.S. cities by fetching data from the OpenWeather API. Easily toggle through previously searched cities in search history list.',
    tools: 'Server Side APIs - API Key, jQuery (ajax), fetch',
    link: 'https://fannychen623.github.io/Challenge-06-Weather-Dashboard/',
    image: 'weatherdashboard.png',
  },
  {
    name: 'Workday Scheduler',
    description: 'Schedule, update, and track task/activities throughout the day. Intuitive time indication with color coded rows.',
    tools: 'Third-Party APIs - Bootstrap, jQuery, day.js',
    link: 'https://fannychen623.github.io/Challenge-05-Work-Day-Scheduler/',
    image: 'workdayscheduler.png',
  },
  {
    name: 'Coding Quiz',
    description: 'Take a coding quiz, record names, and keep track of high scores.',
    tools: 'Javascript - setTimeout, localStorage',
    link: 'https://fannychen623.github.io/Challenge-04-Code-Quiz/',
    image: 'codingquiz.png',
  },
];

export default projects;
