import React from "react";

export default class UserDashBoardNavUserSearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.showProfile = this.showProfile.bind(this);
    }

    showProfile() {
        this.props.clearSearchBar();
        let base = this.props.ownProps.history.location.pathname.split("/users")[0];
        this.props.ownProps.history.push(`${base}/users/${this.props.user.id}`);
    }

    render() {
        const displayText = this.props.user.title ? 
            `${this.props.user.displayName} • ${this.props.user.title}` :
            `${this.props.user.displayName}`

        return (
            <li onClick={this.showProfile} className="user-dashboard-nav-search-result">
                <img className="profile-img-nav-bar-search-result" src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" alt="" />
                <span className="display-text-nav-bar-search-result">{displayText}</span>
            </li>
        )
    }
}