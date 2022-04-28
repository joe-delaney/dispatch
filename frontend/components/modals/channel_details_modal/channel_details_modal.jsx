import React from "react";

export default class ChannelDetailsModal extends React.Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(e) {
        this.props.toggleModal();
    }

    render() {
        const channelDetailsModalClass = this.props.displayModal ? "modal" : "modal hidden"
        const channelName = this.props.channel ? this.props.channel.name : "";


        return (
            <section className={channelDetailsModalClass} >
                <div className={`user-edit-modal-content-container`}>
                    <div className="user-edit-modal-header">
                        <div className="user-edit-modal-title">{channelName}</div>
                        <button onClick={this.closeModal} className="close-modal-button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="user-edit-modal-content">
                        
                    </div>
                </div>
            </section>
        )
    }
}