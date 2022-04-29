import React from "react";
import * as DateUtil from "../../util/date_util";

export default class MessageFeedItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let author = this.props.getAuthor(this.props.message.authorId);
        let displayName = author ? author.displayName : " ";
        let createdDate = new Date(this.props.message.createdAt);
        let time = DateUtil.getCurrentDateTime(createdDate);

        return (
            <li className="message-feed-item">
                <div className="message-feed-author-image">
                    <strong className="message-feed-author-initial">{displayName[0]}</strong>
                </div>
                <div className="message-feed-item-content">
                    <div className="message-feed-item-content-top">
                        <span className="message-feed-author">{displayName}</span>
                        <span className="message-feed-time">{time}</span>
                    </div>
                    <span className="message-feed-text">{this.props.message.text}</span>
                </div>
            </li>
        )
    }
}