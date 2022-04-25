import React from "react";
import UserDashboardNav from "./user_dashboard_main/user_dashboard_nav/user_dashboard_nav";
import UserDashboardMain from "./user_dashboard_main/user_dashboard_main";

export default class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-dashboard">
                <UserDashboardNav searchUsers={this.props.searchUsers} userSearchResults={this.props.userSearchResults} clearSearchResults={this.props.clearSearchResults}/>
                <UserDashboardMain/>
            </div>
        )
    }
}