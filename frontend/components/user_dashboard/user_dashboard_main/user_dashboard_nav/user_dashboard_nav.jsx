import React from "react";
import UserDashBoardNavUserSearchResult from "./user_dashboard_nav_user_search_result";
import UserDashBoardNavChannelSearchResult from "./user_dashboard_nav_channel_search_result";

class UserDashboardNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            dropdownOpen: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.clearSearchBar = this.clearSearchBar.bind(this);
        this.showCurrentUserProfile = this.showCurrentUserProfile.bind(this);
    }

    handleInput(e) {
        this.setState({
            query: e.target.value
        })
        if(e.target.value !== "") {
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

    showDropdown() {
        this.setState({
            dropdownOpen: true
        });
    }

    hideDropdown() {
        this.setState({
            dropdownOpen: false
        });
    }

    showCurrentUserProfile() {
        this.hideDropdown();
        let base = this.props.ownProps.history.location.pathname.split("/users")[0];
        this.props.ownProps.history.push(`${base}/users/${this.props.currentUser.id}`)
    }

    render() {
        const channels = this.state.query === "" ? [] : this.props.selectedChannels(this.state.query);
        const searchResults = (this.props.userSearchResults.length || !this.state.query.length || channels.length) ? this.props.userSearchResults : [{ displayName: "No results found" }];
        const title = (this.props.currentUser && this.props.currentUser.title) ? this.props.currentUser.title : "";
        const dropdownClass = this.state.dropdownOpen ? "user-dashboard-nav-profile-dropdown" :
            "user-dashboard-nav-profile-dropdown hidden"

        return (
            <nav className="user-dashboard-nav-bar">
                <div className="user-dashboard-nav-bar-left">
                    <ul className="user-dashboard-nav-bar-links">
                        <li className="user-dashboard-nav-bar-link">
                            <a href="https://www.linkedin.com/in/joseph-delaney-46985b76/">
                                <img className="user-dashboard-nav-bar-link-img" src={window.linkedinLogo} alt="linkedin" />
                            </a>
                        </li>
                        <li className="user-dashboard-nav-bar-link">
                            <a href="https://github.com/joe-delaney/slack-chat">
                                <img className="user-dashboard-nav-bar-link-img" src={window.githubLogo} alt="github" />
                            </a>
                        </li>
                        <li className="user-dashboard-nav-bar-link">
                            <a href="https://www.joe-delaney.com">
                                <img className="user-dashboard-nav-bar-link-img" src={window.portfolioLogo} alt="portfolio" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user-dashboard-nav-bar-center">
                    <input onChange={this.handleInput} className="user-dashboard-nav-bar-search-input" type="text" value={this.state.query} placeholder="&#xF002;  Search Dispatch"/>
                    <ul className="user-dashboard-nav-bar-search-results">
                        {searchResults.map((user) => (
                            <UserDashBoardNavUserSearchResult 
                                user={user}
                                ownProps={this.props.ownProps}
                                clearSearchBar={this.clearSearchBar}
                            />
                        ))}
                        {channels.map((channel) => (
                            <UserDashBoardNavChannelSearchResult 
                                channel={channel}
                                clearSearchBar={this.clearSearchBar}
                            />
                        ))}
                    </ul>
                </div>
                <div className="user-dashboard-nav-bar-right">
                    <img onClick={this.showDropdown} className="user-dashboard-nav-bar-profile-icon" src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" alt="" />
                    <div onMouseLeave={this.hideDropdown} className={dropdownClass}>
                        <div className="user-dashboard-nav-bar-profile-dropdown-details">
                            <img className="user-dashboard-nav-bar-profile-dropdown-icon" src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" alt="" />
                            <div className="user-dashboard-nav-bar-profile-dropdown-labels">
                                <strong className="user-dashboard-nav-bar-profile-dropdown-displayName">{this.props.currentUser.displayName}</strong>
                                <span className="user-dashboard-nav-bar-profile-dropdown-title">{title}</span>
                            </div>
                        </div>
                        <ul className="user-dashboard-nav-profile-dropdown-links">
                            <li className="dropdown-link">
                                <button onClick={this.showCurrentUserProfile} className="user-dashboard-nav-bar-profile-dropdown-view-profile">
                                    <span>View Profile</span> 
                                </button>
                            </li>
                            <li className="dropdown-link">
                                <button onClick={this.props.logout} className="user-dashboard-nav-bar-profile-dropdown-view-profile">Sign out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default UserDashboardNav;