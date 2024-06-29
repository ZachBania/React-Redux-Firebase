import React, { useEffect } from "react";
import { getProjectsAsync } from '../../_redux/actions/ProjectActions';
import { getNotificationsAsync } from '../../_redux/actions/NotificationActions';
import { useDispatch, useSelector } from "react-redux";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import CreateProject from "../projects/CreateProject";
import ProjectList from "../projects/ProjectList";
import Notifications from "../parts/Notifications";

// Bootstrap Imports
import { Row, Col, Accordion } from "react-bootstrap";


const Dashboard = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.project.projects);
    const notifications = useSelector(state => state.notification.notifications);

    useEffect(() => {
        dispatch(getProjectsAsync());
        dispatch(getNotificationsAsync());
    }, [dispatch]);

    console.log(notifications);

    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText={"Dashboard"} />
                </Col>
            </Row>

            <Row className='row dashboard-container'>
                <Col className={'col'} sm="12" md="12" lg="8" xl="8" xxl="8">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Create Project</Accordion.Header>
                            <Accordion.Body>
                                <CreateProject />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <h3>Project List</h3>
                    <ProjectList projects={projects} />

                </Col>
                <Col className={'col'} sm="12" md="12" lg="4" xl="4" xxl="4">
                    <h3>Notifications</h3>
                    <Notifications notifications={notifications} />
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;
