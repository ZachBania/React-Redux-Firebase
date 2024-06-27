// Core Imports
import React from "react";
import { Link } from "react-router-dom";

// Component Imports


// Bootstrap Imports
import Stack from 'react-bootstrap/Stack';

const ListRow = ({project})=> {
  

  return (
        <div className="project-container">
          <div className="project--inner-container">
            <div className="project-name-container">
              <h2 className="project-name">{project.header}</h2>
              {/* <Stack direction="horizontal" gap={2}>
                  <BS_Badge badgeStyle={ "primary bg-" + project.category_owner.toLowerCase() } text={project.category_owner} />
              </Stack> */}
            </div>
            <p className="project-excerpt">{project.excerpt}</p>
            
            <Link to={`/projects/${project.id}`} className="btn">View Project</Link>
          
          </div>
        </div>
  );
}

export default ListRow;