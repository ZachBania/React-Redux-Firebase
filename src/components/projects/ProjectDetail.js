// Core Imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Component Imports
import StaticHeader from '../parts/StaticHeader';
import { getProjectAsync } from '../../_redux/actions/ProjectActions'; // Imported the correct action
import PageNotFound from '../navigation/PageNotFound';


// Bootstrap Imports
import { Row, Col } from "react-bootstrap";

export default function ProjectDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const project = useSelector(state => state.project.project);

    useEffect(() => {
        dispatch(getProjectAsync(id)); 
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
                                    <p className='description'>{desc}</p>
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
