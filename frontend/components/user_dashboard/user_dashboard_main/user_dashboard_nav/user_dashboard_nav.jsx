import React from "react";
import { Link } from "react-router-dom";
import UserDashBoardNavSearchResult from "./user_dashboard_nav_search_result";

class UserDashboardNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            dropdownOpen: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    handleInput(e) {
        this.setState({
            query: e.target.value
        })
        if(e.target.value !== "") {
            this.props.searchUsers(e.target.value);
        } else {
            this.props.clearSearchResults();
        }
    }

    toggleDropdown(e) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const searchResults = (this.props.userSearchResults.length || !this.state.query.length) ? this.props.userSearchResults : [{displayName: "No results found"}];
        const title = this.props.currentUser.title ? this.props.currentUser.title : "";
        const dropdownClass = this.state.dropdownOpen ? "user-dashboard-nav-profile-dropdown" :
            "user-dashboard-nav-profile-dropdown hidden"

        return (
            <nav className="user-dashboard-nav-bar">
                <div className="user-dashboard-nav-bar-left">X</div>
                <div className="user-dashboard-nav-bar-center">
                    <input onChange={this.handleInput} className="user-dashboard-nav-bar-search-input" type="text" value={this.state.query} placeholder="&#xF002;  Search Slack"/>
                    <ul className="user-dashboard-nav-bar-search-results">
                        {searchResults.map((user) => (
                            <UserDashBoardNavSearchResult user={user}/>
                        ))}
                    </ul>
                </div>
                <div className="user-dashboard-nav-bar-right">
                    <img onClick={this.toggleDropdown} className="user-dashboard-nav-bar-profile-icon" src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" alt="" />
                    <div onMouseLeave={this.toggleDropdown} className={dropdownClass}>
                        <div className="user-dashboard-nav-bar-profile-dropdown-details">
                            <img className="user-dashboard-nav-bar-profile-dropdown-icon" src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" alt="" />
                            <div className="user-dashboard-nav-bar-profile-dropdown-labels">
                                <strong className="user-dashboard-nav-bar-profile-dropdown-displayName">{this.props.currentUser.displayName}</strong>
                                <span className="user-dashboard-nav-bar-profile-dropdown-title">{title}</span>
                            </div>
                        </div>
                        <div className="user-dashboard-nav-profile-dropdown-links">
                            <Link className="user-dashboard-nav-bar-profile-dropdown-view-profile">View Profile</Link>
                            <button onClick={this.props.logout} className="user-dashboard-nav-bar-profile-dropdown-view-profile">Sign out of Slack</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default UserDashboardNav;