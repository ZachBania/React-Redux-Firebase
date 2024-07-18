// Core Imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Component Imports
import StaticHeader from '../parts/StaticHeader';
import { getProjectAsync, updateProjectViewsAsync } from '../../_redux/actions/ProjectActions';
import PageNotFound from '../navigation/PageNotFound';

// Bootstrap Imports
import { Row, Col } from "react-bootstrap";

export default function ProjectDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const project = useSelector(state => state.project.project);

    useEffect(() => {
        dispatch(getProjectAsync(id));
        dispatch(updateProjectViewsAsync(id));
    }, [dispatch, id]);

    return (
        <>
            {project ? (
                <>
                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <StaticHeader headerText={project.header ? project.header : ''} />
                        </Col>
                    </Row>
                    <Row className='row project-detail-container'>
                        <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
                            <>
                                {project.description && project.description.map(desc => (
                                    <motion.p className='description' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{desc}</motion.p>
                                ))}

                            </>
                        </Col>
                        <Col className={'col'} sm="12" md="12" lg="4" xl="4" xxl="4">
                        </Col>
                    </Row>
                </>
            ) : (<PageNotFound />)}
        </>
    );
}
