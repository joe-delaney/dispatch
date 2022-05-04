import React from "react";
import { Link } from "react-router-dom";

export default class AllDMsUserSearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const displayName = this.props.user.displayName;
        const title = this.props.user.title ? `• ${this.props.user.title}` : "";

        const searchResult = this.props.user.displayName === "No results found" ? (
            <li onClick={this.props.clearSearchBar} className="search-result">
                <div className="search-result-img">
                    <span className="search-result-img-initial">{displayName[0]}</span>
                </div>
                <span className="search-result-display-text">{displayName}</span>
                <span className="search-result-title">{title}</span>
            </li>
        ) : (
            <Link onClick={this.props.clearSearchBar} to={linkInfo}>
                <li className="search-result">
                    <div className="search-result-img">
                        <span className="search-result-img-initial">{displayName[0]}</span>
                    </div>
                    <span className="search-result-display-text">{displayName}</span>
                    <span className="search-result-title">{title}</span>
                </li>
            </Link>
        )

        const linkInfo = {
            pathname: "/user-dashboard/new-message",
            selectedUser: this.props.user
        };

        return searchResult;
    }
}