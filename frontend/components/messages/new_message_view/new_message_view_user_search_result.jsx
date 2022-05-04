import React from "react";

export default class NewMessageViewUserSearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.selectUser = this.selectUser.bind(this);
    }

    selectUser() {
        this.props.clearSearchBar();
        this.props.addSelectedUser(this.props.user);
    }

    render() {
        const displayName = this.props.user.displayName;
        const title = this.props.user.title ? `• ${this.props.user.title}` : "";

        return (
            <li onClick={this.selectUser} className="search-result">
                <div className="search-result-img">
                    <span className="search-result-img-initial">{displayName[0]}</span>
                </div>
                <span className="search-result-display-text">{displayName}</span>
                <span className="search-result-title">{title}</span>
            </li>
        )
    }
}