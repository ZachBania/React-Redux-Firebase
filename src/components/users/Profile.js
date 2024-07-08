// Core Imports
import React from "react";
import { selectActiveUser } from "../../_redux/reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Component Imports

// Bootstrap Imports
import { ListGroup } from "react-bootstrap";

const Profile = ({ user }) => {

    const navigate = useNavigate(null);

    function updateUserRoute() {
        const path = `/manage-profile/${user.id}`;
        navigate(path);
    }

    return (
        <div className="profile-container">
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.user_name}</p>
            <p>Display Name: {user.display_name}</p>
            <p>Summary: {user.summary}</p>
            <Link to={`/manage-profile/${user.id}`} className="btn">Manage Profile</Link>
        </div>
    )
}

export default Profile;

