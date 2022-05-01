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
                    <div className="edit-message-composer-right">
                        <div className="edit-message-composer-buttons">
                            <button className="edit-message-button cancel-edit-message" onClick={this.props.toggleEditMessage}>Cancel</button>
                            <button className="edit-message-button save-edit-message">Save</button>
                        </div>
                    </div>  
                </div>
        )
    }
}