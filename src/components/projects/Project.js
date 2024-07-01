// Core Imports
import React from "react";
import { Link } from "react-router-dom";

// Bootstrap Imports
import Stack from 'react-bootstrap/Stack';

const Project = ({ project }) => {
  console.log( project.header, project);
  return (
    <>
      <div className="project-container">
        <div className="project-header-container">
          <h2 className="project-header">{project.header}</h2>
        </div>
        <div className="project-info-container">
          <p className="project-meta">{project.meta}</p>
          <p className="project-category_owner">{project.category_owner}</p>
        </div>
        <p className="project-excerpt">{project.excerpt}</p>
        <Link to={`/projects/${project.id}`} className="btn">View Project</Link>
      </div>
    </>
  );
}

export default Project;
