// Core Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import Project from "./Project";
import { getProjectsAsync } from "../../_redux/actions/ProjectActions";

// Bootstrap Imports 
import { Row, Col } from 'react-bootstrap';

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

            <motion.div className='row projects-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
                    {projects && projects.map(project => (
                        <Project project={project} key={project.id} />
                    ))}
                </Col>
                <Col className={'col'} sm="12" md="12" lg="4" xl="4" xxl="4">
                </Col>
            </motion.div>
        </>
    );
}
