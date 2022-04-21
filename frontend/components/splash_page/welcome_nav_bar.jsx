import React from "react";
import { Link } from "react-router-dom";

const WelcomeNavBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className="welcome-nav-bar">
            <p>Welcome, {currentUser.display_name}</p>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className="welcome-nav-bar">
            <img src="https://cdn.bfldr.com/5H442O3W/at/pljt3c-dcwb20-c19uuy/Slack_RGB_White.svg?auto=webp&format=png" className="welcome-slack-logo"/>
            <div className="welcome-nav-bar-links">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )

    return (
        <nav>
            {display}
        </nav>
    )
}

export default WelcomeNavBar;