// Core Imports
import React from 'react';

// Component Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StaticHeader(props) {
    return (
        <Row>
            <Col className={'static-header-component col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <h1>{props.headerText}</h1>
            </Col>
        </Row>
    );
}

export default StaticHeader;



