import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ChannelSidebarListContainer from "../../channels/channel_sidebar_list/channel_sidebar_list_container";
import GroupSidebarListContainer from "../../groups/group_sidebar_list/group_sidebar_list_container";

const UserDashboardSidebar = () => (
    <div className="user-dashboard-sidebar">
        <div className="user-dashboard-sidebar-contents">
            <div className="user-dashboard-sidebar-header">
                <Link to="/">
                    <img className="user-dashboard-sidebar-logo" src={window.dispatchLogoWhite} alt="slack-logo"></img>
                </Link>
                <Link to="/user-dashboard/new-message">
                    <button className="new-message-button">
                        <img className="new-message-icon" src={window.composeIcon} alt="compose icon" />
                    </button>
                </Link>
            </div>
            <div className="user-dashboard-sidebar-main">
                <ChannelSidebarListContainer/>
                <GroupSidebarListContainer/>
            </div>
        </div>
    </div>
)

export default UserDashboardSidebar;