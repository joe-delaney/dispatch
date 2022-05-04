import React from "react";
import { Link } from "react-router-dom";

export default class AllDMsUserSearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const displayName = this.props.user.displayName;
        const title = this.props.user.title ? `• ${this.props.user.title}` : "";

        return (
            <Link to="/user-dashboard/new-message">
                <li className="search-result">
                    <div className="search-result-img">
                        <span className="search-result-img-initial">{displayName[0]}</span>
                    </div>
                    <span className="search-result-display-text">{displayName}</span>
                    <span className="search-result-title">{title}</span>
                </li>
            </Link>
        )
    }
}