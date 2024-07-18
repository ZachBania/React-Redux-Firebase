import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated, selectUserEmail } from "../../_redux/reducers/UserSlice";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

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
// Component Imports - Posts
import PostList from "../posts/PostList";
import { getPostsByAuthorAsync } from "../../_redux/actions/PostActions";
// Component Imports - Notifications
import { getNotificationsByAuthorAsync } from '../../_redux/actions/NotificationActions';
import DashboardNotifications from "../notifications/DashboardNotifications";

// Bootstrap Imports
import { Row, Col, Accordion, Tabs, Tab } from "react-bootstrap";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/").pop();
    const defaultTab = path || "overview";

    const users = useSelector(state => state.user.users);
    const activeUser = useSelector(selectActiveUser);
    const activeUserEmail = useSelector(selectUserEmail);
    const isAuth = useSelector(isAuthenticated);

    const projects = useSelector(state => state.project.projects);
    const postsByAuthor = useSelector(state => state.post.postsByAuthor);

    const notificationsByAuthor = useSelector(state => state.notification.notificationsByAuthor);

    useEffect(() => {
        dispatch(getProjectsAsync());
        dispatch(getUsersAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getNotificationsByAuthorAsync(activeUserEmail));
    }, [dispatch, activeUserEmail]);

    useEffect(() => {
        if (activeUserEmail) {
            dispatch(getPostsByAuthorAsync(activeUserEmail));
        }
    }, [dispatch, activeUserEmail]);

    const handleTabSelect = (key) => {
        navigate(`/dashboard/${key}`);
    };

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
                            <Tabs activeKey={defaultTab} onSelect={handleTabSelect} id="controlled-tab-example">
                                <Tab eventKey="overview" title="Overview">
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <Routes>
                                            <Route path="overview" element={
                                                <>
                                                    {users.length > 0 ? (
                                                        <UserList users={users} />
                                                    ) : ('')}
                                                </>
                                            } />
                                        </Routes>
                                    </motion.div>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <h3>Profile</h3>
                                        <Routes>
                                            <Route path="profile" element={
                                                <>
                                                    {activeUser && <Profile user={activeUser} />}
                                                    <h3>My Posts</h3>
                                                    {postsByAuthor.length > 0 ? (
                                                        <PostList posts={postsByAuthor} />
                                                    ) : ('No posts found for ' + activeUser.email)}

                                                </>
                                            } />
                                        </Routes>
                                    </motion.div>
                                </Tab>
                                <Tab eventKey="projects" title="Projects">
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <Routes>
                                            <Route path="projects" element={
                                                <>
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Create Project</Accordion.Header>
                                                            <Accordion.Body>
                                                                <CreateProject />
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                    <h3>Project List</h3>
                                                    {projects.length > 0 ? (
                                                        <ProjectList projects={projects} />
                                                    ) : ('')}
                                                </>
                                            } />
                                        </Routes>
                                    </motion.div>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col className={'col'} sm="12" md="4" lg="4" xl="4" xxl="4">
                            {notificationsByAuthor && <DashboardNotifications notifications={notificationsByAuthor} />}
                        </Col>
                    </Row>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />
                    </Routes>
                </>
            ) : (<NotAuthorized />)}
        </>
    );
};

export default Dashboard;
