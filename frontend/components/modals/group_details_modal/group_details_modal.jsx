import React from "react";

export default class GroupDetailsModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(e) {
        this.props.toggleModal();
    }

    render() {
        const groupDetailsModalClass = this.props.displayModal ? "modal" : "modal hidden"
        return (
            <section className={groupDetailsModalClass}>
                <div className={`modal-container channel-details-modal-content-container`}>
                    <div className="modal-header">
                        <div className="modal-title">GroupName</div>
                        <button onClick={this.closeModal} className="close-modal-button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-tabs-bar">
                        <button className={`modal-tab-button currently-selected`}>
                            Members
                            <span className="push-right">5</span>
                        </button>
                    </div>
                    <div className="channel-details-modal-content">
                        Test
                    </div>
                </div>
            </section>
        )
    }
}