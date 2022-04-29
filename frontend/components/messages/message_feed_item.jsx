import React from "react";

export default class MessageFeedItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <span>{this.props.message.text}</span>
            </li>
        )
    }
}