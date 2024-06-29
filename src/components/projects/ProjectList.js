// Core Imports
import React from "react";

// Component Imports
import ProjectListRow from "./ProjectListRow";

//Bootstrap Imports
import { Table } from "react-bootstrap";
 
const ProjectList = ({ projects }) => {
    return (
        <div className="project-list-container">

            <Table>
                <thead>
                    <tr>
                        <th><p>#</p></th>
                        <th><p>Header</p></th>
                        <th><p>Excerpt</p></th>
                        <th><p>Category (Owner)</p></th>
                    </tr>
                </thead>
                <tbody>                    
                    {projects && projects.map(project => (
                        <ProjectListRow project={project} key={project.id} />
                    ))}
                </tbody>
            </Table>

        </div>
    )
}

export default ProjectList;



