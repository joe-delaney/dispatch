import React from "react";
import MessageFeedItem from "./message_feed_item";

export default class MessageFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="message-feed-list">
                {this.props.messages.map((message, idx) => (
                    <MessageFeedItem 
                        key={idx}
                        message={message}
                        getAuthor={this.props.getAuthor}
                        currentUser={this.props.currentUser}
                        ownProps={this.props.ownProps}
                    />
                ))}
            </ul>
            )
    }
}