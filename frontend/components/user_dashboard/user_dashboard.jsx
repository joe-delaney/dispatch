import React from "react";
import UserDashboardNav from "./user_dashboard_main/user_dashboard_nav/user_dashboard_nav";
import UserDashboardMain from "./user_dashboard_main/user_dashboard_main";
import UserEditModal from "../modals/user_edit_modal";
import ChannelDetailsModalContainer from "../modals/channel_details_modal/channel_details_modal_container";
import CreateChannelModalContainer from "../modals/create_channel_modal/create_channel_modal_container";

export default class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.selectedChannels("").length === 0) {
            this.props.fetchChannels();
        }
    }

    render() {
        return (
            <div className="user-dashboard">
                <UserDashboardNav 
                    searchUsers={this.props.searchUsers} 
                    userSearchResults={this.props.userSearchResults} 
                    clearUserSearchResults={this.props.clearUserSearchResults} 
                    currentUser={this.props.currentUser}
                    logout={this.props.logout}
                    selectedChannels={this.props.selectedChannels}
                />
                <UserDashboardMain/>
                <UserEditModal 
                    editModalDisplayed={this.props.editModalDisplayed}
                    toggleEditModal={this.props.toggleEditModal}
                    updateUser={this.props.updateUser}
                    currentUser={this.props.currentUser}   
                />
                <ChannelDetailsModalContainer/>
                <CreateChannelModalContainer/>
            </div>
        )
    }
}