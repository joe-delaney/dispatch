import React from "react";

export default class UserDashBoardNavUserSearchResult extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const displayText = this.props.user.title ? 
            `${this.props.user.displayName} • ${this.props.user.title}` :
            `${this.props.user.displayName}`

        return (
            <li className="user-dashboard-nav-search-result">
                <img className="profile-img-nav-bar-search-result" src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" alt="" />
                <span className="display-text-nav-bar-search-result">{displayText}</span>
            </li>
        )
    }
}