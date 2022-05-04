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
    }

    componentDidMount() {
        if(this.props.location.selectedUser) {
            let newSelectedUsers = this.state.selectedUsers;
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

    render() {
        const channels = (this.state.query === "" || this.state.selectedUsers.length) ? [] : this.props.selectedChannels(this.state.query);
        const searchResults = (this.props.userSearchResults.length || !this.state.query.length || channels.length) ? this.props.userSearchResults : [{ displayName: "No results found" }];
        const placeholderText = this.state.selectedUsers.length ? "" : "#channel or @somebody"

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
                                    <SelectedUserItem key={idx} user={user} />
                                ))}
                            </ul> 
                            <input className="search-bar-input"
                                type="text"
                                onChange={this.handleInput}
                                value={this.state.query}
                                placeholder={placeholderText} />
                        </div>
                        <ul className="search-results">
                            {searchResults.map((user) => (
                                <NewMessageViewUserSearchResult
                                    user={user}
                                    clearSearchBar={this.clearSearchBar}
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