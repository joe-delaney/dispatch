import React from "react";

class UserDashboardNav extends React.Component {

    render() {
        return (
            <nav className="user-dashboard-nav-bar">
                <div className="user-dashboard-nav-bar-left"></div>
                <div className="user-dashboard-nav-bar-center">
                    <input className="user-dashboard-nav-bar-search-input" type="text" placeholder="&#xF002;  Search Slack" />
                </div>
                <div className="user-dashboard-nav-bar-right"></div>
            </nav>
        )
    }
}

export default UserDashboardNav;