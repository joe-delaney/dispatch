import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ChannelSidebarListContainer from "../../channels/channel_sidebar_list/channel_sidebar_list_container";

const UserDashboardSidebar = ({currentUser}) => (
    <div className="user-dashboard-sidebar">
        <div className="user-dashboard-sidebar-contents">
            <div className="user-dashboard-sidebar-header">
                <Link to="/">
                    <img className="user-dashboard-sidebar-logo" src="https://cdn.bfldr.com/5H442O3W/at/pljt3c-dcwb20-c19uuy/Slack_RGB_White.svg?auto=webp&format=png" alt="slack-logo"></img>
                </Link>
                <button className="new-message-button">
                    <img src={window.composeIcon} alt="compose icon" />
                </button>
            </div>
            <div className="user-dashboard-sidebar-main">
                <ChannelSidebarListContainer/>
            </div>
        </div>
    </div>
)

export default UserDashboardSidebar;