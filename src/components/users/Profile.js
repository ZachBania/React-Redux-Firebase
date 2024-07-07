// Core Imports
import React from "react";
import { Link } from "react-router-dom";
import { selectActiveUser } from "../../_redux/reducers/userSlice";

// Component Imports

// Bootstrap Imports

const Profile = ({ user }) => {
    // const activeUser = useSelector(selectActiveUser);

    return (
        <div className="profile-container">
            <Link to={`/manage-profile/${user.id}`} className="btn">Edit Profile</Link>
        </div>
    )
}

export default Profile;

