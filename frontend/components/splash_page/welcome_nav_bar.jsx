import React from "react";
import { Link } from "react-router-dom";

const WelcomeNavBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <p>Welcome, {currentUser.display_name}</p>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    )

    return (
        <div>
            {display}
        </div>
    )
}

export default WelcomeNavBar;