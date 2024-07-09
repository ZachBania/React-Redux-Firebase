// Core Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import Project from "./Project";
import { getProjectsAsync } from "../../_redux/actions/ProjectActions";

// Bootstrap Imports 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.project.projects);

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch]);

    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText="Projects" />
                </Col>
            </Row>

            <Row className='row projects-container'>
                <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
                    {projects && projects.map(project => (
                        <Project project={project} key={project.id} />
                    ))}
                </Col>
                <Col className={'col'} sm="12" md="12" lg="4" xl="4" xxl="4">
                </Col>
            </Row>
        </>
    );
}
