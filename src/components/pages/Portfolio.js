// import package and local style sheet
import React from 'react';
import '../../styles/Portfolio.css';

// function to import images
function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
 return images
}

// defines images to call importAll function to import images
const images = importAll(require.context('../../assets/images'), false, /\.(png|jpe?g|svg)$/);

export default function Portfolio({ projects }) {
  return (
    <div className="portfolio">
      {/* page title */}
      <h1>Projects:</h1>
      {/* highlight/display a main project */}
      <div className="mainProject">
        {/* take the first project in list as the main */}
        {/* project image embedded with link to project page */}
        <figure>
          <a href={`${projects[0].link}`}><img src={images[`${projects[0].image}`]} alt={`${projects[0].name}`} /></a>
        </figure>
        {/* project name embedded with link to project page */}
        <div>
          <a href={`${projects[0].link}`}><p className="projectTitle">{`${projects[0].name}`}</p></a>
        </div>
        {/* project description */}
        <p>{`${projects[0].description}`}</p>
      </div>
      {/* section for all other projects */}
      <ul className="gallery">
        {/* iterate through each project and return a new array of items for each project */}
        {projects.slice(1).map((project) => (
          <div className="project">
            {/* project image embedded with link to project page */}
            <figure>
              <a href={`${project.link}`}><img src={images[`${project.image}`]} alt={`${project.name}`} /></a>
            </figure>
            {/* project name embedded with link to project page */}
            <div>
              <a href={`${project.link}`}><p className="projectTitle">{`${project.name}`}</p></a>
            </div>
            {/* project description */}
            <p>{`${project.description}`}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

