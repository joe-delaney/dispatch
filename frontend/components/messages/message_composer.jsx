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
        let currentUser = this.props.currentUser;
        let parent = this.props.parent;
        let type = this.props.type;
        if(currentUser && parent && type) {
            let message = {
                author_id: this.props.currentUser.id,
                messagable_id: this.props.parent.id,
                messagable_type: this.props.type,
                text: this.state.text
            }
            this.props.createMessage(message)
            this.setState({
                text: ""
            });
        }
    }

    render() {
        let editedTag = (this.props.message && this.props.message.edited) ? (
            <span className="message-edited-tag">(edited)</span>
        ) : (
            <div></div>
        )

        return (
            <div className="user-dashboard-center-main-message-composer">
                <div className="user-dashboard-message-container">
                    <textarea onChange={this.handleInput("text")} type="text" className="message-input" value={this.state.text} placeholder="Write your message here..." />
                    <button onClick={this.sendMessage} className="send-message-button">Send</button>
                    {editedTag}
                </div>
            </div>
        )
    }
}