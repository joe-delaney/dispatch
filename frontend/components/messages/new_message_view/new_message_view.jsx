import React from "react";
import NewMessageViewUserSearchResult from "./new_message_view_user_search_result";
import NewMessageViewChannelSearchResult from "./new_message_view_channel_search_result";
import SelectedUserItem from "./selected_user_item";

export default class NewMessageView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            selectedUsers: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.clearSearchBar = this.clearSearchBar.bind(this);
        this.addSelectedUser = this.addSelectedUser.bind(this);
        this.removeSelectedUser = this.removeSelectedUser.bind(this);
        this.currentlySelected = this.currentlySelected.bind(this);
    }

    componentDidMount() {
        if(this.props.location.selectedUser) {
            let newSelectedUsers = Object.assign([],this.state.selectedUsers);
            newSelectedUsers.push(this.props.location.selectedUser)
            this.setState({
                selectedUsers: newSelectedUsers
            })
        }
    }

    handleInput(e) {
        this.setState({
            query: e.target.value
         })
        if (e.target.value !== "") {
            this.props.searchUsers(e.target.value);
        } else {
            this.props.clearUserSearchResults();
        }
    }

    clearSearchBar(e) {
        this.setState({
            query: ""
        });
        this.props.clearUserSearchResults();
    }

    addSelectedUser(user) {
        let newSelectedUsers = this.state.selectedUsers.map(user => Object.assign({}, user));
        newSelectedUsers.push(user);
        this.setState({
            selectedUsers: newSelectedUsers
        });
    }

    removeSelectedUser(userId) {
        let newSelectedUsers = this.state.selectedUsers.filter(user => user.id != userId); 
        this.setState({
            selectedUsers: newSelectedUsers
        })
    }

    currentlySelected(user) {
        let selected = false;
        this.state.selectedUsers.forEach((selectedUser) => {
            if(selectedUser.id === user.id) selected = true;
        })
        return selected;
    }

    render() {
        const maximumUsers = 8;
        const channels = (this.state.query === "" || this.state.selectedUsers.length) ? [] : this.props.selectedChannels(this.state.query);
        const searchResults = (this.props.userSearchResults.length || !this.state.query.length || channels.length) ? this.props.userSearchResults : [{ displayName: "No results found" }];
        const placeholderText = this.state.selectedUsers.length ? "" : "#channel or @somebody"
        const maximumReachedError = this.state.selectedUsers.length >= maximumUsers ? (
            <div className="max-reached-error-container">
                <span className="max-reached-error">Only 8 people can be in a direct message</span>
            </div>
        ) : (
            <div></div>
        )


        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                    <div className="all-dms-container">
                        <ul className="all-dms-items"></ul>
                    </div>
                    <div className="search-bar">
                        <div className="search-bar-top">
                            <span className="search-bar-label">To: </span>
                            <ul className="selected-users">
                                {this.state.selectedUsers.map((user, idx) => (
                                    <SelectedUserItem 
                                        key={idx} 
                                        user={user}
                                        removeSelectedUser={this.removeSelectedUser} />
                                ))}
                                <input className="search-bar-input"
                                    type="text"
                                    onChange={this.handleInput}
                                    value={this.state.query}
                                    placeholder={placeholderText} />
                            </ul> 
                        </div>
                        {maximumReachedError}
                        <ul className="search-results">
                            {searchResults.map((user) => (
                                <NewMessageViewUserSearchResult
                                    user={user}
                                    clearSearchBar={this.clearSearchBar}
                                    addSelectedUser={this.addSelectedUser}
                                    selected = {this.currentlySelected(user)}
                                    maximumReached = {this.state.selectedUsers.length >= maximumUsers}
                                />
                            ))}
                            {channels.map((channel) => (
                                <NewMessageViewChannelSearchResult
                                    channel={channel}
                                    clearSearchBar={this.clearSearchBar}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}