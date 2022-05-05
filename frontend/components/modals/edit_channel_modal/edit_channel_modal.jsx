import React from "react";

export default class EditChannelModal extends React.Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.toggleModal();
    }

    render() {
        let headerText = this.props.attr ? this.props.attr : "";
        
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
                        <textarea className="edit-channel-input"></textarea>
                    </div>
                </div>
            </section>
        )
    }
}