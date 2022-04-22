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
            <div className="welcome-nav-bar-left-section">
                <img src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-btwjnu/Slack_RGB.png?auto=webp&format=png" className="welcome-slack-logo" />
                <ul className="personal-links">
                    <a className="welcome-nav-bar-heading" href="#">Portfolio</a>
                    <a className="welcome-nav-bar-heading" href="#">LinkedIn</a>
                    <a className="welcome-nav-bar-heading" href="#">Github</a>
                </ul>
            </div>
            <div className="welcome-nav-bar-buttons">
                <Link to="/login" className="welcome-nav-bar-heading">Sign in</Link>
                <Link to="/signup" className="welcome-nav-bar-button sign-up">Sign Up Here</Link>
                <button className="welcome-nav-bar-button try-demo">Try a Demo</button>
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