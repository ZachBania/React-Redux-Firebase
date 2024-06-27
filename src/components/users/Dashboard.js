// Core Imports
import React, { useEffect, useState } from "react";

// Component Imports
import StaticHeader from "../parts/StaticHeader";

// Bootstrap Imports
import { Row, Col, Accordion } from "react-bootstrap";


export default function Dashboard() {

    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText={"Dashboard"} />
                </Col>
            </Row>

            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    
                </Col>
            </Row>

        </>
    )
}
