import React from 'react';
import '../../styles/Portfolio.css';

export default function Portfolio({ projects }) {
  return (
    <div className="container">
      <h1>Projects:</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.map((project) => (
          <li className="list-group-item">
            {`${project.name} ${project.description} (${project.link})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

