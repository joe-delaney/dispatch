import React from "react";
import {GroupMembers} from "./group_members";

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
        const groupName = this.props.group ? this.props.group.name : "";
        const groupMembers = this.props.members ? this.props.members.length : 0;

        return (
            <section className={groupDetailsModalClass}>
                <div className={`modal-container channel-details-modal-content-container`}>
                    <div className="modal-header">
                        <div className="modal-title">{groupName}</div>
                        <button onClick={this.closeModal} className="close-modal-button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-tabs-bar">
                        <button className={`modal-tab-button currently-selected`}>
                            Members
                            <span className="push-right">{groupMembers}</span>
                        </button>
                    </div>
                    <div className="channel-details-modal-content">
                        <GroupMembers
                            members={this.props.members}
                            currentUser={this.props.currentUser}
                        />
                    </div>
                </div>
            </section>
        )
    }
}