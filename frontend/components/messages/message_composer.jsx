import React from "react";

export default class MessageComposer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-dashboard-center-main-message-composer">
                <div className="user-dashboard-message-container">
                    <textarea type="text" className="message-input" placeholder="Write your message here..." />
                    <button className="send-message-button">Send</button>
                </div>
            </div>
        )
    }
}