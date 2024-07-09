// Core Imports
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from "../../_redux/reducers/UserSlice";

// Component Imports
import TimeoutNotifications from '../notifications/TimeoutNotifications';
import { isAuthenticated } from '../../_redux/reducers/UserSlice';
import logo from '../../assets/images/logo512.png';
import { getNotificationsByAuthorAsync } from '../../_redux/actions/NotificationActions';
import { setLogin, setLogout } from '../../_redux/actions/UserActions';

// Bootstrap Imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthenticated);
    const userEmail = useSelector(selectUserEmail);
    const timeoutNotifications = useSelector(state => state.notification.timeoutNotifications);

    useEffect(() => {
        dispatch(getNotificationsByAuthorAsync(userEmail));
    }, [dispatch, userEmail]);

    function handleLogin() {
        dispatch(setLogin());
    }

    function handleLogout() {
        dispatch(setLogout());
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand href="/">
                    <div className="brand-image-container">
                        <img src={logo} alt="Logo" />
                    </div>
                    <h1>React-Redux</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul>
                            {isAuth ? <li><Link to="/dashboard">Dashboard</Link></li> : ''}
                            <li><Link to="/projects">Projects</Link></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
                <div id="auth-navbar-nav">
                    <Nav className="me-auto">
                        <ul>
                            {isAuth ? (
                                <>
                                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" onClick={handleLogin}>Login</Link></li>
                                </>
                            )}
                        </ul>
                    </Nav>
                </div>
                <div className='nav-notification-container'>
                    {timeoutNotifications ? (
                        <TimeoutNotifications notifications={timeoutNotifications} />
                    ) : ('')}
                </div>
            </Navbar>
        </>
    );
}

export default Navigation;
