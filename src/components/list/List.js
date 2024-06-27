// Core Imports
import React, { useEffect } from "react";

//Component Import
import ListRow from './ListRow';
import StaticHeader from "../parts/StaticHeader";

// Bootstrap Imports 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function List() {
    

    useEffect(() => {
        // getProjects();
    }, []);

    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText="Projects" />
                </Col>
            </Row>
            {/* <Row className='row projects-container'>
                <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
                    {projects.map((x) => <ListRow key={x.id} project={x} />)}
                </Col>
                <Col className={'col'} sm="12" md="12" lg="4" xl="4" xxl="4">
                    { currentUser && <RecentlyViewedList />}
                </Col>
            </Row> */}
        </>
    );
}

export default List;
