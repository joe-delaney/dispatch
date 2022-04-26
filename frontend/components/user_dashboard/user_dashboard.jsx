import React from "react";
import UserDashboardNav from "./user_dashboard_main/user_dashboard_nav/user_dashboard_nav";
import UserDashboardMain from "./user_dashboard_main/user_dashboard_main";
import UserEditModal from "../modals/user_edit_modal";

export default class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="user-dashboard">
                <UserDashboardNav 
                    searchUsers={this.props.searchUsers} 
                    userSearchResults={this.props.userSearchResults} 
                    clearSearchResults={this.props.clearSearchResults} 
                    currentUser={this.props.currentUser}
                    logout={this.props.logout}
                />
                <UserDashboardMain/>
                <UserEditModal 
                    editModalDisplayed={this.props.editModalDisplayed}
                    toggleEditModal={this.props.toggleEditModal}
                    updateUser={this.props.updateUser}
                    currentUser={this.props.currentUser}   
                />
            </div>
        )
    }
}