import React from "react";

export default class EditChannelModal extends React.Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.updateChannel = this.updateChannel.bind(this);

        this.state = {
            input: ""
        }
    }

    closeModal() {
        this.props.toggleModal();
        this.setState({
            input: this.initialValue
        })
    }

    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }

    updateChannel() {

    }

    componentDidUpdate(prevProps) {
        if(!prevProps.displayModal && this.props.displayModal) {
            this.initialValue = "";
            if (this.props.attr && this.props.channel) {
                if (this.props.attr === "topic" && this.props.channel.topic) {
                    this.initialValue = this.props.channel.topic;
                } else if (this.props.channel.description) {
                    this.initialValue = this.props.channel.description;
                }
            }

            this.setState({
                input: this.initialValue
            })
        }
    }

    render() {
        let headerText = this.props.attr ? this.props.attr : "";
        let channelName = this.props.channel ? this.props.channel.name : "";

        let descriptionText = "";
        if(this.props.attr) {
            descriptionText = this.props.attr === "topic" ? (
               `Let people know what #${channelName} is focused on right now (ex. a project milestone). Topics are always visible in the header.`
            ): "Let people know what this channel is for."
        }
        
        let showModal = this.props.displayModal ? "" : "hidden";
        return (
            <section className={`modal edit-channel ${showModal}`}>
                <div className={`modal-container edit-channel-modal-content-container`}>
                    <div className="modal-header">
                        <div className="modal-title">{`Edit ${headerText}`}</div>
                        <button onClick={this.closeModal} className="close-modal-button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="edit-channel-input-container">
                        <textarea onChange={this.handleInput} value={this.state.input} className="edit-channel-input"></textarea>
                    </div>
                    <span className="modal-input-description edit-channel-description">{descriptionText}</span>
                    <div className="user-edit-modal-footer">
                        <button onClick={this.closeModal} className="user-edit-button user-cancel-edit">Cancel</button>
                        <button onClick={this.updateChannel} className="user-edit-button user-save-changes">Save</button>
                    </div>
                </div>
            </section>
        )
    }
}