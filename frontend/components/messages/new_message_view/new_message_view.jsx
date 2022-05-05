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

        this.inputFocus = this.utilizeFocus()
        this.handleInput = this.handleInput.bind(this);
        this.clearSearchBar = this.clearSearchBar.bind(this);
        this.addSelectedUser = this.addSelectedUser.bind(this);
        this.removeSelectedUser = this.removeSelectedUser.bind(this);
        this.currentlySelected = this.currentlySelected.bind(this);
        this.createGroup = this.createGroup.bind(this);
        this.groupAlreadyExists = this.groupAlreadyExists.bind(this);
        this.generateUniqueString = this.generateUniqueString.bind(this);
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

    createGroup() {
        let userIds = [];
        this.state.selectedUsers.forEach((user)  => {
            userIds.push(user.id);
        })
        this.setState({
            selectedUsers: []
        })

        //Check to see if a group with these members already exists
        //If it does not, create a new group
        //If it does, redirect the user to that group
        let existingGroupId = this.groupAlreadyExists(userIds);
        if(!existingGroupId) {
            this.props.createGroup(userIds)
            .then(info => {
                this.props.receiveGroupInfo(info)
                this.props.history.push(`/user-dashboard/message-groups/${info.group.id}`)
            });
        } else {
            this.props.history.push(`/user-dashboard/message-groups/${existingGroupId}`);
        }
    }

    //This function creates a unique string using the sorted ids of the
    //selected users and the current user. If a group with a string constructed
    //using the same process exists, return that group id, otherwise return false.
    groupAlreadyExists(userIds) {
        let newUserIds = userIds.map(id => id);
        newUserIds.push(this.props.currentUser.id)
        let uniqueString = newUserIds.sort().join("");
        for(let i =0; i < this.props.groups.length; i++) {
            let groupUniqueString = this.generateUniqueString(this.props.groups[i]);
            if(uniqueString === groupUniqueString) {
                return this.props.groups[i].id;
            }
        }
        return false;
    }

    generateUniqueString(group) {
        return group.groupMemberIds.sort().join("");
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
        this.inputFocus.setFocus()
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

    utilizeFocus() {
        const ref = React.createRef()
        const setFocus = () => { ref.current && ref.current.focus() }
        return { setFocus, ref }
    }

    render() {
        const maximumUsers = 8;
        const channels = (this.state.query === "" || this.state.selectedUsers.length) ? [] : this.props.selectedChannels(this.state.query);
        const searchResults = (this.props.userSearchResults.length || !this.state.query.length || channels.length) ? this.props.userSearchResults : [{ displayName: "No results found" }];
        const placeholderText = this.state.selectedUsers.length ? "" : "#channel or @somebody"
        const addPadding = this.state.selectedUsers.length >= maximumUsers ? "max-reached-search-bar" : ""
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
                    </div>
                    <div className={`search-bar ${addPadding}`}>
                        <div className="search-bar-top">
                            <div className="search-bar-top-left">
                                <div className="search-bar-label-container">
                                    <span className="search-bar-label">To: </span>
                                </div>
                                <ul className="selected-users">
                                    {this.state.selectedUsers.map((user, idx) => (
                                        <SelectedUserItem 
                                            key={idx} 
                                            user={user}
                                            removeSelectedUser={this.removeSelectedUser} />
                                    ))}
                                    <input 
                                        autoFocus
                                        ref={this.inputFocus.ref}
                                        className="search-bar-input"
                                        type="text"
                                        onChange={this.handleInput}
                                        value={this.state.query}
                                        placeholder={placeholderText} />
                                </ul> 
                            </div>
                            <div onClick={this.createGroup} className="create-dm-button-container">
                                <button className="create-dm-button">Start DM</button>
                            </div>
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