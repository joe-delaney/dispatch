import React from "react";

export default class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-dashboard">
                <nav className="user-dashboard-nav-bar"></nav>
                <div className="user-dashboard-main">
                    <div className="user-dashboard-sidebar"></div>
                    <div className="user-dashboard-center"></div>
                </div>
            </div>
        )
    }
}