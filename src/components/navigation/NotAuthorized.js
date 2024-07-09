// Core Imports
import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import StaticHeader from '../parts/StaticHeader';

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NotAuthorized() {

    return (
        <>
            <Row>
                <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                    <StaticHeader headerText={"403 - Not Authorized"} />
                </Col>
            </Row>

            <Row>
                <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                    <div className="notAuthorized-container">
                        <Link to="/" className="btn">Return home</Link>
                    </div>
                </Col>
            </Row>

        </>
    );
}
