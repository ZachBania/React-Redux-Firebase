// Core Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Component Imports

// Bootstrap Imports

const ProjectListRow = ({ project }) => {
  let navigate = useNavigate();

  function updateProjectRoute(project_id) {
    const path = `/manage-project/${project_id}`;
    navigate(path);
  }

  return (

    <tr key={project.id} onClick={() => updateProjectRoute(project.id)}>
      <td><p className="id">{project.id}</p></td>
      <td><p className="header">{project.header}</p></td>
      {/* <td><p className="description_one">{project.description[0]}</p></td> */}
      {/* <td><p className="description_two">{project.description[1]}</p></td> */}
      {/* <td><p className="description_three">{project.description[2]}</p></td> */}
      <td><p className="excerpt">{project.excerpt}</p></td>
      <td><p className="category_owner">{project.category_owner}</p></td>
      <td><p className="views">{project.views ? project.views : 0}</p></td>
      {/* <td><p className="meta">{project.meta}</p></td> */}
    </tr>

  );
}

export default ProjectListRow;