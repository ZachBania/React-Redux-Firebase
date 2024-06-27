// Core Imports
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './logo512.png';

// Component Imports

// Bootstrap Imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    const [error, setError] = useState("");



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
                   
                        </ul>
                    </Nav> 
                </div>
            </Navbar>
        </>
    )
}

export default Navigation;

