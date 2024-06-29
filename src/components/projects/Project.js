// Core Imports
import React from "react";
import { Link } from "react-router-dom";

// Component Imports


// Bootstrap Imports
import Stack from 'react-bootstrap/Stack';

const Project = ({ project }) => {

  return (
    <>
      <div className="project--inner-container">
        <div className="project-header-container">
          <h2 className="project-header">{project.header}</h2>
        </div>
        <p className="project-excerpt">{project.excerpt}</p>
        <p className="project-category_owner">{project.category_owner}</p>
        <p className="project-meta">{project.meta}</p>
        <Link to={`/projects/${project.id}`} className="btn">View Project</Link>
      </div>
    </>


  );
}

export default Project;