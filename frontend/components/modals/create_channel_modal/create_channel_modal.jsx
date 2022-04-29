import React from "react";

export default class CreateChannelModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            topic: "",
            description: ""
        }

        this.closeModal = this.closeModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.createChannel = this.createChannel.bind(this);
    }

    closeModal(e) {
        this.setState({
            name: "",
            topic: "",
            description: ""
        });
        this.props.toggleModal();
    }

    createChannel(e) {
        if(this.state.name !== "") {
            this.props.createChannel(this.state)
            this.props.toggleModal();
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
        const channelDetailsModalClass = this.props.displayModal ? "modal" : "modal hidden"

        return (
            <section className={channelDetailsModalClass} >
                <div className={`modal-container create-channel-modal-content-container`}>
                    <div className="modal-header">
                        <div className="modal-title">Create a channel</div>
                        <button onClick={this.closeModal} className="close-modal-button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <span className="modal-title-description">Channels are where your members communicate. They're best when organized around a topic - #proj-budget, for example</span>
                    <div className="modal-inputs">
                        <div className="modal-input-container margin-bottom">
                            <label for="nameInput" className="modal-input-label">Name</label>
                            <input autocomplete="off" id="nameInput" className={`modal-input`} type="text" value={this.state.name} onChange={this.handleInput("name")} />
                        </div>
                        <div className="modal-input-container margin-bottom">
                            <label for="topicInput" className="modal-input-label">Topic</label>
                            <input autocomplete="off" id="topicInput" className={`modal-input`} type="text" value={this.state.topic} onChange={this.handleInput("topic")} />
                        </div>
                        <div className="modal-input-container margin-bottom">
                            <label for="descriptionInput" className="modal-input-label">Description</label>
                            <input autocomplete="off" id="descriptionInput" className={`modal-input`} type="text" value={this.state.description} onChange={this.handleInput("description")} />
                            <span className="modal-input-description">What's this channel about?</span>
                        </div>
                    </div>
                    <div className="user-edit-modal-footer">
                        <button onClick={this.closeModal} className="user-edit-button user-cancel-edit">Cancel</button>
                        <button onClick={this.createChannel} className="user-edit-button user-save-changes">Create Channel</button>
                    </div>
                </div>
            </section>
        )
    }
}