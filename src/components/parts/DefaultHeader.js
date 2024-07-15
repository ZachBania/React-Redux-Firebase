
// Core Imports
import React from 'react';
import { motion } from 'framer-motion';

// Component Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const REACT_VERSION = React.version;

function DefaultHeader(props) {
    return (
        <Row>
            <Col className={'default-header-component col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <motion.h1 className={'static-header'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{props.headerText} ({REACT_VERSION})</motion.h1>
            </Col>
        </Row>
    );
}

export default DefaultHeader;



