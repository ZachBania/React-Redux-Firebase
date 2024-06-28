// Core Imports
import React from "react";
import { Link } from "react-router-dom";

// Component Imports


// Bootstrap Imports
import Stack from 'react-bootstrap/Stack';

const ProjectListRow = ({ project }) => {

  return (

    <tr>
      <td><p className="id">{project.id}</p></td>
      <td><p className="header">{project.header}</p></td>
      {/* <td><p className="description_one">{project.description[0]}</p></td> */}
      {/* <td><p className="description_two">{project.description[1]}</p></td> */}
      {/* <td><p className="description_three">{project.description[2]}</p></td> */}
      <td><p className="excerpt">{project.excerpt}</p></td>
      <td><p className="category_owner">{project.category_owner}</p></td>
      {/* <td><p className="meta">{project.meta}</p></td> */}
      {/* <Link to={`/projects/${project.id}`} className="btn">View Project</Link> */ }  
    </tr>
  );
}

export default ProjectListRow;