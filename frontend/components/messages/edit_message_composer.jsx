import React from "react";

export default class EditMessageComposer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    render() {
        return (
                <div className="user-dashboard-message-container">
                    <textarea onChange={this.handleInput("text")} type="text" className="message-input" value={this.state.text} placeholder="Write your message here..." />
                    <button onClick={this.props.toggleEditMessage} className="send-message-button">Send</button>
                </div>
        )
    }
}