import React from "react";

export default class EditMessageComposer extends React.Component {
    constructor(props) {
        super(props);

        this.initialText = this.props.message ? this.props.message.text : "";
        this.state = {
            text: this.initialText
        }

        this.saveMessage = this.saveMessage.bind(this);
        this.handleInput = this.handleInput.bind(this);
    
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    saveMessage() {
        if(this.props.message && this.state.text !== "") {
            let newMessage = {
                id: this.props.message.id,
                author_id: this.props.message.authorId,
                messagable_id: this.props.message.messagableId,
                messagable_type: this.props.message.messagableType,
                text: this.state.text,
                edited: true
            }
            this.props.updateMessage(newMessage)
            this.setState({
                text: newMessage.text
            });
            this.props.toggleEditMessage();
        } else if (this.props.message && this.state.text === "") {
            //Don't let the user edit to a blank message
            this.props.toggleEditMessage();
        }
    }

    render() {
        return (
                <div className="user-dashboard-message-container">
                    <textarea onChange={this.handleInput("text")} type="text" className="message-input" value={this.state.text} placeholder="Write your message here..." />
                    <div className="edit-message-composer-right">
                        <div className="edit-message-composer-buttons">
                            <button className="edit-message-button cancel-edit-message" onClick={this.props.toggleEditMessage}>Cancel</button>
                            <button className="edit-message-button save-edit-message" onClick={this.saveMessage}>Save</button>
                        </div>
                    </div>  
                </div>
        )
    }
}