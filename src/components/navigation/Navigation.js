// Core Imports
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/logo512.png';

import { auth, provider } from "./../../_api/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from "./../../_redux/reducers/userSlice";


// Component Imports

// Bootstrap Imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);

    const handleLogin = () => {

        auth.signInWithPopup(provider).then((res) => {
            dispatch(setActiveUser({
                // Payload
                userName: res.user.displayName,
                userEmail: res.user.email
            }))
        }).catch((err) => {
            console.log(err.message);
        })
    }

    const handleLogOut = () => {
        auth.signOut().then(() => {
            dispatch(setUserLogOutState)
        }).catch((err) => {
            console.log(err.message);
        })
    }


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" >

                <Navbar.Brand href="/">
                    <div className="brand-image-container">
                        <img src={logo} />
                    </div>
                    <h1>React-Redux</h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
                <div id="auth-navbar-nav">
                    <Nav className="me-auto">
                        <ul>
                            {userName ? "Username: " + userName : ''}
                            {userEmail ? "Email: " + userEmail : ''}

                            {userName ? (
                                <li><Link onClick={handleLogOut}>Logout</Link></li>
                            ) : (
                                <li><Link onClick={handleLogin}>Login</Link></li>
                            )}
                        </ul>
                    </Nav>
                </div>
            </Navbar>

        </>
    )
}

export default Navigation;

