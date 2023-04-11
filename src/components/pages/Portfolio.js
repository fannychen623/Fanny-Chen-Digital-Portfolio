import React from 'react';
import '../../styles/Portfolio.css';

function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
 return images
}

const images = importAll(require.context('../../assets/images'), false, /\.(png|jpe?g|svg)$/);

export default function Portfolio({ projects }) {
  return (
    <div className="portfolio">
      <h1>Projects:</h1>
      <div className="mainProject">
        <figure>
          <a href={`${projects[0].link}`}><img src={images[`${projects[0].image}`]} alt={`${projects[0].name}`} /></a>
        </figure>
        <div>
          <a href={`${projects[0].link}`}><p className="projectTitle">{`${projects[0].name}`}</p></a>
        </div>
        <p>{`${projects[0].description}`}</p>
      </div>
      <ul className="gallery">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.slice(1).map((project) => (
          <div className="project">
            <figure>
              <a href={`${project.link}`}><img src={images[`${project.image}`]} alt={`${project.name}`} /></a>
            </figure>
            <div>
              <a href={`${project.link}`}><p className="projectTitle">{`${project.name}`}</p></a>
            </div>
            <p>{`${project.description}`}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

