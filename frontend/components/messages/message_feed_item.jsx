import React from "react";

export default class MessageFeedItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //displayName[0]

        let author = this.props.getAuthor(this.props.message.authorId);
        let displayName = author ? author.displayName : " ";

        return (
            <li className="message-feed-item">
                <div className="channel-modal-member-image">
                    <strong className="channel-modal-member-initial">{displayName[0]}</strong>
                </div>
                <div className="message-feed-item-content">
                    <div className="message-feed-item-content-top">
                        <span className="message-feed-author">{displayName}</span>
                        <span className="message-feed-time">3:30 PM</span>
                    </div>
                    <span className="message-feed-text">{this.props.message.text}</span>
                </div>
            </li>
        )
    }
}