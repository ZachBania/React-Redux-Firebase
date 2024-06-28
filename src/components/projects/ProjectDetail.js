// Core Imports
import React from 'react'

// Component Imports
import StaticHeader from '../parts/StaticHeader';

// Bootstrap Imports
import { Row, Col } from "react-bootstrap";


export default function ProjectDetail() {
    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText={"Project Detail"} />
                </Col>
            </Row>
            <Row className='row project-detail-container'>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">

                    <p className="project-name">Project Header: </p>

                    <p className="id">id: </p>
                    <p className="header">header: </p>
                    <p className="description">description: </p>
                    <p className="excerpt">excerpt: </p>
                    <p className="category_owner">category_owner: </p>
                    <p className="meta">meta: </p>

                </Col>
            </Row>
        </>
    )
}

