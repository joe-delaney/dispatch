import React from "react";
import composeIcon from "../../../../app/assets/images/compose-icon.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UserDashboardSidebar = () => (
    <div className="user-dashboard-sidebar">
        <div className="user-dashboard-sidebar-contents">
            <div className="user-dashboard-sidebar-header">
                <Link to="/">
                    <img className="user-dashboard-sidebar-logo" src="https://cdn.bfldr.com/5H442O3W/at/pljt3c-dcwb20-c19uuy/Slack_RGB_White.svg?auto=webp&format=png" alt="slack-logo"></img>
                </Link>
                <button className="new-message-button">
                    <img src={composeIcon} alt="compose icon" />
                </button>
            </div>
            <div className="user-dashboard-sidebar-main">

            </div>
        </div>
    </div>
)

export default UserDashboardSidebar;