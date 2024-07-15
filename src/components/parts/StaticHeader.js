// Core Imports
import React from 'react';
import { motion } from 'framer-motion';

// Component Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StaticHeader(props) {
    return (
        <Row>
            <Col className={'static-header-component col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <motion.h1 className={'static-header'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                >{props.headerText}</motion.h1>
            </Col>
        </Row>
    );
}

export default StaticHeader;



