import React from "react";

export default class MessageFeedItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //displayName[0]

        return (
            <li className="message-feed-item">
                <div className="channel-modal-member-image">
                    <strong className="channel-modal-member-initial">{"J"}</strong>
                </div>
                <div className="message-feed-item-content">
                    <div className="message-feed-item-content-top">
                        <span className="message-feed-author">Joe Delaney</span>
                        <span className="message-feed-time">3:30 PM</span>
                    </div>
                    <span className="message-feed-text">{this.props.message.text}</span>
                </div>
            </li>
        )
    }
}