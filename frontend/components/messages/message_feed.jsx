import React from "react";
import MessageFeedItem from "./message_feed_item";

export default class MessageFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.messages.map((message, idx) => (
                    <MessageFeedItem 
                        key={idx}
                        message={message}
                    />
                ))}
            </ul>
            )
    }
}