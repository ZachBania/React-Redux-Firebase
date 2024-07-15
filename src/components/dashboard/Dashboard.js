// Core Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated, selectUserEmail } from "../../_redux/reducers/UserSlice";
import { motion } from "framer-motion"

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import NotAuthorized from "../navigation/NotAuthorized";
// Component Imports - Projects
import ProjectList from "../projects/ProjectList";
import CreateProject from "../projects/CreateProject";
import { getProjectsAsync } from '../../_redux/actions/ProjectActions';
// Component Imports - Users
import UserList from "../users/UserList";
import Profile from "../users/Profile";
import { getUsersAsync } from "../../_redux/actions/UserActions";
import { selectActiveUser } from "../../_redux/reducers/UserSlice";
// Component Imports - Notifications
import { getNotificationsByAuthorAsync } from '../../_redux/actions/NotificationActions';
import DashboardNotifications from "../notifications/DashboardNotifications";

// Bootstrap Imports
import { Row, Col, Accordion, Tabs, Tab } from "react-bootstrap";

const Dashboard = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.project.projects);

    const users = useSelector(state => state.user.users);
    const isAuth = useSelector(isAuthenticated);
    const activeUserEmail = useSelector(selectUserEmail);
    const activeUser = useSelector(selectActiveUser);

    const notificationsByAuthor = useSelector(state => state.notification.notificationsByAuthor);

    useEffect(() => {
        dispatch(getProjectsAsync());
        dispatch(getUsersAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getNotificationsByAuthorAsync(activeUserEmail));
    }, [dispatch, activeUserEmail]);

    return (
        <>
            {isAuth ? (
                <>
                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <StaticHeader headerText={"Dashboard"} />
                        </Col>
                    </Row>
                    
                    <Row className='row dashboard-container'>
                        <Col className={'col'} sm="12" md="8" lg="8" xl="8" xxl="8">

                            <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                                <Tab eventKey="overview" title="Overview">
                                    <h3>All Users</h3>
                                    {users && <UserList users={users} />}
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <h3>Profile</h3>
                                    {activeUser && <Profile user={activeUser} />}
                                </Tab>
                                <Tab eventKey="projects" title="Projects">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Create Project</Accordion.Header>
                                            <Accordion.Body>
                                                <CreateProject />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                    <h3>Project List</h3>
                                    {projects && <ProjectList projects={projects} />}
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col className={'col'} sm="12" md="4" lg="4" xl="4" xxl="4">
                            {notificationsByAuthor ? (
                                <>
                                    <DashboardNotifications notifications={notificationsByAuthor} />
                                </>
                            ) : ('')}

                        </Col>
                    </Row>

                </>
            ) : (<NotAuthorized />)}
        </>
    );
}

export default Dashboard;
