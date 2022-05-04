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
        const selectedText = this.props.selected ? "selected-text" : "";
        const selectedSearchResult = this.props.selected ? "selected-search-result" : "";
        const checkMark = this.props.selected ? (
            <img src={window.checkMark} alt="check mark" className="check-mark" />
        ) : (
            <div></div>
        )
        const onClickAction = (this.props.selected || this.props.user.displayName === "No results found") ? this.props.clearSearchBar : this.selectUser

        return (
            <li onClick={onClickAction} className={`search-result ${selectedSearchResult}`}>
                {checkMark}
                <div className={`search-result-img`}>
                    <span className="search-result-img-initial">{displayName[0]}</span>
                </div>
                <span className={`search-result-display-text ${selectedText}`}>{displayName}</span>
                <span className={`search-result-title ${selectedText}`}>{title}</span>
            </li>
        )
    }
}