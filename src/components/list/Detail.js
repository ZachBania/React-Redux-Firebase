// Core Imports
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../providers/AuthContext";

// Component Imports
import StaticHeader from '../parts/StaticHeader';
import PageNotFound from "../navigation/PageNotFound";

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Detail(props) {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const { currentUser, projects, getProjects, updateRecentlyViewed } = useAuth();  

    useEffect(() => {
        async function fetchData() {
            if (projects.length === 0) {
                await getProjects();
            }
        }

        fetchData();
    }, [getProjects, projects.length]);

    useEffect(() => {
        if (projects.length > 0) {
            const selectedProject = projects.find(proj => proj.id === parseInt(id));
            setProject(selectedProject);
            if(currentUser) {
                updateRecentlyViewed(id);
            }
        }
    }, [projects, id]);


    if (!project) {
        return <PageNotFound />;
    }

    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText={ project.header ? project.header : '' } />
                </Col>
            </Row>

            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <div className="project-detail-container">
                        <div className="project-description">
                            {project.description.map((desc) => <p>{desc}</p>)}  
                        </div>
                        <Link to="/projects" className="btn">Back to projects</Link>
                    </div>
                </Col>
            </Row>

        </>
    );
}

export default Detail;