import React from "react";
import * as DateUtil from "../../util/date_util";

export default class MessageFeedItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseOver: false
        }

        this.toggleEditMessage = this.toggleEditMessage.bind(this);
        this.toggleMouseOver = this.toggleMouseOver.bind(this);
    }

    toggleEditMessage() {
        if(this.props.currentUser.id === this.props.message.authorId) {
            console.log("Edit message");
        }
    }

    toggleMouseOver(e) {
        this.setState({
            mouseOver: !this.state.mouseOver
        })
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

        return (
            <li onMouseEnter={this.toggleMouseOver} onMouseLeave={this.toggleMouseOver} className="message-feed-item">
                <div className="message-feed-author-image">
                    <strong className="message-feed-author-initial">{displayName[0]}</strong>
                </div>
                <div className="message-feed-item-content">
                    <div className="message-feed-item-content-top-wrapper">
                        <div className="message-feed-item-content-top">
                            <span className="message-feed-author">{displayName}</span>
                            <span className="message-feed-time">{time}</span>
                        </div>
                        {editButton}
                    </div>
                    <span className="message-feed-text">{this.props.message.text}</span>
                </div>
            </li>
        )
    }
}