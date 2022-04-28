import React from "react";
import { AboutChannel } from "./about_channel";
import { ChannelMembers } from "./channel_members";

export default class ChannelDetailsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            aboutSelected: true,
            membersSelected: false
        }

        this.closeModal = this.closeModal.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.selectMembers = this.selectMembers.bind(this);
    }

    closeModal(e) {
        this.props.toggleModal();
    }

    selectAbout(e) {
        this.setState({
            aboutSelected: true,
            membersSelected: false
        })
    }

    selectMembers(e) {
        this.setState({
            aboutSelected: false,
            membersSelected: true
        })
    }

    render() {
        const channelDetailsModalClass = this.props.displayModal ? "modal" : "modal hidden"
        const channelName = this.props.channel ? `# ${this.props.channel.name}` : "";
        const channelMembers = this.props.channel ? this.props.channel.channelMemberIds.length : 0;

        const aboutSelected = this.state.aboutSelected ? "currently-selected" : "";
        const membersSelected = this.state.membersSelected ? "currently-selected" : "";

        const aboutSection = <AboutChannel channel={this.props.channel} creator={this.props.channel_creator}/>;
        const membersSection = <ChannelMembers />;
        const content = this.state.aboutSelected ? aboutSection : membersSection;

        return (
            <section className={channelDetailsModalClass} >
                <div className={`modal-container channel-details-modal-content-container`}>
                    <div className="modal-header">
                        <div className="modal-title">{channelName}</div>
                        <button onClick={this.closeModal} className="close-modal-button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-tabs-bar">
                        <button onClick={this.selectAbout} className={`modal-tab-button ${aboutSelected}`}>
                            About
                        </button>
                        <button onClick={this.selectMembers} className={`modal-tab-button ${membersSelected}`}>
                            {`Members  ${channelMembers}`}
                        </button>
                    </div>
                    <div className="channel-details-modal-content">
                        {content}
                    </div>
                </div>
            </section>
        )
    }
}