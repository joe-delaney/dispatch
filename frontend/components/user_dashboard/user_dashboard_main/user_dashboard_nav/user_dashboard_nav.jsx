import React from "react";
import UserDashBoardNavSearchResult from "./user_dashboard_nav_search_result";

class UserDashboardNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleUserProfileClicked = this.handleUserProfileClicked.bind(this);
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

    handleUserProfileClicked(e) {
        console.log(this.props.currentUser);
    }

    render() {
        const searchResults = (this.props.userSearchResults.length || !this.state.query.length) ? this.props.userSearchResults : [{displayName: "No results found"}];

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
                    <img onClick={this.handleUserProfileClicked} className="user-dashboard-nav-bar-profile-icon" src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" alt="" />
                </div>
            </nav>
        )
    }
}

export default UserDashboardNav;