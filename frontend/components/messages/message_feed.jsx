import React from "react";

export default class MessageFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.messages.map((message) => (
                    <li>{message.text}</li>
                ))}
            </ul>
            )
    }
}