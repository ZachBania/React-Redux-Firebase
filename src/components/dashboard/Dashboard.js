import React, { useEffect } from "react";
import { getProjectsAsync } from '../../_redux/actions/ProjectActions';
import { getNotificationsAsync, getNotificationsByAuthorAsync } from '../../_redux/actions/NotificationActions';
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated, selectUserEmail, selectUserName } from "../../_redux/reducers/UserSlice";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import CreateProject from "../projects/CreateProject";
import ProjectList from "../projects/ProjectList";
import UserList from "../users/UserList";
import Profile from "../users/Profile";

import Notifications from "../notifications/Notifications";
import NotAuthorized from "../navigation/NotAuthorized";

import { getUsersAsync } from "../../_redux/actions/UserActions";
import { selectActiveUser } from "../../_redux/reducers/UserSlice";

// Bootstrap Imports
import { Row, Col, Accordion, Tabs, Tab } from "react-bootstrap";

const Dashboard = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.project.projects);

    const users = useSelector(state => state.user.users);
    const isAuth = useSelector(isAuthenticated);
    const userEmail = useSelector(selectUserEmail);
    const activeUser = useSelector(selectActiveUser);

    const notificationsByAuthor = useSelector(state => state.notification.notificationsByAuthor);

    useEffect(() => {
        dispatch(getProjectsAsync());
        dispatch(getUsersAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getNotificationsByAuthorAsync(userEmail));
    }, [dispatch, userEmail]);

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

                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Home">
                                    Tab content for Home
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <h3>Profile</h3>
                                    {activeUser && <Profile user={activeUser} />}

                                    <h3>All Users</h3>
                                    {users && <UserList users={users} />}

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
                                <Notifications notifications={notificationsByAuthor} />
                            ) : ('')}

                        </Col>
                    </Row>
                </>
            ) : (<NotAuthorized />)}
        </>
    );
}

export default Dashboard;
