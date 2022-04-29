import React from "react";
import { Link } from "react-router-dom";

class UserDashBoardNavChannelSearchResult extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const displayText = this.props.channel.topic ?
            `${this.props.channel.name} • ${this.props.channel.topic}` :
            `${this.props.channel.name}`

        return (
            <li onClick={this.props.clearSearchBar} className="user-dashboard-nav-search-result">
                <Link className="search-result-link" to={`/user-dashboard/channels/${this.props.channel.id}`}>
                    <span className="display-label-nav-bar-search-result">#</span>
                    <span className="display-text-nav-bar-search-result">{displayText}</span>
                </Link>
            </li>
        )
    }
}

export default UserDashBoardNavChannelSearchResult;