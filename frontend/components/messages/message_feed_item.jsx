import React from "react";
import * as DateUtil from "../../util/date_util";
import EditMessageComposerContainer from "./edit_message_composer_container";

export default class MessageFeedItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseOver: false,
            editMessage: false
        }

        this.toggleEditMessage = this.toggleEditMessage.bind(this);
        this.toggleMouseOver = this.toggleMouseOver.bind(this);
        this.toggleMouseLeave = this.toggleMouseLeave.bind(this);
        this.showProfile = this.showProfile.bind(this);
    }

    toggleEditMessage() {
        if(this.props.currentUser.id === this.props.message.authorId) {
            this.setState({
                editMessage: !this.state.editMessage
            })
        }
    }

    toggleMouseOver(e) {
        this.setState({
            mouseOver: true
        })
    }

    toggleMouseLeave(e) {
        this.setState({
            mouseOver: false
        })
    }

    showProfile() {
        let base = this.props.ownProps.history.location.pathname.split("/users")[0];
        this.props.ownProps.history.push(`${base}/users/${this.props.message.authorId}`)
    }

    render() {
        let author = this.props.getAuthor(this.props.message.authorId);
        let displayName = author ? author.displayName : " ";
        let createdDate = new Date(this.props.message.createdAt);
        let time = DateUtil.getCurrentDateTime(createdDate);

        let editButtonVisible = this.state.mouseOver ? "" : "hidden";

        let editButton = <div></div>
        if (this.props.currentUser.id === this.props.message.authorId) { 
            editButton = <button className={`message-edit-button ${editButtonVisible}`} onClick={this.toggleEditMessage}>Edit</button>
        }

        let editedTag = (this.props.message && this.props.message.edited) ? (
            <span className="message-edited-tag">(edited)</span>
        ) : (
            <div></div>
        )

        let messageItemContent = this.state.editMessage ? (
            <div className="message-feed-item-content">
                <EditMessageComposerContainer
                    toggleEditMessage={this.toggleEditMessage}
                    message={this.props.message}
                />
            </div>
        ) : (
            <div className="message-feed-item-content">
                <div className="message-feed-item-content-top-wrapper">
                    <div className="message-feed-item-content-top">
                        <span onClick={this.showProfile} className="message-feed-author">{displayName}</span>
                        <span className="message-feed-time">{time}</span>
                    </div>
                    {editButton}
                </div>
                    <div className="message-feed-text-container">
                        <span className="message-feed-text">{this.props.message.text}</span>
                        {editedTag}
                    </div>
            </div>
        )

        return (
            <li onMouseOver={this.toggleMouseOver} onMouseLeave={this.toggleMouseLeave} className="message-feed-item">
                <div className="message-feed-author-image">
                    <strong className="message-feed-author-initial">{displayName[0]}</strong>
                </div>
                {messageItemContent}
            </li>
        )
    }
}