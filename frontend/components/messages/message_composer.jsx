import React from "react";

export default class MessageComposer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    sendMessage(e) {
        // let message = {
        //     author_id: this.props.currentUser.id,
        //     messagable_id: this.props.parent.id,
        //     messagable_type: this.props.type,
        //     text: this.state.text
        // }
        console.log("Send clicked");
    }

    render() {
        return (
            <div className="user-dashboard-center-main-message-composer">
                <div className="user-dashboard-message-container">
                    <textarea onChange={this.handleInput("text")} type="text" className="message-input" placeholder="Write your message here..." />
                    <button onClick={this.sendMessage} className="send-message-button">Send</button>
                </div>
            </div>
        )
    }
}