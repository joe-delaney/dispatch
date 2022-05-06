import React from "react";
import { Link } from "react-router-dom";

const WelcomeNavBar = ({currentUser, logout, demoClicked}) => {
    const display = currentUser ? (
        <div className="welcome-nav-bar logged-in">
            <div className="welcome-nav-bar-left-section">
                <img src="https://cdn.bfldr.com/5H442O3W/at/pljt3c-dcwb20-c19uuy/Slack_RGB_White.svg?auto=webp&format=png" className="welcome-slack-logo" />
                <ul className="personal-links">
                    <a className="welcome-nav-bar-heading-logged-in" href="https://www.linkedin.com/in/joseph-delaney-46985b76/">Portfolio</a>
                    <a className="welcome-nav-bar-heading-logged-in" href="https://www.linkedin.com/in/joseph-delaney-46985b76/">LinkedIn</a>
                    <a className="welcome-nav-bar-heading-logged-in" href="https://github.com/joe-delaney/slack-chat">Github</a>
                </ul>
            </div>
            <div className="welcome-nav-bar-buttons">
                <Link to="/user-dashboard/browse-channels" className="welcome-nav-bar-button launch-slack-nav">Launch Slack</Link>
                <button onClick={logout} className="welcome-nav-bar-button sign-out">Sign out of Slack</button>
            </div>
        </div>
    ) : (
        <div className="welcome-nav-bar logged-out">
            <div className="welcome-nav-bar-left-section">
                <img src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-btwjnu/Slack_RGB.png?auto=webp&format=png" className="welcome-slack-logo" />
                <ul className="personal-links">
                    <a className="welcome-nav-bar-heading-logged-out" href="#">Portfolio</a>
                    <a className="welcome-nav-bar-heading-logged-out" href="https://www.linkedin.com/in/joseph-delaney-46985b76/">LinkedIn</a>
                    <a className="welcome-nav-bar-heading-logged-out" href="https://github.com/joe-delaney/slack-chat">Github</a>
                </ul>
            </div>
            <div className="welcome-nav-bar-buttons">
                <Link to="/login" className="welcome-nav-bar-heading-logged-out">Sign in</Link>
                <Link to="/signup" className="welcome-nav-bar-button sign-up">Sign Up Here</Link>
                <button className="welcome-nav-bar-button try-demo" onClick={demoClicked}>Try a Demo</button>
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