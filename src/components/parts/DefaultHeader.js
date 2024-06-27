
// Core Imports
import { useState } from 'react';
import React from 'react';

// Component Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const REACT_VERSION = React.version;

function DefaultHeader(props) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Row>
                <Col className={'default-header-component col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <h1>{props.headerText} ({REACT_VERSION})</h1>
                </Col>
            </Row>
        );
    }
    
  }

export default DefaultHeader;



