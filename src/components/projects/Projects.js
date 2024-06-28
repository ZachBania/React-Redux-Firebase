// Core Imports
import React, { useEffect } from "react";

//Component Import
import StaticHeader from "../parts/StaticHeader";

// Bootstrap Imports 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Projects() {


    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText="Projects" />
                </Col>
            </Row>

            <Row className='row project-list-container'>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">

                </Col>
            </Row>
        </>
    )
}
