import React from "react";
import composeIcon from "../../../app/assets/images/compose-icon.png";

export default class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-dashboard">
                <nav className="user-dashboard-nav-bar"></nav>
                <div className="user-dashboard-main">
                    <div className="user-dashboard-sidebar">
                        <div className="user-dashboard-sidebar-contents">
                            <div className="user-dashboard-sidebar-header">
                                <img className="user-dashboard-sidebar-logo" src="https://cdn.bfldr.com/5H442O3W/at/pljt3c-dcwb20-c19uuy/Slack_RGB_White.svg?auto=webp&format=png" alt="slack-logo"></img>
                                <button className="new-message-button">
                                    <img src={composeIcon} alt="compose icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="user-dashboard-center"></div>
                </div>
            </div>
        )
    }
}